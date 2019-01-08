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
    userFromMention: function userFromMention(mention) {
        const matches = mention.match(/^<@!?(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.members.get(id).user;
        }
        else { return null; }
    },
    roleFromMention: function roleFromMention(mention) {
        const matches = mention.match(/^<@&(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.roles.get(id);
        }
        else { return null; }
    },
    channelFromMention: function channelFromMention(mention) {
        const matches = mention.match(/^<#(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.channels.get(id);
        }
        else { return null; }
    },
    userToMember: function userToMember(usr) {
        return msg.guild.members.get(usr.id);
    },
    loop: function loop(toSend, num) {
        for(let i = 0; i < num; i++) {
            msg.channel.send(toSend);
        }
        return;
    },
    rolePerms: function roleEval(roleID) {
        msg.channel.send('```Role - ' + msg.guild.roles.get(roleID).name + '\n\n' + (new Discord.Permissions(msg.guild.roles.get(roleID).permissions).toArray()).join("\n") + '```');
    },
    guildList: function guildList() {
        const guildArr = client.guilds.map(g => g.id + ': ' + g.name);
        msg.channel.send('```Guild List\n\n' + guildArr.join("\n") + '```');
    },
    checkOwner: function checkOwner() {
        if (ownerIDs.includes(msg.author.id)) { return true; } else { return false; }
    },
    sleep: function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
};
