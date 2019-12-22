const clean = text => {
	if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else return text;
}
const roleEval = (guild, roleID) => {
	return 'Role - ' + guild.roles.get(roleID).name + '\n\n' + (new Discord.Permissions(guild.roles.get(roleID).permissions).toArray()).join("\n");
}
const guildList = () => {
	return 'Guild List\n\n' + client.guilds.map(g => g.id + ': ' + g.name).join("\n");
}
const { inspect } = require('util');
const { prefix } = require('../config.json');

module.exports = {
	name: 'eval',
	aliases: ['evalr'],
	description: 'pls fix me',
	hidden: true,
	ownerOnly: true,
	category: 'owner',
	async execute(msg, args) {
		try {
			let evaled = await new Promise(resolve => resolve(eval(args.join(' '))));
			//let evaled = await new Promise(resolve => resolve(eval('(async () => {' + args.join(' ') + ' })()')));
			if (msg.content.toLowerCase().startsWith(prefix + 'evalr')) return;

			if (typeof evaled !== "string")
			evaled = inspect(evaled);

			msg.channel.send(evaled, {
				split: true,
				code: 'js',
			});
			return sendLog( msg.channel.type === 'dm' ?
				msg.author.tag + ' evaled \'' + args.join(' ') + '\' in their DMs':
				msg.author.tag + ' evaled \'' + args.join(' ') + '\' in ' + msg.guild.name);
		} catch (err) {
			msg.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
	}
};
