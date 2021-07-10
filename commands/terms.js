const terms = require('../terms.js');
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
    name: 'terms',
    description: 'Gets a character\'s terms.',
    usage: ['<character>'],
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (!args.length) {
                let currentChar = msg.channel.type === 'dm' ? undefined : characters.find(c => c.id === msg.guild.id);
                let charNames;
                if (currentChar) { currentChar = currentChar.aliases[0]; charNames = terms.filter(t => t.character === currentChar).map(t => t.name); }

                let termsEmbed = new Discord.MessageEmbed() .setTitle('Terms for `>define`') .setColor(isabotColor) .addField('General Terms', generalNames.sort().join(', ')) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
                if (charNames && charNames.length) termsEmbed .addField(capitalize(currentChar, [' ']) + ' Terms', charNames.sort().join(', '));
                return msg.channel.send(termsEmbed).then(resolve()).catch(e => reject(e));
            }

            const argsFixed = args.map(f => f.toLowerCase()).join(' ');

            const character = characters.find(c => c.aliases.includes(argsFixed));
            if (!character) msg.channel.send('That is not a valid character!').then(resolve()).catch(e => reject(e));

            const charTerms = terms.filter(t => t.character && t.character.toLowerCase() === character.aliases[0]);
            msg.channel.send(new Discord.MessageEmbed() .setTitle(capitalize(charTerms[0].character, [' ', '-']) + ' Terms') .setColor(isabotColor) .setDescription(charTerms.map(t => t.name).sort().join(', ')) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp())
            .then(resolve())
            .catch(e => reject(e));
        });
    }
};
