const multipliers = require('../data/multipliers.json');

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('modifiers')
        .setDescription('Lists damage modifiers in Smash Ultimate.'),
    execute(interaction) {
        return new Promise((resolve, reject) => {
            const embed = new Discord.EmbedBuilder()
                .setTitle('SSBU Modifiers')
                .setColor(isabotColor)
                .setTimestamp();
            Object.keys(multipliers).filter(m => multipliers[m].mname).map(m => embed.addFields({ name: multipliers[m].mname, value: multipliers[m].table }));

            interaction.reply({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
        });
    }
};
