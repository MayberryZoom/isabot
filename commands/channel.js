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
            const embed = new Discord.EmbedBuilder()
                .setTitle(c.name + ' (' + c.id + ')' + (c.nsfw ? ' ⚠' : ''))
                .setColor(isabotColor)
                .addFields(
                    { name: 'Created At', value: c.createdAt.toUTCString() },
                    { name: 'Category', value: c.parent.name, inline: true },
                    { name: 'Channel Topic', value: c.topic ? c.topic : 'No channel topic', inline: true },
                    { name: 'Members', value: c.members.size.toString(), inline: true }
                )
                .setTimestamp();

            msg.channel.send({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
