const conversions = require('../conversions.js');

module.exports = {
    name: 'user',
    aliases: ['member', 'u'],
    description: 'Shows information about a user. If no arguments are provided, information will be shown about yourself.',
    execute: (msg, args) => {
        return new Promise(async (resolve, reject) => {
            const u = await conversions.parseUser(msg, args.join(' '));
            if (!u) return msg.channel.send('Please provide a valid argument!')
            .then(resolve(msg.author.tag + ' didn\'t provide an argument for user'))
            .catch(e => reject(e));
            const m = await conversions.userToMember(u, msg);

            const createTime = u.createdAt;
            const joinTime = m.joinedAt;
            const min = createTime.getMinutes().toString().length === 1 ? '0' + createTime.getMinutes() : createTime.getMinutes();
            const sec = createTime.getSeconds().toString().length === 1 ? '0' + createTime.getSeconds() : createTime.getSeconds();
            const minJ = joinTime.getMinutes().toString().length === 1 ? '0' + joinTime.getMinutes() : joinTime.getMinutes();
            const secJ = joinTime.getSeconds().toString().length === 1 ? '0' + joinTime.getSeconds() : joinTime.getSeconds();
            const roles = m.roles.map(r => r.toString()); roles.shift();
            const embed = new Discord.RichEmbed()
                .setTitle(u.tag + ' (' + u.id + ')')
                .setColor(m.displayHexColor)
                .setThumbnail(u.avatarURL)
                .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST')
                .addField('Guild Join Date', joinTime.toDateString() + ' at ' + joinTime.getHours() + ':' + minJ + ':' + secJ + ', EST')
                .addField('Nickname', m.nickname ? m.nickname : 'None', true)
                .addField('Game', m.user.presence.game? m.user.presence.game : 'None', true)
                .addField(`Roles (${roles.length})`, !roles.length ? 'No roles' : roles.join(', '));
            if (u.id === client.user.id) embed.addField('Other Information', 'The best! <:isaThonk:537312545682489345>');
            return msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got info for ' + u.tag + ' in ' + msg.guild.name))
            .catch((e) => reject(e));
        });
    }
};
