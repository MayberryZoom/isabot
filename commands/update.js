const { exec } = require('child_process');
const execAsync = require('util').promisify(exec);

const refresh = (module) => {
    delete require.cache[require.resolve(module)];
    return require(module);
}

module.exports = {
	data: new Discord.SlashCommandBuilder()
        .setName('update')
        .setDescription('Update bot/reload commands')
		.addStringOption(option =>
			option.setName('command')
			.setDescription('Command to refresh')),
	ownerOnly: true,
	execute(interaction) {
		return new Promise(async (resolve, reject) => {
			let command = interaction.options.getString('command');
			if (command) {
				if (commandFiles.includes(command + '.js')) {
					client.commands.set(command, refresh(`./${command}.js`));
					return interaction.reply('Reloaded command `' + command + '` successfully.').then(resolve()).catch((e) => reject(e));
				}
				else {
					return interaction.reply('That is not a valid command!').then(resolve()).catch((e) => reject(e));
				}
			}
			else {
				const { err, stdout } = await execAsync('git fetch --all && git reset --hard origin/master');
				if (err) {
					return interaction.reply(err.message).then(resolve()).catch((e) => reject(e));
				}
				else {
					await interaction.reply('Rebooting...').then(resolve()).catch((e) => reject(e));
					process.exit(0);
				}
			}
		});
	}
};
