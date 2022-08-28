module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('nuke')
        .setDescription('Take cover!'),
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            await interaction.reply('Activating server nuke');

            for (let i = 1; i <= 3; i++) {
                await sleep(500);
                await interaction.editReply('Activating server nuke' + '.'.repeat(i)).catch(e => reject(e));
            }

            resolve();
        });
    }
};
