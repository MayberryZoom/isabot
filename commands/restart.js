module.exports = {
    name: 'restart',
    description: '',
    hidden: true,
    execute(msg, args) {
        if (checkOwner()) {
            const { token } = require('../../token.json');
            sendLog('Restarting...');
            client.destroy()
            .then(client.login(token))
            .then(sendLog('Ready!'));
        }
    }
};
