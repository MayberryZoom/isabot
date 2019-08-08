const terms = require('../terms.js');
const termNames = Object.keys(terms);
const generalNames = termNames.filter(t => terms[t].character === 'General');

const characters = new Discord.Collection(
    [
        ['General', { aliases: ['general'] }],
        ['Isabelle', { aliases: ['isabelle', 'isa', 'izzy', 'issy'], id: '489939754021027841' }],
        ['Young Link', { aliases: ['young link', 'ylink', 'yink', 'yoink'], id: '456487360624984076' }],
        ['Pichu', { aliases: ['pichu', 'nerfed'], id: '421442870864510976' }],
        ['Ice Climbers', { aliases: ['ice climbers', 'ics', 'icies'], id: '456665686966796299' }],
        ['Wii Fit Trainer', { aliases: ['wii fit trainer', 'wiifit', 'wii fit', 'wft'], id: '118192687718334464' }]
    ]
);

module.exports = {
    name: 'terms',
    description: 'Gets a character\'s terms.',
    usage: '<character>',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (!args.length) {
                const currentChar = msg.channel.type === 'dm' ? undefined : characters.find(c => c.id === msg.guild.id);
                let charNames;
                if (currentChar) charNames = termNames.filter(t => terms[t].character === currentChar);

                let termsEmbed = new Discord.RichEmbed() .setTitle('Terms for `>define`') .setColor(isabotColor) .addField('General Terms', generalNames.sort().join(', ')) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
                if (charNames) termsEmbed .addField(currentChar + ' Terms', charNames.sort().join(', '));
                return msg.channel.send(termsEmbed);
            }

            const argsFixed = args.map(f => f.toLowerCase()).join(' ');

            const character = characters.find(c => c.aliases.includes(argsFixed));
            if (character === null) msg.channel.send('That is not a valid character!')
            .then(resolve())
            .catch(e => reject(e));

            const charTerms = termNames.filter(t => terms[t].character.toLowerCase()  === character.aliases[0]);
            msg.channel.send(new Discord.RichEmbed() .setTitle(terms[charTerms[0]].character + ' Terms') .setColor(isabotColor) .setDescription(charTerms.sort().join(', ')) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp())
            .then(resolve())
            .catch(e => reject(e));
        });
    }
};
