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

            let embed = new Discord.EmbedBuilder()
                .setTitle(`:${e.name}: (${e.id})`)
                .setColor(isabotColor)
                .setTimestamp();

            if (e.guild) {
                embed.addFields(
                    { name: 'Created At', value: e.createdAt.toUTCString(), inline: true },
                    { name: 'Guild', value: e.guild.name, inline: true }
                )

                const me = await e.guild.members.fetch(client.user.id);
                if (me.permissions.has(Discord.PermissionsBitField.Flags.ManageEmojisAndStickers)) {
                    const u = await e.fetchAuthor();
                    embed.addFields({ name: 'Created By', value: u.tag, inline: true });
                }
            }

            embed.addFields({ name: 'Link', value: e.url }).setImage(e.url);

            msg.channel.send({ embeds: [embed] }).then(() => resolve()).catch(e => reject(e));
        });
    }
};
