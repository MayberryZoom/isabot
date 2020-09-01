module.exports = [
    {
        name: 'isabelle',
        aliases: ['isa', 'izzy', 'belle', 'dog'],
        color: '0xf3ee51',
        jabType: '1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'down tilt',
                aliases: ['dtilt', 'plucc'],
                'link': 'dtilt'
            },
            {
                name: 'dash attack',
                aliases: ['da', 'pot'],
                png: true
            },
            {
                name: 'forward smash',
                aliases: ['fsmash', 'side smash', 'tada'],
                'link': 'fsmash'
            },
            {
                name: 'pocket',
                aliases: ['neutral b', 'neutral special']
            },
            {
                name: 'fishing rod (cast)',
                aliases: ['rod', 'fishing pole', 'fishing rod',    'rod cast'
                ],
                'url': 'https://pbs.twimg.com/media/EQxzqxNUwAAp3-n?format=png'
            },
            {
                name: 'fishing rod (reel)',
                aliases: ['rod reel', 'rod reel in', 'fishing pole reel',    'fishing pole reel in'
                ],
                'url': 'https://pbs.twimg.com/media/EQxzqw8UUAATugV?format=png'
            },
            {
                name: 'fishing rod forward throw',
                aliases: ['fising rod fthrow', 'rod forward throw', 'rod fthrow'],
                'link': 'fishing rod fthrow'
            },
            {
                name: 'fishing rod back throw',
                aliases: ['fising rod bthrow', 'rod back throw', 'rod bthrow'],
                'link': 'fishing rod bthrow'
            },
            {
                name: 'fishing rod down throw',
                aliases: ['fising rod dthrow', 'rod down throw', 'rod dthrow'],
                'link': 'fishing rod dthrow'
            },
            {
                name: 'fishing rod up throw',
                aliases: ['fising rod uthrow', 'rod up throw', 'rod uthrow'],
                'link': 'fishing rod uthrow'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 88,
                rank: 56,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.48,
                rank: 70
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.14,
                rank: 37
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.02,
                rank: 48
            },
            {
                name: 'fall speed',
                value: 1.3,
                rank: 68
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
                rank: 68
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'pichu',
        aliases: ['nerfed', 'small rat', 'rat 2'],
        color: '#e5e333',
        jabType: '1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        landingDair: true,
        moves: [
            {
                name: 'skull bash',
                aliases: ['side b', 'side special']
            },
            {
                name: 'thunder (hit)',
                aliases: ['down b', 'down special', 'thunder',    'discharge'
                ],
                'link': 'thunder hit'
            },
            {
                name: 'thunder jolt (grounded)',
                aliases: ['thunder jolt ground', 'grounded thunder jolt', 'jolt',    'grounded jolt',
                    'jolt ground',
                    'tjolt ground',
                    'grounded tjolt',
                    'neutral special',
                    'neutral special ground',
                    'grounded neutral special',
                    'neutral b',
                    'neutral b ground',
                    'grounded neutral b'
                ],
                'link': 'thunder jolt g',
                png: true
            },
            {
                name: 'thunder jolt (aerial)',
                aliases: ['thunder jolt', 'thunder jolt air', 'aerial thunder jolt',    'jolt',
                    'aerial jolt',
                    'jolt air',
                    'tjolt',
                    'tjolt air',
                    'aerial tjolt',
                    'neutral special',
                    'neutral special air',
                    'aerial neutral special',
                    'neutral b',
                    'neutral b air',
                    'aerial neutral b'
                ],
                'link': 'thunder jolt a',
                png: true
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 62,
                rank: 77,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.892,
                rank: 25
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.302,
                rank: 12
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.029,
                rank: 45
            },
            {
                name: 'fall speed',
                value: 1.9,
                rank: 6
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.5,
                rank: 42
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 31.579,
                rank: 77
            }
        ]
    },
    {
        name: 'snake',
        aliases: ['snaaaake!'],
        color: '#658198',
        jabType: '3',
        ftiltType: '2',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 106,
                rank: 16,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
                rank: 55
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.882,
                rank: 70
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.987,
                rank: 57
            },
            {
                name: 'fall speed',
                value: 1.73,
                rank: 23
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.768,
                rank: 22
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'bowser',
        aliases: ['koopa'],
        color: '#44745e',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 135,
                rank: 1,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.971,
                rank: 19
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.901,
                rank: 67
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
                rank: 19
            },
            {
                name: 'fall speed',
                value: 1.77,
                rank: 18
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.832,
                rank: 17
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'king k. rool',
        aliases: ['kkr', 'rool', 'k rool'],
        color: '#488764',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 133,
                rank: 2,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.485,
                rank: 69
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.903,
                rank: 66
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.945,
                rank: 62
            },
            {
                name: 'fall speed',
                value: 1.7,
                rank: 24
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.72,
                rank: 24
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'donkey kong',
        aliases: ['dk'],
        color: '#f9da4a',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 127,
                rank: 3,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.873,
                rank: 26
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.365,
                rank: 9
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
                rank: 12
            },
            {
                name: 'fall speed',
                value: 1.63,
                rank: 35
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.608,
                rank: 35
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'king dedede',
        aliases: ['dedede', 'ddd', 'd3', 'triple d', 'king ddd', 'king d3', 'sexy', 'dededede', 'dedededede', 'dededededede', 'dedededededede', 'dededededededede', 'dedededededededede', 'dededededededededede'],
        color: '#2482c9',
        jabType: 'rapid 2',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 127,
                rank: 3,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.496,
                rank: 68
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.029,
                rank: 51
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.735,
                rank: 78
            },
            {
                name: 'fall speed',
                value: 1.95,
                rank: 2
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.12,
                rank: 2
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'ganondorf',
        aliases: ['ganon', 'dorf', 'gannon', 'doriyah'],
        color: '#7974a4',
        jabType: '1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 118,
                rank: 5,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.34,
                rank: 75
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.767,
                rank: 72
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.83,
                rank: 75
            },
            {
                name: 'fall speed',
                value: 1.65,
                rank: 29
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
                rank: 29
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'charizard',
        aliases: ['zard'],
        ufdDir: 'pt charizard',
        color: '#f26405',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 116,
                rank: 6,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.2,
                rank: 9
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.187,
                rank: 31
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.103,
                rank: 33
            },
            {
                name: 'fall speed',
                value: 1.52,
                rank: 49
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.432,
                rank: 47
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'incineroar',
        aliases: ['incin', 'side b'],
        color: '#c91e00',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'darkest lariat (grounded)',
                aliases: [
                    'darkest lariat',
                    'grounded darkest lariat',
                    'neutral b',
                    'neutral b grounded',
                    'grounded neutral b',
                    'neutral special',
                    'neutral special gronded',
                    'grounded neutral b'
                ],
                link: 'darkest lariat g'
            },
            {
                name: 'darkest lariat (aerial)',
                aliases: [
                    'aerial darkest lariat',
                    'neutral b aerial',
                    'aerial neutral b',
                    'neutral special aerial',
                    'aerial neutral b'
                ],
                link: 'darkest lariat a'
            },
            {
                name: 'alolan whip grab (grounded)',
                aliases: [
                    'alolan whip',
                    'alolan whip grounded',
                    'alolan whip grab',
                    'side b',
                    'side b grounded',
                    'side b grab',
                    'side b grab grounded',
                    'side special',
                    'side special grounded',
                    'side special grab',
                    'side special grab grounded',
                    'grounded alolan whip grab',
                    'grounded alolan whip',
                    'grounded side b',
                    'grounded side special'
                ],
                link: 'alolan whip g'
            },
            {
                name: 'alolan whip grab (aerial)',
                aliases: [
                    'alolan whip aerial',
                    'alolan whip grab',
                    'side b aerial',
                    'side b grab',
                    'side b grab aerial',
                    'side special aerial',
                    'side special grab',
                    'side special grab aerial',
                    'aerial alolan whip grab',
                    'aerial alolan whip',
                    'aerial side b',
                    'aerial side special'
                ],
                link: 'alolan whip a'
            },
            {
                name: 'alolan whip attack (lariat)',
                aliases: [
                    'alolan whip attack',
                    'alolan whip lariat',
                    'alolan whip attack strong',
                    'alolan whip strong',
                    'alolan whip attack good',
                    'alolan whip good',
                    'side b attack',
                    'side b lariat',
                    'side b attack strong',
                    'side b strong',
                    'side b attack good',
                    'side b good',
                    'side special attack',
                    'side special lariat',
                    'side special attack strong',
                    'side special strong',
                    'side special attack good',
                    'side special good',
                    'alolan nae nae'
                ],
                link: 'alolan whip lariat'
            },
            {
                name: 'alolan whip attack (back body drop)',
                aliases: [
                    'alolan whip back body drop',
                    'alolan whip attack weak',
                    'alolan whip weak',
                    'alolan whip attack bad',
                    'alolan whip bad',
                    'alolan whip attack early',
                    'alolan whip early',
                    'side b back body drop',
                    'side b attack weak',
                    'side b weak',
                    'side b attack bad',
                    'side b bad',
                    'side b attack early',
                    'side b early',
                    'side special back body drop',
                    'side special attack weak',
                    'side special weak',
                    'side special attack bad',
                    'side special bad',
                    'side special attack early',
                    'side special early',
                ],
                link: 'alolan whip early'
            },
            {
                name: 'alolan whip attack (failure)',
                aliases: [
                    'alolan whip failure',
                    'alolan whip fail',
                    'alolan whip attack fail',
                    'alolan whip late',
                    'alolan whip attack late',
                    'side b failure',
                    'side b fail',
                    'side b attack fail',
                    'side b late',
                    'side b attack late',
                    'side b attack failure',
                    'side special failure',
                    'side special fail',
                    'side special attack fail',
                    'side special late',
                    'side special attack late',
                    'side special attack failure',
                ],
                link: 'alolan whip failure'
            },
            {
                name: 'cross chop (rise)',
                aliases: [
                    'cross chop',
                    'up b',
                    'up b rise',
                    'up special',
                    'up special rise'
                ]
            },
            {
                name: 'cross chop (fall)',
                aliases: [
                    'cross chop spike',
                    'up b fall',
                    'up b spike',
                    'up special fall',
                    'up special spike'
                ]
            },
            {
                name: 'cross chop (landing)',
                aliases: [
                    'cross chop landing',
                    'cross chop impact',
                    'up b landing',
                    'up b impact',
                    'up special landing',
                    'up special impact'
                ]
            },
            {
                name: 'revenge (counterattack)',
                aliases: [
                    'counter',
                    'revenge attack',
                    'revenge',
                    'down b',
                    'down special'
                ],
                link: 'revenge'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 116,
                rank: 6,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.18,
                rank: 78
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.62,
                rank: 78
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.88,
                rank: 71
            },
            {
                name: 'fall speed',
                value: 1.76,
                rank: 20
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.816,
                rank: 19
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'piranha plant',
        aliases: ['plant'],
        color: '#69915c',
        jabType: 'gentleman',
        ftiltType: '2',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'ptooie',
                aliases: ['neutral special', 'neutral b', 'god']
            },
            {
                name: 'poison breath (minimum charge)',
                aliases: ['side special min', 'side b min', 'poison min',    'min side special',
                    'min side b',
                    'min poison',
                    'side special minimum',
                    'side b minimum',
                    'poison minimum',
                    'minimum side special',
                    'minimum side b',
                    'minimum poison'
                ],
                'link': 'poison breath min'
            },
            {
                name: 'poison breath (maximum charge)',
                aliases: ['side special', 'side b', 'poison breath',    'poison',
                    'side special max',
                    'side b max',
                    'poison max',
                    'max side special',
                    'max side b',
                    'max poison',
                    'side special maximum',
                    'side b maximum',
                    'poison maximum',
                    'maximum side special',
                    'maximum side b',
                    'maximum poison'
                ],
                'link': 'poison breath max'
            },
            {
                name: 'piranhacopter',
                aliases: ['up special', 'up b', 'sicko mode']
            },
            {
                name: 'long stem strike',
                aliases: ['down special', 'down b', 'lss'],
                'link': 'long stem strike'
            },
            {
                name: 'footstool attack',
                aliases: ['meme']
            },
            {
                name: 'get-up attack up',
                aliases: ['get-up attack'],
                'url': 'https://i.imgur.com/XOSQjfc.gif'
            },
            {
                name: 'get-up attack down',
                'url': 'https://i.imgur.com/42xZofz.gif'
            },
            {
                name: 'ledge attack',
                'url': 'https://i.imgur.com/4DJD002.gif'
            },
            {
                name: 'trip attack',
                'url': 'https://i.imgur.com/EXku7MQ.gif'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 112,
                rank: 8,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.72,
                rank: 39
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.76,
                rank: 73
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1,
                rank: 54
            },
            {
                name: 'fall speed',
                value: 1.95,
                rank: 2
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.73,
                rank: 23
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 40,
                rank: 74
            }
        ]
    },
    {
        name: 'samus',
        aliases: ['metroid'],
        color: '#ffb938',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                rank: 9,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.654,
                rank: 45
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.115,
                rank: 42
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.103,
                rank: 33
            },
            {
                name: 'fall speed',
                value: 1.33,
                rank: 63
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.168,
                rank: 59
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'dark samus',
        aliases: ['dsamus', 'dark metroid'],
        color: '#353f56',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                rank: 9,
                aliases: ['mass']
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.115,
                rank: 42
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.103,
                rank: 33
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.654,
                rank: 45
            },
            {
                name: 'fall speed',
                value: 1.33,
                rank: 63
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.168,
                rank: 59
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'bowser jr.',
        aliases: ['bjr', 'larry', 'roy', 'lemmy', 'wendy', 'iggy', 'morton', 'ludwig'],
        color: '#59bf38',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                rank: 9,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.566,
                rank: 61
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.924,
                rank: 59
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.134,
                rank: 26
            },
            {
                name: 'fall speed',
                value: 1.65,
                rank: 29
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
                rank: 29
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'richter',
        color: '#4b68b3',
        jabType: 'rapid 2',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        exclude: ['down tilt'],
        moves: [
            {
                name: 'whip dangle',
                aliases: [
                    'whip dangle thingy',
                    'held whip',
                    'jab dangle',
                    'held jab',
                ],
                link: 'whip dangle thingy',
                png: true
            },
            {
                name: 'down tilt 1',
                aliases: [
                    'down tilt',
                    'dtilt',
                    'dtilt 1'
                ],
                link: 'dtilt 1'
            },
            {
                name: 'down tilt 2',
                aliases: [
                    'dtilt',
                    'dtilt 2'
                ],
                link: 'dtilt 2'
            },
            {
                name: 'down angled forward aerial',
                aliases: [
                    'down angled forward air',
                    'down forward air',
                    'down forward aerial',
                    'down fair',
                    'dfair',
                    'forward air down',
                    'forward aerial down',
                    'fair down'
                ],
                link: 'fair down'
            },
            {
                name: 'up angled forward aerial',
                aliases: [
                    'up angled forward air',
                    'up forward air',
                    'up forward aerial',
                    'up fair',
                    'ufair',
                    'forward air up',
                    'forward aerial up',
                    'fair up'
                ],
                link: 'fair up'
            },
            {
                name: 'down angled back aerial',
                aliases: [
                    'down angled back air',
                    'down back air',
                    'down back aerial',
                    'down bair',
                    'dbair',
                    'back air down',
                    'back aerial down',
                    'bair down'
                ],
                link: 'bair down'
            },
            {
                name: 'up angled back aerial',
                aliases: [
                    'up angled back air',
                    'up back air',
                    'up back aerial',
                    'up bair',
                    'ubair',
                    'back air up',
                    'back aerial up',
                    'bair up'
                ],
                link: 'bair up'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 107,
                rank: 12,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.52,
                rank: 65
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.76,
                rank: 73
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.94,
                rank: 63
            },
            {
                name: 'fall speed',
                value: 1.85,
                rank: 8
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.96,
                rank: 7
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'simon',
        aliases: ['belmont'],
        color: '#8a623f',
        jabType: 'rapid 2',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        exclude: ['down tilt'],
        moves: [
            {
                name: 'whip dangle',
                aliases: [
                    'whip dangle thingy',
                    'held whip',
                    'jab dangle',
                    'held jab',
                ],
                link: 'whip dangle thingy',
                png: true
            },
            {
                name: 'down tilt 1',
                aliases: [
                    'down tilt',
                    'dtilt',
                    'dtilt 1'
                ],
                link: 'dtilt 1'
            },
            {
                name: 'down tilt 2',
                aliases: [
                    'dtilt',
                    'dtilt 2'
                ],
                link: 'dtilt 2'
            },
            {
                name: 'down angled forward aerial',
                aliases: [
                    'down angled forward air',
                    'down forward air',
                    'down forward aerial',
                    'down fair',
                    'dfair',
                    'forward air down',
                    'forward aerial down',
                    'fair down'
                ],
                link: 'fair down'
            },
            {
                name: 'up angled forward aerial',
                aliases: [
                    'up angled forward air',
                    'up forward air',
                    'up forward aerial',
                    'up fair',
                    'ufair',
                    'forward air up',
                    'forward aerial up',
                    'fair up'
                ],
                link: 'fair up'
            },
            {
                name: 'down angled back aerial',
                aliases: [
                    'down angled back air',
                    'down back air',
                    'down back aerial',
                    'down bair',
                    'dbair',
                    'back air down',
                    'back aerial down',
                    'bair down'
                ],
                link: 'bair down'
            },
            {
                name: 'up angled back aerial',
                aliases: [
                    'up angled back air',
                    'up back air',
                    'up back aerial',
                    'up bair',
                    'ubair',
                    'back air up',
                    'back aerial up',
                    'bair up'
                ],
                link: 'bair up'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 107,
                rank: 12,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.52,
                rank: 65
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.76,
                rank: 73
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.94,
                rank: 63
            },
            {
                name: 'fall speed',
                value: 1.85,
                rank: 8
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.96,
                rank: 7
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'ike',
        color: '#b64f3e',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 107,
                rank: 12,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.507,
                rank: 67
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.912,
                rank: 64
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.134,
                rank: 26
            },
            {
                name: 'fall speed',
                value: 1.65,
                rank: 29
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
                rank: 29
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'ridley',
        color: '#845e91',
        jabType: 'gentleman',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 107,
                rank: 12,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.2,
                rank: 9
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.1,
                rank: 47
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
                rank: 40
            },
            {
                name: 'fall speed',
                value: 1.78,
                rank: 17
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.848,
                rank: 16
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'wario',
        aliases: ['waro'],
        color: '#fde51b',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 107,
                rank: 12,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.65,
                rank: 47
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.889,
                rank: 69
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.271,
                rank: 8
            },
            {
                name: 'fall speed',
                value: 1.61,
                rank: 36
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.576,
                rank: 36
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'r.o.b.',
        aliases: ['robot'],
        color: '#b2b8bd',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 106,
                rank: 17,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.725,
                rank: 38
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.178,
                rank: 33
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.134,
                rank: 26
            },
            {
                name: 'fall speed',
                value: 1.6,
                rank: 37
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.56,
                rank: 37
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'link',
        aliases: ['adult link'],
        color: '#1c94c3',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: '2',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 104,
                rank: 19,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.534,
                rank: 63
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.247,
                rank: 22
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.924,
                rank: 68
            },
            {
                name: 'fall speed',
                value: 1.6,
                rank: 37
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.04,
                rank: 5
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 90,
                rank: 1
            }
        ]
    },
    {
        name: 'yoshi',
        color: '#83cd65',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 104,
                rank: 19,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.046,
                rank: 16
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
                rank: 26
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.344,
                rank: 1
            },
            {
                name: 'fall speed',
                value: 1.29,
                rank: 71
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.064,
                rank: 71
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'captain falcon',
        aliases: ['falcon', 'douglas', 'douglas jay falcon'],
        color: '#8e8adc',
        jabType: 'gentleman',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 104,
                rank: 19,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.552,
                rank: 2
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.987,
                rank: 54
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.218,
                rank: 11
            },
            {
                name: 'fall speed',
                value: 1.865,
                rank: 7
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.984,
                rank: 6
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'mii gunner',
        aliases: ['gunner', 'sans', 'cuphead'],
        ufdFile: 'sans',
        color: '#5dc1e6',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 104,
                rank: 19,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.37,
                rank: 74
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1,
                rank: 53
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.93,
                rank: 67
            },
            {
                name: 'fall speed',
                value: 1.45,
                rank: 55
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.32,
                rank: 53
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'ken',
        color: '#f78352',
        jabType: 'unique',
        ftiltType: 'unique',
        fsmashType: 'unique',
        moves: [
            {
                name: 'light forward tilt (close)',
                aliases: ['light ftilt close', 'proximity ftilt', 'ftilt close',    'close ftilt',
                    'light close ftilt',
                    'tapped close ftilt',
                    'close ftilt tapped'
                ],
                'link': 'ftilt proximity'
            },
            {
                name: 'light forward tilt (far)',
                aliases: ['light ftilt far', 'ftilt', 'ftilt far',    'far ftilt',
                    'distance ftilt',
                    'tapped ftilt',
                    'far tapped ftilt',
                    'tapped far ftilt',
                    'light far ftilt',
                    'light ftilt'
                ],
                'link': 'ftilt light'
            },
            {
                name: 'heavy forward tilt',
                aliases: ['heavy ftilt', 'held ftilt'],
                'link': 'ftilt heavy'
            },
            {
                name: 'light jab 1',
                aliases: ['jab', 'jab 1'],
                'link': 'jab 1'
            },
            {
                name: 'light jab 2',
                aliases: ['jab 2'],
                'link': 'jab 2'
            },
            {
                name: 'light jab 3',
                aliases: ['jab 3'],
                'link': 'jab 3'
            },
            {
                name: 'heavy jab',
                aliases: ['jab heavy'],
                'link': 'jab heavy'
            },
            {
                name: 'heavy jab (close)',
                aliases: ['jab heavy close', 'jab close heavy', 'close jab',    'proximity jab'
                ],
                'link': 'jab proximity'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 103,
                rank: 23,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
                rank: 32
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.825,
                rank: 71
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.12,
                rank: 29
            },
            {
                name: 'fall speed',
                value: 1.6,
                rank: 37
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.24,
                rank: 54
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 40,
                rank: 74
            }
        ]
    },
    {
        name: 'ryu',
        color: '#d0504d',
        jabType: 'unique',
        ftiltType: 'unique',
        fsmashType: 'unique',
        moves: [
            {
                name: 'light forward tilt (close)',
                aliases: ['light ftilt close', 'proximity ftilt', 'ftilt close',    'close ftilt',
                    'light close ftilt',
                    'tapped close ftilt',
                    'close ftilt tapped'
                ],
                'link': 'ftilt light close'
            },
            {
                name: 'light forward tilt (far)',
                aliases: ['light ftilt far', 'ftilt', 'ftilt far',    'far ftilt',
                    'distance ftilt',
                    'tapped ftilt',
                    'far tapped ftilt',
                    'tapped far ftilt',
                    'light far ftilt',
                    'light ftilt'
                ],
                'link': 'ftilt light'
            },
            {
                name: 'heavy forward tilt',
                aliases: ['heavy ftilt', 'held ftilt', 'collarbone breaker', 'shieldbreaker'],
                'link': 'ftilt heavy'
            },
            {
                name: 'light jab 1',
                aliases: ['jab', 'jab 1'],
                'link': 'jab 1'
            },
            {
                name: 'light jab 2',
                aliases: ['jab 2'],
                'link': 'jab 2'
            },
            {
                name: 'light jab 3',
                aliases: ['jab 3'],
                'link': 'jab 3'
            },
            {
                name: 'heavy jab',
                aliases: ['jab heavy'],
                'link': 'jab heavy'
            },
            {
                name: 'heavy jab (close)',
                aliases: ['jab heavy close', 'jab close heavy', 'close jab',    'proximity jab'
                ],
                'link': 'jab heavy close'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 103,
                rank: 23,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.6,
                rank: 54
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.75,
                rank: 76
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.12,
                rank: 29
            },
            {
                name: 'fall speed',
                value: 1.6,
                rank: 37
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.24,
                rank: 54
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 40,
                rank: 74
            }
        ]
    },
    {
        name: 'mega man',
        aliases: ['mm'],
        color: '#86c1e0',
        jabType: '1',
        ftiltType: 'unangled',
        fsmashType: 'unique',
        exclude: ['forward tilt'],
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 102,
                rank: 25,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.602,
                rank: 53
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.132,
                rank: 41
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
                rank: 19
            },
            {
                name: 'fall speed',
                value: 1.8,
                rank: 11
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
                rank: 10
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'cloud',
        color: '#419384',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 100,
                rank: 26,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.167,
                rank: 11
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.155,
                rank: 34
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
                rank: 19
            },
            {
                name: 'fall speed',
                value: 1.68,
                rank: 26
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.688,
                rank: 26
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'mii swordfighter',
        aliases: ['swordfighter', 'swordie', 'rex'],
        color: '#5dc1e6',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 100,
                rank: 26,
                aliases: ['mass']
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.07,
                rank: 50
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.58,
                rank: 60
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.17,
                rank: 18
            },
            {
                name: 'fall speed',
                value: 1.55,
                rank: 45
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
                rank: 43
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'corrin',
        aliases: ['corn'],
        color: '#63a7c0',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 98,
                rank: 28,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
                rank: 55
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
                rank: 26
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.019,
                rank: 49
            },
            {
                name: 'fall speed',
                value: 1.65,
                rank: 29
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
                rank: 29
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'mario',
        aliases: ['maro', 'super mario'], // thanks kip
        color: '#d04c4a',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 98,
                rank: 28,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
                rank: 32
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.155,
                rank: 34
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
                rank: 12
            },
            {
                name: 'fall speed',
                value: 1.5,
                rank: 50
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.4,
                rank: 48
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'luigi',
        aliases: ['loogi', 'ghostbuster 2'],
        color: '#5ea444',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 97,
                rank: 31,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.65,
                rank: 47
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.134,
                rank: 39
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.77,
                rank: 77
            },
            {
                name: 'fall speed',
                value: 1.32,
                rank: 65
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.112,
                rank: 65
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'shulk',
        aliases: ['monado'],
        color: '#d5647a',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 97,
                rank: 31,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.672,
                rank: 43
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.155,
                rank: 34
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.113,
                rank: 31
            },
            {
                name: 'fall speed',
                value: 1.58,
                rank: 41
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
                rank: 38
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'pit',
        color: '#ebeef0',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 96,
                rank: 33,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.828,
                rank: 28
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.259,
                rank: 20
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.935,
                rank: 65
            },
            {
                name: 'fall speed',
                value: 1.48,
                rank: 53
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.368,
                rank: 51
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'wii fit trainer',
        aliases: ['wii fit', 'wft', 'trainer'],
        color: '#c7f7fc',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 96,
                rank: 33,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.866,
                rank: 27
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.224,
                rank: 24
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.019,
                rank: 49
            },
            {
                name: 'fall speed',
                value: 1.3,
                rank: 68
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
                rank: 68
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'ivysaur',
        aliases: ['ivy'],
        ufdDir: 'pt ivysaur',
        color: '#369c2f',
        jabType: 'rapid 2',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 96,
                rank: 33,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
                rank: 55
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.103,
                rank: 45
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.998,
                rank: 56
            },
            {
                name: 'fall speed',
                value: 1.38,
                rank: 56
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.208,
                rank: 56
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'roy',
        aliases: ['ghostbuster'],
        color: '#e62c2c',
        jabType: '1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 95,
                rank: 37,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.145,
                rank: 12
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
                rank: 26
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.302,
                rank: 4
            },
            {
                name: 'fall speed',
                value: 1.8,
                rank: 11
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
                rank: 10
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'chrom',
        color: '#597891',
        jabType: '1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 95,
                rank: 37,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.145,
                rank: 12
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
                rank: 26
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.302,
                rank: 4
            },
            {
                name: 'fall speed',
                value: 1.8,
                rank: 11
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
                rank: 10
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'robin',
        color: '#c387d9',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'unique',
        moves: [],
        exclude: ['neutral aerial', 'forward aerial', 'back aerial', 'up aerial', 'down aerial'],
        attributes: [
            {
                name: 'weight',
                value: 95,
                rank: 37,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.265,
                rank: 77
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.936,
                rank: 58
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
                rank: 40
            },
            {
                name: 'fall speed',
                value: 1.5,
                rank: 50
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.4,
                rank: 48
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'pac-man',
        aliases: ['pac', 'ghostbuster 3'],
        color: '#fbe17f',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 95,
                rank: 37,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.672,
                rank: 43
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.097,
                rank: 48
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.092,
                rank: 36
            },
            {
                name: 'fall speed',
                value: 1.35,
                rank: 59
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
                rank: 61
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'ness',
        aliases: ['pk fire'],
        color: '#de413d',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 94,
                rank: 41,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.609,
                rank: 52
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.907,
                rank: 65
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.007,
                rank: 53
            },
            {
                name: 'fall speed',
                value: 1.31,
                rank: 67
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.096,
                rank: 67
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'lucas',
        aliases: ['pk freeze'],
        color: '#e06833',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 94,
                rank: 41,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.65,
                rank: 47
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.893,
                rank: 68
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
                rank: 19
            },
            {
                name: 'fall speed',
                value: 1.37,
                rank: 58
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.192,
                rank: 58
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'inkling',
        aliases: ['squid'],
        color: '#ff8614',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 94,
                rank: 41,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.925,
                rank: 22
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.134,
                rank: 39
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
                rank: 12
            },
            {
                name: 'fall speed',
                value: 1.58,
                rank: 41
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
                rank: 38
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'mii brawler',
        aliases: ['brawler'],
        color: '#5dc1e6',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 94,
                rank: 41,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.92,
                rank: 23
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.26,
                rank: 17
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.15,
                rank: 25
            },
            {
                name: 'fall speed',
                value: 1.92,
                rank: 5
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.072,
                rank: 4
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'wolf',
        color: '#cccccc',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 92,
                rank: 45,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.54,
                rank: 62
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
                rank: 26
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.281,
                rank: 6
            },
            {
                name: 'fall speed',
                value: 1.8,
                rank: 11
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
                rank: 10
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'villager',
        aliases: ['villy'],
        color: '#83a88e',
        jabType: 'unique',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'jab 1',
                aliases: ['jab']
            },
            {
                name: 'jab 2'
            },
            {
                name: 'rapid jab',
                'link': 'jab rapid'
            },
            {
                name: 'rapid jab finisher 1',
                aliases: ['rapid jab finisher', 'rapid jab ender'],
                'link': 'jab 1 end'
            },
            {
                name: 'rapid jab finisher 2',
                aliases: ['rapid jab ender 2'],
                'link': 'jab 2 end'
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 92,
                rank: 45,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.397,
                rank: 73
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.092,
                rank: 49
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.987,
                rank: 57
            },
            {
                name: 'fall speed',
                value: 1.32,
                rank: 65
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.112,
                rank: 65
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'lucario',
        aliases: ['luc'],
        color: '#b8e3fc',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 92,
                rank: 45,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.705,
                rank: 40
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.103,
                rank: 45
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.281,
                rank: 6
            },
            {
                name: 'fall speed',
                value: 1.68,
                rank: 26
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.688,
                rank: 26
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'palutena',
        aliases: ['palu'],
        color: '#91e5c1',
        jabType: 'rapid 1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 91,
                rank: 49,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.077,
                rank: 15
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.271,
                rank: 16
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1,
                rank: 54
            },
            {
                name: 'fall speed',
                value: 1.55,
                rank: 45
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
                rank: 43
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'toon link',
        aliases: ['tink', 'tlink', 'loon', 'child'],
        color: '#8ce689',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 91,
                rank: 49,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.906,
                rank: 24
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.288,
                rank: 14
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
                rank: 40
            },
            {
                name: 'fall speed',
                value: 1.38,
                rank: 56
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.208,
                rank: 56
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'lucina',
        color: '#7ea6c7',
        jabType: '2',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 90,
                rank: 51,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.964,
                rank: 20
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.575,
                rank: 1
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.071,
                rank: 38
            },
            {
                name: 'fall speed',
                value: 1.58,
                rank: 41
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
                rank: 38
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'marth',
        color: '#5da8c8',
        jabType: '2',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 90,
                rank: 51,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.964,
                rank: 20
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.575,
                rank: 1
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.071,
                rank: 38
            },
            {
                name: 'fall speed',
                value: 1.58,
                rank: 41
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
                rank: 38
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'diddy kong',
        aliases: ['diddy'],
        color: '#e15951',
        jabType: 'gentleman',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 90,
                rank: 51,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.006,
                rank: 18
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.313,
                rank: 11
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.924,
                rank: 68
            },
            {
                name: 'fall speed',
                value: 1.75,
                rank: 21
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.8,
                rank: 20
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'peach',
        aliases: ['paisy'],
        color: '#f5c9f0',
        jabType: '2',
        ftiltType: 'unangled',
        fsmashType: 'unique',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 89,
                rank: 54,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
                rank: 55
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.924,
                rank: 59
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.029,
                rank: 45
            },
            {
                name: 'fall speed',
                value: 1.19,
                rank: 75
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.904,
                rank: 75
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'daisy',
        color: '#f5bf2d',
        jabType: '2',
        ftiltType: 'unangled',
        fsmashType: 'unique',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 89,
                rank: 54,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
                rank: 55
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.924,
                rank: 59
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.029,
                rank: 45
            },
            {
                name: 'fall speed',
                value: 1.19,
                rank: 75
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.904,
                rank: 75
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'greninja',
        aliases: ['gren', 'frog', 'froge'],
        color: '#5673a5',
        jabType: 'gentleman',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'down taunt',
                aliases: ['dtaunt'],
                'url': 'https://i.imgur.com/4lCJjHp.gif'
            },
            {
                name: 'down facing getup attack',
                aliases: ['dfga', 'dga', 'downgetup',    'dgetup'
                ],
                'url': 'https://i.imgur.com/6ZlWM9a.gif'
            },
            {
                name: 'up facing getup attack',
                aliases: ['ufga', 'uga', 'upgetup',    'ugetup'
                ],
                'url': 'https://i.imgur.com/LamuLF0.gif'
            },
            {
                name: 'ledge attack',
                aliases: ['la', 'ledgetilt', 'ledgehit'],
                'url': 'https://i.imgur.com/WlxAshH.gif'
            },
            {
                name: 'shadow sneak (forward attack)',
                aliases: ['ssf', 'shadow sneak forward', 'forward shadow sneak',    'sneak forward',
                    'forward sneak',
                    'shadow sneak',
                    'f sneak',
                    'side special',
                    'side b'
                ],
                'link': 'shadow sneak f'
            },
            {
                name: 'shadow sneak (back attack)',
                aliases: ['shadow sneak back', 'back shadow sneak', 'sneak back',    'back sneak',
                    'b sneak'
                ],
                'link': 'shadow sneak b'
            },
            {
                name: 'substitute',
                aliases: ['counter', 'down special', 'down b']
            },
            {
                name: 'substitute attack (side)',
                aliases: ['substitute side attack', 'side substitute attack', 'substitute side',    'side substitute',
                    'counter side',
                    'side counter',
                    'counter attack side',
                    'side counter attack',
                    'counter side attack',
                    'substitute attack forward',
                    'substitute forward attack',
                    'forward substitute attack',
                    'substitute forward',
                    'forward substitute',
                    'counter forward',
                    'forward counter',
                    'counter attack forward',
                    'forward counter attack',
                    'counter forward attack',
                    'substitute attack',
                    'counter attack'
                ],
                'link': 'substitute hit side'
            },
            {
                name: 'substitute attack (down)',
                aliases: ['substitute down attack', 'down substitute attack', 'substitute down',    'down substitute',
                    'counter down',
                    'down counter',
                    'counter attack down',
                    'down counter attack',
                    'counter down attack',
                    'counter spike',
                    'substitute spike'
                ],
                'link': 'substitute hit down'
            },
            {
                name: 'substitute attack (up)',
                aliases: ['substitute up attack', 'up substitute attack', 'substitute up',    'up substitute',
                    'counter up',
                    'up counter',
                    'counter attack up',
                    'up counter attack',
                    'counter up attack'
                ],
                'link': 'substitute hit up'
            },
            {
                name: 'substitute attack (diagonally down)',
                aliases: ['substitute diagonally down attack', 'diagonally down substitute attack', 'substitute diagonally down',    'diagonally down substitute',
                    'counter diagonally down',
                    'diagonally down counter',
                    'counter attack diagonally down',
                    'diagonally down counter attack',
                    'counter diagonally down attack'
                ],
                'link': 'substitute hit diagonally down'
            },
            {
                name: 'substitute attack (diagonally up)',
                aliases: ['substitute diagonally up attack', 'diagonally up substitute attack', 'substitute diagonally up',    'diagonally up substitute',
                    'counter diagonally up',
                    'diagonally up counter',
                    'counter attack diagonally up',
                    'diagonally up counter attack',
                    'counter diagonally up attack'
                ],
                'link': 'substitute hit diagonally up'
            },
            {
                name: 'trip attack',
                aliases: ['getup'],
                'url': 'https://i.imgur.com/pIijMjL.gif'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 88,
                rank: 56,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.288,
                rank: 7
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.502,
                rank: 4
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.239,
                rank: 10
            },
            {
                name: 'fall speed',
                value: 1.85,
                rank: 8
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.96,
                rank: 7
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'young link',
        aliases: ['yink', 'ylink', 'loung'],
        color: '#a5d160',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: '2',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 88,
                rank: 56,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.749,
                rank: 36
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.26,
                rank: 17
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.966,
                rank: 60
            },
            {
                name: 'fall speed',
                value: 1.8,
                rank: 11
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
                rank: 10
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'little mac',
        aliases: ['mac', 'lil mac'],
        color: '#5d8f72',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 87,
                rank: 59,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.464,
                rank: 3
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.386,
                rank: 8
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
                rank: 12
            },
            {
                name: 'fall speed',
                value: 1.95,
                rank: 2
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.12,
                rank: 2
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'sonic',
        color: '#659deb',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 86,
                rank: 60,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 3.85,
                rank: 1
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.444,
                rank: 7
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
                rank: 12
            },
            {
                name: 'fall speed',
                value: 1.65,
                rank: 29
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
                rank: 29
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'duck hunt',
        aliases: ['duck hunt duo', 'dh', 'dhd'],
        color: '#8c5d3a',
        jabType: 'gentleman',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 86,
                rank: 60,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.793,
                rank: 31
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.213,
                rank: 25
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
                rank: 19
            },
            {
                name: 'fall speed',
                value: 1.65,
                rank: 29
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
                rank: 29
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'zelda',
        aliases: ['not sheik'],
        color: '#ff94dd',
        jabType: 'rapid 1',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 85,
                rank: 62,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.43,
                rank: 71
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.914,
                rank: 63
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.092,
                rank: 36
            },
            {
                name: 'fall speed',
                value: 1.35,
                rank: 59
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
                rank: 61
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'rosalina',
        aliases: ['rosa', 'rosalina and luma', 'rosalina & luma', 'rosa and luma'],
        ufdDir: 'rosalina and luma',
        color: '#98d5cd',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 82,
                rank: 63,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.795,
                rank: 30
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.138,
                rank: 38
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
                rank: 40
            },
            {
                name: 'fall speed',
                value: 1.2,
                rank: 74
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.92,
                rank: 74
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'luma',
        ufdDir: 'rosalina and luma',
        color: '#98d5cd',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: []
    },
    {
        name: 'falco',
        aliases: ['chicken'],
        color: '#69b0de',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 82,
                rank: 63,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.619,
                rank: 50
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.344,
                rank: 10
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.977,
                rank: 59
            },
            {
                name: 'fall speed',
                value: 1.8,
                rank: 11
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
                rank: 10
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'bayonetta',
        aliases: ['bayo', 'cereza'],
        color: '#a5a1e0',
        jabType: 'gentleman',
        ftiltType: '3',
        fsmashType: 'unangled',
        landingDair: true,
        exclude: ['forward aerial'],
        moves: [
            {
                name: 'forward tilt 1',
                aliases: ['ftilt 1', 'forward tilt', 'ftilt',    'bad move',
                    'bad move 1'
                ],
                'link': 'ftilt 1'
            },
            {
                name: 'forward tilt 2',
                aliases: ['ftilt 2', 'bad move 2'],
                'link': 'ftilt 2'
            },
            {
                name: 'forward tilt 3',
                aliases: ['ftilt 3', 'bad move 3'],
                'link': 'ftilt 3'
            },
            {
                name: 'forward aerial 1',
                aliases: ['fair', 'forward aerial', 'fair 1'],
                link: 'fair 1'
            },
            {
                name: 'forward aerial 2',
                aliases: ['fair 2'],
                link: 'fair 2'
            },
            {
                name: 'forward aerial 3',
                aliases: ['fair 3'],
                link: 'fair 3'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 81,
                rank: 65,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
                rank: 32
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.945,
                rank: 56
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.019,
                rank: 49
            },
            {
                name: 'fall speed',
                value: 1.77,
                rank: 18
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.832,
                rank: 17
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'meta knight',
        aliases: ['mk', 'borb'],
        color: '#5367b0',
        jabType: 'rapid',
        ftiltType: '3',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 80,
                rank: 66,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.09,
                rank: 14
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.239,
                rank: 23
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.04,
                rank: 44
            },
            {
                name: 'fall speed',
                value: 1.66,
                rank: 28
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.656,
                rank: 28
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'zero suit samus',
        aliases: ['zss'],
        color: '#205ba4',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 80,
                rank: 66,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.31,
                rank: 6
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.47,
                rank: 5
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.26,
                rank: 9
            },
            {
                name: 'fall speed',
                value: 1.7,
                rank: 24
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.72,
                rank: 24
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'kirby',
        color: '#f2c0c4',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 79,
                rank: 68,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.727,
                rank: 37
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.977,
                rank: 55
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.84,
                rank: 74
            },
            {
                name: 'fall speed',
                value: 1.23,
                rank: 73
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.968,
                rank: 73
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'pikachu',
        aliases: ['pika', 'fat rat', 'rat'],
        color: '#fddd05',
        jabType: '1',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 79,
                rank: 68,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.039,
                rank: 17
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.302,
                rank: 12
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.957,
                rank: 61
            },
            {
                name: 'fall speed',
                value: 1.55,
                rank: 45
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
                rank: 43
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'olimar',
        aliases: ['oli', 'alph', 'pikmin'],
        color: '#ccefb0',
        jabType: '2',
        ftiltType: 'unangled',
        fsmashType: 'unique',
        moves: [],
        exclude: ['up smash', 'down smash', 'forward aerial', 'back aerial', 'up aerial', 'down aerial', 'standing grab', 'dash grab', 'pivot grab'],
        attributes: [
            {
                name: 'weight',
                value: 79,
                rank: 68,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.617,
                rank: 51
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.945,
                rank: 56
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.861,
                rank: 73
            },
            {
                name: 'fall speed',
                value: 1.35,
                rank: 59
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
                rank: 61
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'sheik',
        aliases: ['shiek', 'not zelda'],
        color: '#756fd0',
        jabType: 'rapid 2',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 78,
                rank: 71,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.42,
                rank: 4
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.47,
                rank: 5
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
                rank: 19
            },
            {
                name: 'fall speed',
                value: 1.75,
                rank: 21
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.8,
                rank: 20
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'mewtwo',
        aliases: ['m2'],
        color: '#927bc5',
        jabType: 'rapid 1',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 77,
                rank: 72,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.255,
                rank: 8
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.26,
                rank: 17
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.313,
                rank: 3
            },
            {
                name: 'fall speed',
                value: 1.55,
                rank: 45
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
                rank: 43
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'fox',
        color: '#b3834d',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 77,
                rank: 72,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.402,
                rank: 5
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.523,
                rank: 3
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.11,
                rank: 32
            },
            {
                name: 'fall speed',
                value: 2.1,
                rank: 1
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.36,
                rank: 1
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'squirtle',
        aliases: ['squirt'],
        ufdDir: 'pt squirtle',
        color: '#9bf1f2',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 75,
                rank: 74,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
                rank: 32
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.281,
                rank: 15
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.01,
                rank: 52
            },
            {
                name: 'fall speed',
                value: 1.35,
                rank: 59
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
                rank: 61
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'jigglypuff',
        aliases: ['puff', 'jiggs', 'purin'],
        color: '#f29bf6',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 68,
                rank: 76,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.271,
                rank: 76
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.735,
                rank: 77
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.332,
                rank: 2
            },
            {
                name: 'fall speed',
                value: 0.98,
                rank: 77
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.568,
                rank: 77
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'dark pit',
        aliases: ['pittoo', 'dpit'],
        color: '#875cbe',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 96,
                rank: 33,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.828,
                rank: 28
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.259,
                rank: 20
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.935,
                rank: 65
            },
            {
                name: 'fall speed',
                value: 1.48,
                rank: 53
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.368,
                rank: 51
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'nana',
        ssbuLink: 'ice climbers',
        ufdDir: 'ice climbers',
        color: '#a0cafe',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 92,
                rank: 45,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.683,
                rank: 41
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.1088,
                rank: 44
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.8715,
                rank: 72
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
                rank: 68
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            },
            {
                name: 'fall speed',
                value: 1.3,
                rank: 68
            }
        ]
    },
    {
        name: 'mr. game & watch',
        aliases: ['mr game and watch', 'g&w', 'game and watch', 'game & watch', 'gnw', 'oos'],
        ufdDir: 'mr game and watch',
        color: '#000000',
        jabType: 'rapid 1',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 75,
                rank: 74,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.679,
                rank: 42
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.18,
                rank: 32
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.176,
                rank: 17
            },
            {
                name: 'fall speed',
                value: 1.24,
                rank: 72
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.984,
                rank: 72
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'popo',
        aliases: ['ice climbers', 'ice climber', 'ics', 'ic'],
        ssbuLink: 'ice climbers',
        ufdDir: 'ice climbers',
        color: '#a0cafe',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 92,
                rank: 45,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.53,
                rank: 64
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.008,
                rank: 52
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.83,
                rank: 75
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
                rank: 68
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            },
            {
                name: 'fall speed',
                value: 1.3,
                rank: 68
            }
        ]
    },
    {
        name: 'dr. mario',
        aliases: ['doc', 'doctor mario', 'super doctor mario', 'super dr mario', 'doctor super mario', 'dr super mario'],
        color: '#edf2f7',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 98,
                rank: 28,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.397792,
                rank: 72
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.917301,
                rank: 62
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.9238784,
                rank: 70
            },
            {
                name: 'fall speed',
                value: 1.5,
                rank: 50
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.4,
                rank: 48
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 2
            }
        ]
    },
    {
        name: 'joker',
        color: '#ff0000',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'back aerial',
                aliases: ['back air', 'bair', 'gg'],
                'link': 'bair'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 93,
                rank: 0,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.06,
                rank: 0
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.12,
                rank: 0
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.1,
                rank: 0
            },
            {
                name: 'fall speed',
                value: 1.63,
                rank: 0
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.097,
                rank: 0
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 90,
                rank: 0
            }
        ]
    },
    {
        name: 'hero',
        aliases: ['the hero', 'rng', 'luminary'],
        color: '#c592d6',
        jabType: '3',
        ftiltType: '2',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'zap',
                aliases: ['side b', 'side special', 'weak side b',    'weak side special',
                    'min side b',
                    'min side special',
                    'minimum side b',
                    'minimum side special'
                ]
            },
            {
                name: 'zapple',
                aliases: ['medium side b', 'medium side special']
            },
            {
                name: 'kazap',
                aliases: ['strong side b', 'string side special', 'max side b',    'max side special',
                    'maximum side b',
                    'maximum side special'
                ]
            },
            {
                name: 'zap (fail)',
                aliases: ['failed zap', 'zap no mp'],
                'url': 'https://i.imgur.com/uSZ0Lr0.gif'
            },
            {
                name: 'flame slash',
                aliases: ['fire slash']
            },
            {
                name: 'hatchet man'
            },
            {
                name: 'kaboom',
                'url': 'https://ultimateframedata.com/hitboxes/hero/Kaboom.gif'
            },
            {
                name: 'kaclang',
                aliases: ['kaclank'],
                png: true
            },
            {
                name: 'kacrackle slash',
                aliases: ['ice slash', 'freeze slash']
            },
            {
                name: 'kamikazee',
                aliases: ['kamikaze', 'stock explosion'],
                'url': 'https://ultimateframedata.com/hitboxes/hero/Kamikazee.gif'
            },
            {
                name: 'magic burst',
                aliases: ['magic explosion', 'magic bomb'],
                'url': 'https://ultimateframedata.com/hitboxes/hero/Magic%20Burst.gif'
            },
            {
                name: 'metal slash',
                aliases: ['metal killer']
            },
            {
                name: 'sizzle',
                'url': 'https://ultimateframedata.com/hitboxes/hero/Sizzle.gif'
            },
            {
                name: 'thwack',
                aliases: ['instakill'],
                'url': 'https://ultimateframedata.com/hitboxes/hero/Thwack.png'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 101,
                rank: 0,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.84,
                rank: 0
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.98,
                rank: 0
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.01,
                rank: 0
            },
            {
                name: 'fall speed',
                value: 1.57,
                rank: 0
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.512,
                rank: 0
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 0
            }
        ]
    },
    {
        name: 'banjo & kazooie',
        aliases: ['banjo', 'banjo and kazooie', 'banjo kazooie', 'bk', 'burger king'],
        ufdDir: 'banjo and kazooie',
        ufdFile: 'banjo kazooie',
        color: '#e8cf2a',
        jabType: 'gentleman',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 106,
                rank: 0,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.18,
                rank: 0
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.06,
                rank: 0
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.92,
                rank: 0
            },
            {
                name: 'fall speed',
                value: 1.76,
                rank: 0
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.816,
                rank: 0
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 0
            }
        ]
    },
    {
        name: 'terry',
        color: '#f8934b',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                rank: 0,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.72,
                rank: 0
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.85,
                rank: 0
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.95,
                rank: 0
            },
            {
                name: 'fall speed',
                value: 1.48,
                rank: 0
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.368,
                rank: 0
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
                rank: 0
            }
        ]
    },
    {
        name: 'byleth',
        color: '#5d7c8d',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 97,
                rank: 0,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.43,
                rank: 0
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.97,
                rank: 0
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.89,
                rank: 0
            },
            {
                name: 'fall speed',
                value: 1.6,
                rank: 0
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.56,
                rank: 0
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 62.5,
                rank: 0
            }
        ]
    },
    {
        name: 'min min',
        aliases: ['min', 'stage control'],
        ssbuLink: 'minmin',
        color: '#ff872b',
        jabType: 'gentleman',
        ftiltType: 'unique',
        fsmashType: 'unique',
        moves: [],
        exclude: ['neutral aerial', 'forward aerial', 'back aerial'],
        attributes: [
            {
                name: 'weight',
                value: 104,
                rank: 21,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.55,
                rank: 0
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.05,
                rank: 0
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.85,
                rank: 70
            },
            {
                name: 'fall speed',
                value: 1.5,
                rank: 50
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.432,
                rank: 0
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 61.678,
                rank: 0
            }
        ]
    }
]