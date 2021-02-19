const changes = `__2/19/2021__
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
