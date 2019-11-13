module.exports = {
    name: 'purge',
    aliases: ['p', 'delete'],
    description: 'Purges a certain amount of messages. Requires the manage messages permission.',
    args: true,
    usage: ['<limit>'],
    dmDisabled: 1,
    category: 'mod',
/*    botPermissions: ['MANAGE_MESSAGES'],
    userPermissions: ['MANAGE_MESSAGES'],*/
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const me = await msg.guild.fetchMember(client.user.id).catch((e) => reject(e));
            if (!msg.channel.permissionsFor(me).has('MANAGE_MESSAGES')) return msg.channel.send('I don\'t have the `MANAGE_MESSAGES` permission!').then(resolve()).catch((e) => reject(e));

            const user = await msg.guild.fetchMember(msg.author.id).catch((e) => reject(e));
            if (msg.channel.permissionsFor(user).has('MANAGE_MESSAGES')) {
                const amount = parseInt(args[0]);
                if (isNaN(amount)) msg.channel.send('Please enter a number!').then(resolve()).catch((e) => reject(e));
                else if (amount < 1 || amount > 100) {
                    msg.channel.send('Please enter an integer between the limit! (1 - 100)')
                    .then(resolve())
                    .catch((e) => reject(e));
                }
                else if (amount === 1) {
                    msg.channel.bulkDelete(2, true)
                    .then(resolve(msg.author.tag + ' purged 1 message in ' + msg.guild.name + '.'))
                    .catch((e) => reject(e));
                }
                else {
                    await msg.delete()
                    msg.channel.bulkDelete(args[0], true)
                    .then(resolve(msg.author.tag + ' purged ' + args[0] + ' messages in ' + msg.guild.name + '.'))
                    .catch((e) => reject(e));
                }
            }
            else {
                msg.channel.send('You must have the `MANAGE_MESSAGES` permission to use this command!')
                .then(resolve(msg.author.tag + ' tried to purge ' + args[0] + ' messages but failed in ' + msg.guild.name))
                .catch((e) => reject(e));
            }
        });
    }
};
