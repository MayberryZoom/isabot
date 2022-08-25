const conversions = require('../conversions.js');

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
    name: 'user',
    aliases: ['member', 'u'],
    usage: ['<user>'],
    description: 'Shows information about a user. If no arguments are provided, information will be shown about yourself.',
    category: 'info',
    execute: (msg, args) => {
        return new Promise(async (resolve, reject) => {
            const u = await conversions.parseUser(msg, args.join(' '));
            if (!u) return msg.channel.send('Please provide a valid argument!').then(resolve()).catch(e => reject(e));
            const m = await conversions.userToMember(u, msg);

            const embed = new Discord.EmbedBuilder()
                .setTitle(u.tag + await getRank(u) + ' (' + u.id + ')')
                .setColor(m.displayHexColor)
                .setThumbnail(m.user.avatarURL())
                .addFields(
                    { name: 'Created At', value: u.createdAt.toUTCString() },
                    { name: 'Guild Join Date', value: m.joinedAt.toUTCString() },
                    { name: 'Nickname', value: m.nickname ? m.nickname : 'None', inline: true },
                    { name: 'Status', value: formatPresence(m.presence) },
                    { name: `Roles (${m.roles.cache.size - 1})`, value: formatRoles(m) }
                )
                .setTimestamp();
            if (u.id === client.user.id) embed.addFields({ name: 'Other Information', value: 'The best! <:isaThonk:537312545682489345>' });

            return msg.channel.send({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
