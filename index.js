Discord = require('discord.js');
fs = require('fs');
global.client = new Discord.Client({
	messageCacheMaxSize: 1,
	intents: [
		Discord.GatewayIntentBits.Guilds,
		Discord.GatewayIntentBits.GuildMessages,
		Discord.GatewayIntentBits.GuildMembers,
		Discord.GatewayIntentBits.GuildPresences,
		Discord.GatewayIntentBits.DirectMessages,
	],
	partials: [
		Discord.Partials.Channel
	],
	allowedMentions: { parse: ['users'], repliedUser: true }
});

const globals = require('./globals.js');
for (const [k, v] of Object.entries(globals)) global[k] = v;

const { token } = require('./token.json');

client.commands = new Discord.Collection();
global.commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

// Interaction handler
client.on('interactionCreate', async interaction => {
	// Slash commands
	if (interaction.isChatInputCommand()) {
		// Get local equivalent
		const command = client.commands.get(interaction.commandName);

		// Restrict owner only commands
		if (command.ownerOnly && !owners.includes(interaction.user.id)) return interaction.reply('Only the bot owners can use this command!');

		// Execute command
		command.execute(interaction)
		.then(log => { log ? sendLog(log) : sendLog(command.data.name + ' was used'); })
		.catch(error => {
			sendLog(
				'<@&513807019048828929> there was an error!\n\nCommand:```' + command.data.name +
				'```\nError' + (error.lineNumber ? ` (at line ${error.lineNumber}')` : '') + ':```' + error.message + '```');
			console.error(error);
			interaction.reply('there was an error trying to execute that command! You can report it here: ' + serverLink);
		});
	}
});

client.once('ready', () => {
    if (client.user.id === '513515391155175424') sendLog('<@&513807019048828929> Ready!');
	setInterval(() => {
		for (const g of client.guilds.cache.values()) {
			g.members.cache.clear();
			g.presences.cache.clear();
		}
	}, 1000 * 60);
});

client.login(token);
