module.exports = {
    name: 'hug',
    hidden: true,
    execute(msg, args) {
      if (Math.floor(Math.random() * 1000) + 1 === 414) {
        sendMsg('wat');
      }
      sendLog(msg.author.tag + ' failed to hug Isabelle in ' + msg.guild.name);
    }
};
