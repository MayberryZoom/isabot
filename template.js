module.exports = {
    // Command name used for the command handler and >help
    name: '',
    // Command description used for >help
    description: '',
    // Specifies the command's usage. This is the format of
    // '<argument desc> <another argument desc (if applicable)>'.
    // If none are given, replies with this. Also used in >help
    usage: '',
    // Specifies if the command must have an argument
    args: false,
    // Specifies the command's arguments. Used in the help command.
    arguments: '',
    // Specifies if the command is hidden from >help
    hidden: false,
    // Specifies if the command is enabled in DMs
    // undefined = enabled, 0 = response then ignore command, 1 = no response then ignore command
    dmDisabled: 0,
    // Array of guild IDs this is exclusive to
    guilds: [],
    // Command itself
    execute(msg, args) {

    }
};
