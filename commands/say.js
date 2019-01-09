module.exports = {
    name: 'say',
    description: '',
    hidden: true,
    execute(msg, args) {        
        if(!ownerIDs.includes(msg.author.id)) { msg.channel.send('Only the bot owners can use this command!'); sendLog(msg.author.tag + ' tried to say something, but failed in ' + msg.guild.name); } else {
            client.channels.get('489939754717151233').send(args.join(" "));
			sendLog(msg.author.tag + ' said ' + args.join(' '));
        }
    }
};
