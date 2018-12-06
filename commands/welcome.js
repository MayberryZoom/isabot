module.exports = {
    name: 'welcome',
    description: 'Welcome!',
    hidden: true,
    guildOnly: 1,
    guild: '489939754021027841',
    execute(msg, args) {
        sendMsg('Welcome! <:isaHeyyy:490255578061602828>');
        sendLog(msg.author.tag + ' welcomed someone!');

        sendLog(msg.author.tag + ' tried to welcome someone in ' + msg.guild.name);
    }
};