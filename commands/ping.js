module.exports = {
    name: 'ping',
    description: 'Checks my ping! Hopefully it\'s not too bad...',
    usage: '',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const time = Date.now();
            msg.channel.send('Pinging...')
            .then((msg) => {
                msg.edit('Ping: ' + (time - msg.createdTimestamp + 'ms'))
            })
            .then(resolve(msg.author.tag + ' got my ping. It was ' + (time - msg.createdTimestamp + 'ms.')))
            .catch((e) => reject(e));
        });
    }
};
