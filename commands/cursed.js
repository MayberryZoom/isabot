const cursed = (text, split) => {
    let newText = text;
    split.forEach(x => newText = newText.split(x).map(y => y.charAt(0).toUpperCase() + y.substring(1)).join(x));
    return newText;
}

module.exports = {
	name: 'cursed',
	description: 'cursed',
    usage: '<text>',
    args: true,
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            msg.channel.send('Did you mean:\n' + cursed(args.join(' '), [' ', '\n', '"', "'", '`', '/', '(', ')', '-', '_', '@', '#', ';', '.', ',', '+', '=', '[', ']', '{', '}', '*', '&', '^', '%', '$', '!', '~', '?', '<', '>', '|', '¿', '\\', '​']))
			.then(resolve())
			.catch((e) => reject(e));
        });
    }
};
