module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('avatar')
        .setDescription('Gets a user\'s avatar')
        .addUserOption(option => 
            option.setName('user')
                .setDescription('The user to fetch the avatar of')),
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            let user = interaction.options.getUser('user');
            if (!user) user = interaction.user;

            const embed = new Discord.EmbedBuilder()
                .setTitle(user.username + "'s avatar")
                .setImage(user.avatarURL())
                .setColor(isabotColor)
                .setTimestamp();
            
            return interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        })
    }
};
