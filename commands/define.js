module.exports = {
    name: 'define',
    description: 'Defines a Smash term. A list of terms can be found using the ``terms`` command.',
    args: true,
    usage: '<term>',
    arguments: 'Any term - See ``>terms``',
    execute(msg, args) {
        function sendMsg(toSend) {
            msg.channel.send(toSend);
        }
        
        const def = require('../terms.json');

        const term = args.join(' ').toLowerCase();
        let currentServer; 
        
        for (let type in def) {
            if (def[type].data.server === msg.guild.id) {
                currentServer = def[type].data.name;
                break;
            }
        }
        if (currentServer === undefined) {
            currentServer = "none";
        }

        const commandListFull = Object.keys(def.general.terms).concat(Object.keys(def[currentServer].terms));
        const commandListGeneral = Object.keys(def.general.terms);
        const commandListServer = Object.keys(def[currentServer].terms);

        if (!commandListFull.includes(term)) {
            sendMsg('There is no term by that name!');
        }
        else {
            if (commandListGeneral.includes(term)) {
                sendMsg(def.general.terms[term]);
            }
            else if (commandListServer.includes(term)) {
                sendMsg(def[currentServer].terms[term]);
            }
            if (msg.channel.type === 'dm') {
                sendLog(msg.author.tag + ' defined \'' + args.join(' ') + '\' in their DMs');
                return;
            }
            sendLog(msg.author.tag + ' defined \'' + args.join(' ') + '\' in ' + msg.guild.name);
        }
    }
};