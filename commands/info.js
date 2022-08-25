const uptime = () => {
    const days = Math.floor(client.uptime / 86400000) * 86400000;
    const hours = Math.floor((client.uptime - days) / 3600000) * 3600000;
    const minutes = Math.floor((client.uptime - days - hours) / 60000) * 60000;
    const seconds = Math.floor((client.uptime - days - hours - minutes) / 1000) * 1000;
    const milliseconds = Math.floor(client.uptime - days - hours - minutes - seconds);

    return `${days / 86400000}d ${hours / 3600000}h ${minutes / 60000}m ${seconds / 1000}s ${milliseconds}ms`
}



module.exports = {
    name: 'info',
    aliases: ['botinfo', 'botstats'],
    description: 'Gets info about me!',
    category: 'info',
    execute(msg) {
        return new Promise (async (resolve, reject) => {
            let embed = new Discord.EmbedBuilder()
                .setTitle('Info about me!')
                .setThumbnail(client.user.avatarURL())
                .addFields(
                	{ name: 'Guilds', value: client.guilds.cache.size.toString(), inline: true },
                	{ name: 'Birthday', value: client.user.createdAt.toUTCString(), inline: true },
                	{ name: 'Uptime', value: uptime(), inline: true },
                	{ name: 'Current memory usage', value: Math.floor(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100 + ' MB', inline: true}
                )
                .setColor(isabotColor)
                .setTimestamp();

            return msg.channel.send({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        });
    }
};
