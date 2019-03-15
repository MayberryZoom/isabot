module.exports = {
    name: 'convert',
    aliases: ['c'],
    description: 'Allows you convert damage values in SSBU. Use it without arguments for a more in depth description.',
    usage: '',
    arguments: '``table``, '  + Object.keys(require('../multipliers.json')).map(m => '``to ' + m + '``').join(', '),
    execute(msg, args) {
        const multipliers = require('../multipliers.json');
        const damage = Math.floor(args[2] * 1000);
        args = args.map(a => a.toLowerCase());

        if (!args[0]) {
            const embed = new Discord.RichEmbed()
                .setTitle('>convert')
                .setColor('0xCF2BCF')
                .addField('Description', 'The convert command takes a value and converts it under the given multiplier.')
                .addField('Arguments', '``table`` - See a list of the damage multipliers in SSBU featured in the bot.\n' + Object.keys(multipliers).map(m => '``to ' + m + '`` - ' + multipliers[m].args).join('\n'));
			msg.channel.send(embed);
        }
        else if (args[0] === 'table') {
            const embed = new Discord.RichEmbed()
                .setTitle('SSBU Modifiers')
                .setColor('0xCF2BCF')
                Object.keys(multipliers).filter(m => multipliers[m].mname).map(m => embed.addField(multipliers[m].mname, multipliers[m].table))
			msg.channel.send(embed);
        }
        else if (Object.keys(multipliers).includes(args[1])) {
            if (isNaN(damage)) {
                msg.channel.send('Please enter a number!');
            }
            else {
                msg.channel.send((Math.floor((damage * eval(multipliers[args[1]].multiplier))) / 1000) + '%');
            }
        }
        else {
            msg.channel.send('Please enter a valid argument!');
        }
    }
};
