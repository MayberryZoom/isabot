const calculateBoost = (guild) => {
    const r = guild.roles.find(r => r.name === 'Nitro Booster')
    if (!r) return 0;
    const boosters = r.members.size;
    switch (boosters) {
        case boosters > 50:
            return 3;
        case boosters > 10:
            return 2;
        case boosters > 2:
            return 1;
        default:
            return 0;
    }
}

module.exports = {
    name: 'server',
    description: 'Shows information about the current server. Use with an argument to get a specific property from the server.',
    usage: ['property'],
    dmDisabled: 1,
    category: 'info',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const g = await msg.guild.fetchMembers();
            if (!args[0]) {
                const embed = new Discord.RichEmbed()
                    .setTitle(g.name + ' (' + g.id + ')')
                    .setColor(isabotColor)
                    .setThumbnail(g.iconURL)
                    .addField('Created At', g.createdAt.toUTCString())
                    .addField('Owner', g.owner.user.tag, true)
                    .addField('Channels', `📁 ${g.channels.filter(c => c.type === 'category').size}\u2001⌨ ${g.channels.filter(c => c.type === 'text').size}\u2001🔊 ${g.channels.filter(c => c.type === 'voice').size}`, true)
                    .addField('Members', `${g.memberCount} (👤 ${g.members.filter(m => !m.user.bot).size}\u2001🤖 ${g.members.filter(m => m.user.bot).size})`, true)
                    .addField('Roles', g.roles.size - 1, true)
                    .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL)
                    .setTimestamp();
                return msg.channel.send(embed)
                .then(resolve(msg.author.tag + ' got ' + msg.guild.name + '\'s info'))
                .catch((e) => reject(e));
            }

            const property = args.map(x => x.toLowerCase()).join(' ');
            if (['avatar', 'icon', 'picture', 'pic'].includes(property)) {
                return msg.channel.send(new Discord.RichEmbed()
                    .setTitle(g.name + "'s icon")
                    .setImage(g.iconURL)
                    .setColor(isabotColor)
                    .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL))
                .then(resolve())
                .catch(e => reject(e));
            }
            if (['splash', 'splash image', 'invite image', 'splash picture', 'invite picture', 'splash pic', 'invite pic'].includes(property)) {
                const splash = g.splashURL;
                if (!splash) return msg.channel.send(g.name + ' has no splash image.').then(resolve()).catch(e => reject(e));;
                return msg.channel.send(new Discord.RichEmbed()
                    .setTitle(g.name + "'s splash image")
                    .setImage(splash)
                    .setColor(isabotColor)
                    .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL))
                .then(resolve())
                .catch(e => reject(e));
            }
            else if (['members', 'users', 'member count', 'user count'].includes(property)) {
                const count = g.members.size;
                return msg.channel.send(g.name + ' has **' + count + ` user${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['roles', 'role count'].includes(property)) {
                const count = g.roles.size;
                return msg.channel.send(g.name + ' has **' + count + ` role${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['channels', 'channel count'].includes(property)) {
                const count = g.channels.size;
                return msg.channel.send(g.name + ' has **' + count + ` channel${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['text channels', 'text channel count'].includes(property)) {
                const count = g.channels.filter(c => c.type === 'text').size;
                return msg.channel.send(g.name + ' has **' + count + ` text channel${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['voice channels', 'voice channel count'].includes(property)) {
                const count = g.channels.filter(c => c.type === 'voice').size;
                return msg.channel.send(g.name + ' has **' + count + ` voice channel${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['categories', 'category count'].includes(property)) {
                const count = g.channels.filter(c => c.type === 'category').size;
                return msg.channel.send(g.name + ' has **' + count + ` categorie${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['emojis', 'emoji count', 'emotes', 'emote count'].includes(property)) {
                const count = g.emojis.size;
                return msg.channel.send(g.name + ' has **' + count + ` emoji${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['creation', 'created at', 'age'].includes(property)) {
                return msg.channel.send(g.name + ' was created at **' + g.createdAt.toUTCString() + '**.')
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['level', 'boost level', 'boost status'].includes(property)) {
                const boostLevel = calculateBoost(g);
                return msg.channel.send(boostLevel ? g.name + ' is **Level ' + boostLevel + '**.' : 'Could not calculate boost level.')
                .then(resolve())
                .catch(e => reject(e));;
            }
            else if (['boosters', 'boost count'].includes(property)) {
                const r = g.roles.find(r => r.name === 'Nitro Booster');
                const count = r ? r.members.size : 0;
                return msg.channel.send(g.name + ' has **' + (!r ? count : 0) + ` booster${count === 1 ? '' : 's'}**.`)
                .then(resolve())
                .catch(e => reject(e));;
            }
        });
    }
};
