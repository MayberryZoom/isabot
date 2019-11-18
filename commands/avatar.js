const { parseUser } = require('../conversions.js');

module.exports = {
    name: 'avatar',
    description: "Gets a user's avatar.",
    usage: ['<user>'],
    dmDisabled: 1,
    category: 'info',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const user = await parseUser(msg, args.join(' '));
            if (!user) return msg.channel.send('That user is not valid!').then(resolve()).catch(e => reject(e));
            return msg.channel.send(new Discord.RichEmbed() .setTitle(user.username + "'s avatar") .setImage(user.avatarURL) .setColor(isabotColor) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp()).then(resolve()).catch(e => reject(e));
        })
    }
};
