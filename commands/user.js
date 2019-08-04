const conversions = require('../conversions.js');

module.exports = {
    name: 'user',
    aliases: ['member', 'u'],
    usage: '<user>',
    description: 'Shows information about a user. If no arguments are provided, information will be shown about yourself.',
    execute: (msg, args) => {
        return new Promise(async (resolve, reject) => {
            const u = await conversions.parseUser(msg, args.join(' '));
            if (!u) return msg.channel.send('Please provide a valid argument!')
            .then(resolve(msg.author.tag + ' didn\'t provide an argument for user'))
            .catch(e => reject(e));
            const m = await conversions.userToMember(u, msg);

            const roles = m.roles.map(r => r.toString()); roles.shift();
            const embed = new Discord.RichEmbed()
                .setTitle(u.tag + ' (' + u.id + ')')
                .setColor(m.displayHexColor)
                .setThumbnail(m.user.avatarURL)
                .addField('Created At', u.createdAt.toUTCString())
                .addField('Guild Join Date', m.joinedAt.toUTCString())
                .addField('Nickname', m.nickname ? m.nickname : 'None', true)
                .addField('Game', m.user.presence.game? m.user.presence.game : 'None', true)
                .addField(`Roles (${roles.length})`, !roles.length ? 'No roles' : roles.join(', '))
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                .setTimestamp();
            if (u.id === client.user.id) embed.addField('Other Information', 'The best! <:isaThonk:537312545682489345>');
            console.log(embed);
            return msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got info for ' + u.tag + ' in ' + msg.guild.name))
            .catch((e) => reject(e));
        });
    }
};
