module.exports = {
    // Command name used for the command handler and >help
    name: '',
    // Aliases for this command
    aliases: [],
    // Command description used for >help
    description: '',
    // Specifies the command's usages. This is the format of
    // '<argument desc> <another argument desc (if applicable)>'.
    // If none are given, replies with this. Also used in >help
    usage: [],
    // Specifies if the command must have an argument
    args: false,
    // Specifies if the command is hidden from >help
    hidden: false,
    // Specifies if the command is exclusive to owners
    ownerOnly: false,
    // Specifies if the command is enabled in DMs
    // undefined = enabled, 1 = response then ignore command, 2 = no response then ignore command
    dmDisabled: 0,
    // Array of guild IDs this is exclusive to
    guilds: [],
    // Command category used for >help
    category: '',
    // Permissions required by the bot to execute this command (not working atm)
    botPermissions: [],
    // Permissions required by the user to execute this command (not working atm)
    userPermissions: [],
    // Command itself
    execute(msg, args) {
        return new Promise((resolve, reject) => {

        });
    }
};
