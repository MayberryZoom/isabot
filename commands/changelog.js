const changes = `__7/13/2021__
- Added special hitbox data for Mario, Luigi, Dr. Mario, Bowser, Mewtwo, and Mega Man

__7/12/2021__
- Added hitbox data for Mythra specials
- Added hitbox data for Kazuya
- Added attributes for Kazuya
- Added Kazuya to \`>render\`

__7/10/21__
- Updated \`>define\`
    - Updated old, out of date terms
    - Improved readability and explanations of old terms
    - Added new general terms
    - Added new terms for Pyra/Mythra

__4/4/2021__
- Updated to discord.js v12
    - What does this mean? It means the bot is more stable, several bugs were fixed, and just overall optimization. This will also make future updates easier.

__3/15/2021__
- Added hitbox data for Pyra/Mythra (except Mythra specials)
- Added attributes for Pyra/Mythra`

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
