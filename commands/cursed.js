module.exports = {
	data: new Discord.SlashCommandBuilder()
        .setName('cursed')
        .setDescription('cursed')
        .addStringOption(option => 
            option.setName('text')
                .setDescription('text to curse-ify')
                .setRequired(true)),
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('Did you mean:\n' + capitalize(interaction.options.getString('text'), [' ', '\n', '"', " '", '`', '/', '(', ')', '-', '_', '@', '#', ';', '.', ',', '+', '=', '[', ']', '{', '}', '*', '&', '^', '%', '$', '!', '~', '?', '<', '>', '|', '¿', '\\', '​'])).then(resolve()).catch((e) => reject(e));
        });
    }
};
