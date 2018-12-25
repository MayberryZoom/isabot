module.exports = {
    name: 'hello',
    description: 'Makes me say "Hey there!"',
    aliases: ['hey', 'greetings', 'hi', 'what\'s', 'wassup', 'heyo', 'henlo', 'hiya', 'hoi', 'hewwo', 'oi', 'sup', 'yo', 'hola', 'whats', 'salut', 'ciao', 'salutations'],
    usage: '',
    arguments: 'None',
    execute(msg, args) {
        msg.channel.send('Hey there!');
        if (msg.channel.type === 'dm') {
            sendLog(msg.author.tag + ' said hello in their DMs');
            return;
        }
        sendLog(msg.author.tag + ' said hello in ' + msg.guild.name);
    }
};
