module.exports = {
    name: 'shieldstun',
    description: 'Calculates the shieldstun a move does. Please do not include the 1v1 multiplier in the damage value.',
    usage: '<damage> <type>',
    args: true,
    hidden: true,
    arguments: 'A damage value, then a type ("proejctile", "smash", or "aerial")',
    execute(msg, args) {
        const projectile = 0.29;
        const aerial = 0.33;
        const smash = 0.725;
        const dmg = parseInt(args[0]);
        let mult;

        

        dmg * 0.8 * mult + 2;
    }
};
