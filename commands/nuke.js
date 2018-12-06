module.exports = {
    name: 'nuke',
    description: '',
    hidden: true,
    execute(msg, args) {
        msg.channel.send('Activating server nuke')
        .then(async (msg) => {
            for (let i = 1; i < 4; i++) {
                msg.edit('Activating server nuke' + '.'.repeat(i));
                await sleep(500);
            }
        });
    }
};