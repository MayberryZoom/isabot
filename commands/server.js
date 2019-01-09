module.exports = {
    name: 'server',
    description: 'Gets an invite link to my Discord server!',
    usage: '',
    arguments: 'None',
    execute(msg, args) {
        msg.channel.send('Join my server!\n' + serverLink);
        sendLog(msg.author.tag + ' got my server link');
    }
};
