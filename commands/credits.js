module.exports = {
    name: 'credits',
    aliases: ['credit'],
    description: 'Shows people who helped make me!',
    category: 'info',
    execute(msg) {
        return new Promise (async (resolve, reject) => {
            let g = await client.guilds.get('513806689787445261').fetchMembers();
            let embed = new Discord.RichEmbed()
                .setTitle('Friends that made me possible!')
                .addField('Owner', client.users.get('419688076076515328').toString())
                .addField('Developers', g.roles.get('513807019048828929').members.map(m => m.toString()).join(', '))
                .addField('Contributors', g.roles.get('518002389366865930').members.map(m => m.toString()).join(', '))
                .addField('Testers', g.roles.get('513813580441714688').members.map(m => m.toString()).join(', '))
                .setColor(isabotColor)
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL);;
            return msg.channel.send(embed).then(resolve()).catch(e => reject(e));
        });
    }
};
