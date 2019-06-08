const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	aliases: ['h'],
	description: 'DMs the help message! If you provide a command as an argument, it will show you an in-depth description of it.',
	aliases: ['commands', 'h'],
	usage: '<command>',
    execute(msg, args) {
		return new Promise((resolve, reject) => {
			const commandsf = client.commands.filter(c => !c.hidden);
			const cmdName = args.join(' ').toLowerCase();

			if (!args.length) {
				const toSend = commandsf.map(cmd => '``' + cmd.name + '`` - ' + cmd.description);
				return msg.author.send('List of commands:\n\n' + toSend.join('\n'), { split: true })
				.then(msg.channel.send("I've sent you a list of my commands! <:isaHeyyy:490255578061602828>"))
				.then(resolve('Sent ' + msg.author.tag + ' a list of commands'))
				.catch((e) => reject(e))
			}

			const command = commandsf.get(cmdName) || commandsf.find(cmd => cmd.aliases && cmd.aliases.includes(cmdName));

			if (command) {
				const embed = new Discord.RichEmbed()
					.setTitle(prefix + command.name)
					.setColor('0xCF2BCF')
					.addField('Description', command.description)
					.addField('Usage', '`' + prefix + command.name + ' ' + command.usage + '`', true);
				if (command.aliases) embed.addField('Aliases', command.aliases.join(', '), true)
				return msg.channel.send(embed)
				.then(resolve(msg.author.tag + ' got help for `' + command.name + '`'))
				.catch((e) => reject(e));
			}
			else {
				return msg.channel.send('That\'s not a command!')
				.then(resolve())
				.catch((e) => reject(e));
			}
		});
    }
};
