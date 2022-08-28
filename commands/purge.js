module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('purge')
        .setDescription('Bulk deletes messages')
        .setDMPermission(false)
        .setDefaultMemberPermissions(Discord.PermissionFlagsBits.ManageMessages)
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Number of messages to purge')
                .setMinValue(2)
                .setMaxValue(100)
                .setRequired(true)),
    aliases: ['p', 'delete'],
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            const me = await interaction.guild.members.fetch(client.user.id);
            if (!me.permissionsIn(interaction.channel).has(Discord.PermissionFlagsBits.ManageMessages)) return interaction.reply('I don\'t have the Manage Messages permission!').then(resolve()).catch((e) => reject(e));

            const amount = interaction.options.getInteger('amount');

            await interaction.reply({ content: 'Deleting messages...', ephemeral: true });
            await interaction.channel.bulkDelete(amount, true);
            interaction.editReply('Done!').then(resolve()).catch((e) => reject(e));
        });
    }
};
