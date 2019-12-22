const conversions = require('../conversions.js');

const formatRoles = (member) => {
    roles = member.roles.map(r => r.toString()); roles.shift()
    const rolesFiltered = roles.filter((r, i) => i > 41 ? false : true);
    const size = roles.length - rolesFiltered.length;
    return size > 0 ? rolesFiltered.join(', ') + ` + ${size} more` : roles.join(', ');
}

const getRank = (user) => {
    return new Promise(async (resolve) => {
        const m = await client.guilds.get('513806689787445261').fetchMember(user.id);
        if (!m) return resolve('');
    
        const developer = '<:developer:621656187213185065>';
        const contributor = '<:contributor:621656187456192517>';
        const tester = '<:tester:621656187217248287>';
        let str = ' ';
    
        if (await m.roles.has('513807019048828929')) str += developer;
        if (await m.roles.has('518002389366865930')) str += contributor;
        if (await m.roles.has('513813580441714688')) str += tester;
        return resolve(str);
    });
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
            if (!u) return msg.channel.send('Please provide a valid argument!').then(resolve(msg.author.tag + ' didn\'t provide an argument for user')).catch(e => reject(e));
            const m = await conversions.userToMember(u, msg);

            const embed = new Discord.RichEmbed()
                .setTitle(u.tag + await getRank(u) + ' (' + u.id + ')')
                .setColor(m.displayHexColor)
                .setThumbnail(m.user.avatarURL)
                .addField('Created At', u.createdAt.toUTCString())
                .addField('Guild Join Date', m.joinedAt.toUTCString())
                .addField('Nickname', m.nickname ? m.nickname : 'None', true)
                .addField('Game', m.user.presence.game? m.user.presence.game : 'None', true)
                .addField(`Roles (${m.roles.size - 1})`, formatRoles(m))
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                .setTimestamp();
            if (u.id === client.user.id) embed.addField('Other Information', 'The best! <:isaThonk:537312545682489345>');
            return msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got info for ' + u.tag + ' in ' + msg.guild.name))
            .catch((e) => reject(e));
        });
    }
};
