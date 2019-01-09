module.exports = {
    name: 'invite',
    description: 'Gets the link to invite me!',
    arguments: 'None',
    execute(msg, args) {
        msg.channel.send('Invite me!\nhttps://discordapp.com/oauth2/authorize?&client_id=513515391155175424&scope=bot&permissions=67497025')
        sendLog(msg.author.tag + ' got my invite link!');
    }
};
