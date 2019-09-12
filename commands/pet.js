module.exports = {
    name: 'pet',
    aliases: ['pat', 'headpat'],
    description: 'doggo doesn\'t like pets :c',
    guilds: ['489939754021027841', '513806689787445261'],
    hidden: true,
    dmDisabled: 2,
    category: 'fun',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('Please don\'t pet me! <:isaBadDay:562485951558057984>')
            .then(resolve(msg.author.tag + " pet me (and I didn't like it!)"))
            .catch(e => reject(e));
        })
    }
};
