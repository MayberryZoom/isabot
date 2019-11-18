const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	aliases: ['h'],
	description: 'DMs the help message! If you provide a command as an argument, it will show you an in-depth description of it.',
	aliases: ['commands', 'h'],
	usage: ['<command>'],
	category: 'info',
    execute(msg, args) {
		return new Promise((resolve, reject) => {
			const commands = owners.includes(msg.author.id) ? client.commands : client.commands
				.filter(c => !(c.hidden && !c.guilds))
				.filter(c => msg.channel.type !== 'dm' ? c.guilds ? c.guilds.includes(msg.guild.id) : true : !c.guilds );
			commands.forEach(c => { if (!c.category) c.category = 'misc' });

			if (!args.length) {
				let categories = [];
				commands.map(c => { if (!categories.includes(c.category)) categories.push(c.category) });
				let mapped = categories.map(x => `__${x.charAt(0).toUpperCase() + x.substring(1)} Commands__\n${commands.filter(c => c.category === x).map(c => c.name + ' - ' + (c.detailedDescription ? 'Use `' + prefix + 'help ' + c.name + '` for more information.' : c.description) + (msg.channel.type !== 'dm' && c.guilds && !owners.includes(msg.author.id) ? ` (Exclusive to ${msg.guild.name}!)` : '') + ((c.hidden && owners.includes(msg.author.id)) ? ' (🔒)' : '')).sort().join('\n')}`);
				return msg.author.send('List of commands:\n\n' + mapped.sort().join('\n\n'), { split: true })
				.then(() => { if (msg.channel.type !== 'dm') msg.channel.send("I've sent you a list of my commands! <:isaHeyyy:490255578061602828>") })
				.then(resolve('Sent ' + msg.author.tag + ' a list of commands'))
				.catch((e) => reject(e))
			}

			const cmdName = args.join(' ').toLowerCase();
			const command = commands.get(cmdName) || commands.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

			if (command) {
				const embed = new Discord.RichEmbed()
					.setTitle(prefix + command.name + (msg.channel.type !== 'dm' && command.guilds && !owners.includes(msg.author.id) ? ` (Exclusive to ${msg.guild.name}!)` : '') + ((command.hidden && owners.includes(msg.author.id)) ? ' (🔒)' : ''))
					.setColor(isabotColor)
					.addField('Description', command.detailedDescription ? command.detailedDescription : command.description)
					.addField('Category', command.category.charAt(0).toUpperCase() + command.category.substring(1), true)
					.addField('Syntax', command.usage ? command.usage.map(u => '`' + prefix + command.name + ' ' + u + '`').join('\n') : '`' + prefix + command.name + '`', true)
					.setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
					.setTimestamp();
				if (command.aliases) embed.addField('Aliases', command.aliases.join(', '), true);
				if (command.cooldown) embed.addField('Cooldown', command.cooldown + ' seconds', true);
				if (owners.includes(msg.author.id) && command.guilds) embed.addField('Guilds', command.guilds.join(', '), true);
				return msg.channel.send(embed)
				.then(resolve(msg.author.tag + ' got help for `' + command.name + '`'))
				.catch((e) => reject(e));
			}
			else {
				return msg.channel.send('That\'s not a command!').then(resolve()).catch((e) => reject(e));
			}
		});
    }
};
