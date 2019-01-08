module.exports = {
    // requires
    Discord: require('discord.js'),
    Client: require('discord.js'),
    RichEmbed: require('discord.js'),
    config: require('./config.json'),
    def: require('./terms.json'),
    prefix: require('./config.json'),
    client: new Discord.Client(),
    fs: require('fs'),
    datatable: require('./movedata.json'),

    // constants
    ownerIDs: ['419688076076515328', '174758404571529216'],
    zeroWidthSpace: '​',

    // functions
    sendLog: function sendLog(toSend) {
        client.channels.get('520039319260495891').send(toSend);
    },
    rolePerms: function roleEval(roleID, message = msg) {
        message.channel.send('```Role - ' + msg.guild.roles.get(roleID).name + '\n\n' + (new Discord.Permissions(msg.guild.roles.get(roleID).permissions).toArray()).join("\n") + '```');
    },
    guildList: function guildList(message = msg) {
        const guildArr = client.guilds.map(g => g.id + ': ' + g.name);
        message.channel.send('```Guild List\n\n' + guildArr.join("\n") + '```');
    },
    sleep: function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
};
