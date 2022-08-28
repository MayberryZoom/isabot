const axios = require('axios');
const album = 'T81FcEL';
let disabledChannels = new Discord.Collection();

let cache;
let etag = '';

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('isabelle')
        .setDescription('Gets an Isabelle picture! ⚠/🔞 means the source contains suggestive/explicit content, respectively.'),
    aliases: ['isa', 'izzy', 'belle'],
    cooldown: 3,
    execute(interaction) {
        return new Promise(async (resolve, reject) => {
            if (disabledChannels.get(interaction.channel.id)) return interaction.reply('That command is on cooldown!').then(resolve()).catch(e => reject(e));

            await interaction.deferReply();

            disabledChannels.set(interaction.channel.id, 'h');
            setTimeout(() => { disabledChannels.delete(interaction.channel.id) }, this.cooldown * 1000)

            const my_id = await client.channels.fetch('621592279919886338');

            const options = {
                params: { client_id: my_id.topic },
                headers: { "If-None-Match": etag }
            }

            await axios.get(`https://api.imgur.com/3/album/${album}/images`, options).then(res => {
                if (res.data.data || !cache) {
                    etag = res.headers.etag;
                    cache = res.data.data;
                }
            }).catch(e => {
                if (e.message === 'Request failed with status code 304') return;
                reject(e);
            });

            const image = cache[Math.floor(Math.random() * cache.length)];
            const embed = new Discord.EmbedBuilder()
                .setTitle('Random Isabelle!')
                .setImage(image.link)
                .setColor(isabotColor)
                .setTimestamp();
            if (image.description) embed.setDescription(image.description.replace('Source', '**Source').replace('(18+)', '🔞').replace(/\(suggestive content\)/i, '⚠').replace(':', ':**\n'));

            interaction.editReply({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        });
    }
};
