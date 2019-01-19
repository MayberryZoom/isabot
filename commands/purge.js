module.exports = {
    name: 'purge',
    description: 'Purges a certain amount of messages. Requires the manage messages permission.',
    args: true,
    usage: '<limit>',
    guildOnly: 0,
    arguments: 'An integer between 1 and 100',
    execute(msg, args) {        
		if (msg.channel.type === 'dm') {
			msg.channel.send('That command is not available in DMs.');
			return;
        }

        if (msg.channel.permissionsFor(msg.member).has('MANAGE_MESSAGES')) {
            const amount = parseInt(args[0]);
            if (!args.length) {
                return msg.channel.send('Please provide an argument!');
            }
            else if (typeof(amount) !== 'number') {
                msg.channel.send('Please enter a number!');
            }
            else if (amount < 1 || amount > 100) {
                msg.channel.send('Please enter an integer between the limit! (1 - 100)')
            }
            else if (amount === 1) {
                sendLog(msg.author.tag + ' is purging 1 message in ' + msg.guild.name + '.');
                msg.channel.bulkDelete(2, true);
            }
            else {
                sendLog(msg.author.tag + ' is purging ' + args[0] + ' messages in ' + msg.guild.name + '.');
                msg.delete().then(() => { msg.channel.bulkDelete(args[0], true) });
            }
        }
        /* else if (msg.channel.permissionsFor(msg.guild.me).has('MANAGE_MESSAGES')) {
            message.channel.send('I need the ``MANAGE_MESSAGES`` permission to do that!')
        } */
        else {
            msg.channel.send('You must have the ``MANAGE_MESSAGES`` permission to use this command!');
            sendLog(msg.author.tag + ' tried to purge ' + args[0] + ' messages but failed in ' + msg.guild.name);
        }
    }
};
