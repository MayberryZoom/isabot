const changes = `__8/28/2022__
**Isabot version 2.0.0!**
- Various bug fixes/improvements
- Prefix commands are now deprecated
- Slash commands now fully supported, please use these instead
    - The migration to slash commands also means a better user experience!
    - Users should find it much easier to use the bot in general now
    - Many commands have been significantly simplified, both in code and usage`

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
