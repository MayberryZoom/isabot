const getBoosters = (guild) => guild.roles.cache.find(r => r.name === 'Nitro Booster');

const calculateBoost = (count) => {
    switch (count) {
        case count > 14:
            return 3;
        case count > 17:
            return 2;
        case count > 2:
            return 1;
        default:
            return 0;
    }
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('server')
        .setDescription('Displays information about this server.')
        .setDMPermission(false)
        .addStringOption(option =>
            option.setName('property')
                .setDescription('Displays a specific property, rather than general info')
                .addChoices(
                    { name: 'Icon', value: 'icon' },
                    { name: 'Splash Image', value: 'splash' },
                    { name: 'Banner Image', value: 'banner' }
                )),
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            let property = interaction.options.getString('property');
            const guild = interaction.guild;
            await guild.members.fetch();

            if (!property) {
                const guildOwner = await guild.fetchOwner();

                const channels = `📁 ${guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildCategory).size}` +
                `\u2001⌨ ${guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildText).size}` +
                `\u2001🔊 ${guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildVoice).size}` +
                `\u2001💬 ${guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildPublicThread || c.type === Discord.ChannelType.GuildPrivateThread).size}` +
                `\u2001📥 ${guild.channels.cache.filter(c => c.type === Discord.ChannelType.GuildForum).size}`;

                let boosterCount = getBoosters(guild)
                boosterCount = boosterCount ? boosterCount.members.cache.size : 0;
                const boostLevel = calculateBoost(boosterCount);

                const embed = new Discord.EmbedBuilder()
                    .setTitle(guild.name + ' (' + guild.id + ')')
                    .setColor(isabotColor)
                    .setThumbnail(guild.iconURL())
                    .addFields(
                        { name: 'Created At', value: guild.createdAt.toUTCString(), inline: true },
                    	{ name: 'Owner', value: guildOwner.user.tag, inline: true },
                        { name: '\u200b', value: '\u200b', inline: true },
                    	{ name: 'Channels', value: channels, inline: true },
                    	{ name: 'Members', value: `${guild.memberCount} (👤 ${guild.members.cache.filter(m => !m.user.bot).size}\u2001🤖 ${guild.members.cache.filter(m => m.user.bot).size})`, inline: true },
                        { name: 'Roles', value: (guild.roles.cache.size - 1).toString(), inline: true },
                        { name: 'Emojis and Stickers', value: `😀 ${guild.emojis.cache.size}\u2001🖼️ ${guild.stickers.cache.size}`, inline: true },
                        { name: 'Boost Level', value: boostLevel ? 'Level ' + calculateBoost(guild) : '0', inline: true },
                        { name: 'Boosters', value: boosterCount.toString(), inline: true },
                    )
                    .setTimestamp();

                interaction.reply({ embeds: [embed] }).then(resolve()).catch((e) => reject(e));
            }
            else {
                if (property === 'icon') {
                    const embed = new Discord.EmbedBuilder()
                        .setTitle(guild.name + "'s icon")
                        .setImage(guild.iconURL())
                        .setColor(isabotColor)
                        .setTimestamp();

                    interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
                }
                else if (property === 'splash') {
                    const splash = guild.splashURL();
                    if (!splash) return interaction.reply(guild.name + ' has no splash image.').then(resolve()).catch(e => reject(e));

                    const embed = new Discord.EmbedBuilder()
                        .setTitle(guild.name + "'s splash image")
                        .setImage(splash)
                        .setColor(isabotColor)
                        .setTimestamp();

                    interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
                }
                else if (property === 'banner') {
                    const banner = guild.bannerURL();
                    if (!banner) return interaction.reply(guild.name + ' has no banner image.').then(resolve()).catch(e => reject(e));

                    const embed = new Discord.EmbedBuilder()
                        .setTitle(guild.name + "'s banner image")
                        .setImage(banner)
                        .setColor(isabotColor)
                        .setTimestamp();

                    interaction.reply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
                }
            }
        });
    }
};
