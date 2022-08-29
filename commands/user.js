const formatRoles = (member) => {
    roles = member.roles.cache.map(r => r.toString()); roles.pop();
    const rolesFiltered = roles.filter((r, i) => i > 41 ? false : true);
    const size = roles.length - rolesFiltered.length;
    return size > 0 ? rolesFiltered.join(', ') + ` + ${size} more` : roles.join(', ');
}

const getRank = (user) => {
    return new Promise(async (resolve) => {
        const m = await client.guilds.cache.get('513806689787445261').members.fetch(user.id);
        if (!m) return resolve('');
    
        const developer = '<:developer:621656187213185065>';
        const contributor = '<:contributor:621656187456192517>';
        const tester = '<:tester:621656187217248287>';
        let str = ' ';
    
        if (await m.roles.cache.has('513807019048828929')) str += developer;
        if (await m.roles.cache.has('518002389366865930')) str += contributor;
        if (await m.roles.cache.has('513813580441714688')) str += tester;
        return resolve(str);
    });
}

const formatStatus = (s) => {
    switch (s) {
        case 'online': return 'Online';
        case 'idle': return 'Idle';
        case 'dnd': return 'Do Not Disturb';
        case 'offline': return 'Offline';
    }
}

const formatPresence = (p) => {
    if (p.activities.length === 0) return formatStatus(p.status);

    let a = p.activities[0];

    if (a.type !== Discord.ActivityType.Custom) return a.toString();
    else if (a.type === Discord.ActivityType.Custom && a.state) return (a.emoji ? a.emoji.toString() + ' ' : '') + a.state;
    else return a.emoji.toString();
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('user')
        .setDescription('Shows information about a user. Defaults to you.')
        .setDMPermission(false)
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to fetch info about')),
    aliases: ['member', 'u'],
    execute: (interaction) => {
        return new Promise(async (resolve, reject) => {
            let user = interaction.options.getUser('user');
            if (!user) user = interaction.user;
            const member = await interaction.guild.members.fetch(user);
            const memberPresence = !!member.presence ? formatPresence(member.presence) : 'Offline';

            const embed = new Discord.EmbedBuilder()
                .setTitle(user.tag + await getRank(user) + ' (' + user.id + ')')
                .setColor(member.displayHexColor)
                .setThumbnail(user.avatarURL())
                .addFields(
                    { name: 'Created At', value: user.createdAt.toUTCString() },
                    { name: 'Guild Join Date', value: member.joinedAt.toUTCString() },
                    { name: 'Nickname', value: member.nickname ? member.nickname : 'None', inline: true },
                    { name: 'Status', value: memberPresence },
                    { name: `Roles (${member.roles.cache.size - 1})`, value: formatRoles(member) }
                )
                .setTimestamp();
            if (user.id === client.user.id) embed.addFields({ name: 'Other Information', value: 'The best! <:isaThonk:537312545682489345>' });

            interaction.reply({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
