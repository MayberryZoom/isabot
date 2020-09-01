const changes = `- \`>render\` now allows you to see alternate costumes __(9/1/2020)__

- Updated \`>hitbox\` __(9/1/2020)__
    - Significantly reduced the file size of character data
    - Added some missing multi-part/angled normals and fixed bugged ones
    - Added many more aliases
    - Added Incineroar's specials
    - Mr. Game and Watch and Mii Gunner actually work now
    - Other optimizations

- Updated \`>stat\` __(9/1/2020)__
    - Optimized slightly
    - Fixed a bug where some multiple word aliases would not work

- Added attributes for DLC characters (thanks Lath!) __(8/31/2020)__`;

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
