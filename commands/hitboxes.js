module.exports = {
    name: 'hitboxes',
    description: 'Gets the Ice Climbers\' hitboxes.',
    dmDisabled: 2,
    guilds: ['456665686966796299'],
    category: 'smash',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('https://youtu.be/rjf-8i44DgY').then(resolve()).catch(e => reject(e));
        })
    }
};
