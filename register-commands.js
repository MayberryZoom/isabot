const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token } = require('./token.json');
global.Discord = require('discord.js')
const fs = require('fs');

const clientId = '513515391155175424';

let globalCommands = [];
let guildCommands = {};
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	if (command.data && !command.disabled) {
		if (command.guilds) command.guilds.map(g => guildCommands[g] ? guildCommands[g].push(command.data.toJSON()) : guildCommands[g] = [command.data.toJSON()])
		else globalCommands.push(command.data.toJSON());
	}
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application commands.');

		await rest.put(Routes.applicationCommands(clientId), { body: globalCommands });

		Object.keys(guildCommands).map(g => rest.put(Routes.applicationGuildCommands(clientId, g), { body: guildCommands[g] }));

		console.log('Successfully reloaded application commands.');
	}
	catch (error) {
		console.error(error);
	}
})();
