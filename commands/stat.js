const characters = require('../stats.js');

const toUnderscore = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).join('_'));
    return newText;
}

module.exports = {
    name: 'stat',
    aliases: ['stats'],
    description: 'Grabs the given character\'s stats. All data from Kurogane Hammer.',
    usage: '<character> <stat>',
    args: true,
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            let character, x = 0;
            while (!character && x <= args.length) {
                character = toOneWord(args.slice(0, x).join(' ').toLowerCase());
                character = characters.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.includes(character)));
                x++;
            }
            if (!character) return msg.channel.send('That character is either not included or not valid!').then(resolve()).catch(e => reject(e));

            const statName = toOneWord(args.slice(x - 1).join(' ').toLowerCase());
            let stat = character.stats.find(s => s.keys.includes(statName))

            if (!stat) return msg.channel.send('That stat is not valid!').then(resolve()).catch(e => reject(e));

            const charNameFixed = toUnderscore(character.name.replace(/\./g, '').replace(/&/g, 'and').replace(/(popo)|(nana)/, 'ice_climbers'), ['-', ' '])

            const embed = new Discord.RichEmbed() .setColor(character.color) .setThumbnail(`https://www.smashbros.com/assets_v2/img/fighter/${charNameFixed}/main.png`) .addField(capitalize(character.name, [' ', '-', '.']) + ' ' + stat.name, 'Value: ' + stat.value + '\nRank: ' + stat.rank) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
            return msg.channel.send(embed).then(resolve()).catch((e) => reject(e));
        });
    }
};
