const characters = require('../data/characters.js');

const toUnderscore = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).join('_'));
    return newText;
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('render')
        .setDescription('Gets character renders in Smash Ultimate.')
        .addStringOption(option =>
            option.setName('character')
                .setDescription('Character to fetch render of')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('costume')
                .setDescription('Alternate costume to fetch')
                .setMinValue(1)
                .setMaxValue(8)),
    execute(interaction) {
        return new Promise((resolve, reject) => {
            let character = toOneWord(interaction.options.getString('character').toLowerCase());
            character = characters.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.map(x => toOneWord(x)).includes(character)));
            if (!character || character.name === 'luma') return interaction.reply('That character is not valid!').then(resolve()).catch(e => reject(e));

            const nameToUse = character.ssbuLink ? character.ssbuLink : character.name;
            const charNameFixed = toUnderscore(nameToUse.replace(/\./g, '').replace(/&/g, 'and'), ['-', ' ']);

            let alt = interaction.options.getInteger('costume');
            alt = alt ? 'main' + alt : 'main';

            const embed = new Discord.EmbedBuilder()
                .setColor(character.color)
                .setImage(`https://www.smashbros.com/assets_v2/img/fighter/${charNameFixed}/${alt}.png`)
                .setTitle(capitalize(character.name, [' ', '-', '.']))
                .setTimestamp();

            interaction.reply({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
