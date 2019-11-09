const stats = require('../stats.js');

const moves = [
    {
        name: 'shield',
        frame: 1,
        description: 'Can be used at percents where there are no good followups, and the opponent is pushing an offensive option.'
    },
    {
        name: 'up tilt',
        aliases: ['utilt'],
        frame: 6,
        description: 'Only works if you turn around before the UTilt. The easiest way to do this is to push up and slightly back on the c-stick with tilt stick. Great mid percent jab followup that racks up damage well.'
    },
    {
        name: 'pocket trap',
        frame: 7,
        description: 'Essentially guarantees you either a kill or shield break. The pocketed item is not true, but assuming it is strong, it will break the opponent\'s shield if they don\'t take the hit. Very effective with moves like Charge Shot or Ptooie.'
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
        name: 'pocket',
        frame: 8,
        description: 'True at the same percents as FTilt/DSmash, but usually a better followup due to the pocket damage multiplier. Can kill pretty much as soon as it\'s true, depending on which move is pocketed. Very effective with moves like Charge Shot, Ptooie, Shadow Ball, etc.'
    },
    {
        name: 'down tilt',
        aliases: ['dtilt'],
        frame: 9,
        description: 'This followup exists, but it\'s not very good in many scenarios, since FTilt/DSmash kill earlier, have better angles, and work at earlier percents. Can work as a DI mixup on high platforms.'
    },
]

const getAdvantage = (weight, opponentPercent, playerPercent) => {
    return Math.floor(0.4 * (((((((56 * (opponentPercent + 2)) / (weight + 100)) + 18) * 30) / 100) + 14) * (1 + (((playerPercent - 35) * 0.1) / 115)))) - 1 + 14 - 16;
}

const findStartingPercent = (move, opponent) => {
    return new Promise(async (resolve) => {
        const weight = opponent.stats.find(s => s.name === 'Weight').value;

        for (let p = 0; ; p++) {
            if (getAdvantage(weight, p, 35) >= move.frame) {
                resolve(p);
                break;
            }
        }
    });
}

const findPercents = (opponent) => {
    return new Promise(async (resolve) => {
        let movePercents = [];

        for (let i = 0; ; i++) {
            const p = await findStartingPercent(moves[i], opponent)
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
    description: 'Calculates a followup for Isabelle\'s Jab. If a move is provided, it shows info about it as a jab followup. If a character is provided, it shows when followups are true against them.',
    usage: '<character or move>',
    category: 'smash',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            let argsFixed = toOneWord(args.join(' '));
            const move = moves.find(m => toOneWord(m.name) === argsFixed || (m.aliases && m.aliases.includes(argsFixed)));
            const character = stats.find(c => toOneWord(c.name) === argsFixed || (c.aliases && c.aliases.includes(argsFixed)));

            if (!move && !character) return msg.channel.send('Please provide a valid character or move!');

            if (move) {
                const percent = await findStartingPercent(move, stats.find(s => s.name === 'mario'));
                return msg.channel.send('True on Mario starting at **' + percent + '%**\n\n' + move.description).then(resolve()).catch((e) => reject(e));
            }
            else {
                const movePercents = await findPercents(character);
                return msg.channel.send('__Jab followups on ' + capitalize(character.name, [' ', '-']) + '__\n\n' + movePercents.join('\n')).then(resolve()).catch(e => reject(e));
            }
        });
    }
};
