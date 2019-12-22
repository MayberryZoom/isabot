const tips = [
    "Avoid training against CPUs! They don't play mindgames and have inhuman reaction times, so they don't simulate real players very well.",
    "Don't focus too much on tier lists! If you enjoy a character and perform well with them, feel free to play them, even if they're low tier!",
    "Try to lab often! Labbing is a great way to grow as a player, master your character, and advance the meta.",
    "If you can attend a tournament, but are on the fence, just go! Don't worry about losing, it's part of growing. The experience is what matters!",
    "Keep a good mentality! Instead of getting upset at a loss, try to save a replay or video of it and analyze it to understand what you did wrong.",
    "You can easily tilt your shield by holding a shield button with either another shield button or a special button. This makes blocking with a small shield much more effective!",
    "You don't always need to attack after jumping. Sometimes, jumping then landing without doing anything (empty hop) can be just as effective!",
    "If you find your aerials being shielded often, try landing without an aerial and grabbing instead (tomahawk). Your opponent might be caught sitting in shield!",
    "Avoid grabbing while in shield too often. Shield grabs have an added 4 frames of startup, making it hard to punish many moves with them.",
    "Sometimes, moves are just unpunishable. Instead of trying to punish something your opponent has already done, try punishing what they do next!",
    "DI out isn't always the best for escaping combos. Sometimes, DI in makes it harder for moves to combo, usually against moves with a high-diagonal angle.",
    "With some reflectors, you can cancel them with a jump or dodge after reflecting a projectile! A good example is Fox's/Wolf's down special.",
    "A good mixup against offstage opponents is to fake a ledge trump. If your opponent thinks you're going to grab ledge, they might buffer a roll, leaving them wide open for a punish!",
    "After taking shield damage, there is a cooldown before you can parry. This means you can't block the linking hits of a multihit attack then parry the final one. An example is Captain Falcon's neutral aerial- you can block the first hit and parry the second, but only if you wait a few frames before dropping your shield!",
    "There are 2 types of buffers- the hold/new buffer, and the tap/old buffer. With the hold buffer, you can buffer the next move at any time during your current action, but you must hold the input. With tap buffer, you can input it only once, but it must be in the last 9 frames of your current action!",
    "If you are inputting a directional attack with hold buffer, you don't actually need to hold the direction! For example, if you reset the control stick to neutral, hold the attack button, then hold forward, you will buffer a neutral aerial while drifting forward.",
    "Sometimes, slow and very reactable projectiles can be just as good as fast and less reactable ones! For example, Ryu's slow fire Hadouken is a useful neutral tool, as he can move separately of it and it forces his opponent to choose an option.",
    "It's possible to tech after starting an airdodge! This means you can airdodge down into the ground, then tech, granting more intangibility and changing your positioning.",
    "If you attempt to jump above a shielding opponent, you will instead phantom footstool, saving your jump. This can be used for landing mixups!",
    "Since you can't run through grounded opponents, you can dash into an opponent between jab locks. Characters like Pichu can use this to push their opponent closer to the blast zone!"
];

module.exports = {
    name: 'tip',
    aliases: ['tips', 'advice'],
    description: 'Gives a random bit of Smash advice. Most tips are geared towards Ultimate, but some have applications in other games.',
    category: 'smash',
    execute(msg) {
        return new Promise((resolve, reject) => {
            msg.channel.send(tips[Math.floor(Math.random() * tips.length)])
            .then(resolve()).catch((e) => reject(e));
        });
    }
};
