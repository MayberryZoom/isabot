module.exports = {
    name: 'coin',
    aliases: ['flip', 'coin flip'],
    description: 'Flips a coin!',
    category: 'fun',
    execute(msg) {
        return new Promise ((resolve, reject) => {
            return msg.channel.send('Flipping a coin...')
                .then(async (m) => { await sleep(1000); m.edit('It landed on ' + (Math.round(Math.random()) === 0 ? 'heads' : 'tails') + '! <a:isaCheer:490594617767755776>') })
                .then(resolve()).catch(e => reject(e));
        });
    }
};
