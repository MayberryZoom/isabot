module.exports = {
    name: 'hug',
    hidden: true,
    aliases: ['embrace', 'huggle', 'huggles'],
    execute(msg, args) {
      msg.channel.send('*hugs* <:isaGlee:513917768568143882>');
      sendLog(msg.author.tag + ' hugged me in ' + msg.guild.name);
    }
};
