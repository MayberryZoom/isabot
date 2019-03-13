module.exports = {
    name: 'welcome',
    description: 'Welcome!',
    hidden: true,
    dmDisabled: 1,
    execute(msg, args) {
        const conversions = require('../conversions.js');
        
        let text = '';
        if (args[0]) {
            if (msg.mentions.users.array().includes(userFromMention(args[0]))) {
                let usr = conversions.userFromMention(args[0], msg);
                text = ' ' + usr.username;
            }
            else {
                let usr = msg.guild.members.find(m => m.user.username === args.join(' '));
                if (usr) text = ' ' + usr.user.username;
            }
        }
        msg.channel.send('Welcome' + text + '! <:isaHeyyy:490255578061602828>')
        sendLog(msg.author.tag + ' welcomed someone!');
        
    }
};
