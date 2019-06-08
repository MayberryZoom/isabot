module.exports = {
    // constants
    owners: ['419688076076515328', '174758404571529216'],
    zeroWidthSpace: '\u200B',
    serverLink: 'https://discord.gg/YyYBRfF',
    color: '0xF3EE51',

    // functions
    sendLog: (toSend) => {
        client.channels.get('520039319260495891').send(toSend);
    },

    sleep: (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }
};
