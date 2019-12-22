module.exports = {
    name: 'ping',
    description: 'Checks my ping! Hopefully it\'s not too bad...',
    execute(msg) {
        return new Promise((resolve, reject) => {
            const time = Date.now();
            msg.channel.send('Pinging...')
            .then((m) => {
                m.edit('Ping: ' + (time - msg.createdTimestamp + 'ms'))
            })
            .then(resolve(msg.author.tag + ' got my ping. It was ' + (time - msg.createdTimestamp + 'ms.')))
            .catch((e) => reject(e));
        });
    }
};
