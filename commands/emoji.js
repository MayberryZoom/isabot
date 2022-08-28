const conversions = require('../conversions.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('emoji')
        .setDescription('Shows information about a custom emoji.')
        .addStringOption(option => 
            option.setName('emoji')
                .setDescription('The emoji to fetch info about')
                .setRequired(true)),
    aliases: ['emote', 'e'],
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            const emoji = await conversions.parseEmoji(client, interaction.options.getString('emoji'));
            if (!emoji) return interaction.reply('Please provide a custom emoji!');

            let embed = new Discord.EmbedBuilder()
                .setTitle(`:${emoji.name}: (${emoji.id})`)
                .setColor(isabotColor)
                .setTimestamp();

            if (emoji.guild) {
                embed.addFields(
                    { name: 'Created At', value: emoji.createdAt.toUTCString(), inline: true },
                    { name: 'Guild', value: emoji.guild.name, inline: true }
                )

                const me = await emoji.guild.members.fetch(client.user.id);
                if (me.permissions.has(Discord.PermissionsBitField.Flags.ManageEmojisAndStickers)) {
                    const u = await emoji.fetchAuthor();
                    embed.addFields({ name: 'Created By', value: u.tag, inline: true });
                }
            }

            embed.addFields({ name: 'Link', value: emoji.url }).setImage(emoji.url);

            interaction.reply({ embeds: [embed] }).then(() => resolve()).catch(emoji => reject(emoji));
        });
    }
};
