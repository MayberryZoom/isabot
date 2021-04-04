module.exports = {
    name: 'credits',
    aliases: ['credit'],
    description: 'Shows people who helped make me!',
    category: 'info',
    execute(msg) {
        return new Promise (async (resolve, reject) => {
            let g = client.guilds.cache.get('513806689787445261');
            await g.members.fetch();
            const owner = await client.users.fetch('419688076076515328');
            const developers = await g.roles.fetch('513807019048828929');
            const contributors = await g.roles.fetch('518002389366865930');
            const testers = await g.roles.fetch('513813580441714688');
            
            let embed = new Discord.MessageEmbed()
                .setTitle('Friends that made me possible!')
                .addField('Owner', owner.toString())
                .addField('Developers', developers.members.map(m => m.toString()).join(', '))
                .addField('Contributors', contributors.members.map(m => m.toString()).join(', '))
                .addField('Testers', testers.members.map(m => m.toString()).join(', '))
                .setColor(isabotColor)
                .setFooter('Requested by ' + msg.author.tag, msg.author.avatarURL);;
            return msg.channel.send(embed).then(resolve()).catch(e => reject(e));
        });
    }
};
