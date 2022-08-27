module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('roll')
        .setDescription('Roll the dice!')
        .addIntegerOption(option => 
            option.setName('sides')
                .setDescription('The number of sides on the dice. Defaults to 6')
                .setMinValue(2)
                .setMaxValue(100))
        .addIntegerOption(option => 
            option.setName('dice')
                .setDescription('The number of dice to roll. Defaults to 1')
                .setMinValue(1)
                .setMaxValue(15)),
    aliases: ['dice'],
    execute(interaction) {
        return new Promise (async (resolve, reject) => {
            let max = interaction.options.getInteger('sides');
            let times = interaction.options.getInteger('dice');

            if (!max) max = 6;
            if (!times) times = 1;

            await interaction.reply('Rolling a dice...');
            await sleep(1000);

            if (times > 1) {
                let rolls = [];
                for (let i = 0; i < times; i++) rolls.push(Math.floor(Math.random() * max + 1));
                let total = rolls.reduce((acc, i) => acc + parseInt(i));

                interaction.editReply('You rolled: ' + rolls.join(', ') + '! <a:isaTwirl:490304654454816768> Total: ' + total).then(resolve()).catch(e => reject(e));
            }
            else interaction.editReply('You rolled a ' + Math.floor(Math.random() * max + 1) + '! <a:isaTwirl:490304654454816768>').then(resolve()).catch(e => reject(e));
        });
    }
};
