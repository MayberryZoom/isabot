const cursed = text => {
    return text.split(' ' || '\n').map(y => y.charAt(0).toUpperCase() + y.substring(1)).join(' ');
}

module.exports = {
	name: 'cursed',
	description: 'cursed',
	usage: '<text>',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            msg.channel.send('Did you mean:\n' + cursed(args.join(' ')))
			.then(resolve())
			.catch((e) => reject(e));
        });
    }
};
