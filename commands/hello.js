module.exports = {
    name: 'hello',
    aliases: ['hey', 'greetings', 'hi', 'wassup', 'heyo', 'henlo', 'hiya', 'hoi', 'hewwo', 'oi', 'sup', 'yo', 'hola', 'whats', 'salut', 'ciao', 'salutations', 'bonjour'],
    description: 'Makes me say "Hey there!"',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('Hey there!').then(resolve()).catch(e => reject(e));
        })
    }
};
