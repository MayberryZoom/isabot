const jokes = [
    "What did the fish say when he swam into a wall? *Dam.* <:isaFunnyface:491784813502529536>",
    "What do you call a fish with no eyes? A *fsh.* <:isaFunnyface:491784813502529536>",
    "So, I sold my vacuum the other day... All it was doing was *collecting dust.* <:isaFunnyface:491784813502529536>",
    "Two windmills are standing in a wind farm. One asks, \"What's your favorite type of music?\" The other says, \"I'm a big metal *fan.*\" <:isaFunnyface:491784813502529536>",
    "You know, I like elephants. But everything else is *irrelephant.* <:isaFunnyface:491784813502529536>",
    "What's red and bad for your teeth? A brick.",
    "So, Mayor, did you hear about the story of a claustrophobic astronaut? All he needed was some *space.* <:isaFunnyface:491784813502529536>",
    "So, a man and a giraffe walk into a bar. After a few drinks, the giraffe falls over and dies! The man begins to walk out when the bartender stops him, \"Hey, you just can't leave him lyin' there!\" Said the bartender. The man turns around and says, \"It's not a lion. It's a giraffe.\" <:isaFunnyface:491784813502529536>",
    "Why should you never talk to Pi? *Because she'll go on and on and on forever.* <:isaFunnyface:491784813502529536>",
    "Why do plants hate math? *Because it gives them square roots.* <:isaFunnyface:491784813502529536>",
    "Hey, are monsters good at math? I suppose I have to *count Dracula.* <:isaFunnyface:491784813502529536>",
    "Did you hear about the mathematician whose afraid of negative numbers? *He'll stop at nothing to avoid them.* <:isaFunnyface:491784813502529536>",
    "What did the hungry Dalmation say when he had some kibble? *That hit the spot.* <:isaFunnyface:491784813502529536>",
    "What kind of car does Yoda drive? A *Toyoda.* <:isaFunnyface:491784813502529536>"
]

module.exports = {
    name: 'joke',
    description: 'Tells a joke!',
    usage: '',
    category: 'fun',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send(jokes[Math.floor(Math.random() * jokes.length)])
            .then(resolve(msg.author.tag + ' asked for a joke'))
            .catch((e) => reject(e));
        });
    }
};
