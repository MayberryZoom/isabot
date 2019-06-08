const multipliers = require('../multipliers.json');

module.exports = {
    name: 'convert',
    aliases: ['c'],
    description: 'Allows you convert damage values in SSBU. Use it without arguments for a more in depth description.',
    usage: '',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const damage = isNaN(args[0]) ? Math.floor(args[2] * 1000) : Math.floor(args.shift() * 1000);
            args = args.map(a => a.toLowerCase());

            if (!args[0]) {
                const embed = new Discord.RichEmbed()
                    .setTitle('>convert')
                    .setColor('0xCF2BCF')
                    .addField('Description', 'The convert command takes a value and converts it under the given multiplier.')
                    .addField('Arguments', '``table`` - See a list of the damage multipliers in SSBU featured in the bot.\n' + Object.keys(multipliers).map(m => '``to ' + m + '`` - ' + multipliers[m].args).join('\n'));
                return msg.channel.send(embed)
                .then(resolve())
                .catch((e) => reject(e));
            }
            else if (args[0] === 'table') {
                const embed = new Discord.RichEmbed()
                    .setTitle('SSBU Modifiers')
                    .setColor('0xCF2BCF')
                    Object.keys(multipliers).filter(m => multipliers[m].mname).map(m => embed.addField(multipliers[m].mname, multipliers[m].table))
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
