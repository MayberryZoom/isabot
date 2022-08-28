const projectile = 29000;
const aerial = 33000;
const smash = 72500;

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('shieldstun')
        .setDescription('Calculates the shieldstun a move does.')
        .addNumberOption(option =>
            option.setName('damage')
                .setDescription('The damage the move deals (without 1v1 multiplier)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('type')
                .setDescription('The type of move being used')
                .addChoices(
                    { name: 'Smash Attack', value: 'smash' },
                    { name: 'Aerial Attack', value: 'aerial' },
                    { name: 'Projectile', value: 'projectile' },
                    { name: 'Other', value: 'other' }
                )
                .setRequired(true)),
    aliases: ['s'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            const dmg = interaction.options.getNumber('damage');
            const mult = interaction.options.getString('type');
            let result;

            if (mult === 'smash') result = Math.floor(((dmg * 100000) * 80000 * smash) / 1000000000000000 + 2);
            else if (mult === 'aerial') result = Math.floor(((dmg * 100000) * 80000 * aerial) / 1000000000000000 + 2);
            else if (mult === 'projectile') result = Math.floor(((dmg * 100000) * 80000 * projectile) / 1000000000000000 + 2);
            else result = Math.floor(((dmg * 100000) * 80000) / 10000000000 + 2);

            interaction.reply(result + ' frames of shieldstun').then(resolve()).catch(e => reject(e));
        });
    }
};
