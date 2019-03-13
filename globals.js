module.exports = {
    // requires
    Discord: require('discord.js'),
    Client: require('discord.js'),
    RichEmbed: require('discord.js'),
    config: require('./config.json'),
    def: require('./terms.json'),
    prefix: require('./config.json'),
    client: new Discord.Client(),
    fs: require('fs'),
    datatable: require('./movedata.json'),
    average: require('image-average-color'),

    // constants
    ownerIDs: ['419688076076515328', '174758404571529216'],
    zeroWidthSpace: '​',
    serverLink: 'https://discord.gg/YyYBRfF',

    // functions
    sendLog: function sendLog(toSend) {
        client.channels.get('520039319260495891').send(toSend, { disableEveryone: true});
    },
    sleep: function sleep(ms) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
};
