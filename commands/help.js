module.exports = {
    name: 'help',
	description: 'DMs the help message! If you provide a command as an argument, it will show you an in-depth description of it.',
	aliases: ['commands'],
	usage: '<command>',
	arguments: 'Any command',
    execute(msg, args) {
		const commandName = args.join(' ');

		const { commands } = msg.client;
		const commandList = commands.filter(command => !command.hidden);
		const commandNames = commandList.map(command => command.name);

        if (!args.length) {
			const toSend = commandList.map(command => '``' + command.name + '`` - ' + command.description);
			return msg.author.send('List of commands:\n\n' + toSend.join('\n'), { split: true })
			.then(() => {
				if (msg.channel.type === 'dm') {
					sendLog('Sent a DM to ' + msg.author.tag + ' with a list of commands from their DMs');
					return;
				}
				sendLog('Sent a DM to ' + msg.author.tag + ' with a list of commands from ' + msg.guild.name);
			})
			.catch(error => {
				sendLog(`Could not send help DM to ${msg.author.tag}.\n`, error);
				msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
			});
		}
		else if (commandNames.includes(commandName)) {
			const { prefix } = require('../config.json');
			const embed = new Discord.RichEmbed() .setTitle('>' + commandName) .setColor('0xCF2BCF') .addField('Description', commandList.get(commandName).description) .addField('Usage', '>' + commandName + ' ' + commandList.get(commandName).usage) .addField('Valid arguments', commandList.get(commandName).arguments);
			sendMsg(embed);
			if (msg.channel.type === 'dm') {
                sendLog(msg.author.tag + ' got help for \'' + commandName + '\' in their DMs');
                return;
            }
			sendLog(msg.author.tag + ' got help for \'' + commandName + '\' in ' + msg.guild.name);
		}
		else { sendMsg('That\'s not a command!'); }
    }
};
