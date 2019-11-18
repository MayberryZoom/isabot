const projectile = 29000;
const aerial = 33000;
const smash = 72500;
const smults = ['smash', 'smash attack', 's'];
const amults = ['aerial', 'a', 'air'];
const pmults = ['projectile', 'p'];

module.exports = {
    name: 'shieldstun',
    aliases: ['s'],
    description: 'Calculates the shieldstun a move does. Please do not include the 1v1 multiplier in the damage value.',
    usage: ['<damage> <type>'],
    args: true,
    arguments: 'A damage value, then a type ("proejctile", "smash", or "aerial")',
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const dmg = !isNaN(args[0]) ? parseInt(args.shift()) : undefined;
            const mult = args.join(' ');

            if (!dmg) return msg.channel.send('Please provide a number!')
            .then(resolve(msg.author.tag + ' didn\'t provide an argument for shieldstun'))
            .catch((e) => reject(e));

            if (smults.includes(mult)) {
                return msg.channel.send(Math.floor(((dmg * 100000) * 80000 * smash) / 1000000000000000 + 2))
                .then(resolve())
                .catch((e) => reject(e));
            }
            else if (amults.includes(mult)) {
                return msg.channel.send(Math.floor(((dmg * 100000) * 80000 * aerial) / 1000000000000000 + 2))
                .then(resolve())
                .catch((e) => reject(e));
            }
            else if (pmults.includes(mult)) {
                return msg.channel.send(Math.floor(((dmg * 100000) * 80000 * projectile) / 1000000000000000 + 2))
                .then(resolve())
                .catch((e) => reject(e));
            }
            else {
                return msg.channel.send(Math.floor(((dmg * 100000) * 80000) / 10000000000 + 2))
                .then(resolve())
                .catch((e) => reject(e));
            }
        });
    }
};
