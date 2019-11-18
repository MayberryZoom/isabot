const conversions = require('../conversions.js');

module.exports = {
    name: 'emoji',
    aliases: ['emote', 'e'],
    description: 'Shows information about a custom emoji. I need the "Manage Emojis" permission to show the most info!',
    usage: ['<emoji>'],
    args: true,
    category: 'info',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const e = await conversions.parseEmoji(client, args.join(' '));
            if (!e) return msg.channel.send('Please provide a custom emoji!');

            let embed = new Discord.RichEmbed()
                .setTitle(`:${e.name}: (${e.id})`)
                .setColor(isabotColor)
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                .setTimestamp();

            if (e.guild) {
                embed.addField('Created At', e.createdAt.toUTCString(), true)
                    .addField('Guild', e.guild.name, true);

                const me = await e.guild.fetchMember(client.user.id);
                if (me.hasPermission('MANAGE_EMOJIS')) {
                    const u = await e.fetchAuthor();
                    embed.addField('Created By', u.tag, true);
                }
            }

            embed.addField('Link', e.url) .setImage(e.url);
            msg.channel.send(embed).then(() => sendLog(msg.author.tag + ' got info for :' + e.name + ': in ' + msg.guild.name));
        });
    }
};
