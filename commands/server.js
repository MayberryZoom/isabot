module.exports = {
    name: 'server',
    description: 'Gets an invite link to my Discord server!',
    usage: '',
    arguments: 'None',
    execute(msg, args) {
        msg.channel.send('Join my server!\nhttps://discord.gg/YyYBRfF');
        if (msg.channel.type === 'dm') {
			sendLog(msg.author.tag + ' got my server link in their DMs');
			return;
		}
        sendLog(msg.author.tag + ' got my server link in ' + msg.guild.name);
    }
};
