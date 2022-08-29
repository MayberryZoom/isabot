const terms = require('../data/terms.js');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('define')
        .setDescription('Defines a Smash term. Use /terms for a list of terms')
        .addStringOption(option => 
            option.setName('term')
                .setDescription('The term to define')
                .setRequired(true)),
    aliases: ['d'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            let term = toOneWord(interaction.options.getString('term')).toLowerCase()
            term = terms.find(t => term === toOneWord(t.name) ||
                (t.aliases && t.aliases.map(x => toOneWord(x)).includes(term)));

            if (term) {
                if (!term.character) term.character = 'general';
                return interaction.reply(`__${capitalize(term.character, [' ', '/'])} Term__\n\n${term.definition}`).then(resolve()).catch((e) => reject(e));
            }
            else {
                return interaction.reply('There is no term by that name!').then(resolve()).catch((e) => reject(e));
            }
        });
    }
};
