module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('hello')
        .setDescription('Say hi!'),
    aliases: ['hey', 'greetings', 'hi', 'wassup', 'heyo', 'henlo', 'hiya', 'hoi', 'hewwo', 'oi', 'sup', 'yo', 'hola', 'whats', 'salut', 'ciao', 'salutations', 'bonjour'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('Hey there!').then(resolve()).catch(e => reject(e));
        })
    }
};
