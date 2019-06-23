module.exports = class {
	constructor(name, response, log, description, aliases, hidden, dmDisabled, guilds) {
		this.name = name;
		this.response = response;
		this.log = log;
		this.aliases = aliases;
		this.description = description;
		this.usage = '';
		this.hidden = hidden;
		this.dmDisabled = dmDisabled;
		this.guilds = guilds;

		client.commands.set(this.name, this)
	}

	execute(msg) {
		return new Promise((resolve, reject) => {
			msg.channel.send(this.response)
			.then(resolve(eval(this.log)))
			.catch((e) => reject(e));
		});
	}
}