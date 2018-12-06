module.exports = {
    // requires
    Discord: require('discord.js'),
    Client: require('discord.js'),
    RichEmbed: require('discord.js'),
    logger: require('winston'),
    config: require('./config.json'),
    def: require('./terms.json'),
    prefix: require('./config.json'),
    client: new Discord.Client(),
    fs: require('fs'),
    fetch: require('node-fetch'),

    // constants
    ownerIDs: ['419688076076515328', '174758404571529216'],

    // functions
    sendMsg: function sendMsg(toSend) {
        msg.channel.send(toSend);
    },
    codeMsg: function codeMsg(toSend) {
        sendMsg('```' + toSend + '```');
    },
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
        for(let i = 0; i < num; i++) { sendMsg(toSend); }
        return;
    },
    roleEval: function roleEval(roleID) {
        sendMsg("__Role - " + msg.guild.roles.get(roleID).name + "__");
        sendMsg((new Discord.Permissions(msg.guild.roles.get(roleID).permissions).toArray()).join(", "));
    },
    guildList: function guildList() {
        const guildArr = client.guilds.map(g => g.id + ': ' + g.name);
        codeMsg('Guild List\n\n' + guildArr.join("\n"));
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