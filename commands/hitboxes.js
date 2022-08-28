module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('hitboxes')
        .setDescription('Gets the Ice Climbers\' hitboxes.'),
    guilds: ['456665686966796299'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('https://youtu.be/rjf-8i44DgY').then(resolve()).catch(e => reject(e));
        })
    }
};
