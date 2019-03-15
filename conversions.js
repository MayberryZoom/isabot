module.exports = {
    userFromMention: function (mention, msg) {
        const matches = mention.match(/^<@!?(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.members.get(id).user;
        }
        else { return null; }
    },

    roleFromMention: function (mention, msg) {
        const matches = mention.match(/^<@&(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.roles.get(id);
        }
        else { return null; }
    },
    
    channelFromMention: function (mention, msg) {
        const matches = mention.match(/^<#(\d+)>$/);
        if (matches) {
            const id = matches[1];
            return msg.guild.channels.get(id);
        }
        else { return null; }
    },
    
    stringToEmoji: function (emoji) {
        const matches = emoji.match(/^<a?:(\w+):(\d+)>$/);
        if (matches) {
            const emoji = {
                name: matches[1],
                id: matches[2]
            }
            return emoji;
        }
        else { return null; }
    },

    userToMember: function (usr, msg) {
        return msg.guild.members.get(usr.id);
    }
}
