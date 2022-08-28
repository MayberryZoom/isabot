const twitter = '<:twitter:607841501279420416>';
const discord = '<:discord:607841509253054464>';
const www = '<:www:673835229022126101>';

const hitboxCredits =
`**Zeckemyro** (${twitter} [@Zeckemyro](https://twitter.com/Zeckemyro)) - Hitbox visualizations
**UFD** (${twitter} [@ultframedata](https://twitter.com/ultframedata), ${www} [Website](https://ultimateframedata.com/)) - Having the images uploaded somewhere I can grab them from`;

const attributeCredits =
`**Kurogane Hammer** (${twitter} [@kuroganehammer](https://twitter.com/kuroganehammer), ${www} [Website](https://kuroganehammer.com/)) - Datamining character attributes`

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('credits')
        .setDescription('Shows the people who helped make me!'),
    aliases: ['credit'],
    category: 'info',
    execute(interaction) {
        return new Promise (async (resolve, reject) => {
            let g = client.guilds.cache.get('513806689787445261');
            await g.members.fetch();
            const owner = await client.users.fetch('419688076076515328');
            const developers = await g.roles.fetch('513807019048828929');
            const contributors = await g.roles.fetch('518002389366865930');
            const testers = await g.roles.fetch('513813580441714688');
            
            let embed = new Discord.EmbedBuilder()
                .setTitle('Awesome people that made me possible!')
                .addFields(
                    { name: 'Owner', value: owner.toString() },
                    { name: 'Developers', value: developers.members.map(m => m.toString()).join(', ') },
                    { name: 'Contributors', value: contributors.members.map(m => m.toString()).join(', ') },
                    { name: 'Testers', value: testers.members.map(m => m.toString()).join(', ') },
                    { name: 'Hitbox Data', value: hitboxCredits },
                    { name: 'Attribute Data', value: attributeCredits }
                )
                .setColor(isabotColor)
                .setTimestamp();

            interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        });
    }
};
