const changes = `- Added optional argument to \`>source\` that provides the source for a specific command __(11/12/19)__

- Improved \`>jab\` __(11/13/19)__
    - Now supports character and move arguments at same time
    - Now supports rage

- Improved \`>help\` __(11/13/19)__
    - Now supports multiple syntax examples
    - Fixed a bug where it was impossible to see help for server specific commands

- Added \`>item\` __(11/14/19)__
    - Shows item for any item in the Smash series
    - Use no argument for a list of items
    - Provide a smash game as an argument for a list of items from that game`;

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
