module.exports = {
    name: 'say',
    description: 'She\'s alive!',
    hidden: true,
    ownerOnly: true,
    category: 'owner',
    execute(msg, args) {
        return new Promise((resolve, reject) => {
            client.channels.cache.get('489939754717151233').send(args.join(" "))
            .then(resolve())
            .catch((e) => reject(e));
        });
    }
};
