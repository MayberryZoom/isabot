module.exports = {
    name: 'source',
    description: 'Gets the link to my source code on GitHub! Use without an argument for the source homepage, use with an argument to find a specific command\'s source.',
    usage: ['<command>'],
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (args.length === 0) {
                return msg.channel.send('I\'m open source, so you can see all my code here!\n<https://github.com/Isachu/isabot>')
                .then(resolve(msg.author.tag + ' got my source code!')).catch(e => reject(e));
            }
            else {
                const argsFixed = toOneWord(args.join(' ').toLowerCase());
                cmd = client.commands.find(c => c.name === argsFixed || (c.aliases && c.aliases.includes(argsFixed)));

                if (!cmd) return msg.channel.send('Please provide a valid command!').then(resolve()).catch(e => reject(e));

                return msg.channel.send('Source code for `' + cmd.name + '`:\n<https://github.com/Isachu/isabot/blob/master/commands/' + cmd.name + '.js>')
                .then(resolve()).catch(e => reject(e));
            }
        })
    }
};
