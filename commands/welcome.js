module.exports = {
    name: 'welcome',
    description: 'Welcome!',
    hidden: true,
    guildOnly: 1,
    execute(msg, args) {
        function userFromMention(mention) {
			const matches = mention.match(/^<@!?(\d+)>$/);
			if (matches) {
				const id = matches[1];
				return msg.guild.members.get(id).user;
			}
			else { return null; }
        }
        
        let text = '';
        if (args[0]) {
            if (msg.mentions.users.array().includes(userFromMention(args[0]))) {
                let usr = userFromMention(args[0]);
                text = ' ' + usr.username;
            }
            else {
                let usr = msg.guild.members.find(m => m.user.username === args.join(' '));
                if (usr) text = ' ' + usr.user.username;
            }
        }
        msg.channel.send('Welcome' + text + '! <:isaHeyyy:490255578061602828>')
        sendLog(msg.author.tag + ' welcomed someone!');
        
    }
};
