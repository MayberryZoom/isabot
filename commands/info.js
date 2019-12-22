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
            let g = await client.guilds.get('513806689787445261').fetchMembers();
            let embed = new Discord.RichEmbed()
                .setTitle('Info about me!')
                .setThumbnail(client.user.avatarURL)
                .addField('Guilds', client.guilds.size, true)
                .addField('Birthday', client.user.createdAt.toUTCString(), true)
                .addField('Uptime', uptime(), true)
                .addField('Current memory usage', Math.floor(process.memoryUsage().heapUsed / 1024 / 1024 * 100) / 100 + ' MB', true)
                .setColor(isabotColor)
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL);;
            return msg.channel.send(embed).then(resolve()).catch(e => reject(e));
        });
    }
};
