const characters = require('../stats.js');

const toUnderscore = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).join('_'));
    return newText;
}

module.exports = {
    name: 'render',
    description: 'Gets a character\'s render in SSBU.',
    usage: ['<character>'],
    args: true,
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            let character = toOneWord(args.join(' ').toLowerCase());
            character = characters.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.includes(character)));
            
            if (!character) return msg.channel.send('That character is either not included or not valid!').then(resolve()).catch(e => reject(e));

            const charNameFixed = toUnderscore(character.name.replace(/\./g, '').replace(/&/g, 'and').replace(/(popo)|(nana)/, 'ice_climbers'), ['-', ' '])

            const embed = new Discord.RichEmbed() .setColor(character.color) .setImage(`https://www.smashbros.com/assets_v2/img/fighter/${charNameFixed}/main.png`) .setTitle(capitalize(character.name, [' ', '-', '.'])) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
            return msg.channel.send(embed).then(resolve()).catch((e) => reject(e));
        });
    }
};
