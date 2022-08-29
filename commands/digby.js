const axios = require('axios');
const album = 'OEVvXT6';
let disabledChannels = new Discord.Collection();

let cache;
let etag = '';

module.exports = {
    name: 'digby',
    description: 'Gets a Digby picture! ⚠ means the source contains suggestive content, 🔞 means the source contains explicit content.',
    cooldown: 3,
    category: 'fun',
    execute(msg) {
        return new Promise(async (resolve, reject) => {
            if (disabledChannels.get(msg.channel.id)) return msg.channel.send('That command is on cooldown!').then(resolve()).catch(e => reject(e));
            disabledChannels.set(msg.channel.id, 'h');
            setTimeout(() => { disabledChannels.delete(msg.channel.id) }, this.cooldown * 1000)

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
            .setTitle('Random Digby!')
                .setImage(image.link)
                .setColor(isabotColor)
                .setTimestamp();
            if (image.description) embed.setDescription(image.description.replace('Source', '**Source').replace('(18+)', '🔞').replace(/\(suggestive content\)/i, '⚠').replace(':', ':**\n'));
            
            return msg.channel.send({ embeds: [embed] }).then(resolve()).catch(e => reject(e));
        });
    }
};
