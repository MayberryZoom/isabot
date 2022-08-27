module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('source')
        .setDescription('Gets a link to my source code on GitHub!')
        .addStringOption(option =>
            option.setName('command')
                .setDescription('A specific command to grab the link to')),
    execute(interaction) {
        return new Promise((resolve, reject) => {
            let command = interaction.options.getString('command');
            
            if (!command) interaction.reply('I\'m open source, so you can see all my code here!\n<https://github.com/Isachu/isabot>').then(resolve()).catch(e => reject(e));
            else {
                command = client.commands.find(c => c.data.name === command || (c.aliases && c.aliases.includes(command)));

                if (!command) interaction.reply('Please provide a valid command!').then(resolve()).catch(e => reject(e));
                else interaction.reply('Source code for `' + command.data.name + '`:\n<https://github.com/Isachu/isabot/blob/master/commands/' + command.data.name + '.js>').then(resolve()).catch(e => reject(e));
            }
        })
    }
};
