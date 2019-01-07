module.exports = {
    name: 'info',
	description: 'Shows information about a server, user, or channel.',
	usage: '<item> <instance>',
    arguments: '``me``, ``user``, ``server``, ``channel``, none',
    execute(msg, args) {
        if (!args[0]) {
			const embedServer = new Discord.RichEmbed() .setTitle('``server``') .setColor('0xCF2BCF') .addField('``Description``', 'Shows information about the server.') .addField('Usage', '``>info server``') .addField('Arguments', 'None');
			const embedUser = new Discord.RichEmbed() .setTitle('``user``') .setColor('0xCF2BCF') .addField('``Description``', 'Shows information about a user. If no arguments are provided, information will be shown about yourself.') .addField('Usage', '``>info user <mention>``') .addField('Arguments', 'Any user mention, none');
			const embedMe = new Discord.RichEmbed() .setTitle('``me``') .setColor('0xCF2BCF') .addField('``Description``', 'Shows information about yourself.') .addField('Usage', '``>info me``') .addField('Arguments', 'None');
			const embedChannel = new Discord.RichEmbed() .setTitle('``channel``') .setColor('0xCF2BCF') .addField('``Description``', 'Shows information about a channel. If no arguments are provided, information will be shown about the current channel.') .addField('Usage', '``>info channel <channel>``') .addField('Arguments', 'Any channel mention, ``this``, none');
			try {
				msg.author.send('__Help for ``>info``__')
				.then(() => msg.author.send(embedServer))
				.then(() => msg.author.send(embedUser))
				.then(() => msg.author.send(embedMe))
				.then(() => msg.author.send(embedChannel))
				.then(() => msg.reply(' I have DM\'d you the help command!'));
			}
			catch (error) {
				sendLog('<@&513807019048828929> there was an error!\n\n```' + error + '```');
				msg.reply('it seems like I can\'t DM you! Do you have DMs disabled?');
			}
		}
		else if (msg.channel.type === 'dm') {
			sendMsg('That command is not available in DMs.');
			return;
		}
		else if (args[0] === 'server') {
			const g = msg.guild;
			const createTime = g.createdAt;
			let roleCount = 0;
			g.roles.map(r => roleCount++);
			let channelCount = 0;
			g.channels.map(c => channelCount++);
			let min; if (createTime.getMinutes().toString().length === 1) { min = '0' + createTime.getMinutes(); } else { min = createTime.getMinutes(); }
			let sec; if (createTime.getSeconds().toString().length === 1) { sec = '0' + createTime.getSeconds(); } else { sec = createTime.getSeconds(); }
			const embed = new Discord.RichEmbed() .setTitle(g.name) .setColor('0xCF2BCF') .setThumbnail(g.iconURL) .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST') .addField('Owner', g.owner.user.tag) .addField('Members', g.memberCount) .addField('Channel Count', channelCount) .addField('Role Count', roleCount);
			sendMsg(embed);
			sendLog(msg.author.tag + ' got ' + msg.guild.name + '\'s info');
		}
		else if (args[0] === 'me' || (args[0] === 'user' && args[1] === 'me') || (args[0] === 'user' && !args[1])) {
			const u = msg.author;
			const m = userToMember(u)
			const createTime = u.createdAt;
			const joinTime = msg.member.joinedAt;
			let min; if (createTime.getMinutes().toString().length === 1) { min = '0' + createTime.getMinutes(); } else { min = createTime.getMinutes(); }
			let sec; if (createTime.getSeconds().toString().length === 1) { sec = '0' + createTime.getSeconds(); } else { sec = createTime.getSeconds(); }
			let minJ; if (joinTime.getMinutes().toString().length === 1) { minJ = '0' + joinTime.getMinutes(); } else { minJ = joinTime.getMinutes(); }
			let secJ; if (joinTime.getSeconds().toString().length === 1) { secJ = '0' + joinTime.getSeconds(); } else { secJ = joinTime.getSeconds(); }
			const embed = new Discord.RichEmbed() .setTitle(u.username) .setColor(userToMember(u).displayHexColor) .setThumbnail(u.avatarURL) .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST') .addField('Guild Join Date', joinTime.toDateString() + ' at ' + joinTime.getHours() + ':' + minJ + ':' + secJ + ', EST') .addField('Roles', m.roles.map(r => r.name).join(', '));
			sendMsg(embed);
			sendLog(msg.author.tag + ' got their info in ' + msg.guild.name);
		}
		else if (args[0] === 'user') {
			if (!msg.mentions.users.array().includes(userFromMention(args[1]))) { return msg.reply('please mention a user!'); }
			const u = userFromMention(args[1]);
			msg.guild.fetchMember(u.id).then(() => {
				const m = userToMember(u);
				const createTime = u.createdAt;
				const joinTime = msg.guild.members.get(u.id).joinedAt;
				let min; if (createTime.getMinutes().toString().length === 1) { min = '0' + createTime.getMinutes(); } else { min = createTime.getMinutes(); }
				let sec; if (createTime.getSeconds().toString().length === 1) { sec = '0' + createTime.getSeconds(); } else { sec = createTime.getSeconds(); }
				let minJ; if (joinTime.getMinutes().toString().length === 1) { minJ = '0' + joinTime.getMinutes(); } else { minJ = joinTime.getMinutes(); }
				let secJ; if (joinTime.getSeconds().toString().length === 1) { secJ = '0' + joinTime.getSeconds(); } else { secJ = joinTime.getSeconds(); }
				let embed = new Discord.RichEmbed();
				if (u.id === '513515391155175424') {
					embed .setTitle(u.username) .setColor(m.displayHexColor) .setThumbnail(u.avatarURL) .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST') .addField('Guild Join Date', joinTime.toDateString() + ' at ' + joinTime.getHours() + ':' + minJ + ':' + secJ + ', EST') .addField('Roles', m.roles.map(r => r.name).join(', ')) .addField('Other Information', 'The best!');
				}
				else {
					embed .setTitle(u.username) .setColor(m.displayHexColor) .setThumbnail(u.avatarURL) .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST') .addField('Guild Join Date', joinTime.toDateString() + ' at ' + joinTime.getHours() + ':' + minJ + ':' + secJ + ', EST') .addField('Roles', m.roles.map(r => r.name).join(', '));
				}
				sendMsg(embed);
				sendLog(msg.author.tag + ' got info for ' + u.tag + ' in ' + msg.guild.name);
			});
		}
		else if ((args[0] === 'channel' || (args[0] === 'channel' && args[1] === 'this')) && !args[1]) {
			msg.guild.fetchMembers().then(() => {
				const c = msg.channel;
				const createTime = c.createdAt;
				let cTopic;
				if (c.topic) { cTopic = c.topic; } else { cTopic = 'No channel topic'; }
				let min; if (createTime.getMinutes().toString().length === 1) { min = '0' + createTime.getMinutes(); } else { min = createTime.getMinutes(); }
				let sec; if (createTime.getSeconds().toString().length === 1) { sec = '0' + createTime.getSeconds(); } else { sec = createTime.getSeconds(); }
				const embed = new Discord.RichEmbed() .setTitle(c.name) .setColor('0xCF2BCF') .setThumbnail(msg.guild.iconURL) .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST') .addField('Channel Topic', cTopic) .addField('Members', c.members.size);
				sendMsg(embed);
				sendLog(msg.author.tag + ' got info for ' + c.name + ' in ' + msg.guild.name);
			});
		}
		else if (args[0] === 'channel') {
			if (!msg.mentions.channels.array().includes(channelFromMention(args[1]))) { return msg.reply('please mention a channel!'); }
			msg.guild.fetchMembers().then(() => {
				const c = channelFromMention(args[1]);
				const createTime = c.createdAt;
				let cTopic;
				if (c.topic) { cTopic = c.topic; } else { cTopic = 'No channel topic'; }
				let min; if (createTime.getMinutes().toString().length === 1) { min = '0' + createTime.getMinutes(); } else { min = createTime.getMinutes(); }
				let sec; if (createTime.getSeconds().toString().length === 1) { sec = '0' + createTime.getSeconds(); } else { sec = createTime.getSeconds(); }
				const embed = new Discord.RichEmbed() .setTitle(c.name) .setColor('0xCF2BCF') .setThumbnail(msg.guild.iconURL) .addField('Created At', createTime.toDateString() + ' at ' + createTime.getHours() + ':' + min + ':' + sec + ', EST') .addField('Channel Topic', cTopic) .addField('Members', c.members.size);
				sendMsg(embed);
				sendLog(msg.author.tag + ' got info for ' + c.name + ' in ' + msg.guild.name);
			});
		}
		else if (args[0] === 'emoji' || args[0] === 'emote') {
			return;
		}
    }
};