module.exports = {
    name: 'convert',
    description: 'Allows you convert damage values in SSBU. Use it without arguments for a more in depth description.',
    usage: '',
    arguments: '``table``, ``to 1v1``, ``to ffa``, ``to sh``, ``to fh``, ``to fresh``',
    execute(msg, args) {
        const multipliers = require('../multipliers.json');
        const damage = Math.floor(args[2] * 1000);
        args = args.map(a => a.toLowerCase());

        if (!args[0]) {
            const embed = new Discord.RichEmbed() .setTitle('``>convert``') .setColor('0xCF2BCF') .addField('Description', 'The convert command takes a value and converts it under the given multiplier.') .addField('Arguments', '``table`` - See a list of the damage multipliers in SSBU featured in the bot.\n``to 1v1`` - Converts the given damage value to its damage in 1v1, assuming the mode of the damage given is FFA.\n``to FFA`` - Converts the given damage value to its damage in FFA, assuming the mode of the damage given is 1v1.\n``to SH`` - Converts the given damage value to its damage in a shorthop, assuming the damage given is its base damage.\n``to FH`` - Converts the given damage value to its damage in a fullhop, assuming the damage given its SH damage.\n``to fresh`` - Converts the given damage to its damage when fresh, assuming it is the base damage, aka FFA damage\n');
			msg.channel.send(embed);
        }
        else if (args[0] === 'table') {
            const embed = new Discord.RichEmbed() .setTitle('SSBU Modifiers') .setColor('0xCF2BCF')
            multipliers.forEach(m => embed.addField(m.name, ))
            .addField('1v1 Multiplier', 'When playing in a 1v1, all damage **taken** will be modified by ' + vsMultiplier + 'x.') .addField('Shorthop', 'When performing an aerial in a shorthop, the damage will be modified by ' + shMultiplier + 'x.') .addField('Freshness Bonus', 'When landing a move that is not in the staling queue, its damage will be modified by ' + freshMultiplier + 'x.');
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
