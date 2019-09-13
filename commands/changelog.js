const changes = `- Optimization and bug fixes
- Added \`>isabelle\` and \`>digby\`
- Added \`>info\`
- Added \`>credits\`
    - Added indicator to \`>user\` for dev/contributor/tester
- Buffed \`>help\`
    - Added command categories
    - Added a few more neat things
- Buffed \`>server\`
    - Added an optional argument to get specific server properties`;

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
