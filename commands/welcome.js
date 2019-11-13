const conversions = require('../conversions.js');

module.exports = {
    name: 'welcome',
    description: 'Welcome!',
    usage: ['<user>'],
    dmDisabled: 1,
    execute(msg, args) {
        return new Promise (async (resolve, reject) => {
            let text;
            if (args[0]) {
                text = await conversions.parseUser(msg, args.join(' '));
            }
            if (!text) text = '';
            msg.channel.send('Welcome' + text + '! <:isaHeyyy:490255578061602828>')
            .then(resolve(msg.author.tag + ' welcomed someone!'))
            .catch((e) => reject(e));
        });
    }
};
