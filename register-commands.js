const { REST } = require('@discordjs/rest');
const { Routes } = require('discord.js');
const { token } = require('./token.json');
const fs = require('fs');

const clientId = '513515391155175424';

let commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
	try {
		console.log('Started refreshing application commands.');

		await rest.put(Routes.applicationCommands(clientId), { body: commands });

		console.log('Successfully reloaded application commands.');
	}
	catch (error) {
		console.error(error);
	}
})();