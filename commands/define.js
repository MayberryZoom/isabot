const terms = require('../terms.js');
const termNames = Object.keys(terms);
const generalNames = termNames.filter(t => terms[t].character === 'General');
let termsEmbed = new Discord.RichEmbed() .setTitle('Terms for `>define`') .setColor('0xCF2BCF') .addField('General Terms', generalNames.join(', '));

let characters = {
    '489939754021027841': 'Isabelle',
    '456487360624984076': 'Young Link',
    '421442870864510976': 'Pichu',
    '456665686966796299': 'Ice Climbers',
    '118192687718334464': 'Wii Fit Trainer',
    '164518963777241088': 'Mario',
    '469635806852808704': 'Link'
}

module.exports = {
    name: 'define',
    aliases: ['d', 'term', 'terms'],
    description: 'Defines a Smash term. If used without an argument, a list of terms will be provided.',
    usage: '<term>',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const currentChar = characters[msg.guild.id];
            let charNames;
            if (currentChar) charNames = termNames.filter(t => terms[t].character === currentChar);

            if (!args.length) {
                if (charNames) termsEmbed .addField (currentChar + ' Terms', charNames.join(', '));
                return msg.channel.send(termsEmbed);
            }

            const term = terms[args.join(' ').toLowerCase()];

            if (term) {
                return msg.channel.send(`__${term.character} Term__\n\n${term.definition}`)
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
