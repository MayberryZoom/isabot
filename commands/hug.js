module.exports = {
    name: 'hug',
    aliases: ['embrace', 'huggle', 'huggles'],
    description: 'Hug the doggo!',
    hidden: true,
    dmDisabled: 2,
    guilds: ['489939754021027841'],
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('*hugs* <:isaGlee:513917768568143882>')
            .then(resolve(msg.author.tag + ' hugged me in ' + msg.guild.name))
            .catch(e => reject(e));
        })
    }
};
