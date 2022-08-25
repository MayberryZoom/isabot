const charData = require('../data/characters.js');
const { checkAllPermutations } = require('../globals.js');

const toUnderscore = (text) => {
    ['-', '.', '(', ')', "'"].forEach(x => text = text.split(x).join(''));
    return text.split(' ').join('_');
}

const twitter = '<:twitter:607841501279420416>';
const discord = '<:discord:607841509253054464>';
const www = '<:www:673835229022126101>';

const credits =
`__Zeckemyro__ (${twitter}@Zeckemyro ${discord}Zeckemyro#9776) - Hitbox visualizations
__UFD__ (${twitter}@ultframedata ${www}<https://ultimateframedata.com/>) - Having the images uploaded somewhere I can grab them from`;

let normals = [
    { name: 'down tilt', aliases: ['dtilt'], link: 'dtilt' },
    { name: 'up tilt', aliases: ['utilt'], link: 'utilt' },
    { name: 'dash attack', aliases: ['da'] },
    { name: 'down smash', aliases: ['dsmash'], link: 'dsmash' },
    { name: 'up smash', aliases: ['usmash'] },
    { name: 'neutral aerial', aliases: ['neutral air', 'nair'], link: 'nair' },
    { name: 'forward aerial', aliases: ['forward air', 'fair'], link: 'fair' },
    { name: 'back aerial', aliases: ['back air', 'bair'], link: 'bair' },
    { name: 'up aerial', aliases: ['up air', 'uair', 'upair'], link: 'uair' },
    { name: 'down aerial', aliases: ['down air', 'dair'], link: 'dair' },
    { name: 'standing grab', aliases: ['grabs', 'grab'], link: 'grab' },
    { name: 'dash grab', aliases: ['grabd'] },
    { name: 'pivot grab', aliases: ['grabp'] },
    { name: 'pummel', aliases: ['neutral throw'] },
    { name: 'forward throw', aliases: ['fthrow'], link: 'fthrow' },
    { name: 'back throw', aliases: ['bthrow'], link: 'bthrow' },
    { name: 'up throw', aliases: ['uthrow'], link: 'uthrow' },
    { name: 'down throw', aliases: ['dthrow'], link: 'dthrow' },
    { name: 'up facing getup attack', aliases: [ 'getup attack', 'up getup attack', 'getup attack u'], link: 'getup attack u' },
    { name: 'down facing getup attack', aliases: ['down getup attack', 'getup attack d'], link: 'getup attack d' },
    { name: 'trip attack', },
    { name: 'ledge attack' },
];

let jabs = {
    '1': [
        { name: 'jab', aliases: ['neutral tilt'] }
    ],
    '2': [
        { name: 'jab 1', aliases: ['jab'] },
        { name: 'jab 2'}
    ],
    '3': [
        { name: 'jab 1', aliases: ['jab'] },
        { name: 'jab 2'},
        { name: 'jab 3'}
    ],
    'rapid': [
        { name: 'rapid jab', aliases: ['jab'], link: 'jab rapid' },
        { name: 'rapid jab finisher', aliases: ['rapid jab ender', 'jab finisher'], link: 'jab rapid end'}
    ],
    'rapid 1': [
        { name: 'jab 1', aliases: ['jab'] },
        { name: 'rapid jab', link: 'jab rapid' },
        { name: 'rapid jab finisher', aliases: ['rapid jab ender', 'jab finisher'], link: 'jab rapid end'}
    ],
    'rapid 2': [
        { name: 'jab 1', aliases: ['jab'] },
        { name: 'jab 2'},
        { name: 'rapid jab', link: 'jab rapid' },
        { name: 'rapid jab finisher', aliases: ['rapid jab ender', 'jab finisher'], link: 'jab rapid end'}
    ],
    'gentleman': [
        { name: 'jab 1', aliases: ['jab'] },
        { name: 'jab 2'},
        { name: 'jab 3', aliases: ['gentleman']},
        { name: 'rapid jab', link: 'jab rapid' },
        { name: 'rapid jab finisher', aliases: ['rapid jab ender', 'jab finisher'], link: 'jab rapid end'}
    ],
    'unique': []
};

