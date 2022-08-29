const terms = require('../data/terms.js');
const generalNames = terms.filter(t => !t.character).map(t => t.name);

const characters = new Discord.Collection(
    [
        ['Isabelle', { aliases: ['isabelle', 'isa', 'izzy', 'issy'], id: '489939754021027841' }],
        ['Young Link', { aliases: ['young link', 'ylink', 'yink', 'yoink'], id: '456487360624984076' }],
        ['Pichu', { aliases: ['pichu', 'nerfed'], id: '421442870864510976' }],
        ['Ice Climbers', { aliases: ['ice climbers', 'ics', 'icies'], id: '456665686966796299' }],
        ['Wii Fit Trainer', { aliases: ['wii fit trainer', 'wiifit', 'wii fit', 'wft'], id: '118192687718334464' }],
        ['Pyra/Mythra', { aliases: ['pyra/mythra', 'pyra', 'mythra', 'aegis', 'pythra'], id: '858494474748690442' }]
    ]
);

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('terms')
        .setDescription('Gets a list of terms.')
        .addStringOption(option =>
            option.setName('character')
                .setDescription('A specific character to grab terms related to')),
    execute(interaction) {
        return new Promise((resolve, reject) => {
            let character = interaction.options.getString('character');

            if (character) {
                character = characters.find(c => c.aliases.includes(character));
                if (!character) return interaction.reply('That is not a valid character!').then(resolve()).catch(e => reject(e));
    
                const charTerms = terms.filter(t => t.character && t.character.toLowerCase() === character.aliases[0]);
                const embed = new Discord.EmbedBuilder()
                    .setTitle(capitalize(charTerms[0].character, [' ', '-']) + ' Terms')
                    .setColor(isabotColor)
                    .setDescription(charTerms.map(t => t.name).sort().join(', '))
                    .setTimestamp();
                
                interaction.reply({ embeds: [embed ]}).then(resolve()).catch(e => reject(e));
            }
            else {
                let currentChar = interaction.channel.type === Discord.ChannelType.DM ? undefined : characters.find(c => c.id === interaction.guild.id);
                let charNames;
                if (currentChar) {
                    currentChar = currentChar.aliases[0];
                    charNames = terms.filter(t => t.character === currentChar).map(t => t.name);
                }

                let termsEmbed = new Discord.EmbedBuilder()
                    .setTitle('Terms for `/define`')
                    .setColor(isabotColor)
                    .addFields({ name: 'General Terms', value: generalNames.sort().join(', ') })
                    .setTimestamp();
                if (charNames && charNames.length) termsEmbed.addFields({ name: capitalize(currentChar, [' ']) + ' Terms', value: charNames.sort().join(', ') });

                return interaction.reply({ embeds: [termsEmbed] }).then(resolve()).catch(e => reject(e));
            }
        });
    }
};
