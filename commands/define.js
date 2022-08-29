const terms = require('../data/terms.js');
const generalNames = terms.filter(t => !t.character).map(t => t.name);

const characters = {
    '489939754021027841': 'isabelle',
    '456487360624984076': 'young ink',
    '421442870864510976': 'pichu',
    '456665686966796299': 'ice climbers',
    '118192687718334464': 'wii fit trainer',
    '164518963777241088': 'mario',
    '469635806852808704': 'link'
}

module.exports = {
    name: 'define',
    aliases: ['d'],
    description: 'Defines a Smash term. If used without an argument, a list of terms will be provided.',
    usage: ['<term>'],
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const currentChar = msg.channel.type === 'dm' ? undefined : characters[msg.guild.id];
            let charNames;
            if (currentChar) charNames = terms.filter(t => t.character === currentChar).map(t => t.name);

            if (!args.length) {
                let termsEmbed = new Discord.EmbedBuilder()
                    .setTitle('Terms for `>define`')
                    .setColor(isabotColor)
                    .addFields({ name: 'General Terms', value: generalNames.sort().join(', ') })
                    .setTimestamp();
                if (charNames) termsEmbed.addFields({ name: capitalize(currentChar, [' ']) + ' Terms', value: charNames.sort().join(', ') });

                return msg.channel.send({ embeds: [termsEmbed] }).then(resolve()).catch((e) => reject(e));
            }

            const term = terms.find(t => toOneWord(args.join(' ')).toLowerCase() === toOneWord(t.name) ||
                (t.aliases && t.aliases.map(x => toOneWord(x)).includes(toOneWord(args.join(' ').toLowerCase()))));

            if (term) {
                if (!term.character) term.character = 'general';
                return msg.channel.send(`__${capitalize(term.character, [' ', '/'])} Term__\n\n${term.definition}`, { split: true })
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
