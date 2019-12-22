module.exports = {
    name: 'nuke',
    description: 'the most spammable command',
    hidden: true,
    category: 'fun',
    execute(msg) {
        return new Promise((resolve, reject) => {
            return msg.channel.send('Activating server nuke')
            .then(async (msg) => {
                for (let i = 1; i <= 3; i++) {
                    await sleep(500);
                    msg.edit('Activating server nuke' + '.'.repeat(i));
                }
            })
            .then(resolve(msg.author.tag + ' launched a nuke!'))
            .catch((e) => reject(e));
        });
    }
};
