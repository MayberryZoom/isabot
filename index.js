Discord = require('discord.js');
fs = require('fs');
global.client = new Discord.Client({
	messageCacheMaxSize: 1,
	disabledEvents: [
		'TYPING_START',
		'GUILD_MEMBER_UPDATE',
		'MESSAGE_REACTION_ADD',
		'GUILD_MEMBER_ADD',
		'GUILD_MEMBER_REMOVE'
	],
	disableEveryone: true
});

const { prefix } = require('./config.json');
const globals = require('./globals.js');
for (const [k, v] of Object.entries(globals)) global[k] = v;

const { token } = require('./token.json');

client.commands = new Discord.Collection();
global.commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', async msg => {
	if (!msg.content.startsWith(prefix || client.user.toString()) || msg.author.bot) return;

	// variables
	const args = msg.content.startsWith(client.user.toString()) ? msg.content.slice(client.user.toString().length).split(/ +/) : msg.content.slice(prefix.length).split(/ +/);
	if (args[0] === '') args.shift();
	const commandName = args.shift().toLowerCase();

	// commands
	const command = client.commands.get(commandName)
	        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) return;

	if (command.ownerOnly && !owners.includes(msg.author.id)) return msg.channel.send('Only the bot owners can use this command!');

	if (command.dmDisabled && msg.channel.type === 'dm') {
		if (command.dmDisabled === 1) {
			return msg.reply('that command is not available inside DMs!');
		}
		else if (command.dmDisabled === 2) {
			return;
		}
	}

	if(command.guilds) {
		if (!command.guilds.includes(msg.guild.id) && !owners.includes(msg.author.id)) {
			return;
		}
	}

	if (command.args && !args.length) {
		let reply = 'Please provide an argument!';
		if (command.usage) reply += `\nThe proper usage is \`\`\`${prefix}${command.name} ${command.usage[0]}\`\`\``;

		return msg.channel.send(reply);
	}

	command.execute(msg, args)
	.then(log => { log ? sendLog(log) : sendLog(`${msg.author.tag} used \`${command.name}\`${msg.channel.type === 'dm' ? '' : ` in ${msg.guild.name}`}.`); })
	.catch(error => {
		sendLog(
			'<@&513807019048828929> there was an error!\n\nCommand:```' + command.name +
			'```\nError' + (error.lineNumber ? ` (at line ${error.lineNumber}')` : '') + ':```' + error.message + '```');
		console.error(error);
		msg.reply('there was an error trying to execute that command! You can report it here: ' + serverLink);
	});
});

client.on('guildCreate', guild => {
	sendLog('<@&513807019048828929> I joined ' + guild.name);
});

client.once('ready', () => {
    if (client.user.id === '513515391155175424') sendLog('<@&513807019048828929> Ready!');
	client.user.setActivity('"' + prefix + '" is my prefix!')
	setInterval(() => {
		for (const g of client.guilds.values()) {
			g.members.clear();
			g.presences.clear();
		}
	}, 1000 * 60);
});

client.login(token);
