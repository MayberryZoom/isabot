const ssb64 = '<:SSB64:621931677274472459>';
const ssbm = '<:SSBM:621931677253500938>';
const ssbb = '<:SSBB:621931677198974977>';
const ssb4 = '<:SSB4:621931676506783751>';
const ssb4_3ds = '<:SSB43DS:621931676909436976>';
const ssb4_u = '<:SSB4U:621931677173940234>';
const ssbu = '<:SSBU:621931676905373699>';

module.exports = [
    {
        name: '3d land',
        url: 'https://www.ssbwiki.com/images/8/82/SSBU-3D_Land.png',
        games: ['3DS', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Varies',
        description: 'Based on Level 1-1 from Super Mario 3D Land, this stage usually scrolls to the right before becoming static for brief sections of the stage. Some sections have hazards, such as skewers that rise from the water, damaging fighters and destroying platforms.'
    },

    {
        name: '75m',
        aliases: ['worst stage'],
        url: 'https://www.ssbwiki.com/images/3/31/SSBU-75m.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Donkey Kong',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'This stage is based on the third level from the arcade game Donkey Kong. It features many hazards like fireballs, springs, and Donkey Kong himself. You can also collect Pauline\'s possessions to add points to the scoreboard, but it has no effect on gameplay.'
    },

    {
        name: 'all-star rest area',
        url: 'https://www.ssbwiki.com/images/2/2a/All_Star_Rest_Area_Melee.png',
        games: ['Melee', 'Brawl', '4'],
        series: 'Super Smash Bros.',
        players: `1 (${ssbm}), 2 (${ssbb}${ssb4})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Varies',
        description: 'The All-Star Rest Area serves as a break between battles, and can only be played on via All-Star Mode, Boss Battles Mode (Brawl) or with cheats. The stage comes with healing items already spawned in, and occasionally collectable Trophies.\n Fun Fact: The music for this stage in Melee is a composition of a track from Kirby Super Star, where the concept for this stage originates from.'
    },

    {
        name: 'arena ferox',
        url: 'https://www.ssbwiki.com/images/e/e8/SSBU-Arena_Ferox.png',
        games: ['3DS', 'Ultimate'],
        series: 'Fire Emblem',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: `Counterpick (${ssb4_3ds}), Banned (${ssbu})`,
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Based on the arena of the same name from Fire Emblem Awakening, this stage will change shape after a period of time has passed, presenting platforms and destroyable statues. Some statues are solid underneath them and cannot be jumped through, while chained ones will swing if hit by an attack.'
    },

    {
        name: 'balloon fight',
        url: 'https://www.ssbwiki.com/images/a/aa/Balloonfight.png',
        games: ['3DS', 'Ultimate'],
        series: 'Balloon Fight',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Originating from the game of the same name, Balloon Fight\'s platform and hazard layout varies each time the stage is loaded. This stage features flippers that weakly knock away fighters, sparks from clouds that shock fighters, and a fish in the middle that will attempt to grab a fighter and drag them into the blastzone.\n This stage allows you to walk off one side and appear on the other side, but you will be KO\'d if you are knocked off the side.'
    },

    {
        name: 'battlefield',
        aliases: ['bf', 'duel zone'],
        url: 'https://www.ssbwiki.com/images/8/86/SSBU-Battlefield.png',
        games: ['64', 'Melee', 'Brawl', '4', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: `4 (${ssb64}${ssbm}${ssbb}${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: `Starter, Banned (${ssb64})`,
        dlegality: `Starter, Banned (${ssb64})`,
        type: 'Static',
        size: 'Varies',
        description: 'Known in Smash 64 officially as Duel Zone, this stage has changed in design throughout every Smash game. This stage can only be played via Classic Mode or hacking in Smash 64.\n In Ultimate, every stage can have the same physical design as Battlefield, known as a Battlefield Form.'
    },

    {
        name: 'big battlefield',
        aliases: ['bbf'],
        url: 'https://www.ssbwiki.com/images/d/dd/SSBU-Big-Battlefield.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'It\'s just Battlefield, but big.'
    },

    {
        name: 'big blue',
        url: 'https://www.ssbwiki.com/images/4/43/BBLUE-NRML-SSBM.jpg',
        games: ['Melee', 'Brawl', 'Ultimate'],
        series: 'F-Zero',
        players: `4 (${ssbm}${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Special',
        size: 'Large',
        description: 'Based on the Big Blue race tracks from F-Zero X, this stage features multiple constantly moving platforms and F-Zero machines to stand and walk around on, as well as the racetrack itself. Fighters standing on the track will be rapidly left behind unless struck by a machine, and will be KO\'d by the blastzone if they are unable to make it back to a platform or machine.\n In Ultimate, thanks to the track moving slower than previous titles, its possible for some characters to run on the track without being left behind.'
    },

    {
        name: 'boxing ring',
        url: 'https://www.ssbwiki.com/images/2/29/SSB4_Boxing_Ring.JPG',
        games: ['4', 'Ultimate'],
        series: 'Punch-Out!!',
        players: `4 (${ssb4}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the World Circuit boxing ring from Punch-Out!! (Wii), the stage features a boxing ring, with ropes that can be bounced off of to launch the fighter up high, and a light fixture that can be knocked down if jumped on or damaged enough.\n Fun Fact: By holding down L or ZL in Smash 3DS & Wii U when selecting the stage, you can force the Smash version of this stage to be used. Holding Y (3DS), LR (Wii U) or L (Ultimate) when selecting the stage will force the Punch-Out!! version of the stage to be used instead.'
    },

    {
        name: 'bridge of eldin',
        aliases: ['eldin'],
        url: 'https://www.ssbwiki.com/images/9/99/SSBU-Bridge_of_Eldin.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'From The Legend of Zelda: Twilight Princess, this stage is a simple long straight line. Occasionally, a horn will play before King Bulbin (sometimes followed by a Bulbin) will ride across the stage, damaging fighters he runs into and dropping a bomb that destroys the middle of the bridge. After some time, a Twilight Portal will appear above the stage and repair the bridge.'
    },

    {
        name: 'brinstar',
        url: 'https://www.ssbwiki.com/images/3/3c/Brinstar_brawl.jpg',
        games: ['Melee', 'Brawl', '3DS', 'Ultimate'],
        series: 'Metroid',
        players: `4 (${ssbm}${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'An underground cavern in Planet Zebes, Brinstar features a design slightly reminiscent to Battlefield, with platforms that can be slightly moved by breaking the fleshy poles connecting them to the main platform, with the main platform also possible to split into two by breaking the blobs on the right side of the stage. Acid may rise and damage fighters, launching them upwards.'
    },

    {
        name: 'brinstar depths',
        aliases: ['kraid'],
        url: 'https://www.ssbwiki.com/images/b/b3/SSBU-Brinstar_Depths.png',
        games: ['Melee', 'Ultimate'],
        series: 'Metroid',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Special',
        size: 'Large',
        description: 'A deep underground cavern in Planet Zebes, Brinstar Depths has an unusual layout, being a large and almost circular stage with a handful of platforms scattered around it. The large monster in the background, Kraid, will often rotate the stage a random amount.'
    },

    {
        name: 'castle siege',
        url: 'https://www.ssbwiki.com/images/2/20/SSBU-Castle_Siege.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Fire Emblem',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: `Counterpick (${ssbb}), Banned (${ssb4_u}${ssbu})`,
        dlegality: `Counterpick (${ssbb}), Banned (${ssb4_u}${ssbu})`,
        type: 'Transforming',
        size: 'Varies',
        description: 'Based on the Fire Emblem series as a whole, this stage\'s starting form features two platforms and a small ramp in the middle, with the second form multiple breakable statues holding platforms, and the third a fiery underground cavern.'
    },

    {
        name: 'coliseum',
        aliases: ['colosseum'],
        url: 'https://www.ssbwiki.com/images/7/7a/SSBU-Coliseum.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Fire Emblem',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Based on the arenas from the Fire Emblem series, Coliseum starts a long flat stretch of ground, however platforms will rise and drop back down repeatedly during the battle for fighters to use.'
    },

    {
        name: 'controls test',
        url: 'https://www.ssbwiki.com/images/6/6f/ControlsTestSSBU.png',
        games: ['Brawl', '4', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: '1',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Varies',
        description: 'This stage is a simple flat stage, used to test the controls or custom moves/Mii Fighters. This stage can only be accessed via the controls menu, or by hacking.'
    },

    {
        name: 'corneria',
        url: 'https://www.ssbwiki.com/images/0/01/SSBU-Corneria.png',
        games: ['Melee', 'Brawl', '3DS', 'Ultimate'],
        series: 'Star Fox',
        players: `4 (${ssbm}${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Presented as the Great Fox flying over a city on the planet Corneria, this stage features hazards including Arwings and Wolfens that may fire at fighters, and the Great Fox itself featuring a cannon that can instantly KO fighters struck by it. The cannon on the Great Fox can be destroyed, and will remain destroyed for the rest of the match.\n Fun Fact: By pressing down on the D-Pad for a single frame as either Fox or Falco, they can contact other characters from the Star Fox games.'
    },

    {
        name: 'custom',
        url: 'https://www.ssbwiki.com/images/e/e0/Example_stage.jpg',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: `4 (${ssbb}${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Special',
        size: 'Varies',
        description: 'Custom stages are special user-created stages, made using the ingame Stage Builder. These stages can come in any shape or form, with any music track of choice, and in Ultimate can be posted online for others to download and play.'
    },

    {
        name: 'delfino plaza',
        aliases: ['delfino'],
        url: 'https://www.ssbwiki.com/images/5/5b/SSBU-Delfino_Plaza.jpg',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbb}${ssb4_u}), 8 (${ssbu})`,
        slegality: `Counterpick (${ssbb}), Banned (${ssb4_u}${ssbu})`,
        dlegality: `Counterpick (${ssbb}), Banned (${ssb4_u}${ssbu})`,
        type: 'Transforming',
        size: 'Small',
        description: 'Based on Isle Delfino from Super Mario Sunshine, this stage has fighters battle on a floating set of platforms, sometimes dipping down and dropping fighters off in different areas around Isle Delfino, some featuring water for fighters to swim in.'
    },

    {
        name: 'distant planet',
        url: 'https://www.ssbwiki.com/images/7/7d/SSBU-Distant_Planet.png',
        games: ['Brawl', '3DS', 'Ultimate'],
        series: 'Pikmin',
        players: `4 (${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Known as \'PNF-404\' in Pikmin 1 & 2, this stage features a main platform, a handful of leaves to serve as small platforms and a ramp into the blastzone. Pellets will grow on this stage, with the number on them increasing the longer they are left. Occasionally a Bulborb will wonder onto the stage, and may eat fighters that stand on it\'s head or in it\'s mouth. It may also sometimes rain, causing water to rush down the ramp and drag fighters with it.'
    },

    {
        name: 'dracula\'s castle',
        aliases: ['castlevania'],
        url: 'https://www.ssbwiki.com/images/c/c1/SSBU-Dracula%27s_Castle.png',
        games: ['Ultimate'],
        series: 'Castlevania',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the top of the castle from many Castlevania games, this stage\'s layout features two platforms that move up and down, a shallow concave area as the main battlefield, and a flight of stairs to the side that have fallen apart further down. Sometimes candles may appear, which can be broken for items, as well as background characters from across the Castlevania series making an appearance (none of them interfere with the battle, however)'
    },

    {
        name: 'dream land',
        aliases: ['dl', 'dream land 64', 'dl64'],
        url: 'https://www.ssbwiki.com/images/0/02/DreamLandSSB.png',
        games: ['64', 'Melee', '4', 'Ultimate'],
        series: 'Kirby',
        players: `4 (${ssb64}${ssbm}${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: `Starter (${ssb64}${ssbm}) Counterpick (${ssb4}), Banned (${ssbu})`,
        dlegality: `Starter (${ssb64}${ssbm}) Counterpick (${ssb4}), Banned (${ssbu})`,
        type: 'Static',
        size: 'Large',
        description: 'Based on the lands from Planet Popstar, this stage has a layout almost identical to Battlefield. Near to the center of the stage is Whispy Woods, who will blow wind towards fighters to weakly push them away.\n Fun Fact: Due to Smash 64 having so few stages, and Battlefield/Final Destination not being playable outside of Classic Mode without cheats, this is usually the only legal stage in competitive play.'
    },

    {
        name: 'dream land gb',
        aliases: ['dlgb'],
        url: 'https://www.ssbwiki.com/images/d/d7/SSBU-Dream_Land_%283DS%29.png',
        games: ['3DS', 'Ultimate'],
        series: 'Kirby',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Small',
        description: 'A homage to Kirby\'s Dream Land for Game Boy, this stage scrolls through most of the levels present in the original game, featured prominent boss hazards, like Lololo and Lalala.\n Fun Fact: If in the last 5 seconds of a Timed match, the red LED light of the Game Boy will begin to flicker, and will turn off when the match ends. Also, holding L while selecting this stage in Smash 3DS will remove the green filter of the stage, making it black and white.'
    },

    {
        name: 'duck hunt',
        url: 'https://www.ssbwiki.com/images/a/aa/Duck_Hunt_Smash_3DS.jpg',
        games: ['4', 'Ultimate'],
        series: 'Duck Hunt',
        players: `4 (${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the game of the same name, this stage features platforms in the form of trees, with ducks occasionally flying around in the background. Hitting one with an attack will cause the duck to fall, with the dog peeking out of the ground holding it at the end of a \'round\' (it will also add the total score, which has no effect on the battle).'
    },

    {
        name: 'figure-8 circuit',
        aliases: ['mario circuit (brawl)'],
        url: 'https://www.ssbwiki.com/images/6/6f/SSBU-Mario_Circuit_%28SSBB%29.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Mario Kart',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the track Mario Circuit from Mario Kart DS, this track features a flat ground, with two roads coming in from the side to make a ramp of sorts. Shy Guys driving in go-karts will occasionally pass through the track and over the top roads, damaging fighters they run into. They can also be knocked away by attacks (Note: Blue Shells will not chase the one in first place)'
    },

    {
        name: 'final destination',
        aliases: ['fd'],
        url: 'https://www.ssbwiki.com/images/0/03/Final_Destination_Melee.png',
        games: ['64', 'Melee', 'Brawl', '4', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: `4 (${ssb64}${ssbm}${ssbb}${ssb4}), 8 (${ssbu})`,
        slegality: `Legal, Banned (${ssb64})`,
        dlegality: `Legal, Banned (${ssb64})`,
        type: 'Static',
        size: 'Average',
        description: 'A classic staple to the series, this stage has changed in design every Smash game it has been in, and is home to Master and Crazy Hand. In Smash 4 and Ultimate, any stage can be Final Destination by selecting them as an \'Omega Form\' stage (in Smash 4, the blastzones and actual stage itself is inconsistent, sometimes featuring walls. Some of these Omega Forms are legal in Smash 4)'
    },

    {
        name: 'find mii',
        aliases: ['streetpass quest'],
        url: 'https://www.ssbwiki.com/images/2/2b/SSBU-Find_Mii.png',
        games: ['3DS', 'Ultimate'],
        series: 'StreetPass',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Based on the Castle of Darkness from Find Mii II/StreetPass Quest II, this stage features a flat main platform and small spire to the side as a platform, as well as a cage containing a random Mii on the user\'s system that can be attacked and knocked about until it flies off into the distance. Sometimes the Dark Emperor will appear, serving as an attackable hazard that may raise/lower fighter stats at random, and may randomly cause either of the two platforms to sink into the blastzone.'
    },

    {
        name: 'flat zone',
        url: 'https://www.ssbwiki.com/images/d/d0/Flatzone_copy.jpg',
        games: ['Melee'],
        series: 'Game & Watch',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Based on the game \'Helmet\' from the Game & Watch series, Flat Zone features black lines to serve as platforms, which will blip in and out of existence at random (the house\'s roof is an exception to this). When pausing, instead of zooming in on a character the screen will zoom out to show the whole Game & Watch handheld being played on.'
    },

    {
        name: 'flat zone 2',
        url: 'https://www.ssbwiki.com/images/b/b6/SSB4_Flat_Zone_2.jpg',
        games: ['Brawl', '3DS'],
        series: 'Game & Watch',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Small',
        description: 'Unlike the original Flat Zone, this stage will change between different scenarios from the Game & Watch game series, each scenario featuring a unique set of hazards. The games represented in Flat Zone 2 include: Fire, Oil Panic, Lion, Chef.'
    },

    {
        name: 'flat zone x',
        url: 'https://www.ssbwiki.com/images/e/ec/SSBU-Flat_Zone_X.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Game & Watch',
        players: `6 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Small',
        description: 'The ultimate version of Flat Zone: This stage combines all Game & Watch scenarios from Flat Zone 1 & 2: Fire, Oil Panic, Lion, Chef and Helmet.'
    },

    {
        name: 'fountain of dreams',
        aliases: ['fod'],
        games: ['Melee', 'Ultimate'],
        series: 'Kirby',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: `Starter (${ssbm}), Banned (${ssbu})`,
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the area of the same name from Kirby\'s Adventure, this stage takes place on a fountain with water pouring over the sides, and platforms that rise and fall. This stage is banned in doubles and Ultimate as a whole due to inconsistent framerates.'
    },

    {
        name: 'fourside',
        url: 'https://www.ssbwiki.com/images/3/39/SSBU-Fourside.jpg',
        games: ['Melee', 'Ultimate'],
        series: 'EarthBound/Mother',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'The fourth city you visit in the game EarthBound/Mother 2, this stage takes place on top of multiple large cities. Occasionally, a UFO will come down which fighters can stand on, the surface of which being extremely slippery',
    },

    {
        name: 'frigate orpheon',
        aliases: ['frigate'],
        url: 'https://www.ssbwiki.com/images/f/fe/Frigate_Orpheon.jpg',
        games: ['Brawl', 'Ultimate'],
        series: 'Metroid',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: `Counterpick (${ssbb}), Banned (${ssbu})`,
        dlegality: `Counterpick (${ssbb}), Banned (${ssbu})`,
        type: 'Transforming',
        size: 'Large',
        description: 'Named after the Space Pirate vessel from Metroid Prime, this stage features two different layouts: the first a large main platform with a platform to the left and a small elevator of sorts to the right, the second a curved main platform with two platforms leading into the blastzones on the side. Occasionally the stage will flip between these two layouts, and sometimes there will be power outages that shroud the stage in darkness.'
    },

    {
        name: 'gamer',
        url: 'https://www.ssbwiki.com/File:SSBU-Gamer.png',
        games: ['Wii U', 'Ultimate'],
        series: 'WarioWare',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Set on 9-Volt\'s desk, the platform layout of this stage is different each time it is played. Sometimes in the background, 5-Volt will appear and scan the stage for fighters, and will paralyze, damage and launch any fighter that comes into her sight. She can be avoided by hiding behind anything on the stage (No, you cannot hide in Snake\'s box to avoid her; not everyone is that stupid)'
    },

    {
        name: 'garden of hope',
        url: 'https://www.ssbwiki.com/images/c/c9/SSBU-Garden_of_Hope.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Pikmin',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'From the area of the same name in Pikmin 3, this stage features two main platforms connected by a breakable bridge. To the side where are two platforms that lower when a fighter is ontop of one. Occasionally Pikmin will come and build different objects on the stage, all of which can be broken. A Peckish Aristocrab may sometimes come onto the stage, destroying Pikmin structures and damaging fighters.'
    },

    {
        name: 'gaur plain',
        url: 'https://www.ssbwiki.com/images/5/5d/SSBU-Gaur_Plain.png',
        games: ['4', 'Ultimate'],
        series: 'Xenoblade',
        players: `4 (${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Located on the western Bionis\' leg in Xenoblade Chronicles, this large stage features a flurry of platforms, and springs to bounce fighters upwards to traverse the stage more easily. The stage transitions from day to night, with a chance Metal Face will appear during the latter. Metal Face will slash at players and fire laser beams at platforms to destroy them, however can be defeated if he takes enough damage (defeating Metal Face counts as a point on the score board results)'
    },

    {
        name: 'gerudo valley',
        url: 'https://www.ssbwiki.com/images/d/df/Gerudovalley3ds.png',
        games: ['3DS', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the area of the same name and originating from The Legend of Zelda: Ocarina of Time, this stage features two main platforms leading into the side blastzones and a small platform on each side, with a bridge connecting the two main platforms. This bridge can be destroyed (but will repair itself over time), and shortly after Kourne and Kotake will fly down to the stage, either engulfing one side in ice or the other in flames briefly.'
    },

    {
        name: 'golden plains',
        url: 'https://www.ssbwiki.com/images/a/a1/SSBU-Golden_Plains.png',
        games: ['3DS', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Small',
        description: 'Based on New Super Mario Bros. 2, this stage will scroll side to side periodically. Fighters can collect coins on this stage, where collecting 100 in total will grant a fighter increased attack power and super armor.\n Just like the game the stage is based on, there is a lot of coins. Like, a *lot* of coins.'
    },

    {
        name: 'great bay',
        url: 'https://www.ssbwiki.com/images/8/83/SSBU-Great_Bay.jpg',
        games: ['Melee', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the Great Bay Coast from The Legend of Zelda: Majora\'s Mask, this stage feaures a main platform elevated over the water, as well as two smaller platforms floating on the water. Sometimes a large turtle will rise out of the water for fighters to fight upon, and Tingle may float around on a large balloon, which can be used as a platform or popped to drop Tingle out of the sky. In Ultimate fighters can swim in the water present on this stage.'
    },

    {
        name: 'great plateau tower',
        aliases: ['great plateau', 'plateau tower'],
        url: 'https://www.ssbwiki.com/images/a/a8/SSBU-Great_Plateau_Tower.jpg',
        games: ['Ultimate'],
        series: 'The Legend of Zelda',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Originating from The Legend of Zelda: Breath of the Wild, this stage takes place atop the Great Plateau Tower. The spire of the tower can be destroyed, revealing a small platform until the spire repairs itself.'
    },

    {
        name: 'green greens',
        url: 'https://www.ssbwiki.com/images/0/05/Greengreens.jpg',
        games: ['Melee', 'Brawl', 'Ultimate'],
        series: 'Kirby',
        players: `4 (${ssbm}${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Named after the level from Kirby\'s Dream Land, this stage features the main platform with two smaller platforms close by, and two smaller platforms lingering above it. Star and Bomb Blocks will fall out of the sky between the platforms, and can be walked across or destroyed, with Bomb Blocks causing an explosion that damages fighters. Whispy Woods will also try to blow fighters away on occasion.'
    },

    {
        name: 'green hill',
        aliases: ['green hill zone'],
        url: 'https://www.ssbwiki.com/images/0/09/SSB4_Green_Hill_Zone.JPG',
        games: ['Brawl', '3DS', 'Ultimate'],
        series: 'Sonic the Hedgehog',
        players: `4 (${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Originating from the original Sonic the Hedgehog game, this stage features a large concaved area, leading up to flat paths into the side blastzones. Checkpoint markers may rise out of the ground, which can be hit to cause them to spin and damage fighters. It\'s also possible to destroy the ground in the concaved area by damaging it.'
    },

    {
        name: 'halberd',
        url: 'https://www.ssbwiki.com/images/3/33/Halberd_Smash_Wii_U.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Kirby',
        players: `4 (${ssbb}${ssb4_u}), 8 (${ssbu})`,
        slegality: `Counterpick (${ssbb}), Banned (${ssb4_u}${ssbu})`,
        dlegality: `Counterpick (${ssbb}), Banned (${ssb4_u}${ssbu})`,
        type: 'Transforming',
        size: 'Average',
        description: 'While this stage features and is named after Meta Knight\'s iconic battleship, the opening of the battle features two platforms that raise out of the ground and fly up alongside the Halberd, only occasionally dropping by the Halberd. When on the ship, the Combo Cannon may fire a cannonball into the sky to drop onto fighters, firing a beam of energy at fighters, or by extending an arm to strike at a fighter.'
    },

    {
        name: 'hanenbow',
        aliases: ['best stage'],
        url: 'https://www.ssbwiki.com/images/b/bd/SSBU-Hanenbow.png',
        games: ['Brawl', 'Ultimate'],
        series: 'Electroplankton',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Originating from the game Electroplankton, this stage features a variety of leaves as platforms alongside tadpoles that will jump out of the water to bounce off of said leaves. Hitting the platforms will gradually change their color and move what position they are in. Unlike most stages with water, Hanenbow\'s water does not let fighters swim in it in any Smash game.'
    },

    {
        name: 'home-run stadium',
        aliases: ['home-run contest'],
        url: 'https://www.ssbwiki.com/images/8/8c/HRC.jpg',
        games: ['Melee', 'Brawl', '4', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: `1 (${ssbm}${ssb4_3ds}), 2 (${ssbb}${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Endless...?',
        description: 'This stage is used exclusively for the Home-Run Contest, where the goal is to launch Sandbag as far as possible. If Sandbag touches an item while flying along, it will be collected. This stage can only be used to play against other fighters via hacking.'
    },

    {
        name: 'hyrule castle',
        aliases: ['hyrule castle 64'],
        url: 'https://www.ssbwiki.com/images/f/f1/HyruleCastleSSB.png',
        games: ['64', '4', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssb64}${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'This stage features multiple platforms and a small roofed area. Occasionally tornadoes will appear, picking up and launching fighters into the air. Due to Smash 64\'s extremely low amount of competitively viable stages, this stage is on rare occasions made legal.'
    },

    {
        name: 'icicle mountain',
        aliases: ['infinite glacier'],
        url: 'https://www.ssbwiki.com/images/f/f3/IcicleMountain.jpg',
        games: ['Melee'],
        series: 'Ice Climber',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Small',
        description: 'Based on the goal of the game it Ice Climber, this stage scrolls vertically upwards, meaning fighters have to keep travelling upwards or else be caught by the bottom blastzone. Many of the stage\'s platforms are covered in ice, making the stage very slippery.'
    },

    {
        name: 'jungle hijinxs',
        aliases: ['jungle hijinx'],
        url: 'https://www.ssbwiki.com/images/8/84/SSB4UJungleHijinxs.jpg',
        games: ['Wii U'],
        series: 'Donkey Kong',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Special',
        size: 'Large',
        description: 'Based on the level of the same name from Donkey Kong Country Returns, this stage is unlike any other stage, as it features the ability to fight in the foreground and the background, with the ability to travel to either plane via Barrel Cannons. The foreground section features mostly a ramp for the main platform, with two small platforms to accompany it. The background features a main platform with some to the side, and a staircase of platforms above the main one.'
    },

    {
        name: 'jungle japes',
        url: 'https://www.ssbwiki.com/images/4/4c/SSBU-Jungle_Japes.png',
        games: ['Melee', 'Brawl', '3DS', 'Ultimate'],
        series: 'Donkey Kong',
        players: `4 (${ssbm}${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'This stage features three platforms hanging over the water, with a small platform hovering above the main one. At the bottom of the stage is a raging water current that drags fighters away, and occasionally a Klaptrap will jump out of the water to attack a fighter. Klaptraps will OHKO any fighter they touch.'
    },

    {
        name: 'kalos pokémon league',
        aliases: ['kalos', 'kalos pokemon league'],
        url: 'https://www.ssbwiki.com/images/b/bf/SSBU-Kalos_Pok%C3%A9mon_League.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: `Banned (${ssb4_u}), Counterpick (${ssbu})`,
        dlegality: `Banned (${ssb4_u}), Counterpick (${ssbu})`,
        type: 'Transforming',
        size: 'Large',
        description: 'By default this stage opens on a flat pillar with two platforms to the side of the stage. After some time has passed, the platforms will rise up and the stage will transition into one of four chambers: Dragonmark, Blazing, Ironworks or Flood. Each chamber features its own set of hazards, as well as special background Pokémon representing the type of chamber.'
    },

    {
        name: 'king of fighters stadium',
        url: 'https://www.ssbwiki.com/images/1/1d/SSBU-Fatal_Fury_Stage.jpg',
        games: ['Ultimate'],
        series: 'Fatal Fury',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the fighting game tournament within the Fatal Fury series of games, this stage is a long flat stretch leading into the blastzone. On both sides of the stage are walls that, if a fighter is launched hard enough into one, will create a shattering effect and allow the fighter to fly through and be KO\'d. The background characters shown depend on the current song playing, with some cameos from other SNK franchises like Art of Fighting and Samurai Shodown.'
    },

    {
        name: 'kongo falls',
        url: 'https://www.ssbwiki.com/images/3/36/KONGO-NRML-SSBM.jpg',
        games: ['Melee', 'Ultimate'],
        series: 'Donkey Kong',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Taking place on a raft trapped on rocks, this stage features the main platform with four smaller platforms above it, and a very small rock to serve as a platform to the right. A Barrel Cannon is located under the stage that players can fire themselves out of, as well as Klaptraps and logs that may damage fighters.'
    },

    {
        name: 'kongo jungle',
        aliases: ['congo jungle', 'kongo jungle 64', 'congo jungle 64'],
        url: 'https://www.ssbwiki.com/images/5/5e/OLDKJ-NRML-SSBM.png',
        games: ['64', 'Melee', 'Wii U', 'Ultimate'],
        series: 'Donkey Kong',
        players: `4 (${ssb64}${ssbm}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Spelled \'Congo Jungle\' in Smash 64, this stage features a slightly concaved main platform, with two stationary platforms that linger above and two moving platforms that travel up and down. A Barrel Cannon also travels side to side under the stage.'
    },

    {
        name: 'living room',
        url: 'https://www.ssbwiki.com/images/0/02/Nintendogstage.png',
        games: ['3DS', 'Ultimate'],
        series: 'Nintendogs',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on...a house, I guess? This stage is completely flat, however occasionally a bunch of building blocks and a household item or two will drop down, damaging fighters as they fall. A dog (or sometimes a cat) can also be seen playing in the background.'
    },

    {
        name: 'luigi\'s mansion',
        url: 'https://www.ssbwiki.com/images/3/39/SSBU-Luigi%27s_Mansion.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the location within the game of the same name, this stage features 3 floors of the mansion: ground floor, second floor and roof. The pillars of the mansion can be destroyed, causing parts of the mansion to fall apart (the mansion will rebuild itself shortly after being completely destroyed).'
    },

    {
        name: 'lylat cruise',
        aliases: ['lylat'],
        url: 'https://www.ssbwiki.com/images/5/5f/SSBU-Lylat_Cruise.jpg',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Star Fox',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Starter/Counterpick',
        dlegality: 'Starter/Counterpick',
        type: 'Static',
        size: 'Average',
        description: 'Taking place on a Smash-original ship called the Pleiades, the main platform of the stage curves slightly at the sides, with three additional platforms lingering above it. The stage will tilt slightly during the battle. This platform is infamously controversial in Smash 4\'s competitive scene due to the stage being extremely glitchy, with ledges sometimes not working and fighters sometimes outright falling through the stage.'
    },

    {
        name: 'magicant',
        url: 'https://www.ssbwiki.com/images/b/b7/SSBU-Magicant.png',
        games: ['3DS', 'Ultimate'],
        series: 'EarthBound/Mother',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Primarily based on the area of the same name from Mother/EarthBound Beginnings, this stage is composed of 4 pink clouds to serve as platforms. Occasionally different objects will appear for players to stand on, including a tree, Mobile Sprout, tomato, Sky Runner, octapus statue, or to the side of the stage sometimes the Dungeon Man may appear. Flying Men may also sometimes appear, and when struck/touched by a fighter will join the fighter\'s team and help in battle (only 5 can appear per match)'
    },

    {
        name: 'mario bros.',
        url: 'https://www.ssbwiki.com/images/6/6c/MarioBros_Stage.jpg',
        games: ['Brawl', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the game of the same name, this stage features a long stretches of flat ground leading to both sides of the stage, alongside a center platform. Sidesteppers and Shellcreepers appear on this stage as hazards, however can be knocked down and used as items. A POW Block is also present on the stage, functioning akin to the item of the same name.'
    },

    {
        name: 'mario circuit',
        url: 'https://www.ssbwiki.com/images/d/de/SSBU-Mario_Circuit_%28SSB4%29.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Mario Kart',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Varies',
        description: 'Based on the stage of the same name from Mario Kart 8, this stage has fighters battle on a set of platforms that change each location of the track it stops by. Shy Guys drive go-karts along the track, and can hit any fighters in the way.'
    },

    {
        name: 'mario galaxy',
        url: 'https://www.ssbwiki.com/images/c/c8/SSBU-Mario_Galaxy.jpg',
        games: ['Wii U', 'Ultimate'],
        series: 'Super Mario',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Named after the game its based on, this stage is long and curved, with two small platforms at both ends of the stage. This stage has a unique mechanic where ~~most~~ projectiles will curve with the stage.'
    },

    {
        name: 'meta crystal',
        aliases: ['metal cavern'],
        url: 'https://www.ssbwiki.com/images/b/bb/MetaCrystal.png',
        games: ['64'],
        series: 'Super Smash Bros.',
        players: '2',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Possibly based around the \'Cavern of the Metal Cap\' stage from Super Mario 64, this stage features a somewhat bumpy central platform, with a small flat platform lingering above it. This stage can only be played in Classic Mode or via hacking.'
    },

    {
        name: 'miiverse',
        url: 'https://www.ssbwiki.com/images/3/33/SSB4_-_Miiverse.jpg',
        games: ['Wii U'],
        series: 'Miiverse',
        players: '4',
        slegality: 'Starter or Banned',
        dlegality: 'Starter or Banned',
        type: 'Static',
        size: 'Large',
        description: 'A sort of clone to Battlefield, this simple stage had a unique mechanic where it featured specially chosen posts from the Miiverse community. However, since Miiverse was shut down on November 8th 2017, these posts no longer appear on the stage.'
    },

    {
        name: 'moray towers',
        url: 'https://www.ssbwiki.com/images/9/90/SSBU-Moray_Towers.png',
        games: ['Ultimate'],
        series: 'Splatoon',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'This stage is based upon the the stage of the same name from Splatoon. It features multiple floors with ramps that can be run down (but not up). When a fighter is KO\'d, Judd and Lil\' Judd will jump into the air, and when one minute is left on the timer they will hold up flags of the same color as the fighter in first place, or a flag of either color if two fighters are tied for first. When 30 seconds are left, the song will forcefully be switched to \'Now or Never\' (unless the song is already playing)'
    },

    {
        name: 'mushroom kingdom',
        url: 'https://www.ssbwiki.com/images/4/46/SSBU-Mushroom_Kingdom_%28SSB%29.png',
        games: ['64', 'Melee', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssb64}${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the game Super Mario Bros., this stage features a scale which will drop if one side falls too far down, as well as Piranha Plants that damage fighters and Warp Pipes that can be travelled through. This stage\'s layout and functionality is different in Melee albeit sharing the same name, lacking the Piranha Plants and Warp Pipes but featuring breakable Brick Blocks and \'?\' Blocks.'
    },

    {
        name: 'mushroom kingdom ii',
        formattedName: 'Mushroom Kingdom II',
        aliases: ['mushroom kingdom 2', 'game of the year every year', 'mushroom kingdom two', 'mushroom kingdom dos'],
        url: 'https://www.ssbwiki.com/images/e/e7/MKII-NRML-SSBM.png',
        games: ['Melee', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Based on the games Super Mario Bros. 2 and Doki Doki Panic, this stage features a center pillar with a straight strip of ground leading into the blastzone on both sides. Occasionally Birdo may appear and shoot eggs at fighters, however can be knocked away. Pidgits may also sometimes appear, flying around sparatically on flying carpets, which fighters are able to ride on.\n Fun Fact: Unlike the many other Mushroom Kingdom stages, this one does not actually take place in the Mushroom Kingdom.'
    },

    {
        name: 'mushroom kingdom u',
        url: 'https://www.ssbwiki.com/images/a/a1/SSBU-Mushroom_Kingdom_U.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'From the game New Super Mario Bros. U, this stage will transition across four different layouts, including: Acorn Plains, Rock-Candy Mines, Mirangue Clouds, Slide Lift Tower. Each layout has many different hazards, however one hazard prominent across all layouts is Nabbit, who will try to catch a fighter and escort them to the top blastzone.'
    },

    {
        name: 'mushroomy kingdom',
        aliases: ['1-1'],
        url: 'https://www.ssbwiki.com/images/7/7e/Mushroomy.jpg',
        games: ['Brawl', '3DS', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Average',
        description: 'An abandoned looking recreation of the original level 1-1 from Super Mario Bros., this stage will scroll sideways and loop around once it reaches the goal. Brick Blocks and \'?\' Blocks can be jumped into here, either breaking them or dropping an item. In Brawl only, this stage can also be loaded as a recreation of 1-2.'
    },

    {
        name: 'mute city',
        url: 'https://www.ssbwiki.com/images/9/9a/MuteCity.jpg',
        games: ['Melee'],
        series: 'F-Zero',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Primarily based on the first track from F-Zero X, this stage has fighters escorted around the track via platforms, sometimes dropping them down onto the track. Occasionally F-Zero racers will pass by while the fighters are on the track, damaging any fighters struck by one.'
    },

    {
        name: 'mute city snes',
        aliases: ['mute city 3ds'],
        url: 'https://www.ssbwiki.com/images/c/c5/SSB4_Mute_City.JPG',
        games: ['3DS', 'Ultimate'],
        series: 'F-Zero',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on the original F-Zero, this stage only features two small platforms as solid ground. The rest of the ground is made up via F-Zero machines that drive underneath the platforms. If a fighter touches the road they will be damaged and launched upwards.'
    },

    {
        name: 'new donk city hall',
        aliases: ['new donk', 'new donk city'],
        url: 'https://www.ssbwiki.com/images/f/f5/SSBU-New_Donk_City_Hall.jpg',
        games: ['Ultimate'],
        series: 'Super Mario',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Set in New Donk City from Super Mario Odyssey, this stage begins at the ground floor before platforms carry the fighters up the building, looping back to the bottom after reaching the top. The band \'The Super Mario Players\' and Pauline appear in the background of the stage if either songs \'Jump Up, Super Star!\' or \'Ground Theme (Band Performance)\' are playing.'
    },

    {
        name: 'new pork city',
        aliases: ['new pork'],
        url: 'https://www.ssbwiki.com/images/4/4c/SSBU-New_Pork_City.png',
        games: ['Brawl', 'Ultimate'],
        series: 'EarthBound/Mother',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Set in the final area of the same name from Mother 3, this stage features many large platforms, including a swinging platform and a bridge at the bottom of the stage that can be broken. Occasionally the Ultimate Chimera will appear and walk around part of the stage, and will OHKO any fighter bitten by it (in Brawl, it instead deals absurd damage and launches fighters flying, thus can be survived if bounced off of a wall)'
    },

    {
        name: 'norfair',
        url: 'https://www.ssbwiki.com/images/6/6f/SSBU-Norfair.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Metroid',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Located extremely deep down in Planet Zebes, this stage features 5 platforms making up a V shape. Walls of magma can emerge from the sides of the stage to damage fighters, magma can rise from the ground, magma can spray and cover a platform, and sometimes a wall of magma will engulf the entire stage, only avoidable by hiding inside of a small safe area.'
    },

    {
        name: 'onett',
        url: 'https://www.ssbwiki.com/images/6/66/ONETT-NRML-SSBM.jpg',
        games: ['Melee', 'Brawl', 'Wii U', 'Ultimate'],
        series: 'EarthBound/Mother',
        players: `4 (${ssbm}${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Based on Ness\' hometown from EarthBound/Mother 2, this stage features a few buildings that can be walked on, as well as the ground below. Sometimes cars will pass by that may damage fighters they hit, and if jumped on enough the drug store sign will fall down, temporarily removing the platforms on the center building.'
    },

    {
        name: 'online practice stage',
        aliases: ['wifi waiting room'],
        url: 'https://www.ssbwiki.com/images/e/ef/SSB4OnlinePractice_Empty.jpg',
        games: ['Brawl', '4', 'Ultimate'],
        series: 'Super Smash Bros.',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Varies',
        description: 'This stage serves simply to practice before online battles. In all games before Ultimate this stage is completely flat and takes the form of Final Destination, while in Ultimate takes the form of Battlefield.'
    },

    {
        name: 'orbital gate assault',
        url: 'https://www.ssbwiki.com/images/1/1c/SSB4_-_Great_Fox.jpg',
        games: ['Wii U'],
        players: '4',
        series: 'Star Fox',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Based on the eighth story mission from Star Fox: Assault, this stage starts on the Great Fox before transitioning to a missile, followed by a trio of Arwings, before eventually transitioning back to the Great Fox.\n Fun Fact: This single stage took roughly 1 whole year to develop.\n Fun Fact: Having every player hold the default button for shielding on their controller will start the stage with conversations between multiple Star Fox characters.'
    },

    {
        name: 'pac-land',
        url: 'https://www.ssbwiki.com/images/4/43/SSBU-Pac-Land.png',
        games: ['Wii U', 'Ultimate'],
        series: 'PAC-MAN',
        players: `6 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Average',
        description: 'A recreation of the game of the same name, this stage has players travel from PAC-MAN\'s house across different areas until the stage reaches Fairyland, where the stage will then begin to transition back across a new set of different areas until it eventually loops around again at a different time of day. Some fire hydrants and trees can be pushed, causing the fighter pushing them to grow bigger.'
    },

    {
        name: 'pac-maze',
        url: 'https://www.ssbwiki.com/images/6/63/SSB4_Pac-Maze.jpg',
        games: ['3DS'],
        series: 'PAC-MAN',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Based on the original PAC-MAN (known as Puck-Man before localization) this stage features a large set of platforms, with ghosts that travel around the stage damaging fighters. If a fighter collects enough pellets, a special power pellet will appear for them, increasing their attack power (these pellets can be destroyed by opponents)'
    },

    {
        name: 'palutena\'s temple',
        aliases: ['palu temple', 'palus temple', 'palutena temple', 'big temple'],
        url: 'https://www.ssbwiki.com/images/6/69/SSBU-Palutena%27s_Temple.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Kid Icarus',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Too Big',
        description: 'Palutena\'s home in the Kid Icarus series, this stage features a variety of platforms and hazards, including spikes, ladders, a breakable bridge in the middle, more spikes and springs.\n Fun Fact: Tapping down on the d-pad as Pit will let him execute Palutena\'s Guidance, where she will give advise to Pit on the other fighter on the Battlefield, as well as references to past games. DLC Fighters get a generic response instead.'
    },

    {
        name: 'paper mario',
        url: 'https://www.ssbwiki.com/images/e/e3/SSB4_Paper_Mario.JPG',
        games: ['3DS', 'Ultimate'],
        series: 'Paper Mario',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Varies',
        description: 'A compilation of different areas across Paper Mario: Sticker Star and Paper Mario: The Thousand-Year Door, transitioning between Hither Thither Hill, S.S. Flavion and Bowser\'s Sky Castle before looping back to the start again. This stage features hazards like wind that pushes fighters, and Bowser\'s head chomping anyone in it\'s mouth.'
    },

    {
        name: 'peach\'s castle',
        url: 'https://www.ssbwiki.com/images/d/d2/PeachCastleSSB.jpg',
        games: ['64', '4', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssb64}${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Loosely based on the castle of the same name from Super Mario 64, this stage features a small central main platform with a somewhat bumpy platform lingering above it, as well as a moving platform that travels through the stage, two triangular corners at the top of both sides, and a bumper hovering in mid-air.'
    },

    {
        name: 'pictochat',
        formattedName: 'PictoChat',
        url: 'https://www.ssbwiki.com/images/8/81/PictoChatMan.jpg',
        games: ['Brawl'],
        series: 'Nintendo DS',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Based upon the communication software of the same name, this stage is a simple flat stretch. Up to 27 unique drawings can appear on this stage, making for a large variety of stage hazards.\n While this stage functions similarly to PictoChat 2, many of the sketches are unique to it.'
    },

    {
        name: 'pictochat 2',
        formattedName: 'PictoChat 2',
        aliases: ['pictochat two', 'pictochat dos'],
        url: 'https://www.ssbwiki.com/images/0/07/SSBU-PictoChat_2.png',
        games: ['3DS', 'Ultimate'],
        series: 'Nintendo DS',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Based upon the communication software of the same name, this stage is a simple flat stretch. Up to 27 unique drawings can appear on this stage, making for a large variety of stage hazards.\n While this stage functions similarly to PictoChat, many of the sketches are unique to it.'
    },

    {
        name: 'pilotwings',
        url: 'https://www.ssbwiki.com/images/a/a3/SSBU-Pilotwings.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Pilotwings',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Set in the third level of the original Pilotwings, and taking place on Wuhu Island, fighters battle atop two different planes. The red plane features a long platform on top and two platforms underneath it, all connected to the plane, while the yellow plane features the same platform on top and two very small platforms underneath it.'
    },

    {
        name: 'pirate ship',
        url: 'https://www.ssbwiki.com/images/0/00/Pirateship.jpg',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssbb}${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Similar to the pirate ship from The Legend of Zelda: The Wind Waker, this stages features a very slightly concaved central platform, with two platforms above it, all surrounded by water. Occasionally a ship in the background will fire cannonballs at the ship, storms may launch the ship into the sky, or the ship will get stranded temporarily on a rock. If in the water and hit by the hull of the ship, it will OHKO the fighter.'
    },

    {
        name: 'planet zebes',
        url: 'https://www.ssbwiki.com/images/4/42/PlanetZebesSSB.png',
        games: ['64'],
        series: 'Metroid',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Loosely based on the planet of the same name from the Metroid games, this stage features a bundle of platforms, with a very small moving platform on the right. Acid will rise up and damage fighters that make contact with it.'
    },

    {
        name: 'poké floats',
        aliases: ['poke floats'],
        url: 'https://www.ssbwiki.com/images/8/8e/PokeFloats.jpg',
        games: ['Melee'],
        series: 'Pokémon',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Average',
        description: 'A large collage of Pokémon that are used to platform around, transitioning from Pokémon to Pokémon. Albeit the stage\'s localized name, there is not actually any official indication the Pokémon are floats besides being set in the \'Kanto Skies\' (this is further noted by the stage\'s Japanese name, Pokémon Subspace)'
    },

    {
        name: 'pokémon stadium',
        aliases: ['ps1', 'pokémon stadium 1', 'pokemon stadium', 'pokemon stadium 1'],
        url: 'https://www.ssbwiki.com/images/8/8a/PSTAD-NRML1-SSBM.png',
        games: ['Melee', 'Brawl', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssbm}${ssbb}), 8 (${ssbu})`,
        slegality: `Counterpick (${ssbm}${ssbb}), Banned (${ssbu})`,
        dlegality: `Starter (${ssbm}${ssbb}), Banned (${ssbu})`,
        type: 'Transforming',
        size: 'Average',
        description: 'This stage doesn\'t have any direct origin from any Pokémon game, at best being loosely based on a Gym or the game of the same name. There are five different forms for this stage: Basic, Fire, Grass, Water and Rock. While none of these forms have any hazards, they do drastically change the layout of the stage.'
    },

    {
        name: 'pokémon stadium 2',
        aliases: ['ps2', 'pokemon stadium 2'],
        url: 'https://www.ssbwiki.com/images/7/73/SSBU-Pok%C3%A9mon_Stadium_2.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssbb}) 8 (${ssb4_u}${ssbu})`,
        slegality: `Banned (${ssbb}${ssb4_u}), Starter (${ssbu})`,
        dlegality: `Banned (${ssbb}${ssb4_u}), Starter (${ssbu})`,
        type: 'Transforming',
        size: 'Average',
        description: 'Like this stage\'s predacessor, this stage is at best loosely based on the Pokémon Stadium games or a Gym in the Pokémon series. There are five different scenarios this stage can be: Basic, Electric, Ice, Flying and Ground. Some of these forms present hazards, like slippery floors.'
    },

    {
        name: 'port town aero dive',
        aliases: ['port town', 'aero dive'],
        url: 'https://www.ssbwiki.com/images/f/fc/Port_Town_Aero_Dive.jpg',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'F-Zero',
        players: `4 (${ssbb}${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Average',
        description: 'Based on the track of the same name from F-Zero GX, this stage escorts fighters around the track, and sometimes drops them onto the track. F-Zero machines may pass by while fighters are on the track and deal damage to a fighter if one hits one.\n Fun Fact: This stage is the only non-Pokémon game to credit two games of origin: F-Zero GX for GameCube, and it\'s arcade counterpart F-Zero AX.'
    },

    {
        name: 'princess peach\'s castle',
        url: 'https://www.ssbwiki.com/images/2/2a/SSBU-Princess_Peach%27s_Castle.png',
        games: ['Melee', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'A more accurate representation of the castle of the same name from Super Mario 64, fighters duke it out atop the castle, which features a spire in the center and two platforms on both sides. Sometimes switches may appear that cause extra platforms to appear when pressed, and a Banzai Bill may collide with the stage, causing a large explosion.'
    },

    {
        name: 'prism tower',
        url: 'https://www.ssbwiki.com/images/6/6e/SSBU-Prism_Tower.png',
        games: ['3DS', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: `Counterpick (${ssb4_3ds}), Banned (${ssbu})`,
        dlegality: `Counterpick (${ssb4_3ds}), Banned (${ssbu})`,
        type: 'Scroller',
        size: 'Average',
        description: 'Set in Lumiose City from Pokémon X & Y, this stage starts fighters on the ground floor before transitioning them up the tower. A variety of platforms appear depending on what level of the tower fighters are on before eventually transitioning back to ground level.'
    },

    {
        name: 'pyrosphere',
        url: 'https://www.ssbwiki.com/images/0/07/Pyrosphere_press_image.jpg',
        games: ['Wii U'],
        series: 'Metroid',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the area of the same name from Metroid: Other M, this stage features a long main platform with four smaller platforms floating above it. During battles, Ridley will appear as a stage boss, attacking fighters and destroying platforms. He can absorb energy from energy tanks in the stage to become stronger, and can be befriended as an ally if he receives enough damage from a fighter (if Ridley is KO\'d it also counts as a point in Timed matches)'
    },

    {
        name: 'rainbow cruise',
        aliases: ['rainbow ride'],
        url: 'https://www.ssbwiki.com/images/b/be/Rainbow_Cruise.jpg',
        games: ['Melee', 'Brawl', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssbm}${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Large',
        description: 'Loosely based on the level Rainbow Ride from Super Mario 64, this stage features a large flying cruiseship, leading players to a series of platforms and carpets, eventually looping back around to the cruiseship.'
    },

    {
        name: 'rainbow road',
        url: 'https://www.ssbwiki.com/images/7/7e/SSB4_Rainbow_Road.jpg',
        games: ['3DS'],
        series: 'Mario Kart',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Average',
        description: 'Based on the track of the same name from Mario Kart 7, this track escorts fighters around and occasionally drops fighters off onto the track. Sometimes Shy Guys driving go-karts may pass by and hit fighters in the way.'
    },

    {
        name: 'reset bomb forest',
        url: 'https://www.ssbwiki.com/images/c/ce/SSBU-Reset_Bomb_Forest.png',
        games: ['3DS', 'Ultimate'],
        series: 'Kid Icarus',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Set during Chapter 11 of Kid Icarus: Uprising, the stage begins with a castle-esque area containing a few platforms. After a minute has passed, the Goddess of Nature, Viridi, drops a Reset Bomb, transforming the stage into a forest full of varying platforms and a Lurchthorn, which can be destroyed/defeated. After another minute has passed the stage will transform back to normal.'
    },

    {
        name: 'rumble falls',
        url: 'https://www.ssbwiki.com/images/f/fb/Rumble_Falls_Brawl.png',
        games: ['Brawl'],
        series: 'Donkey Kong',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Large',
        description: 'Based on various levels from Donkey Kong: Jungle Beat, this stage has fighters, travel vertically upwards, with various hazards including a powerful spike that launches fighters to the side (often resulting in a OHKO), and switches that move platforms.\n Fun Fact: This is the only stage introduced in Brawl that has no shape or form of representation in Ultimate.'
    },

    {
        name: 'saffron city',
        url: 'https://www.ssbwiki.com/images/5/5a/SSBU-Saffron_City.jpg',
        games: ['64', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssb64}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Loosely based on the city of the same name from Pokémon Red/Green/Blue/Yellow, this stage takes place atop the buildings within the city, and has some floating platforms to the left side. Occasionally a door will open on the central building, where a random Pokémon will jump out, usually attacking the fighter nearby.'
    },

    {
        name: 'sector z',
        url: 'https://www.ssbwiki.com/images/7/76/SectorZSSB.png',
        games: ['64'],
        series: 'Star Fox',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Largely similar to the stage Corneria, Sector Z is based on the stage of the same name from Star Fox 64 (known as Lylat Wars 64 in PAL regions). Occasionally Arwings will fly down and fire lasers.\n Fun Fact: This stage is the largest stage in the original Super Smash Bros.'
    },

    {
        name: 'shadow moses island',
        aliases: ['shadow moses'],
        url: 'https://www.ssbwiki.com/images/7/7a/Shadow_Moses_Island.jpg',
        games: ['Brawl', 'Ultimate'],
        series: 'Metal Gear Solid',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Originating from the PlayStation 1 game Metal Gear Solid, this stage takes place outside of a tank hanger, with two watchtowers at both sides. These watchtowers can be destroyed, opening up the rest of the stage (but will repair themselves after a brief time has passed). In the background sometimes a Metal Gear REX/RAY or two Gekkos can be seen, and a spotlight may catch and follow a player (neither of these effect gameplay)'
    },

    {
        name: 'skyloft',
        url: 'https://www.ssbwiki.com/images/7/7b/SSBU-Skyloft.png',
        games: ['Wii U', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Varies',
        description: 'Link\'s homeland in The Legend of Zelda: Skyward Sword, Skyloft begins already in the air on some symmetrical platforms, dropping fighters off at different areas around Skyloft.'
    },

    {
        name: 'skyworld',
        url: 'https://www.ssbwiki.com/images/7/79/Skyworld1.jpg',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Kid Icarus',
        players: `4 (${ssbb}) 6 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Set in a remastered version of the level of the same name from Kid Icarus: Of Myths and Monsters, this stage features many platforms sitting on clouds, with the occasional moving platform passing by under the stage. All of these platforms (besides the moving one) can be destroyed, revealing the cloud underneath them.\n CPUs are well known to show their flaws in AI on this stage, trying to get to the moving platform anytime it appears and sometimes SDing for it.'
    },

    {
        name: 'smashville',
        aliases: ['sv'],
        url: 'https://www.ssbwiki.com/images/0/02/SSBU-Smashville.png',
        games: ['Brawl', 'Wii U', 'Ultimate'],
        series: 'Animal Crossing',
        players: `4 (${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Starter',
        dlegality: 'Starter',
        type: 'Static',
        size: 'Average',
        description: 'Based on the first three Animal Crossing games, this stage is quite simple, being just a straight stretch and a platform that travels back and fourth across the stage, and an occasional red balloon carrying an item travelling across as well.\n Fun Fact: Playing on this stage on a Saturday from 8:00PM to 12:00AM will cause K.K. Slider to appear and perform a concert.'
    },

    {
        name: 'spear pillar',
        url: 'https://www.ssbwiki.com/images/9/94/SpearPillar.jpg',
        games: ['Brawl', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'This stage is primarily based on the area of the same name from Pokémon Diamond/Pearl. It features a large main platform, two smaller platforms and a large cave area. Occasionally Pokémon like Dialga and Palkia will appear in the background, altering the stage by firing a high power laser through it (possibly destroying part of the stage briefly), causing the stage to tilt, inverting player controls etc.'
    },

    {
        name: 'spiral mountain',
        url: 'https://www.ssbwiki.com/images/1/13/SSBU-Spiral_Mountain.jpg',
        games: ['Ultimate'],
        series: 'Banjo & Kazooie',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Set atop the area of the same name from Banjo Kazooie, this stage will rotate around to reveal different platforms and areas to stand on, such as lower parts of the mountain and a bridge, as well as some platforms that appear sometimes on the stage. Occasionally characters from the Banjo Kazooie games will make cameo appearances.'
    },

    {
        name: 'spirit train',
        url: 'https://www.ssbwiki.com/images/5/52/Spirittrain3ds02.png',
        games: ['3DS', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Set during a ride on the train from The Legend of Zelda: Spirit Tracks, the stage will change shape with the back train carriage being swapped out for various different forms. Armored Trains may appear and ram into the front of the train, pushing the back of the train into the side blastzone, while Dark Trains will explode and damage players, sometimes leaping onto the train prior and disconnecting all train carriages from the train.'
    },

    {
        name: 'summit',
        url: 'https://www.ssbwiki.com/images/c/c9/SSBU-Summit.png',
        games: ['Brawl', 'Ultimate'],
        series: 'Ice Climber',
        players: `4 (${ssbb}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Average',
        description: 'Set atop the peak of a mountain, this stage is almost entirely ice, making all fighters (except Ice Climbers) slide around. The stage features a variety of platforms connected to a single platform. Shortly after a match has started, the peak will break off and slide down the mountain into water, where a fish can appear and swaller fighters for a OHKO. Eventually the Summit will rise to the sky before the stage returns to default.'
    },

    {
        name: 'super happy tree',
        aliases: ['yoshi\'s island 64, yoshis island 64'],
        url: 'https://www.ssbwiki.com/images/e/e6/YoshisStorySSB.png',
        games: ['64', 'Melee', 'Ultimate'],
        series: 'Yoshi',
        players: `4 (${ssb64}${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Loosely based on the game Yoshi\'s Story, the stage is a book with a variety of platforms above it. To the sides of the stage are clouds that can be briefly stood on, however will fade away briefly if stood on for too long.'
    },

    {
        name: 'super mario maker',
        aliases: ['mario maker'],
        url: 'https://www.ssbwiki.com/images/f/f1/SSBU-Super_Mario_Maker.png',
        games: ['4', 'Ultimate'],
        series: 'Super Mario',
        players: `4 (${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Special',
        size: 'Varies',
        description: 'Based on the game of the same name, this stage features a completely random layout every time it is played on. The stage will change between different artstyles, including the original Super Mario Bros., Super Mario Bros. 3, Super Mario World and New Super Mario Bros. U.'
    },

    {
        name: 'suzaku castle',
        url: 'https://www.ssbwiki.com/images/d/d9/SSBU-Suzaku_Castle.png',
        games: ['4', 'Ultimate'],
        series: 'Street Fighter',
        players: `4 (${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Inspired by the stage of the same name from Street Fighter II, this stage features two different areas of battle: the right side having two large flat platforms leading into the blastzone to fight on, the left side a bundle of small platforms suited for more aerial focused fighters. If a fighter is on their last stock, low on stamina or its the last minute of a Timed battle and the music playing was ripped from Street Fighter II, a sped-up version of the music will start playing.'
    },

    {
        name: 'target blast stadium',
        aliases: ['target blast'],
        url: 'https://www.ssbwiki.com/images/5/5c/Target_Blast_%28Round_2%29.jpg',
        games: ['4'],
        series: 'Super Smash Bros.',
        players: '1',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'This stage is solely for the Target Blast gamemode in Smash 4, where you launch a bomb into the distance in hopes of destroying props and targets to achieve the highest score.'
    },

    {
        name: 'temple',
        url: 'https://www.ssbwiki.com/images/b/b8/Hyrule_Temple_SSBM.png',
        games: ['Melee', 'Brawl', 'Wii U', 'Ultimate'],
        series: 'The Legend of Zelda',
        players: `4 (${ssbm}${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based loosely on the palaces from \'Zelda II: The Adventure of Link\' this stage features a large sprawling layout of ground to traverse, as well as a popular little area in the bottom left corner commonly nicknamed the \'Fight Club\' due to it being difficult to be KO\'d and often a camping spot for places that have sustained high amounts of damage.'
    },

    {
        name: 'test',
        aliases: ['the coffee shop', 'the bar', 'the pub'],
        url: 'https://www.ssbwiki.com/images/4/40/Test_Stage_SSBM.png',
        games: ['Melee'],
        series: 'Super Smash Bros.',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'A test stage in Super Smash Bros. Melee, this stage is abnormally long, lacking textures and using a picture of the (now closed) Caffe Verona from Palo Alto, California as a background test image. This stage cannot be accessed normally, only accessable via the debug menu using cheats.'
    },

    {
        name: 'the great cave offensive',
        aliases: ['great cave offensive', 'great cave'],
        url: 'https://www.ssbwiki.com/images/7/7c/SSBU-The_Great_Cave_Offensive.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Kirby',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Too Big',
        description: 'Based on and named after the sub-game from Kirby Super Star (known as Kirby\'s Fun Pak in PAL regions), this stage is large and sprawling, with lava walls dotted around the stage, spikes and two cannons that fighters can be fired out of. Occasionally a minecart may appear too, which fighters can ride in. Items appear on this stage inside of chests which need to be attacked to open.'
    },

    {
        name: 'tomodachi life',
        aliases: ['tomodachi'],
        url: 'https://www.ssbwiki.com/images/9/96/SSBU-Tomodachi_Life.png',
        games: ['3DS', 'Ultimate'],
        series: 'Tomodachi',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Average',
        description: 'Named after the game of the same name, this stage takes places in a house with multiple floors. These floors feature Miis on the player\'s system in the background of the stage doing various activities, and the interiors being randomly chosen every time the stage is selected.'
    },

    {
        name: 'tortimer island',
        url: 'https://www.ssbwiki.com/images/c/c3/Tortimer_Island_SSB3DS.png',
        games: ['3DS', 'Ultimate'],
        series: 'Animal Crossing',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'From the game Animal Crossing: New Leaf, this stage features a slightly random layout of how the ground is structured and what trees are present, as well as if the stage features a dock or not. If trees are present, they may grow fruits that can be eaten or thrown at fighters, and if a dock is present Kapp\'n may sail to and from the island. Sometimes you can also spot a shark in the water that damages fighters.'
    },

    {
        name: 'town and city',
        aliases: ['t&c', 'town & city'],
        url: 'https://www.ssbwiki.com/images/2/26/SSBU-Town_and_City.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Anaimal Crossing',
        players: '8',
        slegality: 'Counterpick',
        dlegality: 'Counterpick',
        type: 'Transforming',
        size: 'Average',
        description: 'Themed around the game Animal Crossing: City Folk (also known as Animal Crossing: Let\'s Go to the City in PAL regions) this stage features a flat stretch as a main platform, with smaller platforms periodically passing into and out of the stage. If this stage is played on from 8:00PM at 12:00AM on a Saturday, K.K. Slider will appear and perform a concert.'
    },

    {
        name: 'umbra clock tower',
        url: 'https://www.ssbwiki.com/images/0/0d/SSBU-Umbra_Clock_Tower.png',
        games: ['4', 'Ultimate'],
        series: 'Bayonetta',
        players: `4 (${ssb4_3ds}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Set during the opening of the game Bayonetta, the stage is part of a clock tower face, with random pieces of debris occasionally appearing around the main platform to change the stage layout briefly. The stage enters and exits the world of Purgatorio repeatedly during the match, where cameos of characters from the Bayonetta series can be seen.'
    },

    {
        name: 'unova pokémon league',
        aliases: ['unova', 'unova pokemon league'],
        url: 'https://www.ssbwiki.com/images/b/b2/SSBU-Unova_Pok%C3%A9mon_League.png',
        games: ['3DS', 'Ultimate'],
        series: 'Pokémon',
        players: `4 (${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Average',
        description: 'Based on N\'s Castle and the area of the same name from Pokémon Black/White, this stage features a main platform with two small platforms floating above it. Occasionally Pokémon will appear in the background and bridges will connect from the blastzones to the stage. Background Pokémon may interfere with the battle by attacking and altering the stage, such as setting part of it on fire.'
    },

    {
        name: 'venom',
        url: 'https://www.ssbwiki.com/images/8/8d/SSBU-Venom.png',
        games: ['Melee', 'Ultimate'],
        series: 'Star Fox',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the planet of the same name from Star Fox, this stage has you fight on the Great Fox, this time facing towards the camera. The stage has four platforms, and has the Great Fox fly along and through caves on planet Venom.'
    },

    {
        name: 'warioware .inc',
        aliases: ['warioware', 'ww'],
        url: 'https://www.ssbwiki.com/images/8/84/SSB4_WarioWare%2C_Inc.jpg',
        games: ['Brawl', '3DS', 'Ultimate'],
        series: 'WarioWare',
        players: `4 (${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Small',
        description: 'Named after and based on the microgame series of the same name, this stage sets you on a small main platform with four additional platforms floating above it. Occasionally the game will play a microgame, rewarding fighers who complete it bonuses like invincibility and metal effects.'
    },

    {
        name: 'wii fit studio',
        url: 'https://www.ssbwiki.com/images/d/db/SSBU-Wii_Fit_Studio.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Wii Fit',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'This stage is a large flat stage with randomly placed platforms floating around it. A mirror can be seen in the background, reflecting everything in the foreground. Wii Fit Trainer can be heard giving instructions on different yoga positions.'
    },

    {
        name: 'wily castle',
        url: 'https://www.ssbwiki.com/images/9/93/SSBU-Wily_Castle.png',
        games: ['4', 'Ultimate'],
        series: 'Mega Man',
        players: `4 (${ssb4_3ds}${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Special',
        size: 'Average',
        description: 'Set upon a pillar nearby Wily\'s Castle, this stage features platforms that will float down onto the stage (3DS) or platforms on rails akin to the Guts Man stage from the original Mega Man (Wii U), as well as the Yellow Devil appearing as a stage boss. Ultimate combines the platform hazards from both versions of Smash 4.'
    },

    {
        name: 'windy hill zone',
        aliases: ['windy hill'],
        url: 'https://www.ssbwiki.com/images/2/2c/SSBU-Windy_Hill_Zone.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Sonic the Hedgehog',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the zone of the same name from Sonic Lost World, this stage features a windmill to the side that carries players along, as well as platforms across the main stage. Two double-sided springs are also present which can be bounces on to launch fighters into the air.'
    },

    {
        name: 'woolly world',
        url: 'https://www.ssbwiki.com/images/9/96/SSB4UWoollyWorld.jpg',
        games: ['Wii U'],
        series: 'Yoshi',
        players: '4',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scroller',
        size: 'Large',
        description: 'Based on the game Yoshi\'s Woolly World, this stage features a long flat felt stretch of ground with multiple platforms suspended in midair. Eventually the stage will transition and lift the platforms into the air, before eventually transitioning back to the flat ground area again.'
    },

    {
        name: 'wrecking crew',
        url: 'https://www.ssbwiki.com/images/5/52/SSBU-Wrecking_Crew.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Wrecking Crew',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Transforming',
        size: 'Large',
        description: 'Set on a building mid-destruction, the stage features ladders to climb up and bombs that can be destroyed, dropping the next level of the stage down onto the ground. Barrels are also present that can catch a fighter if it drops onto them while the stage collapses downwards, trapping them and leaving them vulnerable to attacks.'
    },

    {
        name: 'wuhu island',
        url: 'https://www.ssbwiki.com/images/f/fc/SSBU-Wuhu_Island.png',
        games: ['Wii U', 'Ultimate'],
        series: 'Wii Sports',
        players: `4 (${ssb4_u}), 8 (${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Scrolling',
        size: 'Average',
        description: 'This stage primarily features the fight flying around Wuhu Island on a set of platforms. These platforms pass by different areas of Wuhu Island, all areas featured in games within Wii Sports and Wii Sports Resort, like the Frisbee game for example.'
    },

    {
        name: 'yggdrasil\'s altar',
        url: 'https://www.ssbwiki.com/images/a/a3/SSBU-Yggdrasil%27sAltar.jpg',
        games: ['Ultimate'],
        series: 'Dragon Quest',
        players: '8',
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Large',
        description: 'Based on the recurring area of the same name within the Dragon Quest series, this stage has you take off on a platform and travel around the tree Yggdrasil. Other small platforms may fly onto the stage, sometimes carrying a chest which can be opened for an item. Be careful, however, sometimes the chest is a Mimic that will attack you instead!'
    },

    {
        name: 'yoshi\'s island (brawl)',
        aliases: ['yoshi\'s island (ssbb)'],
        url: 'https://www.ssbwiki.com/images/7/7b/SSBU-Yoshi%27s_Island_%28SSBB%29.png',
        games: ['Brawl', '3DS', 'Ultimate'],
        series: 'Yoshi',
        players: `4 (${ssbb}${ssb4_3ds}), 8 (${ssbu})`,
        slegality: `Starter (${ssbb}${ssb4_3ds}), Counterpick (${ssbu})`,
        dlegality: `Starter (${ssbb}${ssb4_3ds}), Counterpick (${ssbu})`,
        type: 'Static',
        size: 'Average',
        description: 'Based on Super Mario World 2: Yoshi\'s Island, this stage features a slightly concaved main platform alongside a platform above it. Shy Guys may appear carrying fruits, which can be attacked to knock the fruit down to eat, and occasionally a Blarggwich will appear as an additional platform. This stage changes between seasons during gameplay, with the music track \'Obsticle Course\' changing to reflect the season.'
    },

    {
        name: 'yoshi\'s island (melee)',
        aliases: ['yoshi\'s island (ssbm)', 'yoshi island melee', 'yoshi island ssbm'],
        url: 'https://www.ssbwiki.com/images/9/9a/SSBU-Yoshi%27s_Island_%28SSBM%29.png',
        games: ['Melee', 'Brawl', 'Wii U', 'Ultimate'],
        series: 'Yoshi',
        players: `4 (${ssbm}${ssbb}), 8 (${ssb4_u}${ssbu})`,
        slegality: 'Banned',
        dlegality: 'Banned',
        type: 'Static',
        size: 'Small',
        description: 'Based on Super Mario World\'s grassland levels, this stage is set in a concave area, with the right ramp leading up into the blastzone. Rotating Blocks connect the two halves of the stage, as well as appear on both sides as well, and can be temporarily fallen and jumped through by attacking or jumping into one of them.'
    },

    {
        name: 'yoshi\'s story',
        aliases: ['yoshi story'],
        url: 'https://www.ssbwiki.com/images/0/0c/SSBU-Yoshi%27s_Story.png',
        games: ['Melee', 'Ultimate'],
        series: 'Yoshi',
        players: `4 (${ssbm}), 8 (${ssbu})`,
        slegality: `Starter (${ssbm}), Counterpick (${ssbu})`,
        dlegality: `Starter (${ssbm}), Counterpick (${ssbu})`,
        type: 'Static',
        size: 'Small',
        description: 'Somewhat similar of a layout to Battlefield, this stage curves downwards slightly at the edges, and has Shy Guys occasionally pass by carrying fruits, which can be knocked down and consumed by landing an attack on one. A cloud unofficially named \'Randall\' by the community appears on this stage, rotating around it in a set cycle.'
    }
];