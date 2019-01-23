module.exports = {
	name: 'eval',
	aliases: ['evalr'],
	description: '',
	hidden: true,
	execute(msg, args) {
		const clean = text => {
		if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		else
			return text;
		}
		function roleEval(roleID) {
			return 'Role - ' + msg.guild.roles.get(roleID).name + '\n\n' + (new Discord.Permissions(msg.guild.roles.get(roleID).permissions).toArray()).join("\n");
		}
		function guildList() {
			const guildArr = client.guilds.map(g => g.id + ': ' + g.name);
			return 'Guild List\n\n' + guildArr.join("\n");
		}
		
		if(!ownerIDs.includes(msg.author.id)) { msg.channel.send('Only the bot owners can use this command!'); sendLog(msg.author.tag + ' tried to use eval but failed in ' + msg.guild.name); return; }
		try {
			const code = args.join(' ');
			let evaled = eval(code);
			if (msg.content.startsWith('>evalr')) return;

			if (typeof evaled !== "string")
			evaled = require("util").inspect(evaled);

			msg.channel.send('```' + evaled + '```');
			if (msg.channel.type === 'dm') {
                sendLog(msg.author.tag + ' evaled \'' + args.join(' ') + '\' in their DMs');
                return;
            }
			sendLog(msg.author.tag + ' evaled \'' + args.join(' ') + '\' in ' + msg.guild.name);
		} catch (err) {
			msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}
};
