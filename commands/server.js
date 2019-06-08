module.exports = {
    name: 'server',
    description: 'Shows information about the current server.',
    dmDisabled: 1,
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const g = msg.guild;
            const createTime = g.createdAt;
            const min = createTime.getMinutes().toString().length === 1 ? '0' + createTime.getMinutes() : createTime.getMinutes();
            const sec = createTime.getSeconds().toString().length === 1 ? '0' + createTime.getSeconds() : createTime.getSeconds();
            const owner = await g.fetchMember(g.ownerID);
            const embed = new Discord.RichEmbed()
                .setTitle(g.name + ' (' + g.id + ')')
                .setColor(color)
                .setThumbnail(g.iconURL)
                .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST')
                .addField('Owner', owner.user.tag)
                .addField('Members', g.memberCount, true)
                .addField('Channels', g.channels.size, true)
                .addField('Roles', g.roles.size, true);
            msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got ' + msg.guild.name + '\'s info'))
            .catch((e) => reject(e));
        });
    }
};
