const characters = require('../data/characters.js');

const toUnderscore = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).join('_'));
    return newText;
}

module.exports = {
    name: 'stat',
    aliases: ['stats', 'attribute', 'attributes'],
    description: 'Grabs the given character\'s attributes. All data from Kurogane Hammer. Example: `>stat mario weight`',
    usage: ['<character> <attribute>'],
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
            if (character.unreleasedStat) return msg.channel.send('That character is not available yet!').then(resolve()).catch(e => reject(e));

            let attrName = toOneWord(args.slice(x + 1).join(' ').toLowerCase());
            let attribute = character.attributes.find(a => toOneWord(a.name) === attrName || (a.aliases && a.aliases.map(x => toOneWord(x)).includes(attrName)));
            if (!attribute) return msg.channel.send('That attribute is not valid!').then(resolve()).catch(e => reject(e));

            const nameToUse = character.ssbuLink ? character.ssbuLink : character.name;
            const charNameFixed = toUnderscore(nameToUse.replace(/\./g, '').replace(/&/g, 'and'), ['-', ' ']);

            const embed = new Discord.MessageEmbed() .setColor(character.color) .setThumbnail(`https://www.smashbros.com/assets_v2/img/fighter/${charNameFixed}/main.png`) .setTitle(capitalize(character.name, [' ', '-', '.']) + ' ' + capitalize(attribute.name, [' '])) .setDescription('Value: ' + attribute.value /*+ '\nRank: ' + attribute.rank*/) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
            return msg.channel.send(embed).then(resolve()).catch((e) => reject(e));
        });
    }
};
