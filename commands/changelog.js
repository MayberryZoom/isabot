const changes = `__09/10/2024__
- Removed \`/isabelle\` and \`/digby\`

__09/09/2024__
- Updated outdated/broken Twitter links`

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('changelog')
        .setDescription('List of recent changes!'),
    aliases: ['changes'],
    category: 'info',
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply(changes).then(resolve()).catch(e => reject(e));
        })
    }
};
