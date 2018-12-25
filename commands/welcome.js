module.exports = {
    name: 'welcome',
    description: 'Welcome!',
    hidden: true,
    guildOnly: 1,
    guild: '489939754021027841',
    execute(msg, args) {
        sendMsg('Welcome! <:isaHeyyy:490255578061602828>')
        .then(() => { return sendLog(msg.author.tag + ' welcomed someone!') });
    }
};
