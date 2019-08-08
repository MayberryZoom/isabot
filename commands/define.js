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

module.exports = {
    name: 'define',
    aliases: ['d'],
    description: 'Defines a Smash term. If used without an argument, a list of terms will be provided.',
    usage: '<term>',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const currentChar = msg.channel.type === 'dm' ? undefined : characters[msg.guild.id];
            let charNames;
            if (currentChar) charNames = termNames.filter(t => terms[t].character === currentChar);

            if (!args.length) {
                let termsEmbed = new Discord.RichEmbed() .setTitle('Terms for `>define`') .setColor(isabotColor) .addField('General Terms', generalNames.sort().join(', ')) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
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
