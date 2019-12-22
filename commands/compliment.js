const compliments = [
    "`Hi ${user}, I hope you're having a wonderful day! Remember that everyone loves you! <:isaHeyyy:490255578061602828>`",
    "`${user}, if you're ever feeling like a bad day is dreading, just come talk to me, Isabelle! Never shy to talk to a person that's wonderful like yourself!`",
    "`You're a sweet person, ${user}. <:isaGlee:513917768568143882>`",
    "`Don't feel stressed out if something bad happens ${user}, it always turns out okay for a person like you!`",
    "`${user}, remember that I will be available to talk to anyone. If no one is around, come hang out with me. I love people!`",
    "`You're very silly, ${user}!`",
    "`${user}, you're so nice to talk to!`",
    "`${user}, did you know you're lovely to talk to?`",
    "`${user}, you're quite amazing!`",
    "`I like you a lot, ${user}, thanks for coming by! Make sure to bring some seashells too... <:sweetiebelle:490268241244061699>`",
    "`${user}, what do you and my twin brother Digby have in common? You're both cute!`",
    "`You're really funny ${user}!`",
    "`Heehee, I'm glad I was able to provide some comfort for you, ${user}. I don't want my friends feeling sad. You're too nice to be around!`",
    "`Mayor ${user}, you must be feeling tired. You must rest after a long battle of Smash. I'm always cheering you on! <:isaHeyyy:490255578061602828>`",
    "`Mayor ${user}, are you feeling okay? It's a good reminder that you're an amazing mayor. I'm glad you're here with us!`",
    "`Come on, ${user}! Let's go and tell everyone that you're here, they'll be just as happy as I am!`",
    "`I can't wait to start my day off with you, ${user}!`",
    "`${user}, there's a special person out there, want to know who it is? The person reading this! <:sweetiebelle:490268241244061699>`",
    "`What? You think I'm adorable? Well I can say the same about you, Mayor ${user}!`",
    "`I hope you appreciate hugs ${user}, because I would give lots of hugs to a wonderful Mayor such as yourself.`",
    "`${user}, I hope that you'll stick with us for as long as you can. I don't know what I would do without you, Mayor. Running a town is so much harder than it looks! <:isaNervous:491751668363558913>`",
    "`You all the way, Mayor ${user}!`",
    "`Thank you for being my friend, Mayor ${user}.`",
    "`${user}, no matter how hard life is, it'll all be okay. I'm here for as long as you need me, Mayor. Never feel like you're alone when you have me around!`",
    "`Mayor ${user}, I have something for you. A virtual hug!... I have to pretend that I sent it virtually, haha. <:pillowbelle:491712654608433152>`",
    "`You say you have an \"emote\" of me? I don't know what an emote is, but I'm sure it's just as lovely as you, ${user}!`",
    "`Hello Mayor ${user}, it's great to see you today!`",
    "`Oh! It's nice of you to say hi, Mayor ${user}!`",
    "`*hugs ${user}*`",
    "`Don't worry if times ever get hard ${user}, I'm always here when you need me!`",
    "`You should come visit the town sometime, Mayor ${user}! Everyone's waiting to see you again!`",
    "`If you ever feel down ${user}, just remember a good attitude will always take you further than a bad habit. <:isaGlee:513917768568143882>`",
    "`What's the only thing sweeter than my coffee? That's right, it's ${user}!`",
    "`${user}, if things seem to be at their lowest, then things can only get better!`",
    "`Hiya Mayor ${user}, it's always great to see you!`",
    "`${user}, I know you weren't originally supposed to be the Mayor, but it's the happiest mistake I've ever made! <:isaHeyyy:490255578061602828>`",
    "`If you ever need a hand with anything ${user}, just let me know! I'm always happy to help!`",
    "`I'm not the best at fighting, so thank you for helping me improve, ${user}! <:isaThonk:537312545682489345>`",
    "`${user}, did you know that you're beautiful?`",
    "`Can't imagine a town without someone as precious as you, Mayor ${user}!`",
    "`${user}, you're so cute when you blush, heehee!`",
    "`Sometimes ${user}, we might feel lonely. But that's all right because as long as you got your friends behind you, nothing can go wrong!`",
    "`Well, Mayor ${user}, you have such a nice smile. I love seeing it!`",
    "`Oh, teehee, you make us laugh a lot, Mayor ${user}.`",
    "`Mayor ${user}, you always brighten our days when we are at our worst possible times... As long as we have you, there's no reason to be sad and feel lonely!`",
    "`Aw, Mayor ${user}, I'm sorry that you feel down in the slightest of ways. I'm here for you and so are your friends, none of us want to see you down!`",
    "`I wish I could give you a nice big hug, ${user}... Maybe I can. Heehee.`",
    "`You know what I do whenever I feel sad? I simply hug the nearest object for me. Giving it a nice squeeze will refresh you, ${user}!`",
    "`There's nothing better than getting a nice refreshing drink after a long day, Mayor ${user}. So just sit back and relax. Everything is all right, friend!`",
    "`*gives ${user} a flower* <:isaGlee:513917768568143882>`",
    "`Mayor ${user}, you should really look at the beautiful stars in the sky. They're almost as breath-taking as you are!`",
    "`Thank you for all that you've done for the town, Mayor ${user}!`",
    "`I appreciate your kindness, ${user}!`",
    "`You're so nice ${user}... I can't think of anyone nicer!`"
];
const { parseUser } = require('../conversions.js');

module.exports = {
    name: 'compliment',
    description: 'Compliments a user.',
    usage: ['<user>'],
    args: true,
    category: 'fun',
    execute(msg, args) {
        return new Promise(async (resolve, reject) => {
            const user = await parseUser(msg, args.join(' '));
            if (!user) return msg.channel.send('Please provide a valid user!')
            .then(resolve(msg.author.tag + ' didn\'t provide a valid argument for compliment'))
            .catch((e) => reject(e));
            
            return msg.channel.send(user.id !== client.user.id ? 
                eval(compliments[Math.floor(Math.random() * compliments.length)]) :
                "I don't like to compliment myself...")
            .then(resolve())
            .catch((e) => reject(e));
        });
    }
};
