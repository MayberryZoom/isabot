const { inspect } = require('util');

const clean = text => {
	if (typeof(text) === "string") return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
	else return text;
}

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('eval')
		.setDescription('eval')
        .addStringOption(option =>
            option.setName('code')
                .setDescription('Code to eval')
                .setRequired(true))
		.addBooleanOption(option =>
			option.setName('no-return')
				.setDescription('Don\'t return value')),
	ownerOnly: true,
	execute(interaction) {
		return new Promise(async (resolve, reject) => {
			let shouldReturn = !!interaction.options.getBoolean('return');

			try {
				let evaled = await new Promise(resolve => resolve(eval(interaction.options.getString('code'))));
				if (shouldReturn) return;

				if (typeof evaled !== "string") evaled = inspect(evaled);

				interaction.reply('```js\n' + evaled + '```').then(resolve()).catch(e => reject(e));
			} catch (err) {
				interaction.reply('`ERROR` ```xl\n' + clean(err) + '\n```').then(resolve()).catch(e => rejects(e));
			}
		});
	}
};
