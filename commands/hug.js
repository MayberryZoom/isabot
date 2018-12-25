module.exports = {
    name: 'hug',
    hidden: true,
    guildOnly: 1,
    guild: ['489939754021027841'],
    execute(msg, args) {
      if (Math.floor(Math.random() * 1000) + 1 === 0414) {
        return sendMsg('wat');
      }
      sendLog(msg.author.tag + ' failed to hug Isabelle in ' + msg.guild.name);
    }
};
