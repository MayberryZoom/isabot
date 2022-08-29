module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks my ping!'),
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            const time = Date.now();
            await interaction.reply('Pinging...')
            interaction.editReply('Ping: ' + (interaction.createdTimestamp - time + 'ms'))
            .then(resolve('ping used (' + (interaction.createdTimestamp - time + 'ms)'))).catch((e) => reject(e));
        });
    }
};
