const characters = require('../characters.js');

const toUnderscore = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).join('_'));
    return newText;
}

module.exports = {
    name: 'render',
    description: 'Gets a character\'s render in SSBU. When adding an alternate costume, use 1-8.',
    usage: ['<character> <alt>'],
    args: true,
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            let character, x = args.length;
            while (!character && x >= 0) {
                character = toOneWord(args.slice(0, x).join(' ').toLowerCase());
                character = characters.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.map(x => toOneWord(x)).includes(character)));
                x--;
            }
            if (!character || character.name === 'luma') return msg.channel.send('That character is not valid!').then(resolve()).catch(e => reject(e));

            const nameToUse = character.ssbuLink ? character.ssbuLink : character.name;
            const charNameFixed = toUnderscore(nameToUse.replace(/\./g, '').replace(/&/g, 'and'), ['-', ' ']);
            let alt = args.slice(x + 1);
            alt = alt && alt < 9 && alt > 1 ? 'main' + alt : 'main';

            const embed = new Discord.MessageEmbed() .setColor(character.color) .setImage(`https://www.smashbros.com/assets_v2/img/fighter/${charNameFixed}/${alt}.png`) .setTitle(capitalize(character.name, [' ', '-', '.'])) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
            return msg.channel.send(embed).then(resolve()).catch((e) => reject(e));
        });
    }
};
