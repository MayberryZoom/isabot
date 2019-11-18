module.exports = {
    // constants
    owners: ['419688076076515328', '174758404571529216'],
    zeroWidthSpace: '\u200B',
    serverLink: 'https://discord.gg/YyYBRfF',
    isabotColor: '0xF3EE51',

    // functions
    sendLog: (toSend) => {
        client.channels.get('520039319260495891').send(toSend);
    },

    sleep: (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    },

    toOneWord: (text) => {
        let newText = text;
        [' ', '_', '-', '.', '(', ')', "'"].forEach(x => newText = newText.split(x).join(''))
        return newText;
    },

    capitalize: (text, split) => {
        let newText = text;
        split.forEach(x => newText = newText.split(x).map(y => y.charAt(0).toUpperCase() + y.substring(1)).join(x));
        return newText;
    }
};
