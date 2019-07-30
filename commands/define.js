const terms = require('../terms.js');
const termNames = Object.keys(terms);
const generalNames = termNames.filter(t => terms[t].character === 'General');

const characters = {
    '489939754021027841': 'Isabelle',
    '456487360624984076': 'Young Link',
    '421442870864510976': 'Pichu',
    '456665686966796299': 'Ice Climbers',
    '118192687718334464': 'Wii Fit Trainer',
    '164518963777241088': 'Mario',
    '469635806852808704': 'Link'
}
//new character thing wip
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
    name: 'define',
    aliases: ['d'],
    description: 'Defines a Smash term. If used without an argument, a list of terms will be provided.',
    usage: '<term>',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const currentChar = msg.channel.type === 'dm' ? undefined : characters[msg.guild.id];
            //const currentChar = msg.channel.type === 'dm' ? undefined : characters.find(c => c.id === msg.guild.id);
            let charNames;
            if (currentChar) charNames = termNames.filter(t => terms[t].character === currentChar);

            if (!args.length) {
                let termsEmbed = new Discord.RichEmbed() .setTitle('Terms for `>define`') .setColor('0xCF2BCF') .addField('General Terms', generalNames.sort().join(', '));
                if (charNames) termsEmbed .addField(currentChar + ' Terms', charNames.sort().join(', '));
                return msg.channel.send(termsEmbed)
                .then(resolve())
                .catch((e) => reject(e));
            }

            const term = terms[args.join(' ').toLowerCase()];

            if (term) {
                return msg.channel.send(`__${term.character} Term__\n\n${term.definition}`, { split: true })
                .then(resolve())
                .catch((e) => reject(e));
            }
            else {
                return msg.channel.send('There is no term by that name!')
                .then(resolve())
                .catch((e) => reject(e));
            }
        });
    }
};
