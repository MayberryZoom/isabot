module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('panda')
        .setDescription('Gets a cute panda picture!'),
    guilds: ['489939754021027841'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('<https://goo.gl/A1XpL9>').then(resolve()).catch(e => reject(e));
        })
    }
};
