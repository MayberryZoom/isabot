module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('hug')
        .setDescription('Hug the doggo!'),
    aliases: ['embrace', 'huggle', 'huggles'],
    guilds: ['489939754021027841'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('*hugs* <:isaGlee:513917768568143882>').then(resolve()).catch(e => reject(e));
        })
    }
};
