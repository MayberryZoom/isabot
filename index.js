Discord = require('discord.js');
Client = require('discord.js');
global.client = new Discord.Client({
	messageCacheMaxSize: 1,
	disabledEvents: [
		'TYPING_START',
		'PRESENCE_UPDATE',
		'GUILD_MEMBER_UPDATE',
		'MESSAGE_REACTION_ADD',
		'GUILD_MEMBER_ADD',
		'GUILD_MEMBER_REMOVE'
	]
});
const { prefix } = require('./config.json');
const data = require('./data.js');
for (const [k, v] of Object.entries(data)) global[k] = v;

const { token } = require('./token.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
	global.msg = message;
	if (!message.content.startsWith(prefix) || msg.author.bot) return;

	// variables
	const msg3 = msg.content.toLowerCase()
	const msg2 = msg.content
	const args = msg2.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	// commands
	const command = client.commands.get(commandName)
	        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) return;

	// 0 = respond and ignore
	// 1 = ignore
	if (command.guildOnly && msg.channel.type !== 'text') {
		if (command.guildOnly === 0) {
			return msg.reply('That command is not available inside DMs!');
		}
		else if (command.guildOnly === 1) {
			return;
		}
	}

	if (command.guild && msg.guild.id !== command.guild) {
		return;
	}

	if (command.args && !args.length) {
		let reply = 'Please provide an argument!';
		if (command.usage) {
			reply += '\nThe proper usage is ```${prefix}${command.name} ${command.usage}```';
		}

        return msg.channel.send(reply);
	}
	try {
		command.execute(msg, args);
	}
	catch (error) {
		console.error(error);
		sendLog('<@&513807019048828929> there was an error!');
		msg.reply('there was an error trying to execute that command!');
	}
});

client.on('guildCreate', guild => {
	if (!config.guilds.includes(guild.id)) {
		sendLog('Someone tried to add me to ' + guild.name + ', so I left.');
		return guild.leave();
	}
	else { sendLog('I joined ' + guild.name); }
});

client.once('ready', () => {
    sendLog('Ready!');
	client.user.setActivity('"' + prefix + '" is my prefix!')
	setInterval(() => {
		client.presences.clear();
		for (const g of client.guilds.values()) {
			g.members.clear();
			g.presences.clear();
		}
	}, 1000 * 60);
});

client.login(token);
