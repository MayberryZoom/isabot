const { exec } = require('child_process');
const { promisify } = require('util');
const execAsync = promisify(exec);

module.exports = {
	name: 'update',
	aliases: ['restart', 'reboot'],
	description: 'Updates and restarts me. Owner only!',
	usage: '',
	hidden: true,
	ownerOnly: true,
	execute(msg) {
		return new Promise(async (resolve, reject) => {
			const { err, stdout } = await execAsync('git fetch --all && git reset --hard origin/master');
			if (err) {
				return msg.channel.send(err.message, { code: '', split: { char: '\n' } })
				.then(resolve())
				.catch((e) => reject(e));
			}
			else {
				await msg.channel.send('Rebooting...')
				.then(resolve())
				.catch((e) => reject(e));
				process.exit(0);
			}
		});
	}
};
