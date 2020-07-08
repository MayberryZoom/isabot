const charData = require('../characters.js');

const moves = [
    {
        name: 'shield',
        frame: 1,
        description: 'Can be used at percents where there are no good followups, and the opponent is pushing an offensive option.'
    },
    {
        name: 'reverse up tilt',
        aliases: ['uptilt', 'utilt'],
        frame: 6,
        description: 'Only works if you turn around before the UTilt. The easiest way to do this is to push up and slightly back on the c-stick with tilt stick. Great mid percent jab followup that racks up damage well.'
    },
    {
        name: 'pocket trap',
        frame: 7,
        description: 'Essentially guarantees either a kill or shield break. The pocketed item is not true, but it will break the opponent\'s shield if they don\'t take the hit. Requires a strong projectile like Charge Shot or Ptooie.'
    },
    {
        name: 'forward tilt',
        aliases: ['ftilt'],
        frame: 8,
        description: 'Most common jab followup. Can kill at ledge, put the opponent offstage, etc. Very simple and reliable.'
    },
    {
        name: 'down smash',
        aliases: ['dsmash'],
        frame: 8,
        description: 'True at the same percents as FTilt, but kills ~10% earlier and has a better angle. Due to the nature of smash attacks, it is technically harder to input, but not very much. Reliable KO option at ledge.'
    },
    {
        name: 'up smash',
        aliases: ['usmash'],
        frame: 9,
        description: 'Generally outclassed by DSmash, but can be useful when you\'re facing away from the ledge or are on a platform. Kills as soon as it\'s true.'
    },
    {
        name: 'pocket',
        frame: 9,
        description: 'Very strong, but works later than FTilt/DSmash. Can kill pretty much as soon as it\'s true, depending on which move is pocketed. Very effective with moves like Charge Shot, Ptooie, Shadow Ball, etc.'
    },
    {
        name: 'down tilt',
        aliases: ['dtilt'],
        frame: 9,
        description: 'This followup exists, but it\'s not very good in many scenarios, since FTilt/DSmash kill earlier, have better angles, and work at earlier percents. In addition, USmash is true at the same percents, but kills more reliably. Can work as a DI mixup on high platforms.'
    },
]

const getAdvantage = (weight, opponentPercent, playerPercent) => {
    return Math.floor(0.4 * (((((((56 * (opponentPercent + 2)) / (weight + 100)) + 18) * 30) / 100) + 14) * (1 + (((playerPercent - 35) * 0.1) / 115)))) - 1 + 14 - 16;
}

const findStartingPercent = (move, opponent, r) => {
    return new Promise(async (resolve) => {
        const weight = opponent.attributes.find(s => s.name === 'weight').value;
        if (!r || r < 35) r = 35;
        if (r > 150) r = 150;

        for (let p = 0; ; p++) {
            if (getAdvantage(weight, p, r) >= move.frame) {
                resolve(p);
                break;
            }
        }
    });
}

const findPercents = (opponent, rage) => {
    return new Promise(async (resolve) => {
        let movePercents = [];

        for (let i = 0; ; i++) {
            const p = await findStartingPercent(moves[i], opponent, rage)
            movePercents.push(capitalize(moves[i].name, [' ']) + ' - **' + p + '%**');

            if (i >= moves.length - 1) {
                resolve(movePercents);
                break;
            }
        }
    });
}

module.exports = {
    name: 'jab',
    detailedDescription: 'Calculates a followup for Isabelle\'s Jab.\nAdd a character to see when common followups are true against them.\nAdd a move and character to see when that move is true against that character.\nAdd a number at the end of the command to calculate as if that was Isabelle\'s current percent (used for rage).',
    usage: ['<move> <character>', '<move> <character> <number>', '<character>', '<character> <number>'],
    category: 'smash',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            let character, move, x = args.length;
            while (!(character || move) && x > 0) {
                x--
                character = toOneWord(args.slice(0, x + 1).join(' ').toLowerCase());
                move = toOneWord(args.slice(0, x + 1).join(' ').toLowerCase());
                character = charData.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.includes(character)));
                move = moves.find(m => toOneWord(m.name) === move || (m.aliases && m.aliases.includes(move)));
            }

            if (!(character || move)) return msg.channel.send('Please provide a valid character or move!');

            if (move) {
                let newArgs = args.slice(x + 1);
                let rage;
                if (!isNaN(parseInt(newArgs[newArgs.length - 1]))) rage = parseInt(newArgs.pop().match(/(\d+)%?/));

                character = toOneWord(newArgs.join(' ').toLowerCase());
                character = charData.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.includes(character)));

                const invalidText = newArgs.length > 0 ? character ? '' : 'Invalid character! Defaulting to Mario...\n' : 'No character provided! Defaulting to Mario...\n';
                if (!character) character = charData.find(c => c.name === 'mario');

                const percent = await findStartingPercent(move, character, rage);
                return msg.channel.send(invalidText + 'True on **' + capitalize(character.name, [' ', '-']) + '** starting at **' + percent + '%**\n\n' + move.description).then(resolve()).catch((e) => reject(e));
            }
            else {
                let newArgs = args.slice(x + 1);
                let rage;
                if (!isNaN(parseInt(newArgs[newArgs.length - 1]))) rage = parseInt(newArgs.pop().match(/(\d+)%?/));

                move = toOneWord(newArgs.join(' ').toLowerCase());
                move = moves.find(m => toOneWord(m.name) === move || (m.aliases && m.aliases.includes(move)));

                if (move) {
                    const percent = await findStartingPercent(move, character, rage);
                    return msg.channel.send('True on **' + capitalize(character.name, [' ', '-']) + '** starting at **' + percent + '%**\n\n' + move.description).then(resolve()).catch((e) => reject(e));
                }
                else {
                    const movePercents = await findPercents(character, rage);
                    return msg.channel.send('__Jab followups on ' + capitalize(character.name, [' ', '-']) + '__\n\n' + movePercents.join('\n')).then(resolve()).catch(e => reject(e));
                }
            }
        });
    }
};
