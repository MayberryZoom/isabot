const items = require('../data/itemlist.js');

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
        .setName('item')
        .setDescription('Gets information on items in the Smash series!')
        .addSubcommand(subcommand =>
            subcommand.setName('info')
            .setDescription('Get info on a specific item')
            .addStringOption(option =>
                option.setName('name')
                .setDescription('The item to fetch')
                .setRequired(true)))
        .addSubcommand(subcommand =>
            subcommand.setName('list')
            .setDescription('Get a list of items')
            .addStringOption(option =>
                option.setName('game')
                .setDescription('The game to fetch items from. Defaults to all games')
                .addChoices(
                    { name: 'Smash 64', value: '64' },
                    { name: 'Smash Melee', value: 'Melee' },
                    { name: 'Smash Brawl', value: 'Brawl' },
                    { name: 'Smash 4', value: '4' },
                    { name: 'Smash 3DS', value: '3DS' },
                    { name: 'Smash Wii U', value: 'Wii U' },
                    { name: 'Smash Ultimate', value: 'Ultimate' }
                ))),
    execute (interaction) {
        return new Promise((resolve, reject) => {
            const subcommand = interaction.options.getSubcommand();

            if (subcommand === 'list') {
                let game = interaction.options.getString('game');

                const embed = new Discord.EmbedBuilder()
                    .setColor(isabotColor);
                if (game) embed.setTitle('List of items in Smash Bros. ' + game).setDescription(items.filter(i => i.games.includes(game)).map(i => i.name).sort().join(', '));
                else embed.setTitle('List of items').setDescription(items.map(i => i.name).sort().join(', '));

                interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
            }
            else {
                let item = toOneWord(interaction.options.getString('name').toLowerCase());
                item = items.find(i => toOneWord(i.name) === item);

                if (!item) return interaction.reply('That item is not valid!').then(resolve()).catch(e => reject(e));

                let itemName = capitalize(item.name, [' ']);

                let embed = new Discord.EmbedBuilder()
                    .setTitle('__' + itemName + '__ ' + formatSmash(item.games))
                    .setThumbnail(item.url)
                    .setColor(isabotColor)
                    .setDescription(item.description)
                    .addFields(
                        { name: '__Series of Origin__', value: '*' + item.series + '*', inline: true },
                        { name: '__Game of Origin__', value: '*' + item.debut + '*', inline: true },
                        { name: '__Item Class__', value: item.class, inline: true },
                        { name: '__Heavy__', value: item.heavy ? '<:yes:621945300843626497>' : '❌', inline: true }
                    )
                    .setTimestamp();
                if (item.noLink === undefined || !item.noLink) embed.setURL('https://www.ssbwiki.com/' + itemName.split(' ').join('_'));

                interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
            }
        }
    )}
};