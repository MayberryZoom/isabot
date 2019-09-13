const datatable = require('../movedata.json');
const characters = Object.keys(datatable);

module.exports = {
    name: 'stat',
    aliases: ['stats'],
    description: 'Grabs the given character\'s stats. Currently missing MANY characters and data values.',
    usage: '<character> <stat>',
    args: true,
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            args.forEach(arg => arg = arg.toLowerCase());

            if (characters.includes(args[0])) {
                const char = datatable[args[0]];
                let characterStats = {};
                for (stat in char.stats) {
                    char.stats[stat].keys.forEach((key) => {
                        characterStats[key] = stat;
                    });
                }

                if (Object.keys(characterStats).includes(args[1])) {
                    const stat = char.stats[characterStats[args[1]]];
                    const embed = new Discord.RichEmbed() .setColor(char.color) .addField(stat.name, 'Value: ' + stat.value + '\nRank: ' + stat.rank) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
                    return msg.channel.send(embed)
                    .then(resolve())
                    .catch((e) => reject(e));
                }
                else {
                    return msg.channel.send('Please enter a valid stat!')
                    .then(resolve())
                    .catch((e) => reject(e));
                }
            }
            else {
                return msg.channel.send('Please enter a valid character!')
                .then(resolve())
                .catch((e) => reject(e));
            }
        });
    }
};
