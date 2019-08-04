module.exports = {
    name: 'server',
    description: 'Shows information about the current server.',
    dmDisabled: 1,
    execute(msg) {
        return new Promise(async (resolve, reject) => {
            const g = await msg.guild.fetchMembers();
            const embed = new Discord.RichEmbed()
                .setTitle(g.name + ' (' + g.id + ')')
                .setColor(color)
                .setThumbnail(g.iconURL)
                .addField('Created At', g.createdAt.toUTCString())
                .addField('Owner', g.owner.user.tag, true)
                .addField('Channels', `📁 ${g.channels.filter(c => c.type === 'category').size}\u2001⌨ ${g.channels.filter(c => c.type === 'text').size}\u2001🔊 ${g.channels.filter(c => c.type === 'voice').size}`, true)
                .addField('Members', `${g.memberCount} (👤 ${g.members.filter(m => !m.user.bot).size}\u2001🤖 ${g.members.filter(m => m.user.bot).size})`, true)
                .addField('Roles', g.roles.size - 1, true)
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                .setTimestamp();
            return msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got ' + msg.guild.name + '\'s info'))
            .catch((e) => reject(e));
        });
    }
};
