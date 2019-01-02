module.exports = {
    name: 'convert',
    description: 'Allows you convert damage values in SSBU. Use it without arguments for a more in depth description.',
    usage: '',
    arguments: '``table``, ``to 1v1``, ``to ffa``, ``to sh``, ``to fh``, ``to fresh``',
    execute(message, args) {
        const vsMultiplier = 1.2;
        const shMultiplier = 0.85;
        const freshMultiplier = 1.05;
        args.forEach(arg => {
            arg = arg.toLowerCase();
        });

        if (!args[0]) {
            const embed = new Discord.RichEmbed() .setTitle('``>convert``') .setColor('0xCF2BCF') .addField('Description', 'The convert command takes a value and converts it under the given multiplier.') .addField('Arguments', '``table`` - See a list of the damage multipliers in SSBU featured in the bot.\n``to 1v1`` - Converts the given damage value to its damage in 1v1, assuming the mode of the damage given is FFA.\n``to FFA`` - Converts the given damage value to its damage in FFA, assuming the mode of the damage given is 1v1.\n``to SH`` - Converts the given damage value to its damage in a shorthop, assuming the damage given is its base damage.\n``to FH`` - Converts the given damage value to its damage in a fullhop, assuming the damage given its SH damage.\n``to fresh`` - Converts the given damage to its damage when fresh, assuming it is the base damage, aka FFA damage\n');
			sendMsg(embed);
        }
        else if (args[0] === 'table') {
            const embed = new Discord.RichEmbed() .setTitle('SSBU Modifiers') .setColor('0xCF2BCF') .addField('1v1 Multiplier', 'When playing in a 1v1, all damage **taken** will be modified by ' + vsMultiplier + 'x.') .addField('Shorthop', 'When performing an aerial in a shorthop, the damage will be modified by ' + shMultiplier + 'x.') .addField('Freshness Bonus', 'When landing a move that is not in the staling queue, its damage will be modified by ' + freshMultiplier + 'x.');
			sendMsg(embed);
        }
        else if (args[0] === 'to') {
            if (args[1] === 'ffa') {
                if (isNaN(args[2])) {
                    sendMsg('Please enter a number!');
                }
                else {
                    sendMsg((args[2] * (1 / vsMultiplier)) + '%');
                }
            }
            else if (args[1] === '1v1') {
                if (isNaN(args[2])) {
                    sendMsg('Please enter a number!');
                }
                else {
                    sendMsg(args[2] * vsMultiplier + '%');
                }
            }
            else if (args[1] === 'shorthop' || args[1] === 'sh') {
                if (isNaN(args[2])) {
                    sendMsg('Please enter a number!');
                }
                else {
                    sendMsg(args[2] * shMultiplier + '%');
                }
            }
            if (args[1] === 'fullhop' || args[1] === 'fh') {
                if (isNaN(args[2])) {
                    sendMsg('Please enter a number!');
                }
                else {
                    sendMsg((args[2] * (1 / shMultiplier)) + '%');
                }
            }
            if (args[1] === 'fresh') {
                if (isNaN(args[2])) {
                    sendMsg('Please enter a number!');
                }
                else {
                    sendMsg((args[2] * freshMultiplier) + '%');
                }
            }
        }
        else {
            sendMsg('Please enter a valid argument!');
        }
    }
};
