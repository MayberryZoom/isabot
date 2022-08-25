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
            
            let embed = new Discord.EmbedBuilder()
                .setTitle('Friends that made me possible!')
                .addFields(
                    { name: 'Owner', value: owner.toString() },
                    { name: 'Developers', value: developers.members.map(m => m.toString()).join(', ') },
                    { name: 'Contributors', value: contributors.members.map(m => m.toString()).join(', ') },
                    { name: 'Testers', value: testers.members.map(m => m.toString()).join(', ') }
                )
                .setColor(isabotColor)
                .setTimestamp();

            return msg.channel.send({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        });
    }
};
