const { exec } = require('child_process');
const execAsync = require('util').promisify(exec);

const refresh = (module) => {
    delete require.cache[require.resolve(module)];
    return require(module);
}

module.exports = {
	name: 'update',
	aliases: ['restart', 'reboot', 'reload'],
	description: 'Update bot/reload commands',
	usage: ['<command>'],
	hidden: true,
	ownerOnly: true,
	category: 'owner',
	execute(msg, args) {
		return new Promise(async (resolve, reject) => {
			if (args.length !== 0) {
				if (commandFiles.includes(args[0] + '.js')) {
					client.commands.set(args[0], refresh(`./${args[0]}.js`));
					return msg.channel.send('Reloaded command `' + args[0] + '` successfully.').then(resolve()).catch((e) => reject(e));
				}
				else {
					return msg.channel.send('That is not a valid command!').then(resolve()).catch((e) => reject(e));
				}
			}
			const { err, stdout } = await execAsync('git fetch --all && git reset --hard origin/master');
			if (err) {
				return msg.channel.send(err.message, { code: '', split: { char: '\n' } })
				.then(resolve())
				.catch((e) => reject(e));
			}
			else {
				await msg.channel.send('Rebooting...').then(resolve()).catch((e) => reject(e));
				process.exit(0);
			}
		});
	}
};