let ftilts = {
    'unangled': [
        { name: 'forward tilt', aliases: ['ftilt'], link: 'ftilt' }
    ],
    'angled': [
        { name: 'forward tilt', aliases: ['ftilt'], link: 'ftilt' },
        { name: 'down angled forward tilt', aliases: ['daft', 'down forward tilt', 'down ftilt', 'dftilt', 'forward tilt down', 'ftilt down'], link: 'ftilt down' },
        { name: 'up angled forward tilt', aliases: ['uaft', 'up forward tilt', 'up ftilt', 'uftilt', 'forward tilt up', 'ftilt up'], link: 'ftilt up' }
    ],
    '2': [
        { name: 'forward tilt 1', aliases: ['forward tilt', 'ftilt', 'ftilt 1'], link: 'ftilt 1' },
        { name: 'forward tilt 2', aliases: ['ftilt 2'], link: 'ftilt 2' }
    ],
    '3': [
        { name: 'forward tilt 1', aliases: ['ftilt 1', 'forward tilt', 'ftilt'], link: 'ftilt 1' },
        { name: 'forward tilt 2', aliases: ['ftilt 2'], link: 'ftilt 2' },
        { name: 'forward tilt 3', aliases: ['ftilt 3'], link: 'ftilt 3' }
    ],
    'unique': []
}

let fsmashes = {
    'unangled': [
        { name: 'forward smash', aliases: ['fsmash', 'side smash'], link: 'fsmash' }
    ],
    'angled': [
        { name: 'forward smash', aliases: ['fsmash', 'side smash'], link: 'fsmash' },
        { name: 'down angled forward smash', aliases: ['down forward smash', 'down fsmash', 'dfsmash', 'forward smash down', 'fsmash down'], link: 'fsmash down' },
        { name: 'up angled forward smash', aliases: ['up forward smash', 'up fsmash', 'ufsmash', 'forward smash up', 'fsmash up'], link: 'fsmash up' }
    ],
    '2': [
        { name: 'forward smash 1', aliases: ['forward smash', 'fsmash', 'fsmash 1', 'side smash', 'side smash 1'], link: 'fsmash 1' },
        { name: 'forward smash 2', aliases: ['fsmash 2', 'side smash 2'], link: 'fsmash 2' }
    ],
    'unique': []
}

let landingDair = { name: 'landing down aerial', aliases: ['landing down air', 'landing dair'], link: 'dair landing' }
let zair = { name: 'z-aerial', aliases: ['zair'], link: 'zair' }

charData.map(c => {
    if (c.unreleased) return;

    c.moves = normals.concat(jabs[c.jabType]).concat(ftilts[c.ftiltType]).concat(fsmashes[c.fsmashType]).filter(n => !((c.exclude && c.exclude.includes(n.name)) || c.moves.find(m => m.name === n.name))).concat(c.moves);
    if (c.landingDair) c.moves.push(landingDair);
    if (c.zair) c.moves.push(zair);
    c.moves.push({ name: 'ledge hang', url: 'https://ultimateframedata.com/ledgehangs/' + c.name + 'LedgeHang.gif' })
    c.moves.push({ name: 'ledge grab', url: 'https://ultimateframedata.com/ledgegrabs/' + c.name + 'LedgeGrab%201.png' })
});

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
            if (character.unreleasedHitbox) return msg.channel.send('That character is not available yet!').then(resolve()).catch(e => reject(e));

            let move = getWords(args.slice(x + 1).join(' ').toLowerCase());
            if (!move) return msg.channel.send('Please provide a move!').then(resolve()).catch(e => reject(e));

            move = character.moves.find(m => checkAllPermutations(move, m.aliases ? m.aliases.concat(m.name) : [m.name]));
            
            if (move) {
                if (character.unavailable && character.unavailable.includes(move.name)) return msg.channel.send('No hitbox available for that move!').then(resolve()).catch(e => reject(e));

                const formatted = capitalize(`${character.name} ${move.name}`, [' ', '(', '/', '.', '-']);

                let link = move.url ? move.url : 'https://ultimateframedata.com/hitboxes/' + toUnderscore(character.ufdDir ? character.ufdDir : character.name) + '/' + toOneWord((character.ufdFile ? character.ufdFile : character.name) + (move.link ? move.link : move.name)).replace('&', '_') + (move.png ? '.png' : '.gif');

                let embed = new Discord.EmbedBuilder()
                    .setTitle(formatted)
                    .setImage(link)
                    .setColor(character.color)
                    .setTimestamp();
                if (move.description) embed.setDescription(move.description);

                msg.channel.send({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
            }
            else msg.channel.send('That move is not valid!').then(resolve()).catch(e => reject(e));
        });
    }
};
