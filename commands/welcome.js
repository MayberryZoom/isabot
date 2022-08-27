module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('welcome')
        .setDescription('Welcome a user!')
        .setDMPermission(false)
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to welcome')),
    execute(interaction) {
        return new Promise (async (resolve, reject) => {
            let user = interaction.options.getUser('user');
            user = user ? ' ' + user.username : ''

            interaction.reply('Welcome' + user + '! <:isaHeyyy:490255578061602828>').then(resolve()).catch((e) => reject(e));
        });
    }
};
