const hitboxes = require('../hitboxes.js');
const characters = new Discord.Collection(
    [
        ['isabelle', { name: 'isabelle', aliases: ['isa', 'izzy', 'issy'], color: '0xebdb34' }],
        ['pichu', { name: 'pichu', aliases: ['nerfed'], color: '0xF3EE51' }]
    ]
);
const credits = `Struggleton (<:twitter:607841501279420416> @Struggleton <:discord:607841509253054464>@Struggleton#4071) - Pichu, Plant
Invy (<:twitter:607841501279420416>@isolatedinvy <:discord:607841509253054464>@invy#7828) - Isabelle (all except otherwise noted)
Lewdcario (<:twitter:607841501279420416>@Lewdicario <:discord:607841509253054464>@Lewdcario#0448) - Isabelle (NAir)`
EyeDonutz (<:twitter:1001753037004722176>@theEyeDonutz <discord:298239475996426241>@EyeDonutz#0151) - Plant (commands);

module.exports = {
    name: 'hitbox',
    description: 'Grabs a hitbox visualization for a move. Currently missing many moves!',
    usage: '<character> <move>',
    args: true,
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            if (args[0] === 'credit' || args[0] === 'credits') return msg.channel.send(credits).then(resolve()).catch(e => reject(e));

            let character = args.shift().toLowerCase(); character = characters.get(character) || characters.find(c => c.aliases.includes(character));
            if (character === null) return msg.channel.send('That character is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));

            const filtered = hitboxes.filter(x => x.character === character.name);
            if (!filtered.length) return msg.channel.send('That character is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));
            if (!args[0]) return msg.channel.send('Please provide a move!').then(resolve()).catch(e => reject(e));
            
            const move = args.join(' ').toLowerCase();
            const hitbox = filtered.find(x => x.move === move || x.aliases.includes(move));
            if (hitbox) {
                const formatted = capitalize(`${hitbox.character} ${hitbox.move}`, [' ', '(', '/']);
                let embed = new Discord.RichEmbed() .setTitle(formatted) .setImage(hitbox.file) .setColor(character.color) .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL) .setTimestamp();
                if (hitbox.comment) embed.setDescription(hitbox.comment);
                msg.channel.send(embed)
                .then(resolve())
                .catch(e => reject(e));
            }
            else msg.channel.send('That move is either not valid, or not included yet!').then(resolve()).catch(e => reject(e));
        });
    }
};
