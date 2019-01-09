module.exports = {
    name: 'pet',
    description: '',
    hidden: true,
    guildOnly: 1,
    guild: ['489939754021027841'],
    execute(msg, args) {        
        msg.channel.send('Please don\'t pet me! <:Isabadday:490255608923291660>')
        .then(() => { return sendLog(msg.author.tag + ' petted Isabelle (and she didn\'t like it)') });
    }
};
