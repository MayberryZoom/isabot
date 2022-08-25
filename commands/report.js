const reportChannel = '646067062669836349';

const blacklist = [];

module.exports = {
    name: 'report',
    aliases: ['issue', 'bug'],
    description: 'Report a bug or issue with the bot. If an image is attached, it will be sent with the report. Please understand that if you abuse this command (spam, inappropriate reports, etc) you may be blacklisted.',
    usage: ['<report message>'],
    category: 'utility',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (blacklist.includes(msg.author.id)) return msg.channel.send('You have been blacklisted from reporting issues due to spam or inappropriate reports.')
            if (!args.length) return msg.channel.send('Please provide a report message!');

            const embed = new Discord.EmbedBuilder()
                .setAuthor({ name: 'Reported by ' + msg.author.tag + ' (' + msg.author.id + ')', iconURL: msg.author.avatarURL() })
                .setDescription(args.join(' '))
                .setColor(isabotColor)
                .setTimestamp();
            
            if (msg.attachments.map(x => x.url).length > 0) embed.setImage(msg.attachments.map(x => x.url)[0]);

            return client.channels.cache.get(reportChannel).send({ embeds: [embed] }).then(msg.channel.send('Report sent successfully!')).then(resolve()).catch(e => reject(e));
        })
    }
};
