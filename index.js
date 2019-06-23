Discord = require('discord.js');
fs = require('fs');
global.client = new Discord.Client({
	messageCacheMaxSize: 1,
	disabledEvents: [
		'TYPING_START',
		'PRESENCE_UPDATE',
		'GUILD_MEMBER_UPDATE',
		'MESSAGE_REACTION_ADD',
		'GUILD_MEMBER_ADD',
		'GUILD_MEMBER_REMOVE'
	],
	disableEveryone: true
});

const { prefix } = require('./config.json');
const globals = require('./globals.js');
for (const [k, v] of Object.entries(globals)) global[k] = v;

const { token } = require('./token.json');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

// Response commands
const Response = require('./response.js');
new Response('hello', 'Hey there!', undefined, 'Makes me say "Hey there!"', ['hey', 'greetings', 'hi', 'what\'s', 'wassup', 'heyo', 'henlo', 'hiya', 'hoi', 'hewwo', 'oi', 'sup', 'yo', 'hola', 'whats', 'salut', 'ciao', 'salutations', 'bonjour']);
new Response('invite', 'Invite me to your server!\n<https://discordapp.com/oauth2/authorize?&client_id=513515391155175424&scope=bot&permissions=67497025>\nJoin my server!\n' + serverLink, `msg.author.tag + ' got my invite link!'`, 'Gets the link to invite me!', ['join']);
new Response('source', 'I\'m open source, so you can see all my code here!\n<https://github.com/Spexxtacular/isabot>', `msg.author.tag + ' got my source code!'`, 'Gets the link to my source code on GitHub!', []);
new Response('pet', 'Please don\'t pet me! <:isaBadDay:562485951558057984>', `msg.author.tag + " pet me (and I didn't like it!)"`, '', ['pat', 'headpat'], true, 2, ['489939754021027841', '513806689787445261']);
new Response('panda', '<https://goo.gl/A1XpL9>', undefined, 'Gets a cute panda picture', [], true, 2, ['489939754021027841']);
new Response('hug', '*hugs* <:isaGlee:513917768568143882>', `msg.author.tag + ' hugged me in ' + msg.guild.name`, '', ['embrace', 'huggle', 'huggles'], true);
new Response('hitboxes', 'https://youtu.be/rjf-8i44DgY', undefined, 'Gets the Ice Climbers\' hitboxes.', ['hitbox'], true, 2, ['456665686966796299']);
new Response('tom', 'This is my tom. There are many like it, but this one is mine.\nMy tom is my best friend. It is my life. I must master it as I must master my life.\nWithout me, my tom is useless. Without my tom, I am useless. I must fire my tom true. I must shoot straighter than my enemy who is trying to kill me. I must shoot him before he shoots me. I will ...\nBefore God, I swear this creed. My tom and myself are the defenders of my country. We are the masters of our enemy. We are the saviors of my life.\nSo be it, until there is no enemy, but peace. Amen.', undefined, 'tom', [], true, 2, ['456665686966796299']);
new Response('changelog', "- Added this command\n- Separated `>info`  into 4 commands (`>channel`, `>emoji`, `>server`, `>user`), also improved all 4 commands\n- Overhauled `>define`. Now get terms by using `>define` without arguments. Also allows you to access any character's terms from any server.\n- Added some Wii Fit Trainer terms\n- Removed `>data`'s move component and made it only grab stats using `>stats` (still unfinished :<)\n- Fixed some bugs with `>purge`\n- Added alises to a command's message with `>help`, also made it possible to access a command's help with its aliases\n- New fun command, `>cursed`\n- Improved `>convert`\n- Various performance optimizations", undefined, 'List of my recent changes!', ['changes']);

client.on('message', async msg => {
	if (!msg.content.startsWith(prefix || client.user.toString()) || msg.author.bot) return;

	// variables
	const args = msg.content.startsWith(client.user.toString()) ? msg.content.slice(client.user.toString().length).split(/ +/) : msg.content.slice(prefix.length).split(/ +/);
	if (args[0] === '') args.shift();
	const commandName = args.shift().toLowerCase();

	// commands
	const command = client.commands.get(commandName)
	        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
		if (!command) return;

	if (command.ownerOnly && !owners.includes(msg.author.id)) return msg.channel.send('Only the bot owners can use this command!');

	if (command.dmDisabled && msg.channel.type === 'dm') {
		if (command.dmDisabled === 1) {
			return msg.reply('that command is not available inside DMs!');
		}
		else if (command.dmDisabled === 2) {
			return;
		}
	}

	if(command.guilds) {
		if (!command.guilds.includes(msg.guild.id)) {
			return;
		}
	}

	if (command.args && !args.length) {
		let reply = 'Please provide an argument!';
		if (command.usage) reply += `\nThe proper usage is \`\`\`${prefix}${command.name} ${command.usage}\`\`\``;

        return msg.channel.send(reply);
	}

	command.execute(msg, args)
	.then(log => { log ? sendLog(log) : sendLog(`${msg.author.tag} used \`${command.name}\`${msg.channel.type === 'dm' ? '' : ` in ${msg.guild.name}`}.`); })
	.catch(error => {
		sendLog(
			'<@&513807019048828929> there was an error!\n\nCommand:```' + command.name +
			'```\nError' + (error.lineNumber ? ` (at line ${error.lineNumber}')` : '') + ':```' + error.message + '```');
		console.error(error);
		msg.reply('there was an error trying to execute that command! You can report it here: ' + serverLink);
	});
});

client.on('guildCreate', guild => {
	sendLog('<@&513807019048828929> I joined ' + guild.name);
});

client.once('ready', () => {
    sendLog('<@&513807019048828929> Ready!');
	client.user.setActivity('"' + prefix + '" is my prefix!')
	setInterval(() => {
		for (const g of client.guilds.values()) {
			g.members.clear();
			g.presences.clear();
		}
	}, 1000 * 60);
});

client.login(token);
