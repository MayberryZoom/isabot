module.exports = {
    name: 'shieldstun',
    aliases: ['s'],
    description: 'Calculates the shieldstun a move does. Please do not include the 1v1 multiplier in the damage value.',
    usage: '<damage> <type>',
    args: true,
    arguments: 'A damage value, then a type ("proejctile", "smash", or "aerial")',
    execute(msg, args) {
        const projectile = 29000;
        const aerial = 33000;
        const smash = 72500;
        const dmg = parseInt(args.shift());
        const mult = args.join(' ');
        const smults = ['smash', 'smash attack', 's'];
        const amults = ['aerial', 'a', 'air'];
        const pmults = ['projectile', 'p'];

        console.log(dmg);
        console.log(mult);
        if (smults.includes(mult)) {
            msg.channel.send(Math.floor(((dmg * 100000) * 80000 * smash) / 1000000000000000 + 2));
        }
        else if (amults.includes(mult)) {
            msg.channel.send(Math.floor(((dmg * 100000) * 80000 * aerial) / 1000000000000000 + 2));
        }
        else if (pmults.includes(mult)) {
            msg.channel.send(Math.floor(((dmg * 100000) * 80000 * projectile) / 1000000000000000 + 2));
        }
        else {
            msg.channel.send(Math.floor(((dmg * 100000) * 80000) / 10000000000 + 2));
        }
    }
};
