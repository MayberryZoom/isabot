const changes = `- Improved \`>jab\` __(11/13/19)__
    - Now supports character and move arguments at same time
    - Now supports rage

- Improved \`>help\` __(11/13/19)__
    - Now supports multiple syntax examples
    - Fixed a bug where it was impossible to see help for server specific commands

- Added \`>item\` __(11/14/19)__
    - Shows item for any item in the Smash series
    - Use no argument for a list of items
    - Provide a smash game as an argument for a list of items from that game

- Updated Isabelle USmash in \`>hitbox\` to properly display its hitboxes __(11/14/19)__

- Added \`>tip\` __(11/15/19)__
    - Provides a random bit of smash advice

- Added \`>coin\` __(11/16/19)__
    - Flips a coin, landing on either heads or tails

- Added \`>dice\` __(11/16/19)__
    - Rolls a die
    - Provide a number of sides for it to have

- Added \`>rps\` __(11/16/19)__
    - Play Rock Paper Scissors
    - Provide an option to use

- Added \`>stage\` __(11/17/19)__
    - Shows information about any stage in the Smash series
    - Use no argument for a list of stages
    - Provide a smash game as an argument for a list of stages from that game

- Added \`>report\` __(11/18/19)__
    - Reports a bug with the bot
    - Optionally provide an image to send with report`;

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
