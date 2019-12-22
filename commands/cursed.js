module.exports = {
	name: 'cursed',
	description: 'cursed',
    usage: ['<text>'],
    args: true,
    category: 'fun',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            msg.channel.send('Did you mean:\n' + capitalize(args.join(' '), [' ', '\n', '"', " '", '`', '/', '(', ')', '-', '_', '@', '#', ';', '.', ',', '+', '=', '[', ']', '{', '}', '*', '&', '^', '%', '$', '!', '~', '?', '<', '>', '|', '¿', '\\', '​']))
			.then(resolve())
			.catch((e) => reject(e));
        });
    }
};
