module.exports = {
    name: 'data',
    description: 'Grabs the given character\'s frame data or stats. Currently missing MANY characters and data values, and moves are not ready yet.',
    usage: '<character> <move or stat>',
    args: true,
    arguments: 'Any character, then a move or stat',
    execute(msg, args) {
        const characters = Object.keys(datatable);

        if (characters.includes(args[0])) {
            const char = datatable[args[0]];
            let characterStats = {};
            let characterMoves = {};
            for (stat in char.stats) {
                char.stats[stat].keys.forEach((key) => {
                    characterStats[key] = stat;
                });
            }
            for (move in char.moves) {
                char.moves[move].metadata.keys.forEach((key) => {
                    characterMoves[key] = move;
                });
            }

            if (Object.keys(characterStats).includes(args[1])) {
                const stat = char.stats[characterStats[args[1]]];
                const embed = new Discord.RichEmbed() .setColor(char.color) .addField(stat.name, 'Value: ' + stat.value + '\nRank: ' + stat.rank);
                sendMsg(embed);
            }
            else if (Object.keys(characterMoves).includes(args[1])) {
                sendMsg("That's a valid move, but this part of the command isn't ready yet!\n\nYou can find most move data here: https://docs.google.com/document/d/1odjhW1IWnWmhXSZ74K6BynElw8FTZfE6oTo_Cf_x0RU/edit#")
                /*const move = char.moves[characterMoves[args[1]]];
                let fields = [];
                let bits = [];
                let bitcount = 0;
                for (bit in move.movedata) {
                    if (bit !== 'general') {
                        if (bitcount === 0) {
                            bits.push(move.movedata[bit].name);
                        }
                        else if (bitcount === 1) {
                            bits.push(' / **' + move.movedata[bit].name + '**');
                        }
                        else if (bitcount === 2) {
                            bits.push(' / __' + move.movedata[bit].name + '__');
                        }
                        bitcount++;
                    }
                }
                fields.push(bits.join(''))
                
                const embed = new Discord.RichEmbed() .setColor(char.color) .addField(move.metadata.name, fields.join('\n'));
                sendMsg(embed);*/
            }
            else {
                sendMsg('Please enter a valid move or stat!')
            }
        }
        else {
            sendMsg('Please enter a valid character!')
        }
    }
};
