const hitboxes = require('../hitboxes.js');
const characters = new Discord.Collection(
    [
        ['isabelle', { name: 'isabelle', aliases: ['isa', 'izzy', 'issy'], color: '0xebdb34' }],
        ['pichu', { name: 'pichu', aliases: ['nerfed'], color: '0xF3EE51' }],
        ['piranha plant', { name: 'piranha plant', aliases: ['plant'], color: '0x1D7A36'}],
        ['greninja', { name: 'greninja', aliases: ['gren'], color: '0x5673a5'}]
    ]
);

const twitter = '<:twitter:607841501279420416>';
const discord = '<:discord:607841509253054464>';

const credits =
`Isachu (${twitter}@\\_Isachu\\_ ${discord}Izzybelle#0415 - Everything not listed below
Invy (${twitter}@isolatedinvy ${discord}invy#7828) - Isabelle (all hitboxes except otherwise noted)
Struggleton (${twitter}@Struggleton ${discord}Struggleton#4071) - Pichu, Plant (hitboxes)
Lewdcario (${twitter}@Lewdicario ${discord}Lewdcario#0448) - Isabelle (NAir)
EyeDonutz (${twitter}@theEyeDonutz ${discord}EyeDonutz#0151) - Plant (commands)
Silvirio (${twitter}@HonestSilvie ${discord}@Silvirio#4846) - Greninja (commands)`;

module.exports = {
    name: 'hitbox',
    description: 'Grabs a hitbox visualization for a move. Currently missing many moves!',
    usage: '<character> <move>',
    args: true,
    category: 'smash',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (args[0] === 'credit' || args[0] === 'credits') return msg.channel.send(credits).then(resolve()).catch(e => reject(e));

            let character, x = 0;
            while (!character && x <= args.length) {
                character = args.slice(0, x).join(' ').toLowerCase();
                character = characters.get(character) || characters.find(c => c.aliases && c.aliases.includes(character));
                x++;
            }
            if (character === null) return msg.channel.send('That character is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));

            const filtered = hitboxes.filter(x => x.character === character.name);
            if (!filtered.length) return msg.channel.send('That character is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));
            if (!args[0]) return msg.channel.send('Please provide a move!').then(resolve()).catch(e => reject(e));
            
            const move = toOneWord(args.slice(x - 1).join(' ').toLowerCase());
            const hitbox = filtered.find(x => toOneWord(x.move) === move || (x.aliases && x.aliases.map(y => toOneWord(y)).includes(move)));
            
            if (hitbox) {
                const formatted = capitalize(`${hitbox.character} ${hitbox.move}`, [' ', '(', '/']);
                let embed = new Discord.RichEmbed() .setTitle(formatted) .setImage(hitbox.file) .setColor(character.color) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
                if (hitbox.comment) embed.setDescription(hitbox.comment);
                msg.channel.send(embed).then(resolve()).catch(e => reject(e));
            }
            else msg.channel.send('That move is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));
        });
    }
};
