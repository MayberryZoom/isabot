Discord = require('discord.js');
global.client = new Discord.Client({
	messageCacheMaxSize: 1,
	disabledEvents: [
		'TYPING_START',
		'PRESENCE_UPDATE',
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
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', msg => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;

	// variables
	const args = msg.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	// commands
	const command = client.commands.get(commandName)
	        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) return;

	if (command.dmDisabled && msg.channel.type === 'dm') {
		if (command.dmDisabled === 0) {
			return msg.reply('That command is not available inside DMs!');
		}
		else if (command.dmDisabled === 1) {
			return;
		}
	}

	if(command.guilds) {
		if (!command.guilds.includes(msg.guild.id)) {
			return;
		}
	}

	if (command.args && !args.length) {
		let reply = 'Please provide an argument!';
		if (command.usage) {
			reply += `\nThe proper usage is \`\`\`${prefix}${command.name} ${command.usage}\`\`\``;
		}

        return msg.channel.send(reply);
	}
	try {
		msg.channel.type !== 'dm' ? 
			msg.guild.fetchMember(msg.author.id).then(() => {
				command.execute(msg, args);
			}) :
			command.execute(msg, args);
	}
	catch (error) {
		sendLog('<@&513807019048828929> there was an error!\nCommand:```' + command.name + '\nError:```' + error + '```\n');
		msg.reply('there was an error trying to execute that command! You can report it here: ' + serverLink);
	}
});

client.on('guildCreate', guild => {
	sendLog('<@&513807019048828929> I joined ' + guild.name);
});

client.once('ready', () => {
    sendLog('<@&513807019048828929> Ready!');
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
