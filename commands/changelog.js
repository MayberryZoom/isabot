const changes = `- Behind the scenes improvements

- Improved \`>hitbox\`
    - Ignores spaces, dashes, underscores, etc.
    - Now case insensitive
    - Added Greninja

- Improved \`>define\`
    - Ignores spaces, dashes, underscores, etc.
    - Has alias support
    - Added/fixed some terms

- Improved \`>stat\`
    - Added the rest of the characters!
    - Has a thumbnail showing the character's render
    - Characters now have aliases

- Added \`>jab\`
    - Calculates a followup for Isabelle's jab
    - When provided with a move, shows when it is true on Mario and describes it briefly
    - When provided with a character, shows when the most common followups are true on that character`;

module.exports = {
    name: 'changelog',
    aliases: ['changes'],
    description: 'List of my recent changes!',
    dmDisabled: 2,
    guilds: ['456665686966796299'],
    category: 'info',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send(changes).then(resolve()).catch(e => reject(e));
        })
    }
};
