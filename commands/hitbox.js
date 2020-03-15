const charData = require('../characters.js');

const toUnderscore = (text) => {
    let newText = text.replace(/popo|nana/, 'ice climbers').replace(/rosalina|luma/, 'rosalina and luma').replace(/(squirtle|ivysaur|charizard)/, 'pt $1').replace('banjo & kazooie', 'banjo and kazooie');
    ['-', '.', '(', ')', "'"].forEach(x => newText = newText.split(x).join(''));
    return newText.split(' ').join('_');
}

const twitter = '<:twitter:607841501279420416>';
const discord = '<:discord:607841509253054464>';
const www = '<:www:673835229022126101>';

const credits =
`__Zeckemyro__ (${twitter}@Zeckemyro ${discord}Zeckemyro#9776) - Hitbox visualizations
__UFD__ (${twitter}@ultframedata ${www}<https://ultimateframedata.com/>) - Having the images uploaded somewhere I can grab them from`;

module.exports = {
    name: 'hitbox',
    description: 'Grabs a hitbox visualization for a move. Currently missing many moves!',
    usage: ['<character> <move>'],
    args: true,
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (args[0] === 'credit' || args[0] === 'credits') return msg.channel.send(credits).then(resolve()).catch(e => reject(e));

            let character, x = args.length;
            while (!character && x >= 0) {
                character = toOneWord(args.slice(0, x).join(' ').toLowerCase());
                character = charData.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.map(x => toOneWord(x)).includes(character)));
                x--;
            }
            if (!character) return msg.channel.send('That character is not valid!').then(resolve()).catch(e => reject(e));
            
            let move = toOneWord(args.slice(x + 1).join(' ').toLowerCase());
            if (!move) return msg.channel.send('Please provide a move!').then(resolve()).catch(e => reject(e));

            move = character.moves.find(x => toOneWord(x.name) === move || (x.aliases && x.aliases.map(y => toOneWord(y)).includes(move)));
            
            if (move) {
                const formatted = capitalize(`${character.name} ${move.name}`, [' ', '(', '/', '.', '-']);

                let link = move.url ? move.url : 'https://ultimateframedata.com/hitboxes/' + toUnderscore(character.name) + '/' + toOneWord((character.name === 'banjo & kazooie' ? 'banjo kazooie' : character.name) + (move.link ? move.link : move.name)) + (move.png ? '.png' : '.gif');

                let embed = new Discord.RichEmbed() .setTitle(formatted) .setImage(link) .setColor(character.color) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
                if (move.comment) embed.setDescription(move.comment);
                msg.channel.send(embed).then(resolve()).catch(e => reject(e));
            }
            else msg.channel.send('That move is not valid!').then(resolve()).catch(e => reject(e));
        });
    }
};
