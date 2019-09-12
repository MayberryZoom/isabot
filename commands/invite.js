module.exports = {
    name: 'invite',
    aliases: ['join'],
    description: 'Gets the link to invite me!',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send('Invite me to your server!\n<https://discordapp.com/oauth2/authorize?&client_id=513515391155175424&scope=bot&permissions=67497025>\nJoin my server!\n' + serverLink + '!')
            .then(resolve(msg.author.tag + ' got my invite link!'))
            .catch(e => reject(e));
        })
    }
};
