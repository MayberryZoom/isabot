const changes = `__10/20/2021__
- Added Sora attributes

__7/17/2021__
- Added terms for sharking and pancaking

__7/16/2021__
- Optimization to parsing algorithm. Now accounts for any permutation of words, meaning it will be easier to find the desired result, and file size is cut down
- Added special hitbox data for Meta Knight, Bayonetta, Byleth, Ice Climbers, Fox, Falco, Wolf, Captain Falcon, Ganondorf, Corrin, Ike, and Jigglypuff
- Added getup attacks, ledge attacks, ledge hangs, and standard ledge grab ranges for every character

__7/13/2021__
- Added special hitbox data for Mario, Luigi, Dr. Mario, Bowser, Mewtwo, and Mega Man

__7/12/2021__
- Added hitbox data for Mythra specials
- Added hitbox data for Kazuya
- Added attributes for Kazuya
- Added Kazuya to \`>render\``

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
