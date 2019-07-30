const terms = require('../terms.js');
const termNames = Object.keys(terms);
const generalNames = termNames.filter(t => terms[t].character === 'General');

const characters = new Discord.Collection(
    [
        ['General', ['general']],
        ['Isabelle', ['isabelle']],
        ['Young Link', ['young link', 'ylink', 'yink', 'yoink']],
        ['Pichu', ['pichu', 'nerfed']],
        ['Ice Climbers', ['ice climbers', 'ics', 'icies']],
        ['Wii Fit Trainer', ['wii fit trainer', 'wiifit', 'wii fit', 'wft']]
    ]
);
// new characters thing wip
/*const characters = new Discord.Collection(
    [
        ['General', { aliases: ['general'] }],
        ['Isabelle', { aliases: ['isabelle'], id: '489939754021027841' }],
        ['Young Link', { aliases: ['young link', 'ylink', 'yink', 'yoink'], id: '456487360624984076' }],
        ['Pichu', { aliases: ['pichu', 'nerfed'], id: '421442870864510976' }],
        ['Ice Climbers', { aliases: ['ice climbers', 'ics', 'icies'], id: '456665686966796299' }],
        ['Wii Fit Trainer', { aliases: ['wii fit trainer', 'wiifit', 'wii fit', 'wft'], id: '118192687718334464' }]
    ]
);*/

module.exports = {
    name: 'terms',
    description: 'Gets a character\'s terms.',
    usage: '<character>',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (!args.length) {
                const currentChar = msg.channel.type === 'dm' ? undefined : characters[msg.guild.id];
                //const currentChar = msg.channel.type === 'dm' ? undefined : characters.find(c => c.id === msg.guild.id);
                let charNames;
                if (currentChar) charNames = termNames.filter(t => terms[t].character === currentChar);

                let termsEmbed = new Discord.RichEmbed() .setTitle('Terms for `>define`') .setColor('0xCF2BCF') .addField('General Terms', generalNames.sort().join(', '));
                if (charNames) termsEmbed .addField(currentChar + ' Terms', charNames.sort().join(', '));
                return msg.channel.send(termsEmbed);
            }

            const argsFixed = args.map(f => f.toLowerCase()).join(' ');
            const character = characters.find(c => c.includes(argsFixed));
            const charTerms = termNames.filter(t => terms[t].character.toLowerCase()  === character[0]);
            if (charTerms.length !== 0) {
                msg.channel.send(new Discord.RichEmbed() .setTitle(terms[charTerms[0]].character + ' Terms') .setColor('0xCF2BCF') .setDescription(charTerms.sort().join(', ')))
                .then(resolve())
                .catch(e => reject(e));
            }
            else msg.channel.send('That is not a valid character!')
            .then(resolve())
            .catch(e => reject(e));
        });
    }
};
