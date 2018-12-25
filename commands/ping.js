module.exports = {
    name: 'ping',
    description: 'Checks my ping! Hopefully it\'s not too bad...',
    usage: '',
    arguments: 'None',
    execute(msg, args) {
        msg.channel.send('Pinging...')
		.then((msg) => {
			msg.edit('Ping: ' + (Date.now() - msg.createdTimestamp + 'ms'))
		});
		sendLog(msg.author.tag + ' used >ping. The ping was ' + (Date.now() - msg.createdTimestamp + 'ms.'));
    }
};
