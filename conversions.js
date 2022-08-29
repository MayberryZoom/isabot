module.exports = {
    // converts a user mention to a user object
    memberFromMention: (mention, msg) => {
        return new Promise(async (resolve) => {
            const matches = mention.match(/^<@!?(\d+)>$/);
            if (matches) {
                const id = matches[1];
                resolve(await msg.guild.members.fetch(id));
            }
            else resolve(null);
        });
    },

    // converts a role mention to a role object
    roleFromMention: (mention, msg) => {
        const matches = mention.match(/^<@&(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.roles.catch.get(id);
        }
        else return null;
    },
    
    // converts a channel mention to a channel object
    channelFromMention: (mention, msg) => {
        const matches = mention.match(/^<#(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.channels.cache.get(id);
        }
        else return null;
    },

    // converts a user object to a member object for the given message's guild
    userToMember: (u, msg) => {
        return new Promise(async (resolve) => {
            resolve(await msg.guild.members.fetch(u.id));
        });
    },

    // parses a user object from a string. works for ids, names, and user mention.
    // if string is undefined returns the message's author
    parseUser: (msg, string) => {
        return new Promise(async (resolve) => {
            const conversions = require('./conversions.js');
    
            let user;
            if (!string) {
                user = msg.author;
            }
            else if (msg.mentions.users.size !== 0) {
                user = await conversions.memberFromMention(string, msg);
                user = user.user
            }
            else if (/^\d+$/.test(string)) {
                let x = await msg.guild.members.fetch(string);
                if (x) user = x.user;
            }
            else {
                string = string.toLowerCase();
                let x = await msg.guild.members.fetch().then(members => members.find(m => m.user.username.toLowerCase() === string || m.user.tag.toLowerCase() === string || m.displayName.toLowerCase() === string));
                if (x) user = x.user;
            }
            resolve(user);
        });
    },

    // parses a channel object from a string. works for ids, names, and channel mention.
    // if string is undefined, returns the message's channel
    parseChannel: (msg, string) => {
        return new Promise(async (resolve) => {
            const conversions = require('./conversions.js');

            await msg.guild.members.fetch();

            let c;
            if (!string) {
                c = await msg.channel.fetch();
            }
            else if (msg.mentions.channels.size !== 0) {
                c = conversions.channelFromMention(string, msg);
            }
            else if (!isNaN(parseInt(string))) {
                c = msg.guild.channels.cache.get(string);
            }
            else {
                string = string.toLowerCase();
                c = msg.guild.channels.cache.find(c => c.name === string || c.name.split('-').join(' ') === string);
            }
            resolve(c);
        });
    },

    // parses an emoji object from Emoji.toString(). if the client doesn't have
    // the emoji, tries its best to fill properties and create a pseudo-emoji object
    parseEmoji: (client, string) => {
        return new Promise(async (resolve) => {
            const matches = string.match(/^<(a)?:(\w+):(\d+)>$/);
            if (matches) {
                let e = client.emojis.cache.get(matches[3]);
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
