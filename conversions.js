module.exports = {
    userFromMention: (mention, msg) => {
        const matches = mention.match(/^<@!?(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.members.get(id).user;
        }
        else { return null; }
    },

    roleFromMention: (mention, msg) => {
        const matches = mention.match(/^<@&(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.roles.get(id);
        }
        else { return null; }
    },
    
    channelFromMention: (mention, msg) => {
        const matches = mention.match(/^<#(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.channels.get(id);
        }
        else { return null; }
    },

    userToMember: (u, msg) => {
        return new Promise(async (resolve) => {
            await msg.guild.fetchMembers();
            resolve(msg.guild.members.get(u.id));
        });
    },

    parseUser: (msg, string) => {
        return new Promise(async (resolve) => {
            const conversions = require('./conversions.js');
            await msg.guild.fetchMembers();
    
            let user;
            if (!string) {
                user = msg.author;
            }
            else if (msg.mentions.users.array().length !== 0) {
                user = conversions.userFromMention(string, msg);
            }
            else if (!isNaN(parseInt(string))) {
                user = msg.guild.members.get(string).user;
            }
            else {
                string = string.toLowerCase();
                user = msg.guild.members.find(m => m.user.username.toLowerCase() === string || m.user.tag.toLowerCase() === string).user;
            }
            resolve(user);
        });
    },

    parseChannel: (msg, string) => {
        return new Promise(async (resolve) => {
            const conversions = require('./conversions.js');

            let c;
            if (!string) {
                c = msg.channel;
            }
            else if (msg.mentions.channels.array().length !== 0) {
                c = conversions.channelFromMention(string, msg);
            }
            else if (!isNaN(parseInt(string))) {
                c = msg.guild.channels.get(string);
            }
            else {
                string = string.toLowerCase();
                c = msg.guild.channels.find(c => c.name === string || c.name.split('-').join(' ') === string);
            }
            resolve(c);
        });
    },

    parseEmoji: (client, string) => {
        return new Promise(async (resolve) => {
            const matches = string.match(/^<(a)?:(\w+):(\d+)>$/);
            if (matches) {
                let e = client.emojis.get(matches[3]);
                if (!e) e = {
                    animated: matches[1] ? true : false,
                    client: client,
                    id: matches[3],
                    name: matches[2],
                };
                e.url = `https://cdn.discordapp.com/emojis/${e.id}${e.animated ? '.gif' : '.png'}`
                resolve(e);
            }
            else resolve(null);
        });
    }
}
