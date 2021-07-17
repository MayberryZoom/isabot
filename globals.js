module.exports = {
    // constants
    owners: ['419688076076515328', '174758404571529216'],
    zeroWidthSpace: '\u200B',
    serverLink: 'https://discord.gg/YyYBRfF',
    isabotColor: '0xF3EE51',

    // functions
    sendLog: (toSend) => {
        client.channels.cache.get('520039319260495891').send(toSend);
    },

    sleep: (ms) => {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    },

    getWords: (text) => {
        let newText = text;
        ['_', '-', '.', '(', ')', "'", '/'].forEach(x => newText = newText.split(x).join(' '))
        return newText.split(' ');
    },

    toOneWord: (text) => {
        let newText = text;
        [' ', '_', '-', '.', '(', ')', "'", '/'].forEach(x => newText = newText.split(x).join(''))
        return newText;
    },

    capitalize: (text, split) => {
        let newText = text;
        split.forEach(x => newText = newText.split(x).map(y => y.charAt(0).toUpperCase() + y.substring(1)).join(x));
        return newText;
    },

    checkAllPermutations: (text, arr) => {
        if (arr.find(x => toOneWord(x) === text.join(''))) return true;

        let permutations = (a) => {
            if (a.length < 2) return a;
            else {
                let result = [];
        
                for (let i = 0; i < a.length; i++) {
                    let x = [a[i]];
        
                    for (let p of permutations(a.slice(0, i).concat(a.slice(i + 1)))) {
                        if (p === true) return true;

                        let y = x.concat(p).join(' ');
                        if (text.length === y.split(' ').length && arr.find(z => toOneWord(z) === toOneWord(y))) return true;

                        if (!result.includes(y)) result.push(y);
                    }
                }
        
                return result;
            }
        }

        return permutations(text) === true;
    }
};
