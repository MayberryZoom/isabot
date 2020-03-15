module.exports = {
    name: 'roll',
    aliases: ['dice'],
    usage: ['<number>', '<number> <number>'],
    description: 'Rolls a dice! The number you provide is the number of sides it has. If you provide a second number, it\'ll roll the dice that many times (max 15).',
    category: 'fun',
    execute(msg, args) {
        return new Promise ((resolve, reject) => {
            if (args.length === 0 || isNaN(parseInt(args[0]))) return msg.channel.send('Please provide a number!').then(resolve()).catch(e => reject(e));
            const max = parseInt(args[0]);

            let times;
            if (args[1] && !isNaN(parseInt(args[1])) && parseInt(args[1]) > 1 && parseInt(args[1]) <= 15) times = parseInt(args[1]);
            console.log(times)

            return msg.channel.send('Rolling a dice...')
                .then(async (m) => {
                    await sleep(1000);
                    if (times) {
                        let rolls = [];
                        for (let i = 0; i < times; i++) rolls.push(Math.floor(Math.random() * max + 1));

                        let total = rolls.reduce((acc, i) => acc + parseInt(i))


                        m.edit('You rolled: ' + rolls.join(', ') + '! <a:isaTwirl:490304654454816768> Total: ' + total);
                    }
                    else m.edit('You rolled a ' + Math.floor(Math.random() * max + 1) + '! <a:isaTwirl:490304654454816768>');
                }).then(resolve()).catch(e => reject(e));
        });
    }
};
