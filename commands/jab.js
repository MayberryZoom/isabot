const charData = require('../data/characters.js');

const moves = {
    shield: {
        name: 'Shield',
        frame: 1,
        description: 'Can be used at percents where there are no good followups, and the opponent is pushing an offensive option.'
    },
    utilt: {
        name: 'Reverse Up Tilt',
        frame: 6,
        description: 'Only works if you turn around before the UTilt. The easiest way to do this is to push up and slightly back on the c-stick with tilt stick. Great mid percent jab followup that racks up damage well.'
    },
    trap: {
        name: 'Pocket Trap',
        frame: 7,
        description: 'Essentially guarantees either a kill or shield break. The pocketed item is not true, but it will break the opponent\'s shield if they don\'t take the hit. Requires a strong projectile like Charge Shot or Ptooie.'
    },
    ftilt: {
        name: 'Forward Tilt',
        frame: 8,
        description: 'Most common jab followup. Can kill at ledge, put the opponent offstage, etc. Very simple and reliable.'
    },
    dsmash: {
        name: 'Down Smash',
        frame: 8,
        description: 'True at the same percents as FTilt, but kills ~10% earlier and has a better angle. Due to the nature of smash attacks, it is technically harder to input, but not very much. Reliable KO option at ledge.'
    },
    usmash: {
        name: 'Up Smash',
        frame: 9,
        description: 'Generally outclassed by DSmash, but can be useful when you\'re facing away from the ledge or are on a platform. Kills as soon as it\'s true.'
    },
    pocket: {
        name: 'Pocket',
        frame: 9,
        description: 'Very strong, but works later than FTilt/DSmash. Can kill pretty much as soon as it\'s true, depending on which move is pocketed. Very effective with moves like Charge Shot, Ptooie, Shadow Ball, etc.'
    },
    dtilt: {
        name: 'Down Tilt',
        frame: 9,
        description: 'This followup exists, but it\'s not very good in many scenarios, since FTilt/DSmash kill earlier, have better angles, and work at earlier percents. In addition, USmash is true at the same percents, but kills more reliably. Can work as a DI mixup on high platforms.'
    },
}

const getAdvantage = (weight, opponentPercent, playerPercent) => {
    return Math.floor(0.4 * (((((((56 * (opponentPercent + 2)) / (weight + 100)) + 18) * 30) / 100) + 14) * (1 + (((playerPercent - 35) * 0.1) / 115)))) - 1 + 14 - 16;
}

const findStartingPercent = (move, opponent, r) => {
    return new Promise(async (resolve) => {
        const weight = opponent.attributes.find(s => s.name === 'weight').value;

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

        for (move in moves) {
            const p = await findStartingPercent(moves[move], opponent, rage)
            movePercents.push(moves[move].name + ' - **' + p + '%**');
        }

        resolve(movePercents);
    });
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('jab')
        .setDescription('Provides info on follow-ups for Isabelle\'s Jab.')
        .addSubcommand(subcommand =>
            subcommand.setName('calculate')
            .setDescription('Calculate jab follow-ups')
            .addStringOption(option =>
                option.setName('character')
                .setDescription('The character being hit by jab')
                .setRequired(true))
            .addNumberOption(option =>
                option.setName('rage')
                .setDescription('The percentage Isabelle is at, used for rage')
                .setMinValue(35)
                .setMaxValue(150)))
        .addSubcommand(subcommand =>
            subcommand.setName('info')
            .setDescription('Get info on jab follow-ups')
            .addStringOption(option =>
                option.setName('move')
                .setDescription('A specific move to get info about')
                .addChoices(
                    { name: 'Shield', value: 'shield' },
                    { name: 'Reverse Up-Tilt', value: 'utilt' },
                    { name: 'Pocket Trap', value: 'trap' },
                    { name: 'Forward Tilt', value: 'ftilt' },
                    { name: 'Down Smash', value: 'dsmash' },
                    { name: 'Up Smash', value: 'usmash' },
                    { name: 'Pocket', value: 'pocket' },
                    { name: 'Down Tilt', value: 'dtilt' }
                )
                .setRequired(true))),
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            const subcommand = interaction.options.getSubcommand();

            if (subcommand === 'calculate') {
                let character = toOneWord(interaction.options.getString('character').toLowerCase());
                character = charData.find(c => toOneWord(c.name) === character || (c.aliases && c.aliases.map(x => toOneWord(x)).includes(character)));
                if (!character) return interaction.reply('That character is not valid!').then(resolve()).catch(e => reject(e));

                const rage = interaction.options.getNumber('rage');
                const movePercents = await findPercents(character, rage ? rage : 35);

                return interaction.reply('__Jab follow-ups on ' + capitalize(character.name, [' ', '-']) + '__\n\n' + movePercents.join('\n')).then(resolve()).catch(e => reject(e));
            }
            else {
                const move = moves[interaction.options.getString('move')];
                const percent = await findStartingPercent(move, charData.find(c => c.name === 'mario'), 35);
                
                return interaction.reply('__Jab -> ' + move.name + '__\n\nStarting at ' + percent + '% on Mario.\n' + move.description).then(resolve()).catch(e => reject(e));
            }
        });
    }
};
