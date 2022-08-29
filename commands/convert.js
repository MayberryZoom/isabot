const modifiers = require('../data/multipliers.json');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('convert')
        .setDescription('Converts damage values in Smash Ultimate.')
        .addNumberOption(option => 
            option.setName('damage')
                .setDescription('The damage value to convert')
                .setRequired(true))
        .addStringOption(option => 
            option.setName('modifier')
                .setDescription('The modifier to convert with. Use /modifiers for more info')
                .addChoices(
                    { name: 'Short Hop', value: 'sh' },
                    { name: 'Full Hop', value: 'fh' },
                    { name: '1v1', value: '1v1' },
                    { name: 'Free For All', value: 'ffa' },
                    { name: 'Freshness Bonus', value: 'fresh' },
                    { name: 'Charged Smash Attack', value: 'charged' }
                )
                .setRequired(true)),
    aliases: ['c'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            const damage = Math.floor(interaction.options.getNumber('damage') * 1000);
            const modifier = interaction.options.getString('modifier');

            interaction.reply((Math.floor((damage * eval(modifiers[modifier].multiplier))) / 1000) + '%').then(resolve()).catch((e) => reject(e));
        });
    }
};
