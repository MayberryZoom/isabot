module.exports = {
    name: 'source',
    description: 'Gets the link to my source code on GitHub!',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('I\'m open source, so you can see all my code here!\n<https://github.com/Spexxtacular/isabot>')
            .then(resolve(msg.author.tag + ' got my source code!'))
            .catch(e => reject(e));
        })
    }
};
