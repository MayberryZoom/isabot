module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('invite')
        .setDescription('Get my invite links!'),
    aliases: ['join'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            interaction.reply('Invite me to your server!\n<https://discordapp.com/oauth2/authorize?&client_id=513515391155175424&scope=bot&permissions=67497025>\nJoin my server!\n' + serverLink).then(resolve()).catch(e => reject(e));
        })
    }
};
