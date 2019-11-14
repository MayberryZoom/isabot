const items = require('../itemlist.js')
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
    name: 'item',
    description: 'Gives information on any specific item. Provide a game instead to see a list of items in that game. Provide no argument to see a list of all items.',
    usage: ['', '<item>', '<game>'],
    category: 'smash',
    execute (msg, args) {
        return new Promise((resolve, reject) => {
            if (!args[0]) return msg.channel.send(new Discord.RichEmbed() .setTitle('List of items') .setDescription(items.map(i => i.name).sort().join(', ')) .setColor(isabotColor)).then(resolve()).catch(e => reject(e));

            let game;
            for (g in games) {
                if (toOneWord(g.toLowerCase()) === toOneWord(args.join(' ').toLowerCase())) {
                    game = g;
                    break;
                }
            }

            if (game) return msg.channel.send(new Discord.RichEmbed() .setTitle('List of items in Smash Bros. ' + game) .setDescription(items.filter(i => i.games.includes(game)).map(i => i.name).sort().join(', ')) .setColor(isabotColor)).then(resolve()).catch(e => reject(e));

            let item = items.find(i => toOneWord(i.name) === toOneWord(args.join(' ').toLowerCase()));
            if (!item) return msg.channel.send('That item is not valid!').then(resolve()).catch(e => reject(e));
            let itemName = capitalize(item.name, [' ']);

            let embed = new Discord.RichEmbed()
            .setTitle('__' + itemName + '__ ' + formatSmash(item.games))
            .setThumbnail(item.url)
            .setColor(isabotColor)
            .setDescription(item.description)
            .addField('__Series of Origin__', '*' + item.series + '*', true)
            .addField('__Game of Origin__', '*' + item.debut + '*', true)
            .addField('__Item Class__', item.class, true)
            .addField('__Heavy__', item.heavy ? '<:yes:621945300843626497>' : '❌', true)
            .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL);
            if (item.noLink === undefined || !item.noLink) embed.setURL('https://www.ssbwiki.com/' + itemName.split(' ').join('_'));

            return msg.channel.send(embed).then(resolve()).catch(e => reject(e));
        }
    )}
};