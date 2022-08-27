module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('coin')
        .setDescription('Flip a coin!'),
    aliases: ['flip', 'coin flip'],
    execute(interaction) {
        return new Promise (async (resolve, reject) => {
            await interaction.reply('Flipping a coin...');
            await sleep(1000);
            interaction.editReply('It landed on ' + (Math.round(Math.random()) === 0 ? 'heads' : 'tails') + '! <a:isaCheer:490594617767755776>').then(resolve()).catch(e => reject(e));
        });
    }
};
