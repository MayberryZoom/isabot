const changes = `__4/4/2021__
- Updated to discord.js v12
    - What does this mean? It means the bot is more stable, several bugs were fixed, and just overall optimization. This will also make future updates easier.

__3/15/2021__
- Added hitbox data for Pyra/Mythra (except Mythra specials)
- Added attributes for Pyra/Mythra

__2/19/2021__
- Added hitbox data for Sephiroth
- Added Pyra/Mythra to \`>render\`

__12/17/2020__
- Updated \`>stat\`
    - Added attributes for Sephiroth
    - Fixed Steve's attribute data (was accidentally set to Min-Min's)

__12/11/2020__
- Added hitbox data for Steve (except specials)
- Added Sephiroth to \`>render\``;

module.exports = {
    name: 'changelog',
    aliases: ['changes'],
    description: 'List of my recent changes!',
    dmDisabled: 2,
    category: 'info',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send(changes).then(resolve()).catch(e => reject(e));
        })
    }
};
