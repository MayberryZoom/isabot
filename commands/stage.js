const stages = require('../data/stagelist.js');

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
    data: new Discord.SlashCommandBuilder()
        .setName('stage')
        .setDescription('Gets information on stages in the Smash series!')
        .addSubcommand(subcommand =>
            subcommand.setName('info')
            .setDescription('Get info on a specific stage')
            .addStringOption(option =>
                option.setName('name')
                .setDescription('The stage to fetch')
                .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand.setName('list')
            .setDescription('Get a list of stages')
            .addStringOption(option =>
                option.setName('game')
                .setDescription('The game to fetch stages from. Defaults to all games')
                .addChoices(
                    { name: 'Smash 64', value: '64' },
                    { name: 'Smash Melee', value: 'Melee' },
                    { name: 'Smash Brawl', value: 'Brawl' },
                    { name: 'Smash 4', value: '4' },
                    { name: 'Smash 3DS', value: '3DS' },
                    { name: 'Smash Wii U', value: 'Wii U' },
                    { name: 'Smash Ultimate', value: 'Ultimate' }
                ))),
    aliases: ['stages'],
    execute(interaction) {
        return new Promise((resolve, reject) => {
            const subcommand = interaction.options.getSubcommand();

            if (subcommand === 'list') {
                let game = interaction.options.getString('game');

                const embed = new Discord.EmbedBuilder()
                    .setColor(isabotColor);
                if (game) embed.setTitle('List of stages in Smash Bros. ' + game).setDescription(stages.filter(s => s.games.includes(game)).map(s => s.name).sort().join(', '));
                else embed.setTitle('List of stages').setDescription(stages.map(s => s.name).sort().join(', '));

                interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
            }
            else {
                let stage = toOneWord(interaction.options.getString('name').toLowerCase());
                stage = stages.find(s => toOneWord(s.name) === stage || (s.aliases && s.aliases.map(x => toOneWord(x)).includes(stage)));

                if (!stage) return interaction.reply('That stage is not valid!').then(resolve()).catch(e => reject(e));

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

                interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
            }
        });
    }
};
