module.exports = {
    name: 'pet',
    description: '',
    hidden: true,
    guildOnly: 1,
    guild: '489939754021027841',
    execute(msg, args) {        
        sendMsg('Please don\'t pet me! <:Isabadday:490255608923291660>');
        sendLog(msg.author.tag + ' petted Isabelle');
        sendLog(msg.author.tag + ' tried to pet Isabelle in ' + msg.guild.name);
    }
};