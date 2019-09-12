module.exports = {
    name: 'panda',
    description: 'Gets a cute panda picture',
    hidden: true,
    dmDisabled: 2,
    guilds: ['489939754021027841'],
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('<https://goo.gl/A1XpL9>').then(resolve()).catch(e => reject(e));
        })
    }
};
