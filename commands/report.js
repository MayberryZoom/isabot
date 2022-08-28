const reportChannel = '513806730204020737';

const blacklist = [];

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('report')
        .setDescription('Report a bug or issue with the bot. Misuse of this command will result in being blacklisted.')
        .addStringOption(option =>
            option.setName('message')
            .setDescription('The report message')
            .setRequired(true))
        .addAttachmentOption(option =>
            option.setName('image')
            .setDescription('Image to be sent with report')),
    aliases: ['issue', 'bug'],
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            if (blacklist.includes(interaction.user.id)) return interaction.reply('You have been blacklisted from reporting issues due to spam or inappropriate reports.')

            const image = interaction.options.getAttachment('image');

            const embed = new Discord.EmbedBuilder()
                .setAuthor({ name: 'Reported by ' + interaction.user.tag + ' (' + interaction.user.id + ')', iconURL: interaction.user.avatarURL() })
                .setDescription(interaction.options.getString('message'))
                .setColor(isabotColor)
                .setTimestamp();
            if (image) embed.setImage(image.url);

            await client.channels.cache.get(reportChannel).send({ embeds: [embed] });
            interaction.reply('Report sent successfully!').then(resolve()).catch(e => reject(e));
        })
    }
};
