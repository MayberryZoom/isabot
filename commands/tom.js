module.exports = {
    name: 'tom',
    description: 'tom',
    hidden: true,
    dmDisabled: 2,
    guilds: ['456665686966796299'],
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('This is my tom. There are many like it, but this one is mine.\nMy tom is my best friend. It is my life. I must master it as I must master my life.\nWithout me, my tom is useless. Without my tom, I am useless. I must fire my tom true. I must shoot straighter than my enemy who is trying to kill me. I must shoot him before he shoots me. I will ...\nBefore God, I swear this creed. My tom and myself are the defenders of my country. We are the masters of our enemy. We are the saviors of my life.\nSo be it, until there is no enemy, but peace. Amen.')
            .then(resolve()).catch(e => reject(e));
        })
    }
};
