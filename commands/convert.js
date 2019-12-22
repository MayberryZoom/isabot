const multipliers = require('../multipliers.json');

module.exports = {
    name: 'convert',
    aliases: ['c'],
    description: 'Converts damage values in SSBU. Use it without arguments for a more in depth description.',
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const damage = isNaN(args[0]) ? Math.floor(args[2] * 1000) : Math.floor(args.shift() * 1000);
            args = args.map(a => a.toLowerCase());

            if (!args[0]) {
                return msg.channel.send(new Discord.RichEmbed()
                    .setTitle('>convert')
                    .setColor(isabotColor)
                    .addField('Description', 'The convert command takes a value and converts it under the given multiplier.')
                    .addField('Arguments', '``table`` - See a list of the damage multipliers in SSBU featured in the bot.\n' + Object.keys(multipliers).map(m => '``to ' + m + '`` - ' + multipliers[m].args).join('\n'))
                    .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                    .setTimestamp())
                .then(resolve())
                .catch((e) => reject(e));
            }
            else if (args[0] === 'table') {
                const embed = new Discord.RichEmbed()
                    .setTitle('SSBU Modifiers')
                    .setColor(isabotColor)
                    .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                    .setTimestamp();
                    Object.keys(multipliers).filter(m => multipliers[m].mname).map(m => embed.addField(multipliers[m].mname, multipliers[m].table));
                return msg.channel.send(embed)
                .then(resolve())
                .catch((e) => reject(e));
            }
            else if (Object.keys(multipliers).includes(args[1])) {
                if (isNaN(damage)) {
                    return msg.channel.send('Please enter a number!')
                    .then(resolve())
                    .catch((e) => reject(e));
                }
                else {
                    return msg.channel.send((Math.floor((damage * eval(multipliers[args[1]].multiplier))) / 1000) + '%')
                    .then(resolve())
                    .catch((e) => reject(e));
                }
            }
            else {
                return msg.channel.send('Please enter a valid argument!')
                .then(resolve())
                .catch((e) => reject(e));
            }
        });
    }
};
