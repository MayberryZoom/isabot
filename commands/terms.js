module.exports = {
    name: 'terms',
    description: 'Lists the terms that can be defined using the ``define`` command.',
    usage: '',
    arguments: 'None',
    execute(msg, args) {
        let currentServer; 
        for (let type in def) {
            if (def[type].data.server === msg.guild.id) {
                currentServer = def[type].data.name;
                break;
            }
        }
        if (currentServer === undefined) {
            currentServer = 'none';
        }

        const termsGeneral = Object.keys(def.general.terms).join(', ');
        const termsServer = Object.keys(def[currentServer].terms).join(', ');

        const embed = new Discord.RichEmbed() .setTitle('List of terms for ``define``') .addField('General Terms', termsGeneral) .setColor('0xCF2BCF');
        if (currentServer !== 'none') {
            embed.addField(def[currentServer].data.name + ' Terms', termsServer);
        }
        sendMsg(embed);
        if (msg.channel.type === 'dm') {
			sendLog(msg.author.tag + ' got a term list in their DMs');
			return;
		}
		sendLog(msg.author.tag + ' got a term list in ' + msg.guild.name);
    }
};