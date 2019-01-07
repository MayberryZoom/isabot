module.exports = {
    name: 'hug',
    hidden: true,
    execute(msg, args) {
      let num = Math.floor(Math.random() * 950) + 1;

      if (num == 414) {
        sendMsg('wat');
      }
      sendLog(msg.author.tag + ' failed to hug Isabelle in ' + msg.guild.name + '. ``num`` was ' + num);
    }
};
