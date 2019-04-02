module.exports = {
    name: 'pet',
    aliases: ['pat', 'headpat'],
    description: '',
    hidden: true,
    dmDisabled: 1,
    guilds: ['489939754021027841'],
    execute(msg, args) {
        msg.channel.send('Please don\'t pet me! <:isaBadDay:562485951558057984>')
        .then(() => { return sendLog(msg.author.tag + ' petted Isabelle (and she didn\'t like it)') });
    }
};
