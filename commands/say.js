module.exports = {
    name: 'say',
    description: '',
    hidden: true,
    execute(msg, args) {        
        if(!checkOwner()) { sendMsg('Only the bot owners can use this command!'); sendLog(msg.author.tag + ' tried to say something, but failed in ' + msg.guild.name); } else {
            client.channels.get('489939754717151233').send(args.join(" "));
			sendLog(msg.author.tag + ' said ' + args.join(' '));
        }
        if (msg.channel.type === 'dm') {
			sendLog(msg.author.tag + ' tried to say something, but failed in their DMs');
		}
    }
};
