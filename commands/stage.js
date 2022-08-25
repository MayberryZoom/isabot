const stages = require('../data/stagelist.js')
const games = {
    '64': '<:SSB64:621931677274472459>',
    'Melee': '<:SSBM:621931677253500938>',
    'Brawl': '<:SSBB:621931677198974977>',
    '4': '<:SSB4:621931676506783751>',
    '3DS': '<:SSB43DS:621931676909436976>',
    'Wii U': '<:SSB4U:621931677173940234>',
    'Ultimate': '<:SSBU:621931676905373699>'
};

const formatSmash = (arr) => {
    return arr.map(g => games[g]).join('');
}

module.exports = {
    name: 'stage',
    aliases: ['stages'],
    description: 'Gives information on any specific stage. Provide a stage instead to see a list of stages in that game. Provide no argument to see a list of all stages.',
    usage: ['', '<stage>'],
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (!args[0]) {
                const embed = new Discord.EmbedBuilder()
                    .setTitle('List of stages')
                    .setDescription(stages.map(s => s.name).sort().join(', '))
                    .setColor(isabotColor);

                return msg.channel.send({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
            }

            const argsFixed = toOneWord(args.join(' ').toLowerCase());

            let game;
            for (g in games) {
                if (toOneWord(g.toLowerCase()) === argsFixed) {
                    game = g;
                    break;
                }
            }

            if (game) return msg.channel.send(new Discord.EmbedBuilder() .setTitle('List of stages in Smash Bros. ' + game) .setDescription(stages.filter(s => s.games.includes(game)).map(s => s.name).sort().join(', ')) .setColor(isabotColor)).then(resolve()).catch(e => reject(e));

            let stage = stages.find(s => toOneWord(s.name) === argsFixed || (s.aliases && s.aliases.map(x => toOneWord(x)).includes(argsFixed)));
            if (!stage) return msg.channel.send('That stage is not valid!').then(resolve()).catch(e => reject(e));
            let stageName = stage.formattedName ? stage.formattedName : capitalize(stage.name, [' ', '(', '-']);

            let embed = new Discord.EmbedBuilder()
                .setTitle('__' + stageName + '__ ' + formatSmash(stage.games))
                .setThumbnail(stage.url)
                .setColor(isabotColor)
                .setDescription(stage.description)
                .addFields(
                	{ name: '__Series of Origin__', value: '*' + stage.series + '*', inline: true },
                	{ name: '__Stage Type__', value: stage.type, inline: true },
                	{ name: '__Stage Size__', value: stage.size, inline: true },
                	{ name: '__Max Players__', value: stage.players, inline: true },
                	{ name: '__Legality in Singles__', value: stage.slegality, inline: true },
                	{ name: '__Legality in Doubles__', value: stage.dlegality, inline: true }
                )
                .setTimestamp();
            if (stage.noLink === undefined || !stage.noLink) embed.setURL('https://www.ssbwiki.com/' + stageName.split(' ').join('_'));

            return msg.channel.send({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        });
    }
};
