const characters = require('../data/characters.js');

const toUnderscore = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).join('_'));
    return newText;
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('stat')
        .setDescription('Grabs a given character\'s attributes.')
        .addStringOption(option =>
            option.setName('character')
                .setDescription('The character to fetch the data of')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('attribute')
                .setDescription('The attribute to fetch')
                .setRequired(true)),
    aliases: ['stats', 'attribute', 'attributes'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            let character = toOneWord(interaction.options.getString('character').toLowerCase());
            character = characters.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.map(x => toOneWord(x)).includes(character)));
            if (!character || character.name === 'luma') interaction.reply('That character is not valid!').then(resolve()).catch(e => reject(e));
            if (character.unreleasedStat) return interaction.reply('That character is not available yet!').then(resolve()).catch(e => reject(e));

            let attribute = toOneWord(interaction.options.getString('attribute').toLowerCase());
            attribute = character.attributes.find(a => toOneWord(a.name) === attribute || (a.aliases && a.aliases.map(x => toOneWord(x)).includes(attribute)));
            if (!attribute) return interaction.reply('That attribute is not valid!').then(resolve()).catch(e => reject(e));

            const nameToUse = character.ssbuLink ? character.ssbuLink : character.name;
            const charNameFixed = toUnderscore(nameToUse.replace(/\./g, '').replace(/&/g, 'and'), ['-', ' ']);

            const embed = new Discord.EmbedBuilder()
                .setColor(character.color)
                .setThumbnail(`https://www.smashbros.com/assets_v2/img/fighter/${charNameFixed}/main.png`)
                .setTitle(capitalize(character.name, [' ', '-', '.']) + ' ' + capitalize(attribute.name, [' ']))
                .setDescription('Value: ' + attribute.value.toString())
                .setTimestamp();

            interaction.reply({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
