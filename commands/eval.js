module.exports = {
	name: 'eval',
	description: '',
	hidden: true,
	execute(msg, args) {
		const clean = text => {
		if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
			return text;
		}
		
		if(!checkOwner()) { msg.channel.send('Only the bot owners can use this command!'); sendLog(msg.author.tag + ' tried to use eval but failed in ' + msg.guild.name); return; }
		try {
			const code = args.join(' ');
			let evaled = eval(code);
			
			if (typeof evaled !== "string")
			evaled = require("util").inspect(evaled);

			console.log(clean(evaled), {code:"xl"});
			if (msg.channel.type === 'dm') {
                sendLog(msg.author.tag + ' evaled \'' + args.join(' ') + '\' in their DMs');
                return;
            }
			sendLog(msg.author.tag + ' evaled \'' + args.join(' ') + '\' in ' + msg.guild.name);
		} catch (err) {
			sendMsg(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}
};