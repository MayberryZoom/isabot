const hitboxes = require('../hitboxes.js');
const colors = {
    pichu: '0xebdb34'
}

module.exports = {
    name: 'hitbox',
    description: 'Grabs a hitbox visualization for a move. Currently missing many moves!',
    usage: '<character> <move>',
    args: true,
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            const character = args.shift();
            const filtered = hitboxes.filter(x => x.character === character.toLowerCase());
            if (!filtered.length) return msg.channel.send('That character is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));
            if (!args[0]) return msg.channel.send('Please provide a move!').then(resolve()).catch(e => reject(e));
            const move = args.join(' ').toLowerCase();
            const hitbox = filtered.find(x => x.move === move || x.aliases.includes(move));
            if (hitbox) {
                const formatted = (`${hitbox.character} ${hitbox.move}`).split(' ').map(x => x.charAt(0).toUpperCase() + x.substring(1)).join(' ');
                msg.channel.send(new Discord.RichEmbed() .setTitle(formatted) .setImage(hitbox.file) .setColor(colors[character]))
                .then(resolve())
                .catch(e => reject(e));
            }
            else msg.channel.send('That move is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));
        });
    }
};
