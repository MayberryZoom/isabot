module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('pet')
        .setDescription('Pet the doggo...'),
    guilds: ['489939754021027841', '513806689787445261'],
    category: 'fun',
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('Please don\'t pet me! <:isaBadDay:562485951558057984>').then(resolve()).catch(e => reject(e));
        })
    }
};
