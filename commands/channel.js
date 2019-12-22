module.exports = {
    name: 'channel',
    description: 'Shows information about a channel. If no  are provided, information will be shown about the current channel.',
    usage: ['<channel>'],
    dmDisabled: 1,
    category: 'info',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const conversions = require('../conversions.js');

            const c = await conversions.parseChannel(msg, args.join(' '));
            const g = await msg.guild.fetchMembers();
            const embed = new Discord.RichEmbed()
                .setTitle(c.name + ' (' + c.id + ')' + (c.nsfw ? ' ⚠' : ''))
                .setColor(isabotColor)
                .addField('Created At', c.createdAt.toUTCString())
                .addField('Category', c.parent.name, true)
                .addField('Channel Topic', c.topic ? c.topic : 'No channel topic', true)
                .addField('Members', g.channels.get(c.id).members.size, true)
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                .setTimestamp();
            msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got info for ' + c.name + ' in ' + msg.guild.name))
            .catch((e) => reject(e));
        });
    }
};
