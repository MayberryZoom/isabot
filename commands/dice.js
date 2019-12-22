module.exports = {
    name: 'dice',
    aliases: ['roll', 'dice roll'],
    usage: ['<number>'],
    description: 'Rolls a die! The number you provide is the number of sides it has.',
    category: 'fun',
    execute(msg, args) {
        return new Promise ((resolve, reject) => {
            if (args.length === 0 || isNaN(parseInt(args[0]))) return msg.channel.send('Please provide a number!').then(resolve()).catch(e => reject(e));
            const max = parseInt(args[0]);

            return msg.channel.send('Rolling a dice...')
                .then(async (m) => { await sleep(1000); m.edit('You rolled a ' + Math.floor(Math.random() * max + 1) + '! <a:isaTwirl:490304654454816768>') })
                .then(resolve()).catch(e => reject(e));
        });
    }
};
