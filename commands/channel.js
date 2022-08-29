module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('channel')
        .setDescription('Shows information about a channel. Defaults to current channel')
        .addChannelOption(option => 
            option.setName('channel')
                .setDescription('The channel to fetch info about')),
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            let channel = interaction.options.getChannel('channel');
            if (!channel) channel = interaction.channel;

            const embed = new Discord.EmbedBuilder()
                .setTitle(channel.name + ' (' + channel.id + ')' + (channel.nsfw ? ' ⚠' : ''))
                .setColor(isabotColor)
                .addFields(
                    { name: 'Created At', value: channel.createdAt.toUTCString() },
                    { name: 'Category', value: channel.parent.name, inline: true },
                    { name: 'Channel Topic', value: channel.topic ? channel.topic : 'No channel topic', inline: true },
                    { name: 'Members', value: channel.members.size.toString(), inline: true }
                )
                .setTimestamp();

            interaction.reply({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
