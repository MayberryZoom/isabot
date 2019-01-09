const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

module.exports = {
	name: 'update',
	aliases: ['restart', 'reboot'],
	description: 'Updates and restarts me. Owner only!',
	usage: '',
	arguments: 'None',
	hidden: true,
	async execute(msg) {
		if (!ownerIDs.includes(msg.author.id)) {
			return msg.channel.send('Only the bot owners can use this command!');
		}
		const { err, stdout } = await execAsync('git fetch --all && git reset --hard origin/master');
		if (err) {
			return msg.channel.send(err.message, { code: '', split: { char: '\n' } });
		}
		else {
			await msg.channel.send('Rebooting...');
		}
		process.exit(0);
	}
};
