module.exports = {
    name: 'channel',
    description: 'Shows information about a channel. If no  are provided, information will be shown about the current channel.',
    dmDisabled: 1,
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const conversions = require('../conversions.js');

            const c = await conversions.parseChannel(msg, args.join(' '));
            const createTime = c.createdAt;
            const min = createTime.getMinutes().toString().length === 1 ? '0' + createTime.getMinutes() : createTime.getMinutes();
            const sec = createTime.getSeconds().toString().length === 1 ? '0' + createTime.getSeconds() : createTime.getSeconds();
            const embed = new Discord.RichEmbed()
                .setTitle(c.name + ' (' + c.id + ')' + (c.nsfw ? ' ⚠' : ''))
                .setColor('0xCF2BCF')
                .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST')
                .addField('Category', c.parent.name, true)
                .addField('Channel Topic', c.topic ? cTopic = c.topic : cTopic = 'No channel topic', true)
                .addField('Members', c.members.size, true);
            msg.channel.send(embed)
            .then(resolve(msg.author.tag + ' got info for ' + c.name + ' in ' + msg.guild.name))
            .catch((e) => reject(e));
        });
    }
};
