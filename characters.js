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
                link: 'dtilt'
            },
            {
                name: 'dash attack',
                aliases: ['da', 'pot'],
                png: true
            },
            {
                name: 'forward smash',
                aliases: ['fsmash', 'side smash', 'tada'],
                link: 'fsmash'
            },
            {
                name: 'pocket',
                aliases: ['neutral b', 'neutral special']
            },
            {
                name: 'fishing rod (cast)',
                aliases: ['rod', 'fishing pole', 'fishing rod',    'rod cast'
                ],
                url: 'https://pbs.twimg.com/media/EQxzqxNUwAAp3-n?format=png'
            },
            {
                name: 'fishing rod (reel)',
                aliases: ['rod reel', 'rod reel in', 'fishing pole reel',    'fishing pole reel in'
                ],
                url: 'https://pbs.twimg.com/media/EQxzqw8UUAATugV?format=png'
            },
            {
                name: 'fishing rod forward throw',
                aliases: ['fising rod fthrow', 'rod forward throw', 'rod fthrow'],
                link: 'fishing rod fthrow'
            },
            {
                name: 'fishing rod back throw',
                aliases: ['fising rod bthrow', 'rod back throw', 'rod bthrow'],
                link: 'fishing rod bthrow'
            },
            {
                name: 'fishing rod down throw',
                aliases: ['fising rod dthrow', 'rod down throw', 'rod dthrow'],
                link: 'fishing rod dthrow'
            },
            {
                name: 'fishing rod up throw',
                aliases: ['fising rod uthrow', 'rod up throw', 'rod uthrow'],
                link: 'fishing rod uthrow'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 88,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.48,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.14,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.02,
            },
            {
                name: 'fall speed',
                value: 1.3,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                link: 'thunder hit'
            },
            {
                name: 'thunder jolt (grounded)',
                aliases: [
                    'thunder jolt ground',
                    'grounded thunder jolt',
                    'jolt',
                    'grounded jolt',
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
                link: 'thunder jolt g',
                png: true
            },
            {
                name: 'thunder jolt (aerial)',
                aliases: [
                    'thunder jolt air',
                    'aerial thunder jolt',
                    'aerial jolt',
                    'jolt air',
                    'tjolt air',
                    'aerial tjolt',
                    'neutral special air',
                    'aerial neutral special',
                    'neutral b air',
                    'aerial neutral b'
                ],
                link: 'thunder jolt a',
                png: true
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 62,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.892,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.302,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.029,
            },
            {
                name: 'fall speed',
                value: 1.9,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.5,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 31.579,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.882,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.987,
            },
            {
                name: 'fall speed',
                value: 1.73,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.768,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        unavailable: ['fire breath'],
        moves: [
            {
                name: 'fire breath',
                aliases: [
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'flying slam (grounded)',
                aliases: [
                    'side b',
                    'side b grounded',
                    'side special',
                    'side special grounded'
                ],
                link: 'flying slam g',
            },
            {
                name: 'flying slam (aerial)',
                aliases: [
                    'side b aerial',
                    'side b air',
                    'side special aerial',
                    'side special air'
                ],
                link: 'flying slam a',
            },
            {
                name: 'flying slam (falling)',
                aliases: [
                    'falling flying slam',
                    'flying slam fall',
                    'side b falling',
                    'side b fall',
                    'side special falling',
                    'side special fall'
                ],
                link: 'flying slam',
            },
            {
                name: 'whirling fortress (grounded)',
                aliases: [
                    'up b',
                    'up b grounded',
                    'up special',
                    'up special grounded'
                ],
                link: 'whirling fortress g',
            },
            {
                name: 'whirling fortress (aerial)',
                aliases: [
                    'whirling fortress air',
                    'up b aerial',
                    'up b air',
                    'up special aerial',
                    'up special air'
                ],
                link: 'whirling fortress a',
            },
            {
                name: 'bowser bomb (grounded)',
                aliases: [
                    'down b',
                    'down b grounded',
                    'down special',
                    'down special grounded'
                ],
                link: 'bowser bomb'
            },
            {
                name: 'bowser bomb (aerial)',
                aliases: [
                    'bowser bomb air',
                    'down b aerial',
                    'down b air',
                    'down special aerial',
                    'down special air'
                ],
                link: 'bowser bomb',
                png: true
            },
            {
                name: 'bowser bomb (landing)',
                aliases: [
                    'landing bowser bomb',
                    'down b landing',
                    'down special landing'
                ],
                link: 'bowser bomb landing'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 135,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.971,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.901,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
            },
            {
                name: 'fall speed',
                value: 1.77,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.832,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.485,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.903,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.945,
            },
            {
                name: 'fall speed',
                value: 1.7,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.72,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.873,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.365,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
            },
            {
                name: 'fall speed',
                value: 1.63,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.608,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.496,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.029,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.735,
            },
            {
                name: 'fall speed',
                value: 1.95,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.12,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        unavailable: ['flame choke (aerial, success)'],
        moves: [
            {
                name: 'warlock punch (grounded)',
                aliases: [
                    'warlock punch',
                    'neutral b',
                    'neutral b grounded',
                    'neutral special',
                    'neutral special grounded'
                ],
                link: 'warlock punch g'
            },
            {
                name: 'warlock punch (grounded, reversed)',
                aliases: [
                    'warlock punch reversed',
                    'warlock punch reverse',
                    'neutral b reversed',
                    'neutral b reverse',
                    'neutral b grounded reversed',
                    'neutral b grounded reverse',
                    'neutral special reversed',
                    'neutral special reverse',
                    'neutral special grounded reversed',
                    'neutral special grounded reverse'
                ],
                link: 'warlock punch g r'
            },
            {
                name: 'warlock punch (aerial)',
                aliases: [
                    'warlock punch aerial',
                    'warlock punch air',
                    'neutral b aerial',
                    'neutral b air',
                    'neutral special aerial',
                    'neutral special air'
                ],
                link: 'warlock punch a'
            },
            {
                name: 'warlock punch (aerial reversed)',
                aliases: [
                    'warlock punch air reversed',
                    'warlock punch air reverse',
                    'neutral b aerial reversed',
                    'neutral b aerial reverse',
                    'neutral b air reversed',
                    'neutral b air reverse',
                    'neutral special aerial reversed',
                    'neutral special aerial reverse',
                    'neutral special air reversed',
                    'neutral special air reverse'
                ],
                link: 'warlock punch a r'
            },
            {
                name: 'flame choke (grounded, grab)',
                aliases: [
                    'flame choke',
                    'flame choke grab',
                    'side b',
                    'side b grounded',
                    'side b grounded grab',
                    'side special',
                    'side special grounded',
                    'side special grounded grab'
                ],
                link: 'flame choke g'
            },
            {
                name: 'flame choke (grounded, success)',
                aliases: [
                    'flame choke hit',
                    'flame choke success',
                    'side b hit',
                    'side b success',
                    'side b grounded hit',
                    'side special hit',
                    'side special success',
                    'side special grounded hit'
                ],
                link: 'flame choke'
            },
            {
                name: 'flame choke (aerial, grab)',
                aliases: [
                    'flame choke air',
                    'flame choke air grab',
                    'side b air',
                    'side b air grab',
                    'side b aerial',
                    'side b aerial grab',
                    'side special air',
                    'side special air grab',
                    'side special aerial',
                    'side special aerial grab'
                ],
                link: 'flame choke a'
            },
            {
                name: 'flame choke (aerial, success)',
                aliases: [
                    'flame choke air hit',
                    'flame choke air success',
                    'side b air hit',
                    'side b air success',
                    'side b aerial hit',
                    'side b aerial success',
                    'side special air hit',
                    'side special air success',
                    'side special aerial hit',
                    'side special aerial success',
                ]
            },
            {
                name: 'dark dive',
                aliases: [
                    'up b',
                    'up special',
                ]
            },
            {
                name: 'dark dive (catch)',
                aliases: [
                    'dark dive hit',
                    'up b catch',
                    'up b hit',
                    'up special catch',
                    'up special hit'
                ]
            },
            {
                name: 'wizard\'s foot (grounded)',
                aliases: [
                    'wizards foot',
                    'down b',
                    'down b grounded',
                    'down special',
                    'down special grounded'
                ],
                link: 'wizard\'s foot g'
            },
            {
                name: 'wizard\'s foot (aerial)',
                aliases: [
                    'wizards foot air',
                    'down b air',
                    'down b aerial',
                    'down special air',
                    'down special aerial'
                ],
                link: 'wizards foot a'
            },
            {
                name: 'wizard\'s foot (landing)',
                aliases: [
                    'down b landing',
                    'down special landing'
                ],
                link: 'wizards foot a land'
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 118,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.34,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.767,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.83,
            },
            {
                name: 'fall speed',
                value: 1.65,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.2,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.187,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.103,
            },
            {
                name: 'fall speed',
                value: 1.52,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.432,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                    'neutral b',
                    'neutral b grounded',
                    'neutral special',
                    'neutral special gronded'
                ],
                link: 'darkest lariat g'
            },
            {
                name: 'darkest lariat (aerial)',
                aliases: [
                    'neutral b aerial',
                    'neutral special aerial',
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
                    'side special grab grounded'
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
                    'side special grab aerial'
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.18,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.62,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.88,
            },
            {
                name: 'fall speed',
                value: 1.76,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.816,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                link: 'poison breath min'
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
                link: 'poison breath max'
            },
            {
                name: 'piranhacopter',
                aliases: ['up special', 'up b', 'sicko mode']
            },
            {
                name: 'long stem strike',
                aliases: ['down special', 'down b', 'lss'],
                link: 'long stem strike'
            },
            {
                name: 'footstool attack',
                aliases: ['meme']
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 112,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.72,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.76,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1,
            },
            {
                name: 'fall speed',
                value: 1.95,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.73,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 40,
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
        zair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.654,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.115,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.103,
            },
            {
                name: 'fall speed',
                value: 1.33,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.168,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        zair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                aliases: ['mass']
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.115,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.103,
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.654,
            },
            {
                name: 'fall speed',
                value: 1.33,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.168,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'bowser jr.',
        aliases: ['bjr', 'larry', 'lemmy', 'wendy', 'iggy', 'morton', 'ludwig'],
        color: '#59bf38',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 108,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.566,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.924,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.134,
            },
            {
                name: 'fall speed',
                value: 1.65,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.52,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.76,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.94,
            },
            {
                name: 'fall speed',
                value: 1.85,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.96,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.52,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.76,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.94,
            },
            {
                name: 'fall speed',
                value: 1.85,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.96,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'ike',
        color: '#b64f3e',
        jabType: '3',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'eruption (minimum)',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'eruption',
                    'neutral b min',
                    'neutral b minimum',
                    'neutral special min',
                    'neutral special minimum',
                    'eruption min',
                    'eruption minimum'
                ],
                link: 'eruption'
            },
            {
                name: 'eruption (middle)',
                aliases: [
                    'neutral b middle',
                    'neutral b mid',
                    'neutral special middle',
                    'neutral special mid',
                    'eruption middle',
                    'eruption mid'
                ],
                link: 'eruption mid'
            },
            {
                name: 'eruption (maximum)',
                aliases: [
                    'neutral b max',
                    'neutral b maximum',
                    'neutral special max',
                    'neutral special maximum',
                    'eruption max',
                    'eruption maximum'
                ],
                link: 'eruption max'
            },
            {
                name: 'quickdraw',
                aliases: [
                    'side b',
                    'side special'
                ]
            },
            {
                name: 'aether (grounded)',
                aliases: [
                    'up b',
                    'up b grounded',
                    'up special',
                    'up special grounded'
                ],
                link: 'aether g'
            },
            {
                name: 'aether (aerial)',
                aliases: [
                    'aether air',
                    'up b air',
                    'up b aerial',
                    'up special air',
                    'up special aerial'
                ],
                link: 'aether a'
            },
            {
                name: 'aether (falling)',
                aliases: [
                    'aether fall',
                    'up b falling',
                    'up b fall',
                    'up special falling',
                    'up special fall'
                ],
                link: 'aether fall'
            },
            {
                name: 'aether (landing)',
                aliases: [
                    'up b landing',
                    'up special landing'
                ]
            },
            {
                name: 'aether (sword)',
                aliases: [
                    'up b sword',
                    'up special sword'
                ]
            },
            {
                name: 'counter',
                aliases: [
                    'down b',
                    'down special'
                ]
            },
            {
                name: 'counter (attack)',
                aliases: [
                    'down b attack',
                    'down b counter',
                    'down special attack',
                    'down special counter'
                ],
                link: 'counter hit'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 107,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.507,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.912,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.134,
            },
            {
                name: 'fall speed',
                value: 1.65,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.2,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.1,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
            },
            {
                name: 'fall speed',
                value: 1.78,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.848,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.65,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.889,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.271,
            },
            {
                name: 'fall speed',
                value: 1.61,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.576,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.725,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.178,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.134,
            },
            {
                name: 'fall speed',
                value: 1.6,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.56,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.534,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.247,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.924,
            },
            {
                name: 'fall speed',
                value: 1.6,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.04,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 90,
            }
        ]
    },
    {
        name: 'yoshi',
        color: '#83cd65',
        jabType: '2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 104,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.046,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.344,
            },
            {
                name: 'fall speed',
                value: 1.29,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.064,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        moves: [
            {
                name: 'falcon punch (grounded)',
                aliases: [
                    'falcon punch',
                    'neutral b',
                    'neutral b grounded',
                    'neutral special',
                    'neutral special grounded'
                ],
                link: 'falcon punch g'
            },
            {
                name: 'falcon punch (grounded, reversed)',
                aliases: [
                    'falcon punch reversed',
                    'falcon punch reverse',
                    'neutral b reversed',
                    'neutral b reverse',
                    'neutral b grounded reversed',
                    'neutral b grounded reverse',
                    'neutral special reversed',
                    'neutral special reverse',
                    'neutral special grounded reversed',
                    'neutral special grounded reverse'
                ],
                link: 'falcon punch g r'
            },
            {
                name: 'falcon punch (aerial)',
                aliases: [
                    'falcon punch aerial',
                    'falcon punch air',
                    'neutral b aerial',
                    'neutral b air',
                    'neutral special aerial',
                    'neutral special air'
                ],
                link: 'falcon punch a'
            },
            {
                name: 'falcon punch (aerial reversed)',
                aliases: [
                    'falcon punch air reversed',
                    'falcon punch air reverse',
                    'neutral b aerial reversed',
                    'neutral b aerial reverse',
                    'neutral b air reversed',
                    'neutral b air reverse',
                    'neutral special aerial reversed',
                    'neutral special aerial reverse',
                    'neutral special air reversed',
                    'neutral special air reverse'
                ],
                link: 'falcon punch a r'
            },
            {
                name: 'raptor boost (grounded, search)',
                aliases: [
                    'raptor boost',
                    'raptor boost search',
                    'side b',
                    'side b grounded',
                    'side b search',
                    'side b grounded search',
                    'side special',
                    'side special grounded',
                    'side special search',
                    'side special grounded search'
                ],
                link: 'raptor boost g'
            },
            {
                name: 'raptor boost (grounded, hit)',
                aliases: [
                    'raptor boost hit',
                    'side b hit',
                    'side b grounded hit',
                    'side special hit',
                    'side special grounded hit'
                ],
                link: 'raptor boost hit g'
            },
            {
                name: 'raptor boost (aerial, search)',
                aliases: [
                    'raptor boost air',
                    'raptor boost air search',
                    'side b air',
                    'side b air search',
                    'side b aerial',
                    'side b aerial search',
                    'side special air',
                    'side special air search',
                    'side special aerial',
                    'side special aerial search'
                ],
                link: 'raptor boost a'
            },
            {
                name: 'raptor boost (aerial, hit)',
                aliases: [
                    'raptor boost air hit',
                    'side b air hit',
                    'side b aerial hit',
                    'side special air hit',
                    'side special aerial hit'
                ],
                link: 'raptor boost hit a'
            },
            {
                name: 'falcon dive (grounded)',
                aliases: [
                    'falcon dive',
                    'up b',
                    'up b grounded',
                    'up special',
                    'up special grounded'
                ],
                link: 'falcon dive g'
            },
            {
                name: 'falcon dive (aerial)',
                aliases: [
                    'falcon dive air',
                    'up b air',
                    'up b aerial',
                    'up special air',
                    'up special aerial'
                ],
                link: 'falcon dive a'
            },
            {
                name: 'falcon dive (catch)',
                aliases: [
                    'falcon dive hit',
                    'up b catch',
                    'up b hit',
                    'up special catch',
                    'up special hit'
                ]
            },
            {
                name: 'falcon kick (grounded)',
                aliases: [
                    'falcon kick',
                    'down b',
                    'down b grounded',
                    'down special',
                    'down special grounded'
                ],
                link: 'falcon kick g'
            },
            {
                name: 'falcon kick (aerial)',
                aliases: [
                    'falcon kick air',
                    'down b air',
                    'down b aerial',
                    'down special air',
                    'down special aerial'
                ],
                link: 'falcon kick a'
            },
            {
                name: 'falcon kick (landing)',
                aliases: [
                    'down b landing',
                    'down special landing'
                ]
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 104,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.552,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.987,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.218,
            },
            {
                name: 'fall speed',
                value: 1.865,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.984,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.37,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.93,
            },
            {
                name: 'fall speed',
                value: 1.45,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.32,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                link: 'ftilt proximity'
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
                link: 'ftilt light'
            },
            {
                name: 'heavy forward tilt',
                aliases: ['heavy ftilt', 'held ftilt'],
                link: 'ftilt heavy'
            },
            {
                name: 'light jab 1',
                aliases: ['jab', 'jab 1'],
                link: 'jab 1'
            },
            {
                name: 'light jab 2',
                aliases: ['jab 2'],
                link: 'jab 2'
            },
            {
                name: 'light jab 3',
                aliases: ['jab 3'],
                link: 'jab 3'
            },
            {
                name: 'heavy jab',
                aliases: ['jab heavy'],
                link: 'jab heavy'
            },
            {
                name: 'heavy jab (close)',
                aliases: ['jab heavy close', 'jab close heavy', 'close jab',    'proximity jab'
                ],
                link: 'jab proximity'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 103,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.825,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.12,
            },
            {
                name: 'fall speed',
                value: 1.6,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.24,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 40,
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
                link: 'ftilt light close'
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
                link: 'ftilt light'
            },
            {
                name: 'heavy forward tilt',
                aliases: ['heavy ftilt', 'held ftilt', 'collarbone breaker', 'shieldbreaker'],
                link: 'ftilt heavy'
            },
            {
                name: 'light jab 1',
                aliases: ['jab', 'jab 1'],
                link: 'jab 1'
            },
            {
                name: 'light jab 2',
                aliases: ['jab 2'],
                link: 'jab 2'
            },
            {
                name: 'light jab 3',
                aliases: ['jab 3'],
                link: 'jab 3'
            },
            {
                name: 'heavy jab',
                aliases: ['jab heavy'],
                link: 'jab heavy'
            },
            {
                name: 'heavy jab (close)',
                aliases: ['jab heavy close', 'jab close heavy', 'close jab',    'proximity jab'
                ],
                link: 'jab heavy close'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 103,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.6,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.75,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.12,
            },
            {
                name: 'fall speed',
                value: 1.6,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.24,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 40,
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
        unavailable: ['rush coil'],
        moves: [
            {
                name: 'metal blade',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'blade'
                ],
                png: true
            },
            {
                name: 'crash bomber (projectile)',
                aliases: [
                    'side b',
                    'side b projectile',
                    'side special',
                    'side special projectile',
                    'bomb',
                    'bomb projectile'
                ],
                link: 'crash bomber',
                png: true
            },
            {
                name: 'crash bomber (explosion)',
                aliases: [
                    'side b explosion',
                    'side special explosion',
                    'bomb explosion'
                ]
            },
            {
                name: 'rush coil',
                aliases: [
                    'up b',
                    'up special',
                    'dog'
                ]
            },
            {
                name: 'leaf shield (shield)',
                aliases: [
                    'down b',
                    'down b shield',
                    'down special',
                    'down special shield',
                    'leaf',
                    'leaf shield'
                ],
                link: 'leaf shield'
            },
            {
                name: 'leaf shield (thrown)',
                aliases: [
                    'leaf shield projectile',
                    'down b projectile',
                    'down b thrown',
                    'down special projectile',
                    'down special thrown',
                    'leaf projectile',
                    'leaf thrown'
                ],
                link: 'leaf shield fly'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 102,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.602,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.132,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
            },
            {
                name: 'fall speed',
                value: 1.8,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.167,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.155,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
            },
            {
                name: 'fall speed',
                value: 1.68,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.688,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 100,
                aliases: ['mass']
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.07,
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.58,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.17,
            },
            {
                name: 'fall speed',
                value: 1.55,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        unavailable: ['dragon fang shot'],
        moves: [
            {
                name: 'dragon fang shot',
                aliases: [
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'dragon lunge (pin)',
                aliases: [
                    'dragon lunge',
                    'pin',
                    'side b',
                    'side b pin',
                    'side special',
                    'side special pin'
                ],
                link: 'dragon lunge',
                png: true
            },
            {
                name: 'dragon lunge (front kick)',
                aliases: [
                    'dragon lunge kick',
                    'pin kick',
                    'pin front kick',
                    'side b kick',
                    'side b front kick',
                    'side special kick',
                    'side special front kick'
                ],
                link: 'dragon lunge kick'
            },
            {
                name: 'dragon lunge (back kick)',
                aliases: [
                    'pin back kick',
                    'side b back kick',
                    'side special back kick'
                ],
                link: 'dragon lunge kick back'
            },
            {
                name: 'dragon ascent',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'counter surge',
                aliases: [
                    'counter',
                    'down b',
                    'down special'
                ]
            },
            {
                name: 'counter surge (attack)',
                aliases: [
                    'counter surge counter',
                    'counter attack',
                    'down b attack',
                    'down b counter',
                    'down special attack',
                    'down special counter',
                ],
                link: 'counter surge hit'
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 98,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.019,
            },
            {
                name: 'fall speed',
                value: 1.65,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'mario',
        aliases: ['maro', 'super mario'],
        color: '#d04c4a',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'angled',
        landingDair: true,
        moves: [
            {
                name: 'fireball',
                aliases: [
                    'neutral b',
                    'neutral special'
                ],
                png: true
            },
            {
                name: 'cape',
                aliases: [
                    'side b',
                    'side special'
                ]
            },
            {
                name: 'super jump punch',
                aliases: [
                    'up b',
                    'up special',
                    'sjp'
                ]
            },
            {
                name: 'f.l.u.d.d.',
                aliases: [
                    'down b',
                    'down special'
                ],
                link: 'fludd',
                png: true
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 98,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.155,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
            },
            {
                name: 'fall speed',
                value: 1.5,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.4,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        moves: [
            {
                name: 'z-aerial',
                aliases: ['zair'],
                link: 'zair',
                png: true
            },
            {
                name: 'fireball',
                aliases: [
                    'neutral b',
                    'neutral special'
                ],
            },
            {
                name: 'green missile',
                aliases: [
                    'side b',
                    'side special'
                ]
            },
            {
                name: 'green missile (misfire)',
                aliases: [
                    'misfire',
                    'side b misfire',
                    'side special misfire'
                ]
            },
            {
                name: 'super jump punch (grounded)',
                aliases: [
                    'up b',
                    'up b grounded',
                    'up special',
                    'up special grounded',
                    'sjp',
                    'sjp grounded'
                ],
                link: 'super jump punch g'
            },
            {
                name: 'super jump punch (aerial)',
                aliases: [
                    'up b aerial',
                    'up b air',
                    'up special aerial',
                    'up special air',
                    'sjp aerial',
                    'sjp air'
                ],
                link: 'super jump punch a'
            },
            {
                name: 'luigi cyclone (grounded)',
                aliases: [
                    'cyclone',
                    'cyclone grounded',
                    'down b',
                    'down b grounded',
                    'down special',
                    'down special grounded'
                ],
                link: 'luigi cyclone g',
                description: 'Model scaling issues'
            },
            {
                name: 'luigi cyclone (aerial)',
                aliases: [
                    'luigi cyclone air',
                    'cyclone aerial',
                    'cyclone air',
                    'down b aerial',
                    'down b air',
                    'down special aerial',
                    'down special air'
                ],
                link: 'luigi cyclone a',
                description: 'Model scaling issues'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 97,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.65,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.134,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.77,
            },
            {
                name: 'fall speed',
                value: 1.32,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.112,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.672,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.155,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.113,
            },
            {
                name: 'fall speed',
                value: 1.58,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.828,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.259,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.935,
            },
            {
                name: 'fall speed',
                value: 1.48,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.368,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.866,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.224,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.019,
            },
            {
                name: 'fall speed',
                value: 1.3,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.103,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.998,
            },
            {
                name: 'fall speed',
                value: 1.38,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.208,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.145,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.302,
            },
            {
                name: 'fall speed',
                value: 1.8,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.145,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.302,
            },
            {
                name: 'fall speed',
                value: 1.8,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.265,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.936,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
            },
            {
                name: 'fall speed',
                value: 1.5,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.4,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.672,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.097,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.092,
            },
            {
                name: 'fall speed',
                value: 1.35,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.609,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.907,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.007,
            },
            {
                name: 'fall speed',
                value: 1.31,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.096,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        zair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 94,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.65,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.893,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
            },
            {
                name: 'fall speed',
                value: 1.37,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.192,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.925,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.134,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
            },
            {
                name: 'fall speed',
                value: 1.58,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.92,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.26,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.15,
            },
            {
                name: 'fall speed',
                value: 1.92,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.072,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'wolf',
        color: '#cccccc',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [
            {
                name: 'blaster',
                aliases: [
                    'laser',
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'wolf flash',
                aliases: [
                    'side b',
                    'side special'
                ],
            },
            {
                name: 'fire wolf',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'reflector (start)',
                aliases: [
                    'reflector',
                    'shine',
                    'shine start',
                    'down b',
                    'down b start',
                    'down special',
                    'down special start'
                ]
            },
            {
                name: 'reflector (hold)',
                aliases: [
                    'reflector reflector',
                    'reflector held',
                    'shine reflector',
                    'shine hold',
                    'shine held',
                    'down b reflector',
                    'down b hold',
                    'down b held',
                    'down special reflector',
                    'down special hold',
                    'down special held'
                ],
                link: 'reflector'
            },
            {
                name: 'reflector (hit)',
                aliases: [
                    'reflector hitbox',
                    'shine hit',
                    'shine hitbox',
                    'down b hit',
                    'down b hitbox',
                    'down special hit',
                    'down special hitbox'
                ]
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 92,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.54,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.208,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.281,
            },
            {
                name: 'fall speed',
                value: 1.8,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                link: 'jab rapid'
            },
            {
                name: 'rapid jab finisher 1',
                aliases: ['rapid jab finisher', 'rapid jab ender'],
                link: 'jab 1 end'
            },
            {
                name: 'rapid jab finisher 2',
                aliases: ['rapid jab ender 2'],
                link: 'jab 2 end'
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 92,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.397,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.092,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.987,
            },
            {
                name: 'fall speed',
                value: 1.32,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.112,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.705,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.103,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.281,
            },
            {
                name: 'fall speed',
                value: 1.68,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.688,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.077,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.271,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1,
            },
            {
                name: 'fall speed',
                value: 1.55,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        zair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 91,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.906,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.288,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
            },
            {
                name: 'fall speed',
                value: 1.38,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.208,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.964,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.575,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.071,
            },
            {
                name: 'fall speed',
                value: 1.58,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.964,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.575,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.071,
            },
            {
                name: 'fall speed',
                value: 1.58,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.528,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'diddy kong',
        aliases: ['diddy'],
        color: '#e15951',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 90,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.006,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.313,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.924,
            },
            {
                name: 'fall speed',
                value: 1.75,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.8,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.924,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.029,
            },
            {
                name: 'fall speed',
                value: 1.19,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.904,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.595,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.924,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.029,
            },
            {
                name: 'fall speed',
                value: 1.19,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.904,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                link: 'dtaunt'
            },
            {
                name: 'shadow sneak (forward attack)',
                aliases: [
                    'shadow sneak forward',
                    'forward shadow sneak',
                    'sneak forward',
                    'forward sneak',
                    'shadow sneak',
                    'f sneak',
                    'side special',
                    'side b'
                ],
                link: 'shadow sneak f'
            },
            {
                name: 'shadow sneak (back attack)',
                aliases: [
                    'shadow sneak back',
                    'back shadow sneak',
                    'sneak back',
                    'back sneak',
                    'b sneak'
                ],
                link: 'shadow sneak b'
            },
            {
                name: 'substitute',
                aliases: ['counter', 'down special', 'down b']
            },
            {
                name: 'substitute attack (side)',
                aliases: [
                    'substitute side attack',
                    'side substitute attack',
                    'substitute side',
                    'side substitute',
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
                link: 'substitute hit side'
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
                link: 'substitute hit down'
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
                link: 'substitute hit up'
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
                link: 'substitute hit diagonally down'
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
                link: 'substitute hit diagonally up'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 88,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.288,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.502,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.239,
            },
            {
                name: 'fall speed',
                value: 1.85,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.96,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        zair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 88,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.749,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.26,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.966,
            },
            {
                name: 'fall speed',
                value: 1.8,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.464,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.386,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
            },
            {
                name: 'fall speed',
                value: 1.95,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.12,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 3.85,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.444,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.208,
            },
            {
                name: 'fall speed',
                value: 1.65,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.793,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.213,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
            },
            {
                name: 'fall speed',
                value: 1.65,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.64,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.43,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.914,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.092,
            },
            {
                name: 'fall speed',
                value: 1.35,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'rosalina',
        aliases: ['rosa', 'rosalina and luma', 'rosalina & luma', 'rosa and luma'],
        ssbuLink: 'rosalina and luma',
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.795,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.138,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.05,
            },
            {
                name: 'fall speed',
                value: 1.2,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.92,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        moves: [
            {
                name: 'landing forward aerial',
                aliases: [
                    'landing forward air',
                    'landing fair'
                ],
                link: 'fair landing'
            },
            {
                name: 'blaster',
                aliases: [
                    'laser',
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'falco phantasm (grounded)',
                aliases: [
                    'falco phantasm',
                    'illusion',
                    'illusion grounded',
                    'side b',
                    'side b grounded',
                    'side special',
                    'side special grounded'
                ],
                link: 'falco phantasm g',
                png: true
            },
            {
                name: 'falco phantasm (aerial)',
                aliases: [
                    'falco phantasm air',
                    'illusion aerial',
                    'illusion air',
                    'side b aerial',
                    'side b air',
                    'side special aerial',
                    'side special air'
                ],
                link: 'falco phantasm a',
                png: true
            },
            {
                name: 'fire bird',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'reflector',
                aliases: [
                    'shine',
                    'down b',
                    'down special'
                ]
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 82,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.619,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.344,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.977,
            },
            {
                name: 'fall speed',
                value: 1.8,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.88,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        unavailable: ['bullet climax'],
        moves: [
            {
                name: 'forward tilt 1',
                aliases: ['ftilt 1', 'forward tilt', 'ftilt',    'bad move',
                    'bad move 1'
                ],
                link: 'ftilt 1'
            },
            {
                name: 'forward tilt 2',
                aliases: ['ftilt 2', 'bad move 2'],
                link: 'ftilt 2'
            },
            {
                name: 'forward tilt 3',
                aliases: ['ftilt 3', 'bad move 3'],
                link: 'ftilt 3'
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
            },
            {
                name: 'bullet climax',
                aliases: [
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'heel slide (slide)',
                aliases: [
                    'heel slide',
                    'heel slide start',
                    'side b',
                    'side b slide',
                    'side b start',
                    'side b grounded',
                    'side special',
                    'side special slide',
                    'side special start',
                    'side special grounded'
                ],
                link: 'heel slide'
            },
            {
                name: 'heel slide (kick)',
                aliases: [
                    'heel slide end',
                    'side b kick',
                    'side b end',
                    'side special kick',
                    'side special end'
                ],
                link: 'heel slide end'
            },
            {
                name: 'after burner kick (up)',
                aliases: [
                    'after burner kick',
                    'abk',
                    'abk up',
                    'aerial side b',
                    'aerial side b up',
                    'aerial side special',
                    'aerial side special up'
                ]
            },
            {
                name: 'after burner kick (down)',
                aliases: [
                    'dabk',
                    'abk down',
                    'aerial side b down',
                    'aerial side special down'
                ]
            },
            {
                name: 'after burner kick (landing)',
                aliases: [
                    'abk landing',
                    'dabk landing',
                    'aerial side b landing',
                    'aerial side special landing'
                ]
            },
            {
                name: 'witch twist (first)',
                aliases: [
                    'witch twist',
                    'witch twist 1',
                    'wtw',
                    'wtw 1',
                    'up b',
                    'up b 1',
                    'up b first',
                    'up special',
                    'up special 1',
                    'up special first'
                ],
                link: 'witch twist g'
            },
            {
                name: 'witch twist (second)',
                aliases: [
                    'witch twist 2',
                    'wtw 2',
                    'up b 2',
                    'up b second',
                    'up special 2',
                    'up special second'
                ],
                link: 'witch twist a'
            },
            {
                name: 'witch time',
                aliases: [
                    'down b',
                    'down special'
                ]
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 81,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.945,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.019,
            },
            {
                name: 'fall speed',
                value: 1.77,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.832,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        moves: [
            {
                name: 'mach tornado',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'tornado'
                ]
            },
            {
                name: 'drill rush (start)',
                aliases: [
                    'drill',
                    'drill start',
                    'side b',
                    'side b start',
                    'side special',
                    'side special start',
                ],
                link: 'drill rush',
            },
            {
                name: 'drill rush (end)',
                aliases: [
                    'drill end',
                    'side b end',
                    'side special end'
                ]
            },
            {
                name: 'shuttle loop (grounded)',
                aliases: [
                    'up b',
                    'up b grounded',
                    'up special',
                    'up special grounded'
                ],
                link: 'shuttle loop g',
            },
            {
                name: 'shuttle loop (aerial)',
                aliases: [
                    'shuttle loop air',
                    'up b aerial',
                    'up b air',
                    'up special aerial',
                    'up special air'
                ],
                link: 'shuttle loop a',
            },
            {
                name: 'dimensional cape (grounded attack, forward)',
                aliases: [
                    'dimensional cape attack',
                    'dimensional cape attack forward',
                    'dimensional cape attack grounded',
                    'dimensional cape attack grounded forward',
                    'cape attack',
                    'cape attack forward',
                    'cape attack grounded',
                    'cape attack grounded forward',
                    'cape grounded',
                    'cape grounded forward',
                    'dimensional cape grounded',
                    'dimensional cape grounded forward',
                    'down b',
                    'down b forward',
                    'down b attack',
                    'down b attack forward',
                    'down b attack grounded',
                    'down b attack grounded forward',
                    'down b grounded',
                    'down b grounded forward',
                    'down special',
                    'down special forward',
                    'down special attack',
                    'down special attack forward',
                    'down special attack grounded',
                    'down special attack grounded forward',
                    'down special grounded',
                    'down special grounded forward'
                ],
                link: 'dimensional cape ground forward',
            },
            {
                name: 'dimensional cape (aerial attack, forward)',
                aliases: [
                    'dimensional cape attack aerial',
                    'dimensional cape attack aerial forward',
                    'cape attack aerial',
                    'cape attack aerial forward',
                    'cape aerial',
                    'cape aerial forward',
                    'dimensional cape aerial',
                    'dimensional cape aerial forward',
                    'down b attack aerial',
                    'down b attack aerial forward',
                    'down b aerial',
                    'down b aerial forward',
                    'down special attack aerial',
                    'down special attack aerial forward',
                    'down special aerial',
                    'down special aerial forward'
                ],
                link: 'dimensional cape air forward',
            },
            {
                name: 'dimensional cape (grounded attack, back)',
                aliases: [
                    'dimensional cape attack back',
                    'dimensional cape attack grounded back',
                    'cape attack back',
                    'cape attack grounded back',
                    'cape grounded back',
                    'dimensional cape grounded back',
                    'down b back',
                    'down b attack back',
                    'down b attack grounded back',
                    'down b grounded back',
                    'down special back',
                    'down special attack back',
                    'down special attack grounded back',
                    'down special grounded back'
                ],
                link: 'dimensional cape ground back',
            },
            {
                name: 'dimensional cape (aerial attack, back)',
                aliases: [
                    'dimensional cape attack aerial back',
                    'cape attack aerial back',
                    'cape aerial back',
                    'dimensional cape aerial back',
                    'down b attack aerial back',
                    'down b aerial back',
                    'down special attack aerial back',
                    'down special aerial back'
                ],
                link: 'dimensional cape air back',
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 80,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.09,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.239,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.04,
            },
            {
                name: 'fall speed',
                value: 1.66,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.656,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        zair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 80,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.31,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.47,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.26,
            },
            {
                name: 'fall speed',
                value: 1.7,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.72,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'kirby',
        color: '#f2c0c4',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'angled',
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 79,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.727,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.977,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.84,
            },
            {
                name: 'fall speed',
                value: 1.23,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.968,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 79,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.039,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.302,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.957,
            },
            {
                name: 'fall speed',
                value: 1.55,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.617,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.945,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.861,
            },
            {
                name: 'fall speed',
                value: 1.35,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 78,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.42,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.47,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.155,
            },
            {
                name: 'fall speed',
                value: 1.75,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.8,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        unavailable: ['shadow ball', 'teleport'],
        moves: [
            {
                name: 'shadow ball',
                aliases: [
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'confusion',
                aliases: [
                    'side b',
                    'side special'
                ]
            },
            {
                name: 'teleport',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'disable',
                aliases: [
                    'down b',
                    'down special'
                ]
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 77,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.255,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.26,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.313,
            },
            {
                name: 'fall speed',
                value: 1.55,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.48,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'fox',
        color: '#b3834d',
        jabType: 'rapid 2',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        landingDair: true,
        moves: [
            {
                name: 'landing forward aerial',
                aliases: [
                    'landing forward air',
                    'landing fair'
                ],
                link: 'fair landing'
            },
            {
                name: 'blaster',
                aliases: [
                    'laser',
                    'neutral b',
                    'neutral special'
                ]
            },
            {
                name: 'fox illusion',
                aliases: [
                    'illusion',
                    'side b',
                    'side special'
                ],
                png: true
            },
            {
                name: 'fire fox',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'reflector (start)',
                aliases: [
                    'reflector',
                    'reflector hitbox',
                    'shine',
                    'shine hitbox',
                    'shine start',
                    'down b',
                    'down b hitbox',
                    'down b start',
                    'down special',
                    'down special hitbox',
                    'down special start'
                ]
            },
            {
                name: 'reflector (hold)',
                aliases: [
                    'reflector reflector',
                    'reflector held',
                    'shine reflector',
                    'shine hold',
                    'shine held',
                    'down b reflector',
                    'down b hold',
                    'down b held',
                    'down special reflector',
                    'down special hold',
                    'down special held',
                ],
                link: 'reflector'
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 77,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.402,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.523,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.11,
            },
            {
                name: 'fall speed',
                value: 2.1,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.36,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.76,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.281,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.01,
            },
            {
                name: 'fall speed',
                value: 1.35,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.16,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        moves: [
            {
                name: 'rollout (grounded)',
                aliases: [
                    'rollout grounded',
                    'neutral b',
                    'neutral b grounded',
                    'neutral special',
                    'neutral special grounded'
                ],
                link: 'rollout g',
                png: true
            },
            {
                name: 'rollout (aerial)',
                aliases: [
                    'rollout air',
                    'neutral b air',
                    'neutral b aerial',
                    'neutral special air',
                    'neutral special aerial'
                ],
                link: 'rollout a',
                png: true
            },
            {
                name: 'pound',
                aliases: [
                    'side b',
                    'side special'
                ]
            },
            {
                name: 'sing',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'rest',
                aliases: [
                    'down b',
                    'down special'
                ]
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 68,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.271,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.735,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.332,
            },
            {
                name: 'fall speed',
                value: 0.98,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.568,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.828,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.259,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.935,
            },
            {
                name: 'fall speed',
                value: 1.48,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.368,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 75,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.679,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.18,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.176,
            },
            {
                name: 'fall speed',
                value: 1.24,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 1.984,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        unavailable: ['belay', 'blizzard'],
        moves: [
            {
                name: 'ice shot',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'ice block',
                    'ib'
                ],
                url: 'https://ultimateframedata.com/hitboxes/ice_climbers/IceClimbersIceShot.png'
            },
            {
                name: 'squall hammer (synced)',
                aliases: [
                    'squall hammer duo',
                    'squall hammer both',
                    'squall hammer synched',
                    'squall duo',
                    'squall both',
                    'squall synched',
                    'squall sync',
                    'side b duo',
                    'side b both',
                    'side b synched',
                    'side b sync',
                    'side special duo',
                    'side special both',
                    'side special synched',
                    'side special sync'
                ],
                link: 'squall hammer duo'
            },
            {
                name: 'squall (desynced)',
                aliases: [
                    'squall hammer',
                    'squall hammer alone',
                    'squall hammer solo',
                    'squall hammer desynched',
                    'squall',
                    'squall alone',
                    'squall solo',
                    'squall desynched',
                    'squall desync',
                    'side b',
                    'side b alone',
                    'side b solo',
                    'side b desynched',
                    'side b desync',
                    'side special',
                    'side special alone',
                    'side special solo',
                    'side special desynched',
                    'side special desync'
                ],
                link: 'squall hammer solo'
            },
            {
                name: 'belay',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'blizzard',
                aliases: [
                    'down b',
                    'down special'
                ]
            },
            {
                name: 'ledge hang',
                url: 'https://ultimateframedata.com/ledgehangs/Ice%20ClimbersLedgeHang.gif'
            },
            {
                name: 'ledge grab',
                url: 'https://ultimateframedata.com/ledgegrabs/Ice%20Climbers(Popo)%20LedgeGrab%201(Normal).png'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 92,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.53,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.008,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.83,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            },
            {
                name: 'fall speed',
                value: 1.3,
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
        unavailable: ['blizzard'],
        moves: [
            {
                name: 'ice shot',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'ice block',
                    'ib'
                ],
                url: 'https://ultimateframedata.com/hitboxes/ice_climbers/IceClimbersIceShot.png'
            },
            {
                name: 'squall hammer (synced)',
                aliases: [
                    'squall hammer duo',
                    'squall hammer both',
                    'squall hammer synched',
                    'squall duo',
                    'squall both',
                    'squall synched',
                    'squall sync',
                    'side b duo',
                    'side b both',
                    'side b synched',
                    'side b sync',
                    'side special duo',
                    'side special both',
                    'side special synched',
                    'side special sync'
                ],
                link: 'squall hammer duo'
            },
            {
                name: 'squall (desynced)',
                aliases: [
                    'squall hammer',
                    'squall hammer alone',
                    'squall hammer solo',
                    'squall hammer desynched',
                    'squall',
                    'squall alone',
                    'squall solo',
                    'squall desynched',
                    'squall desync',
                    'side b',
                    'side b alone',
                    'side b solo',
                    'side b desynched',
                    'side b desync',
                    'side special',
                    'side special alone',
                    'side special solo',
                    'side special desynched',
                    'side special desync'
                ],
                link: 'squall hammer solo'
            },
            {
                name: 'belay',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'blizzard',
                aliases: [
                    'down b',
                    'down special'
                ]
            },
            {
                name: 'ledge hang',
                url: 'https://ultimateframedata.com/ledgehangs/Ice%20ClimbersLedgeHang.gif'
            },
            {
                name: 'ledge grab',
                url: 'https://ultimateframedata.com/ledgegrabs/Ice%20Climbers%20(Nana)%20LedgeGrab%201(Normal).png'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 92,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.683,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.1088,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.8715,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.08,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            },
            {
                name: 'fall speed',
                value: 1.3,
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
        moves: [
            {
                name: 'megavitamin',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'vitamin',
                    'pill'
                ],
                png: true
            },
            {
                name: 'super sheet',
                aliases: [
                    'side b',
                    'side special',
                    'cape'
                ]
            },
            {
                name: 'super jump punch',
                aliases: [
                    'up b',
                    'up special',
                    'sjp'
                ]
            },
            {
                name: 'dr. tornado (grounded)',
                aliases: [
                    'tornado',
                    'tornado grounded',
                    'down b',
                    'down b grounded',
                    'down special',
                    'down special grounded'
                ],
                link: 'dr tornado g',
            },
            {
                name: 'dr. tornado (aerial)',
                aliases: [
                    'dr tornado air',
                    'tornado aerial',
                    'tornado air',
                    'down b aerial',
                    'down b air',
                    'down special aerial',
                    'down special air'
                ],
                link: 'dr tornado a',
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 98,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.397792,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.917301,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.9238784,
            },
            {
                name: 'fall speed',
                value: 1.5,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.4,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                link: 'bair'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 93,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.06,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.12,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.1,
            },
            {
                name: 'fall speed',
                value: 1.63,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 3.097,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 90,
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
                aliases: [
                    'side b',
                    'side special',
                    'weak side b',
                    'weak side special',
                    'min side b',
                    'min side special',
                    'minimum side b',
                    'minimum side special'
                ]
            },
            {
                name: 'zapple',
                aliases: [
                    'medium side b',
                    'medium side special'
                ]
            },
            {
                name: 'kazap',
                aliases: [
                    'strong side b',
                    'string side special',
                    'max side b',
                    'max side special',
                    'maximum side b',
                    'maximum side special'
                ]
            },
            {
                name: 'zap (fail)',
                aliases: ['failed zap', 'zap no mp'],
                url: 'https://i.imgur.com/uSZ0Lr0.gif'
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
            },
            {
                name: 'magic burst',
                aliases: ['magic explosion', 'magic bomb'],
            },
            {
                name: 'metal slash',
                aliases: ['metal killer']
            },
            {
                name: 'sizzle',
            },
            {
                name: 'thwack',
                aliases: ['instakill'],
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 101,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.84,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.98,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.01,
            },
            {
                name: 'fall speed',
                value: 1.57,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.512,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        moves: [],
        attributes: [
            {
                name: 'weight',
                value: 106,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.18,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.06,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.92,
            },
            {
                name: 'fall speed',
                value: 1.76,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.816,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.72,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.85,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.95,
            },
            {
                name: 'fall speed',
                value: 1.48,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.368,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'byleth',
        color: '#5d7c8d',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'angled',
        moves: [
            {
                name: 'landing neutral aerial',
                aliases: [
                    'landing nair',
                    'landing neutral air',
                    'nairquake',
                    'nq'
                ],
                link: 'nair landing'
            },
            {
                name: 'failnaught',
                aliases: [
                    'failnaught minimum',
                    'failnaught min',
                    'failnaught 1',
                    'fn',
                    'fn minimum',
                    'fn min',
                    'fn 1',
                    'neutral b',
                    'neutral b minimum',
                    'neutral b min',
                    'neutral b 1',
                    'neutral special',
                    'neutral special minimum',
                    'neutral special min',
                    'neutral special 1'
                ]
            },
            {
                name: 'failnaught (maximum, gif)',
                aliases: [
                    'failnaught maximum',
                    'failnaught max',
                    'failnaught 2',
                    'fn maximum',
                    'fn max',
                    'fn 2',
                    'neutral b maximum',
                    'neutral b max',
                    'neutral b 2',
                    'neutral special maximum',
                    'neutral special max',
                    'neutral special 2'
                ],
                link: 'failnaught max'
            },
            {
                name: 'failnaught (maximum, static)',
                aliases: [
                    'failnaught maximum png',
                    'failnaught maximum hitbox',
                    'failnaught max static',
                    'failnaught max png',
                    'failnaught max hitbox',
                    'failnaught 2 static',
                    'failnaught 2 png',
                    'failnaught 2 hitbox',
                    'fn maximum static',
                    'fn maximum png',
                    'fn maximum hitbox',
                    'fn max static',
                    'fn max png',
                    'fn max hitbox',
                    'fn 2 static',
                    'fn 2 png',
                    'fn 2 hitbox',
                    'neutral b maximum static',
                    'neutral b maximum png',
                    'neutral b maximum hitbox',
                    'neutral b max static',
                    'neutral b max png',
                    'neutral b max hitbox',
                    'neutral b 2 static',
                    'neutral b 2 png',
                    'neutral b 2 hitbox',
                    'neutral special maximum static',
                    'neutral special maximum png',
                    'neutral special maximum hitbox',
                    'neutral special max static',
                    'neutral special max png',
                    'neutral special max hitbox',
                    'neutral special 2 static',
                    'neutral special 2 png',
                    'neutral special 2 hitbox'
                ],
                link: 'failnaught max',
                png: true
            },
            {
                name: 'areadbhar (grounded)',
                aliases: [
                    'areadbhar',
                    'side b',
                    'side b grounded',
                    'side special',
                    'side special grounded'
                ]
            },
            {
                name: 'areadbhar (aerial)',
                aliases: [
                    'areadbhar air',
                    'side b aerial',
                    'side b air',
                    'side special aerial',
                    'side special air'
                ]
            },
            {
                name: 'sword of the creator (grounded)',
                aliases: [
                    'sword of the creator',
                    'sotc',
                    'sotc grounded',
                    'up b',
                    'up b grounded',
                    'up special',
                    'up special grounded'
                ]
            },
            {
                name: 'sword of the creator (aerial)',
                aliases: [
                    'sword of the creator air',
                    'sotc aerial',
                    'sotc air',
                    'up b aerial',
                    'up b air',
                    'up special aerial',
                    'up special air'
                ]
            },
            {
                name: 'aymr (hitbox)',
                aliases: [
                    'aymr',
                    'aymr hit',
                    'down b',
                    'down b hit',
                    'down b hitbox',
                    'down special',
                    'down special hit',
                    'down special hitbox'
                ],
                link: 'aymr'
            },
            {
                name: 'aymr (super armor)',
                aliases: [
                    'aymr byleth',
                    'aymr armor',
                    'aymr super armour',
                    'down b byleth',
                    'down b armor',
                    'down b super armour',
                    'down b super armor',
                    'down special byleth',
                    'down special armor',
                    'down special super armour',
                    'down special super armor',
                ],
                link: 'aymr super armour'
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 97,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.43,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.97,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.89,
            },
            {
                name: 'fall speed',
                value: 1.6,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.56,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
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
        landingDair: true,
        moves: [],
        exclude: ['neutral aerial', 'forward aerial', 'back aerial'],
        attributes: [
            {
                name: 'weight',
                value: 104,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.55,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.05,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.85,
            },
            {
                name: 'fall speed',
                value: 1.5,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.432,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'steve',
        aliases: ['alex', 'zombie', 'enderman', 'minecraft', 'twitter slayer', 'mc', 'sbeve'],
        color: '#818791',
        jabType: 'unique',
        ftiltType: 'unique',
        fsmashType: 'unique',
        moves: [
            {
                name: 'jab/forward tilt (wood/stone/iron/diamond)',
                aliases: [
                    'jab',
                    'jab wood',
                    'jab stone',
                    'jab iron',
                    'jab diamond',
                    'jab wood stone iron diamond',
                    'forward tilt',
                    'forward tilt wood',
                    'forward tilt stone',
                    'forward tilt iron',
                    'forward tilt diamond',
                    'forward tilt wood stone iron diamond',
                    'ftilt',
                    'ftilt wood',
                    'ftilt stone',
                    'ftilt iron',
                    'ftilt diamond',
                    'ftilt wood stone iron diamond',
                    'jab forward tilt',
                    'jab forward tilt wood',
                    'jab forward tilt stone',
                    'jab forward tilt iron',
                    'jab forward tilt diamond',
                    'jab ftilt',
                    'jab ftilt wood',
                    'jab ftilt stone',
                    'jab ftilt iron',
                    'jab ftilt diamond',
                    'jab ftilt wood stone iron diamond',
                    'sword',
                    'sword wood',
                    'sword stone',
                    'sword iron',
                    'sword diamond',
                    'sword wood stone iron diamond'
                ],
                link: 'jab ftilt wood stone iron diamond' // why??
            },
            {
                name: 'jab/forward tilt (gold)',
                aliases: [
                    'jab gold',
                    'forward tilt gold',
                    'ftilt gold',
                    'jab forward tilt gold',
                    'jab ftilt gold',
                    'sword gold'
                ],
                link: 'jab ftilt gold'
            },
            {
                name: 'jab/forward tilt (no tool)',
                aliases: [
                    'jab no tool',
                    'jab none',
                    'jab punch',
                    'jab fist',
                    'forward tilt no tool',
                    'forward tilt none',
                    'forward tilt punch',
                    'forward tilt fist',
                    'ftilt no tool',
                    'ftilt none',
                    'ftilt punch',
                    'ftilt fist',
                    'jab forward tilt none',
                    'jab forward tilt punch',
                    'jab forward tilt fist',
                    'jab ftilt no tool',
                    'jab ftilt none',
                    'jab ftilt punch',
                    'jab ftilt fist',
                    'punch',
                    'fist'
                ],
                link: 'jab ftilt punch'
            },
            {
                name: 'up tilt (wood/stone/iron/diamond)',
                aliases: [
                    'up tilt',
                    'up tilt wood',
                    'up tilt stone',
                    'up tilt iron',
                    'up tilt diamond',
                    'utilt',
                    'utilt wood',
                    'utilt stone',
                    'utilt iron',
                    'utilt diamond',
                    'utilt wood stone iron diamond',
                ],
                link: 'utilt wood stone iron diamond'
            },
            {
                name: 'up tilt (gold)',
                aliases: [
                    'utilt gold'
                ],
                link: 'utilt gold'
            },
            {
                name: 'up tilt (no tool)',
                aliases: [
                    'up tilt none',
                    'up tilt punch',
                    'up tilt fist',
                    'utilt no tool',
                    'utilt none',
                    'utilt punch',
                    'utilt fist',
                ],
                link: 'utilt punch'
            },
            {
                name: 'down tilt',
                aliases: [
                    'down tilt normal',
                    'down tilt grounded',
                    'dtilt',
                    'dtilt normal',
                ],
                link: 'dtilt'
            },
            {
                name: 'down tilt (falling)',
                aliases: [
                    'down tilt falling',
                    'down tilt fall',
                    'down tilt gravity',
                    'down tilt over edge',
                    'down tilt on air',
                    'down tilt aerial',
                    'dtilt falling',
                    'dtilt fall',
                    'dtilt gravity',
                    'dtilt over edge',
                    'dtilt on air',
                    'dtilt aerial',
                ],
                link: 'dtilt gravity'
            },
            {
                name: 'dash attack (wood/stone/iron/diamond)',
                aliases: [
                    'dash attack',
                    'dash attack wood',
                    'dash attack stone',
                    'dash attack iron',
                    'dash attack diamond',
                    'da',
                    'da wood',
                    'da stone',
                    'da iron',
                    'da diamond',
                    'da wood stone iron diamond',
                ],
            },
            {
                name: 'dash attack (gold)',
                aliases: [
                    'da gold'
                ],
            },
            {
                name: 'dash attack (no tool)',
                aliases: [
                    'dash attack none',
                    'dash attack punch',
                    'dash attack fist',
                    'da no tool',
                    'da none',
                    'da punch',
                    'da fist',
                ],
                link: 'dash attack punch'
            },
            {
                name: 'forward smash (wood/stone/iron/diamond)',
                aliases: [
                    'forward smash',
                    'forward smash wood',
                    'forward smash stone',
                    'forward smash iron',
                    'forward smash diamond',
                    'fsmash',
                    'fsmash wood',
                    'fsmash stone',
                    'fsmash iron',
                    'fsmash diamond',
                    'fsmash wood stone iron diamond',
                ],
                link: 'fsmash wood stone iron diamond'
            },
            {
                name: 'forward smash (gold)',
                aliases: [
                    'fsmash gold',
                ],
                link: 'fsmash gold'
            },
            {
                name: 'forward smash (no tool)',
                aliases: [
                    'forward smash none',
                    'forward smash punch',
                    'forward smash fist',
                    'fsmash no tool',
                    'fsmash none',
                    'fsmash punch',
                    'fsmash fist',
                ],
                link: 'fsmash punch'
            },
            {
                name: 'down smash',
                aliases: [
                    'down smash normal',
                    'down smash grounded',
                    'dsmash',
                    'dsmash normal',
                ],
                link: 'dsmash'
            },
            {
                name: 'down smash (falling)',
                aliases: [
                    'down smash falling',
                    'down smash fall',
                    'down smash gravity',
                    'down smash over edge',
                    'down smash on air',
                    'down smash aerial',
                    'dsmash falling',
                    'dsmash fall',
                    'dsmash gravity',
                    'dsmash over edge',
                    'dsmash on air',
                    'dsmash aerial',
                ],
                link: 'dsmash gravity'
            },
            {
                name: 'neutral aerial (wood/stone/iron/diamond)',
                aliases: [
                    'neutral aerial',
                    'neutral aerial wood',
                    'neutral aerial stone',
                    'neutral aerial iron',
                    'neutral aerial diamond',
                    'neutral air',
                    'neutral air wood',
                    'neutral air stone',
                    'neutral air iron',
                    'neutral air diamond',
                    'nair',
                    'nair wood',
                    'nair stone',
                    'nair iron',
                    'nair diamond',
                    'nair wood stone iron diamond',
                ],
                link: 'nair wood stone iron diamond'
            },
            {
                name: 'neutral aerial (gold)',
                aliases: [
                    'neutral air gold',
                    'nair gold'
                ],
                link: 'nair gold'
            },
            {
                name: 'neutral aerial (no tool)',
                aliases: [
                    'neutral aerial none',
                    'neutral aerial punch',
                    'neutral aerial fist',
                    'neutral air no tool',
                    'neutral air none',
                    'neutral air punch',
                    'neutral air fist',
                    'nair no tool',
                    'nair none',
                    'nair punch',
                    'nair fist',
                ],
                link: 'nair punch'
            },
            {
                name: 'forward aerial (wood/stone/iron/diamond)',
                aliases: [
                    'forward aerial',
                    'forward aerial wood',
                    'forward aerial stone',
                    'forward aerial iron',
                    'forward aerial diamond',
                    'forward air',
                    'forward air wood',
                    'forward air stone',
                    'forward air iron',
                    'forward air diamond',
                    'forward air wood stone iron diamond',
                    'fair',
                    'fair wood',
                    'fair stone',
                    'fair iron',
                    'fair diamond',
                    'fair wood stone iron diamond',
                    'pickaxe forward aerial',
                    'pickaxe forward aerial wood',
                    'pickaxe forward aerial stone',
                    'pickaxe forward aerial iron',
                    'pickaxe forward aerial diamond',
                    'pickaxe forward aerial wood stone iron diamond',
                    'pickaxe forward air',
                    'pickaxe forward air wood',
                    'pickaxe forward air stone',
                    'pickaxe forward air iron',
                    'pickaxe forward air diamond',
                    'pickaxe fair',
                    'pickaxe fair wood',
                    'pickaxe fair stone',
                    'pickaxe fair iron',
                    'pickaxe fair diamond',
                    'pickaxe fair wood stone iron diamond',
                    'forward aerial pickaxe',
                    'forward aerial wood pickaxe',
                    'forward aerial stone pickaxe',
                    'forward aerial iron pickaxe',
                    'forward aerial diamond pickaxe',
                    'forward aerial wood stone iron diamond pickaxe',
                    'forward air pickaxe',
                    'forward air wood pickaxe',
                    'forward air stone pickaxe',
                    'forward air iron pickaxe',
                    'forward air diamond pickaxe',
                    'fair pickaxe',
                    'fair wood pickaxe',
                    'fair stone pickaxe',
                    'fair iron pickaxe',
                    'fair diamond pickaxe',
                    'fair wood stone iron diamond pickaxe'
                ],
                link: 'fair pickaxe wood stone iron diamond'
            },
            {
                name: 'forward aerial (gold)',
                aliases: [
                    'forward air gold',
                    'fair gold',
                    'pickaxe forward aerial gold',
                    'pickaxe forward air gold',
                    'pickaxe fair gold',
                    'forward aerial gold pickaxe',
                    'forward air gold pickaxe',
                    'fair gold pickaxe'
                ],
                link: 'fair pickaxe gold'
            },
            {
                name: 'forward aerial (no tool)',
                aliases: [
                    'forward aerial none',
                    'forward aerial punch',
                    'forward aerial fist',
                    'forward air no tool',
                    'forward air none',
                    'forward air punch',
                    'forward air fist',
                    'fair no tool',
                    'fair none',
                    'fair punch',
                    'fair fist',
                    'pickaxe forward aerial no tool',
                    'pickaxe forward aerial none',
                    'pickaxe forward aerial punch',
                    'pickaxe forward aerial fist',
                    'pickaxe forward air no tool',
                    'pickaxe forward air none',
                    'pickaxe forward air punch',
                    'pickaxe forward air fist',
                    'pickaxe fair no tool',
                    'pickaxe fair none',
                    'pickaxe fair punch',
                    'pickaxe fair fist',
                    'forward aerial no tool pickaxe',
                    'forward aerial none pickaxe',
                    'forward aerial punch pickaxe',
                    'forward aerial fist pickaxe',
                    'forward air no tool pickaxe',
                    'forward air none pickaxe',
                    'forward air punch pickaxe',
                    'forward air fist pickaxe',
                    'fair no tool pickaxe',
                    'fair none pickaxe',
                    'fair punch pickaxe',
                    'fair fist pickaxe'
                ],
                link: 'fair punch',
            },
            {
                name: 'short-hop forward aerial (wood/stone/iron/diamond)',
                aliases: [
                    'sh forward aerial',
                    'sh forward aerial wood',
                    'sh forward aerial stone',
                    'sh forward aerial iron',
                    'sh forward aerial diamond',
                    'sh forward aerial wood stone iron diamond',
                    'sh forward air',
                    'sh forward air wood',
                    'sh forward air stone',
                    'sh forward air iron',
                    'sh forward air diamond',
                    'sh forward air wood stone iron diamond',
                    'sh fair',
                    'sh fair wood',
                    'sh fair stone',
                    'sh fair iron',
                    'sh fair diamond',
                    'sh fair wood stone iron diamond',
                    'short hop forward aerial',
                    'short hop forward aerial wood',
                    'short hop forward aerial stone',
                    'short hop forward aerial iron',
                    'short hop forward aerial diamond',
                    'short hop forward aerial wood stone iron diamond',
                    'short hop forward air',
                    'short hop forward air wood',
                    'short hop forward air stone',
                    'short hop forward air iron',
                    'short hop forward air diamond',
                    'short hop fair',
                    'short hop fair wood',
                    'short hop fair stone',
                    'short hop fair iron',
                    'short hop fair diamond',
                    'short hop fair wood stone iron diamond',
                    'sh macro forward aerial',
                    'sh macro forward aerial wood',
                    'sh macro forward aerial stone',
                    'sh macro forward aerial iron',
                    'sh macro forward aerial diamond',
                    'sh macro forward aerial wood stone iron diamond',
                    'sh macro forward air',
                    'sh macro forward air wood',
                    'sh macro forward air stone',
                    'sh macro forward air iron',
                    'sh macro forward air diamond',
                    'sh macro forward air wood stone iron diamond',
                    'sh macro fair',
                    'sh macro fair wood',
                    'sh macro fair stone',
                    'sh macro fair iron',
                    'sh macro fair diamond',
                    'sh macro fair wood stone iron diamond',
                    'sword forward aerial',
                    'sword forward aerial wood',
                    'sword forward aerial stone',
                    'sword forward aerial iron',
                    'sword forward aerial diamond',
                    'sword forward aerial wood stone iron diamond',
                    'sword forward air',
                    'sword forward air wood',
                    'sword forward air stone',
                    'sword forward air iron',
                    'sword forward air diamond',
                    'sword forward air wood stone iron diamond',
                    'sword fair',
                    'sword fair wood',
                    'sword fair stone',
                    'sword fair iron',
                    'sword fair diamond',
                    'sword fair wood stone iron diamond'
                ],
                link: 'fair sword wood stone iron diamond',
                description: 'Steve can perform his forward and back aerials using his sword\'s frame data (Jab, FTilt, NAir) by inputting them with the SH macro. They are much faster but deal much less damage than the pickaxe variants.'
            },
            {
                name: 'short-hop forward aerial (gold)',
                aliases: [
                    'sh forward aerial gold',
                    'sh forward air gold',
                    'sh fair gold',
                    'short hop forward air gold',
                    'short hop fair gold',
                    'sh macro forward aerial gold',
                    'sh macro forward air gold',
                    'sh macro fair gold',
                    'sword forward aerial gold',
                    'sword forward air gold',
                    'sword fair gold'
                ],
                link: 'fair sword gold',
                description: 'Steve can perform his forward and back aerials using his sword\'s frame data (Jab, FTilt, NAir) by inputting them with the SH macro. They are much faster but deal much less damage than the pickaxe variants.'
            },
            {
                name: 'short-hop forward aerial (no tool)',
                aliases: [
                    'sh forward aerial no tool',
                    'sh forward air no tool',
                    'sh fair no tool',
                    'sh forward aerial none',
                    'sh forward air none',
                    'sh fair none',
                    'sh forward aerial punch',
                    'sh forward air punch',
                    'sh fair punch',
                    'sh forward aerial fist',
                    'sh forward air fist',
                    'sh fair fist',
                    'short hop forward air no tool',
                    'short hop fair no tool',
                    'short hop forward aerial none',
                    'short hop forward air none',
                    'short hop fair none',
                    'short hop forward aerial punch',
                    'short hop forward air punch',
                    'short hop fair punch',
                    'short hop forward aerial fist',
                    'short hop forward air fist',
                    'short hop fair fist',
                    'sh macro forward aerial no tool',
                    'sh macro forward air no tool',
                    'sh macro fair no tool',
                    'sh macro forward aerial none',
                    'sh macro forward air none',
                    'sh macro fair none',
                    'sh macro forward aerial punch',
                    'sh macro forward air punch',
                    'sh macro fair punch',
                    'sh macro forward aerial fist',
                    'sh macro forward air fist',
                    'sh macro fair fist',
                    'sword forward aerial no tool',
                    'sword forward air no tool',
                    'sword fair no tool',
                    'sword forward aerial none',
                    'sword forward air none',
                    'sword fair none',
                    'sword forward aerial punch',
                    'sword forward air punch',
                    'sword fair punch',
                    'sword forward aerial fist',
                    'sword forward air fist',
                    'sword fair fist'
                ],
                link: 'fair sword punch',
                description: 'Steve can perform his forward and back aerials using his sword\'s frame data (Jab, FTilt, NAir) by inputting them with the SH macro. They are much faster but deal much less damage than the pickaxe variants.'
            },
            {
                name: 'back aerial (wood/stone/iron/diamond)',
                aliases: [
                    'back aerial',
                    'back aerial wood',
                    'back aerial stone',
                    'back aerial iron',
                    'back aerial diamond',
                    'back air',
                    'back air wood',
                    'back air stone',
                    'back air iron',
                    'back air diamond',
                    'back air wood stone iron diamond',
                    'bair',
                    'bair wood',
                    'bair stone',
                    'bair iron',
                    'bair diamond',
                    'bair wood stone iron diamond',
                    'pickaxe back aerial',
                    'pickaxe back aerial wood',
                    'pickaxe back aerial stone',
                    'pickaxe back aerial iron',
                    'pickaxe back aerial diamond',
                    'pickaxe back aerial wood stone iron diamond',
                    'pickaxe back air',
                    'pickaxe back air wood',
                    'pickaxe back air stone',
                    'pickaxe back air iron',
                    'pickaxe back air diamond',
                    'pickaxe bair',
                    'pickaxe bair wood',
                    'pickaxe bair stone',
                    'pickaxe bair iron',
                    'pickaxe bair diamond',
                    'pickaxe bair wood stone iron diamond',
                    'back aerial pickaxe',
                    'back aerial wood pickaxe',
                    'back aerial stone pickaxe',
                    'back aerial iron pickaxe',
                    'back aerial diamond pickaxe',
                    'back aerial wood stone iron diamond pickaxe',
                    'back air pickaxe',
                    'back air wood pickaxe',
                    'back air stone pickaxe',
                    'back air iron pickaxe',
                    'back air diamond pickaxe',
                    'bair pickaxe',
                    'bair wood pickaxe',
                    'bair stone pickaxe',
                    'bair iron pickaxe',
                    'bair diamond pickaxe',
                    'bair wood stone iron diamond pickaxe'
                ],
                link: 'bair pickaxe wood stone iron diamond'
            },
            {
                name: 'back aerial (gold)',
                aliases: [
                    'back air gold',
                    'bair gold',
                    'pickaxe back aerial gold',
                    'pickaxe back air gold',
                    'pickaxe bair gold',
                    'back aerial gold pickaxe',
                    'back air gold pickaxe',
                    'bair gold pickaxe'
                ],
                link: 'bair pickaxe gold'
            },
            {
                name: 'back aerial (no tool)',
                aliases: [
                    'back aerial none',
                    'back aerial punch',
                    'back aerial fist',
                    'back air no tool',
                    'back air none',
                    'back air punch',
                    'back air fist',
                    'bair no tool',
                    'bair none',
                    'bair punch',
                    'bair fist',
                    'pickaxe back aerial no tool',
                    'pickaxe back aerial none',
                    'pickaxe back aerial punch',
                    'pickaxe back aerial fist',
                    'pickaxe back air no tool',
                    'pickaxe back air none',
                    'pickaxe back air punch',
                    'pickaxe back air fist',
                    'pickaxe bair no tool',
                    'pickaxe bair none',
                    'pickaxe bair punch',
                    'pickaxe bair fist',
                    'back aerial no tool pickaxe',
                    'back aerial none pickaxe',
                    'back aerial punch pickaxe',
                    'back aerial fist pickaxe',
                    'back air no tool pickaxe',
                    'back air none pickaxe',
                    'back air punch pickaxe',
                    'back air fist pickaxe',
                    'bair no tool pickaxe',
                    'bair none pickaxe',
                    'bair punch pickaxe',
                    'bair fist pickaxe'
                ],
                link: 'bair punch',
            },
            {
                name: 'short-hop back aerial (wood/stone/iron/diamond)',
                aliases: [
                    'sh back aerial',
                    'sh back aerial wood',
                    'sh back aerial stone',
                    'sh back aerial iron',
                    'sh back aerial diamond',
                    'sh back aerial wood stone iron diamond',
                    'sh back air',
                    'sh back air wood',
                    'sh back air stone',
                    'sh back air iron',
                    'sh back air diamond',
                    'sh back air wood stone iron diamond',
                    'sh bair',
                    'sh bair wood',
                    'sh bair stone',
                    'sh bair iron',
                    'sh bair diamond',
                    'sh bair wood stone iron diamond',
                    'short hop back aerial',
                    'short hop back aerial wood',
                    'short hop back aerial stone',
                    'short hop back aerial iron',
                    'short hop back aerial diamond',
                    'short hop back aerial wood stone iron diamond',
                    'short hop back air',
                    'short hop back air wood',
                    'short hop back air stone',
                    'short hop back air iron',
                    'short hop back air diamond',
                    'short hop bair',
                    'short hop bair wood',
                    'short hop bair stone',
                    'short hop bair iron',
                    'short hop bair diamond',
                    'short hop bair wood stone iron diamond',
                    'sh macro back aerial',
                    'sh macro back aerial wood',
                    'sh macro back aerial stone',
                    'sh macro back aerial iron',
                    'sh macro back aerial diamond',
                    'sh macro back aerial wood stone iron diamond',
                    'sh macro back air',
                    'sh macro back air wood',
                    'sh macro back air stone',
                    'sh macro back air iron',
                    'sh macro back air diamond',
                    'sh macro back air wood stone iron diamond',
                    'sh macro bair',
                    'sh macro bair wood',
                    'sh macro bair stone',
                    'sh macro bair iron',
                    'sh macro bair diamond',
                    'sh macro bair wood stone iron diamond',
                    'sword back aerial',
                    'sword back aerial wood',
                    'sword back aerial stone',
                    'sword back aerial iron',
                    'sword back aerial diamond',
                    'sword back aerial wood stone iron diamond',
                    'sword back air',
                    'sword back air wood',
                    'sword back air stone',
                    'sword back air iron',
                    'sword back air diamond',
                    'sword back air wood stone iron diamond',
                    'sword bair',
                    'sword bair wood',
                    'sword bair stone',
                    'sword bair iron',
                    'sword bair diamond',
                    'sword bair wood stone iron diamond'
                ],
                link: 'bair sword wood stone iron diamond',
                description: 'Steve can perform his forward and back aerials using his sword\'s frame data (Jab, FTilt, NAir) by inputting them with the SH macro. They are much faster but deal much less damage than the pickaxe variants.'
            },
            {
                name: 'short-hop back aerial (gold)',
                aliases: [
                    'sh back aerial gold',
                    'sh back air gold',
                    'sh bair gold',
                    'short hop back air gold',
                    'short hop bair gold',
                    'sh macro back aerial gold',
                    'sh macro back air gold',
                    'sh macro bair gold',
                    'sword back aerial gold',
                    'sword back air gold',
                    'sword bair gold'
                ],
                link: 'bair sword gold',
                description: 'Steve can perform his forward and back aerials using his sword\'s frame data (Jab, FTilt, NAir) by inputting them with the SH macro. They are much faster but deal much less damage than the pickaxe variants.'
            },
            {
                name: 'short-hop back aerial (no tool)',
                aliases: [
                    'sh back aerial no tool',
                    'sh back air no tool',
                    'sh bair no tool',
                    'sh back aerial none',
                    'sh back air none',
                    'sh bair none',
                    'sh back aerial punch',
                    'sh back air punch',
                    'sh bair punch',
                    'sh back aerial fist',
                    'sh back air fist',
                    'sh bair fist',
                    'short hop back air no tool',
                    'short hop bair no tool',
                    'short hop back aerial none',
                    'short hop back air none',
                    'short hop bair none',
                    'short hop back aerial punch',
                    'short hop back air punch',
                    'short hop bair punch',
                    'short hop back aerial fist',
                    'short hop back air fist',
                    'short hop bair fist',
                    'sh macro back aerial no tool',
                    'sh macro back air no tool',
                    'sh macro bair no tool',
                    'sh macro back aerial none',
                    'sh macro back air none',
                    'sh macro bair none',
                    'sh macro back aerial punch',
                    'sh macro back air punch',
                    'sh macro bair punch',
                    'sh macro back aerial fist',
                    'sh macro back air fist',
                    'sh macro bair fist',
                    'sword back aerial no tool',
                    'sword back air no tool',
                    'sword bair no tool',
                    'sword back aerial none',
                    'sword back air none',
                    'sword bair none',
                    'sword back aerial punch',
                    'sword back air punch',
                    'sword bair punch',
                    'sword back aerial fist',
                    'sword back air fist',
                    'sword bair fist'
                ],
                link: 'bair sword punch',
                description: 'Steve can perform his forward and back aerials using his sword\'s frame data (Jab, FTilt, NAir) by inputting them with the SH macro. They are much faster but deal much less damage than the pickaxe variants.'
            },
            {
                name: 'up aerial (wood/stone/iron/diamond)',
                aliases: [
                    'up aerial',
                    'up aerial wood',
                    'up aerial stone',
                    'up aerial iron',
                    'up aerial diamond',
                    'up air',
                    'up air wood',
                    'up air stone',
                    'up air iron',
                    'up air diamond',
                    'uair',
                    'uair wood',
                    'uair stone',
                    'uair iron',
                    'uair diamond',
                    'uair wood stone iron diamond',
                ],
                link: 'uair wood stone iron diamond'
            },
            {
                name: 'up aerial (gold)',
                aliases: [
                    'up air gold',
                    'uair gold'
                ],
                link: 'uair gold'
            },
            {
                name: 'up aerial (no tool)',
                aliases: [
                    'up aerial none',
                    'up aerial punch',
                    'up aerial fist',
                    'up air no tool',
                    'up air none',
                    'up air punch',
                    'up air fist',
                    'uair no tool',
                    'uair none',
                    'uair punch',
                    'uair fist',
                ],
                link: 'uair punch'
            },
            {
                name: 'down aerial',
                aliases: [
                    'down air',
                    'dair',
                    'down aerial anvil',
                    'down air anvil',
                    'dair anvil'
                ],
                link: 'dair',
                png: true
            },
            {
                name: 'down aerial (anvil only)',
                aliases: [
                    'down aerial anvil only',
                    'down air anvil only',
                    'dair anvil only'
                ],
                link: 'dair anvil',
                png: true
            },
            {
                name: 'down throw',
                aliases: [
                    'dthrow',
                    'down throw anvil',
                    'dthrow anvil'
                ],
                link: 'dthrow anvil'
            },
            {
                name: 'down throw (no anvil)',
                aliases: [
                    'down throw no anvil',
                    'dthrow no anvil',
                    'down throw no iron',
                    'dthrow no iron'
                ],
                link: 'dthrow'
            }
        ],
        exclude: ['jab', 'forward tilt', 'up tilt', 'dash attack', 'forward smash', 'neutral aerial', 'forward aerial', 'back aerial', 'up aerial'],
        attributes: [
            {
                name: 'weight',
                value: 92,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.45,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.85,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.86,
            },
            {
                name: 'fall speed',
                value: 1.42,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.272,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'sephiroth',
        aliases: ['edge', 'sword', 'seph'],
        color: '#dee0e3',
        jabType: '3',
        ftiltType: 'angled',
        fsmashType: 'unangled',
        landingDair: true,
        moves: [
            {
                name: 'forward smash (winged)',
                aliases: [
                    'forward smash winged',
                    'fsmash winged',
                    'winged forward smash',
                    'winged fsmash',
                    'forward smash owa',
                    'fsmash owa'
                ],
                link: 'fsmash winged'
            },
            {
                name: 'up smash (winged)',
                aliases: [
                    'up smash winged',
                    'usmash winged',
                    'winged up smash',
                    'winged usmash',
                    'up smash owa',
                    'usmash owa'
                ],
                link: 'usmash winged'
            },
            {
                name: 'down smash (winged)',
                aliases: [
                    'down smash winged',
                    'dsmash winged',
                    'winged down smash',
                    'winged dsmash',
                    'down smash owa',
                    'dsmash owa'
                ],
                link: 'dsmash winged'
            },
            {
                name: 'down smash (over edge)',
                aliases: [
                    'down smash over edge',
                    'down smash aerial',
                    'dsmash over edge',
                    'dsmash aerial'
                ],
                link: 'dsmash air'
            },
            {
                name: 'down smash (winged, over edge)',
                aliases: [
                    'down smash over edge winged',
                    'down smash aerial winged',
                    'dsmash over edge winged',
                    'dsmash aerial winged',
                    'winged down smash over edge',
                    'winged down smash aerial',
                    'winged dsmash over edge',
                    'winged dsmash aerial',
                    'down smash over edge owa',
                    'down smash aerial owa',
                    'dsmash over edge owa',
                    'dsmash aerial owa'
                ],
                link: 'dsmash air winged'
            },
            {
                name: 'flare',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'neutral b min',
                    'neutral special min',
                    'neutral b minimum',
                    'neutral special minimum',
                    'neutral b uncharged',
                    'neutral special uncharged'
                ]
            },
            {
                name: 'megaflare',
                aliases: [
                    'neutral b mid',
                    'neutral special mid',
                    'neutral b middle',
                    'neutral special middle'
                ]
            },
            {
                name: 'gigaflare',
                aliases: [
                    'neutral b max',
                    'neutral special max',
                    'neutral b maximum',
                    'neutral special maximum',
                    'neutral b charged',
                    'neutral special charged'
                ]
            },
            {
                name: 'shadow flare (minimum)',
                aliases: [
                    'side b',
                    'side special',
                    'side b min',
                    'side special min',
                    'side b minimum',
                    'side special minimum',
                    'side b uncharged',
                    'side special uncharged'
                ],
                link: 'shadow flare min'
            },
            {
                name: 'shadow flare (maximum)',
                aliases: [
                    'side b max',
                    'side special max',
                    'side b maximum',
                    'side special maximum',
                    'side b charged',
                    'side special charged'
                ],
                link: 'shadow flare max'
            },
            {
                name: 'blade dash',
                aliases: [
                    'up b',
                    'up special',
                    'up b min',
                    'up special min',
                    'up b uncharged',
                    'up special uncharged'
                ]
            },
            {
                name: 'octaslash',
                aliases: [
                    'up b max',
                    'up special max',
                    'up b charged',
                    'up special charged',
                ]
            },
            {
                name: 'scintilla',
                aliases: [
                    'down b',
                    'down special'
                ],
                link: 'scintilla miss'
            },
            {
                name: 'scintilla (success, minimum)',
                aliases: [
                    'scintilla success',
                    'scintilla success min',
                    'scintilla success minimum',
                    'down b success min',
                    'down special success min',
                    'down b success minimum',
                    'down special success minimum',
                    'scintilla minimum',
                    'scintilla min',
                    'down b hit',
                    'down special hit',
                    'down b hit min',
                    'down special hit min',
                    'down b hit minimum',
                    'down special hit minimum',
                    'down b min',
                    'down special min',
                    'down b minimum',
                    'down special minimum'
                ],
                link: 'scintilla hit min'
            },
            {
                name: 'scintilla (success, maximum)',
                aliases: [
                    'scintilla success max',
                    'down b success max',
                    'down special success max',
                    'scintilla success maximum',
                    'down b success maximum',
                    'down special success maximum',
                    'scintilla maximum',
                    'scintilla max',
                    'down b hit max',
                    'down special hit max',
                    'down b hit maximum',
                    'down special hit maximum',
                    'down b max',
                    'down special max',
                    'down b maximum',
                    'down special maximum'
                ],
                link: 'scintilla hit max'
            },
        ],
        exclude: [],
        attributes: [
            {
                name: 'weight',
                value: 79,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.86,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.9,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.95,
            },
            {
                name: 'fall speed',
                value: 1.84,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.944,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'pyra',
        aliases: ['pythra', 'aegis', 'homura'],
        color: '#d04c4a',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [
            {
                name :'up tilt',
                aliases: [
                    'utilt',
                    'hold the po',
                    'htp'
                ],
                link: 'utilt'
            },
            {
                name: 'up tilt (interpolated)',
                aliases: [
                    'utilt interpolated',
                    'hold the po interpolated',
                    'htp interpolated'
                ],
                link: 'utilt interpolated'
            },
            {
                name: 'forward smash (interpolated)',
                aliases: [
                    'fsmash interpolated',
                    'side smash interpolated'
                ],
                link: 'fsmash interpolated'
            },
            {
                name: 'down aerial (interpolated)',
                aliases: [
                    'down air interpolated',
                    'dair interpolated'
                ],
                link: 'dair interpolated'
            },
            {
                name: 'flame nova 1',
                aliases: [
                    'neutral b',
                    'neutral special',
                    'flame nova',
                    'nova',
                    'fn',
                    'fn1',
                    'neutral b min',
                    'neutral b minimum',
                    'neutral special min',
                    'neutral special minimum',
                    'flame nova min',
                    'flame nova minimum',
                    'fn min',
                    'fn minimum',
                    'nova min',
                    'nova minimum'
                ]
            },
            {
                name: 'flame nova 2',
                aliases: [
                    'fn2',
                    'nova 2',
                    'neutral b middle',
                    'neutral special middle',
                    'flame nova middle',
                    'fn middle',
                ]
            },
            {
                name: 'flame nova 3',
                aliases: [
                    'fn3',
                    'nova 3',
                    'neutral b max',
                    'neutral b maximum',
                    'neutral special max',
                    'neutral special maximum',
                    'flame nova max',
                    'flame nova maximum',
                    'fn max',
                    'fn maximum'
                ]
            },
            {
                name: 'blazing end (melee)',
                aliases: [
                    'side b melee',
                    'side special melee',
                    'be melee',
                    'side b point blank',
                    'side special point blank',
                    'blazing end point blank',
                    'be point blank',
                    'side b direct',
                    'side special direct',
                    'blazing end direct',
                    'be direct',
                    'side b throw',
                    'side special throw',
                    'blazing end throw',
                    'be throw'
                ],
                link: 'blazing end start'
            },
            {
                name: 'blazing end (projectile)',
                aliases: [
                    'side b',
                    'side special',
                    'blazing end',
                    'be',
                    'side b projectile',
                    'side special projectile',
                    'be projectile',
                    'side b spin',
                    'side special spin',
                    'blazing end spin',
                    'be spin'
                ],
                link: 'blazing end'
            },
            {
                name: 'prominence revolt',
                aliases: [
                    'up b',
                    'up special',
                    'pr'
                ]
            },
            {
                name: 'swap',
                aliases: [
                    'down b',
                    'down special',
                    'switch'
                ],
                link: 'swap to mythra'
            },
            {
                name: 'ledge grab (prominence revolt, apex)',
                aliases: [
                    'up b ledge grab',
                    'up special ledge grab',
                    'prominence revolt ledge grab',
                    'pr ledge grab'
                ],
                url: 'https://ultimateframedata.com/ledgegrabs/PyraUpBLedge.png'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 98,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.38,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.92,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.1,
            },
            {
                name: 'fall speed',
                value: 1.62,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.592,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'mythra',
        aliases: ['hikari'],
        ssbuLink: 'pyra',
        color: '#ffffcc',
        jabType: 'gentleman',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        moves: [
            {
                name :'up tilt',
                aliases: [
                    'utilt',
                    'hold the mo',
                    'htm'
                ],
                link: 'utilt'
            },
            {
                name: 'up tilt (interpolated)',
                aliases: [
                    'utilt interpolated',
                    'hold the mo interpolated',
                    'htm interpolated'
                ],
                link: 'utilt interpolated'
            },
            {
                name: 'forward smash (interpolated)',
                aliases: [
                    'fsmash interpolated',
                    'side smash interpolated'
                ],
                link: 'fsmash interpolated'
            },
            {
                name: 'neutral aerial (landing)',
                aliases: [
                    'nair landing',
                    'landing nair',
                    'landing neutral aerial'
                ],
                link: 'nair landing'
            },

            {
                name: 'down aerial (interpolated)',
                aliases: [
                    'down air interpolated',
                    'dair interpolated'
                ],
                link: 'dair interpolated'
            },
            {
                name: 'lightning buster (charge)',
                aliases: [
                    'neutral b charge',
                    'neutral special charge',
                    'lightning buster charging',
                    'lb charge',
                    'neutral b charging',
                    'neutral special charging',
                    'lb charging'
                ]
            },
            {
                name: 'lightning buster (minimum)',
                aliases: [
                    'lightning buster',
                    'lightning buster 1',
                    'lb',
                    'lb 1',
                    'neutral b',
                    'neutral b 1',
                    'neutral special',
                    'neutral special 1',
                    'lightning buster min',
                    'lb min',
                    'neutral b min',
                    'neutral special min',
                    'lb minimum',
                    'neutral b minimum',
                    'neutral special minimum'
                ],
                link: 'lightning buster'
            },
            {
                name: 'lightning buster (minimum, aerial)',
                aliases: [
                    'lightning buster aerial',
                    'lightning buster air',
                    'aerial lightning buster',
                    'air lightning buster',
                    'lb aerial',
                    'lb air',
                    'aerial lb',
                    'air lb',
                    'neutral b aerial',
                    'neutral b air',
                    'aerial neutral b',
                    'air neutral b',
                    'neutral special aerial',
                    'neutral special air',
                    'aerial neutral special',
                    'air neutral special',
                    'lightning buster min aerial',
                    'lightning buster min air',
                    'lightning buster aerial min',
                    'lightning buster air min',
                    'lightning buster minimum aerial',
                    'lightning buster aerial minimum',
                    'lightning buster air minimum',
                    'lb min aerial',
                    'lb min air',
                    'lb aerial min',
                    'lb air min',
                    'neutral b min aerial',
                    'neutral b min air',
                    'neutral b aerial min',
                    'neutral b air min',
                    'neutral special min aerial',
                    'neutral special min air',
                    'neutral special aerial min',
                    'neutral special air min',
                    'lb minimum aerial',
                    'lb minimum air',
                    'lb aerial minimum',
                    'lb air minimum',
                    'neutral b minimum aerial',
                    'neutral b minimum air',
                    'neutral b aerial minimum',
                    'neutral b air minimum',
                    'neutral special minimum aerial',
                    'neutral special minimum air',
                    'neutral special aerial minimum',
                    'neutral special air minimum',
                ],
                link: 'lightning buster aerial'
            },
            {
                name: 'lightning buster (maximum)',
                aliases: [
                    'lightning buster',
                    'lightning buster 2',
                    'lb',
                    'lb 2',
                    'neutral b',
                    'neutral b 2',
                    'neutral special',
                    'neutral special 2',
                    'lightning buster max',
                    'lb max',
                    'neutral b max',
                    'neutral special max',
                    'lb maximum',
                    'neutral b maximum',
                    'neutral special maximum'
                ],
                link: 'lightning buster max'
            },
            {
                name: 'lightning buster (maximum, aerial)',
                aliases: [
                    'lightning buster aerial',
                    'lightning buster air',
                    'aerial lightning buster',
                    'air lightning buster',
                    'lb aerial',
                    'lb air',
                    'aerial lb',
                    'air lb',
                    'neutral b aerial',
                    'neutral b air',
                    'aerial neutral b',
                    'air neutral b',
                    'neutral special aerial',
                    'neutral special air',
                    'aerial neutral special',
                    'air neutral special',
                    'lightning buster max aerial',
                    'lightning buster max air',
                    'lightning buster aerial max',
                    'lightning buster air max',
                    'lightning buster maximum aerial',
                    'lightning buster aerial maximum',
                    'lightning buster air maximum',
                    'lb max aerial',
                    'lb max air',
                    'lb aerial max',
                    'lb air max',
                    'neutral b max aerial',
                    'neutral b max air',
                    'neutral b aerial max',
                    'neutral b air max',
                    'neutral special max aerial',
                    'neutral special max air',
                    'neutral special aerial max',
                    'neutral special air max',
                    'lb maximum aerial',
                    'lb maximum air',
                    'lb aerial maximum',
                    'lb air maximum',
                    'neutral b maximum aerial',
                    'neutral b maximum air',
                    'neutral b aerial maximum',
                    'neutral b air maximum',
                    'neutral special maximum aerial',
                    'neutral special maximum air',
                    'neutral special aerial maximum',
                    'neutral special air maximum',
                ],
                link: 'lightning buster aerial 2'
            },
            {
                name: 'photon edge',
                aliases: [
                    'side b',
                    'side special',
                    'pe'
                ],
                link: 'photon edge mod'
            },
            {
                name: 'photon edge (hitbox)',
                aliases: [
                    'side b hitbox',
                    'side special hitbox',
                    'pe hurtbox',
                    'photon edge hitboxes',
                    'side b hitboxes',
                    'side special hitboxes',
                    'pe hitboxes'
                ],
                link: 'photon edge'
            },
            {
                name: 'photon edge (hurtbox)',
                aliases: [
                    'side b hurtbox',
                    'side special hurtbox',
                    'pe hurtbox',
                    'photon edge hurtboxes',
                    'side b hurtboxes',
                    'side special hurtboxes',
                    'pe hurtboxes'
                ],
                link: 'photon edge 2'
            },
            {
                name: 'ray of punishment (start)',
                aliases: [
                    'up b',
                    'up special',
                    'rop start',
                    'chroma dust start',
                    'cd start',
                    'up b start',
                    'up special start'
                ],
                link: 'up special'
            },
            {
                name: 'ray of punishment',
                aliases: [
                    'rop'
                ]
            },
            {
                name: 'chroma dust',
                aliases: [
                    'cd'
                ],
                link: 'chroma dust interpolated'
            },
            {
                name: 'swap',
                aliases: [
                    'down b',
                    'down special',
                    'switch'
                ],
                link: 'swap to pyra'
            },
            {
                name: 'ledge grab (ray of punishment, apex)',
                aliases: [
                    'up b ledge grab',
                    'up special ledge grab',
                    'ray of punishment ledge grab',
                    'rop ledge grab'
                ],
                url: 'https://ultimateframedata.com/ledgegrabs/MythraLedgeUpB.png'
            },
            {
                name: 'ledge grab (photon edge)',
                aliases: [
                    'side b ledge grab',
                    'side special ledge grab',
                    'photon edge ledge grab',
                    'pe ledge grab'
                ],
                url: 'https://ultimateframedata.com/ledgegrabs/MythraLedgeSideB.png'
            }
        ],
        attributes: [
            {
                name: 'weight',
                value: 92,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 2.41,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 1.42,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 1.22,
            },
            {
                name: 'fall speed',
                value: 1.87,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.992,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
    {
        name: 'kazuya',
        aliases: ['kaz', 'tekken'],
        ufdFile: 'shoto4',
        color: '#a60807',
        jabType: 'unique',
        ftiltType: 'unangled',
        fsmashType: 'unangled',
        landingDair: true,
        moves: [
            {
                name: 'jab 1',
                aliases: [
                    '10 hit combo 1',
                    '10 hit 1',
                    '5a'
                ]
            },
            {
                name: 'jab 2',
                aliases: [
                    '10 hit combo 2',
                    '10 hit 2',
                    '5a 2'
                ]
            },
            {
                name: 'jab 3',
                aliases: [
                    '10 hit combo 3',
                    '10 hit 3',
                    '5a 3'
                ]
            },
            {
                name: 'jab 4',
                aliases: [
                    '10 hit combo 4',
                    '10 hit 4',
                    '5a 4'
                ]
            },
            {
                name: 'jab 5',
                aliases: [
                    '10 hit combo 5',
                    '10 hit 5',
                    '5a 5'
                ]
            },
            {
                name: 'jab 6',
                aliases: [
                    '10 hit combo 6',
                    '10 hit 6',
                    '5a 6'
                ]
            },
            {
                name: 'jab 7',
                aliases: [
                    '10 hit combo 7',
                    '10 hit 7',
                    '5a 7'
                ]
            },
            {
                name: 'jab 8',
                aliases: [
                    '10 hit combo 8',
                    '10 hit 8',
                    '5a 8'
                ]
            },
            {
                name: 'jab 9',
                aliases: [
                    '10 hit combo 9',
                    '10 hit 9',
                    '5a 9'
                ]
            },
            {
                name: 'jab 10',
                aliases: [
                    '10 hit combo 10',
                    '10 hit 10',
                    '5a 10'
                ]
            },
            {
                name: 'flash punch combo',
                aliases: [
                    'gentleman',
                    'jab gentleman',
                    'delayed jab',
                    'delayed jab 3'
                ],
                link: 'jab 3 delayed'
            },
            {
                name: 'forward tilt',
                aliases: [
                    'ftilt',
                    'oni front kick',
                    '6a'
                ],
                link: 'ftilt'
            },
            {
                name: 'down-forward tilt 1',
                aliases: [
                    'down forward tilt',
                    'dftilt',
                    'tsunami kick',
                    '3a',
                    'dftilt 1',
                    'tsunami kick 1',
                    '3a 1'
                ],
                link: 'dftilt 1'
            },
            {
                name: 'down-forward tilt 2',
                aliases: [
                    'dftilt 2',
                    'tsunami kick 2',
                    '3a 2'
                ],
                link: 'dftilt 2'
            },
            {
                name: 'down tilt',
                aliases: [
                    'dtilt',
                    'neijiri uraken',
                    '2a'
                ],
                link: 'dtilt'
            },
            {
                name: 'down-back tilt',
                aliases: [
                    'dbtilt',
                    'stature smash',
                    '1a'
                ],
                link: 'dbtilt'
            },
            {
                name: 'back tilt',
                aliases: [
                    'btilt',
                    'flash tornado',
                    '4a'
                ],
                link: 'btilt'
            },
            {
                name: 'up-back tilt',
                aliases: [
                    'ubtilt',
                    'jump side kick',
                    '7a'
                ],
                link: 'ubtilt'
            },
            {
                name: 'up tilt 1',
                aliases: [
                    'up tilt',
                    'utilt',
                    'twin pistons',
                    '8a',
                    'utilt 1',
                    'twin pistons 1',
                    '8a 1'
                ],
                link: 'utilt 1'
            },
            {
                name: 'up tilt 2',
                aliases: [
                    'utilt 2',
                    'twin pistons 2',
                    '8a 2'
                ],
                link: 'utilt 2'
            },
            {
                name: 'up-forward tilt 1',
                aliases: [
                    'up-forward tilt',
                    'uftilt',
                    'roundhouse to triple spin kicks',
                    '9a',
                    'utilt 1',
                    'roundhouse to triple spin kicks 1',
                    '9a 1'
                ],
                link: 'uftilt 1'
            },
            {
                name: 'up-forward tilt 2',
                aliases: [
                    'uftilt 2',
                    'roundhouse to triple spin kicks 2',
                    '9a 2'
                ],
                link: 'uftilt 2'
            },
            {
                name: 'up-forward tilt 3',
                aliases: [
                    'uftilt 3',
                    'roundhouse to triple spin kicks 3',
                    '9a 3'
                ],
                link: 'uftilt 3'
            },
            {
                name: 'up-forward tilt 4',
                aliases: [
                    'uftilt 4',
                    'roundhouse to triple spin kicks 4',
                    '9a 4'
                ],
                link: 'uftilt 4'
            },
            {
                name: 'crouching down-forward tilt',
                aliases: [
                    'crouching dftilt',
                    'crouch dftilt',
                    'crouch down-forward tilt',
                    'c 3a'
                ],
                link: 'crouch ftilt'
            },
            {
                name: 'crouch jab',
                aliases: [
                    'crouching dtilt',
                    'crouching down tilt',
                    'crouch dtilt',
                    'crouch down tilt',
                    'tombstone crusher',
                    'c 2a',
                    'c a'
                ],
                link: 'crouch jab'
            },
            {
                name: 'crouching down-back tilt',
                aliases: [
                    'crouching dbtilt',
                    'crouch dbtilt',
                    'crouch down-back tilt',
                    'crouch spin kick',
                    'c 1a'
                ],
                link: 'crouch btilt'
            },
            {
                name: 'double dash attack',
                aliases: [
                    'double da',
                    'left splits kick',
                    '66a'
                ]
            },
            {
                name: 'demon god fist',
                aliases: [
                    'uncrouching attack',
                    'uncrouch attack',
                    'dgf'
                ],
                link: 'uncrouching attack'
            },
            {
                name: 'wind god fist',
                aliases: [
                    'wgf',
                    '623a'
                ]
            },
            {
                name: 'electric wind god fist',
                aliases: [
                    'ewgf',
                    'perfect 623a',
                    'just 623a'
                ]
            },
            {
                name: 'dragon uppercut',
                aliases: [
                    'hold 623a',
                    'held 623a',
                    '623[a]'
                ]
            },
            {
                name: 'spinning dragon to left hook',
                aliases: [
                    '623b'
                ]
            },
            {
                name: 'devil blaster',
                aliases: [
                    'neutral b',
                    'neutral special'
                ],
                link: 'devil blaster g'
            },
            {
                name: 'devil fist (grounded)',
                aliases: [
                    'devil fist',
                    'side b',
                    'side special',
                    'side b grounded',
                    'side special grounded'
                ],
                link: 'devil fist g'
            },
            {
                name: 'devil fist (aerial)',
                aliases: [
                    'side b aerial',
                    'side special aerial',
                    'devil fist air',
                    'side b air',
                    'side special air',
                ],
                link: 'devil fist a'
            },
            {
                name: 'devil wings',
                aliases: [
                    'up b',
                    'up special'
                ]
            },
            {
                name: 'heaven\'s door (grounded)',
                aliases: [
                    'heavens door',
                    'down b',
                    'down b grounded',
                    'down special',
                    'down special grounded'
                ],
                link: 'heavens door g'
            },
            {
                name: 'heaven\'s door (aerial)',
                aliases: [
                    'heavens door air',
                    'down b air',
                    'down b aerial',
                    'down special air',
                    'down special aerial'
                ],
                link: 'heavens door a'
            },
            {
                name: 'heaven\'s door (falling)',
                aliases: [
                    'heavens door fall',
                    'down b fall',
                    'down b falling',
                    'down special fall',
                    'down special falling'
                ],
                link: 'heavens door falling'
            },
            {
                name: 'heaven\'s door (landing)',
                aliases: [
                    'down b landing',
                    'down special landing',
                ],
                link: 'heavens door ground'
            },
            {
                name: 'rage drive (non-input)',
                aliases: [
                    'rage drive',
                    'rage grab',
                    'rage down b'
                ],
                link: 'rage drive g'
            },
            {
                name: 'rage drive (non-input landing)',
                aliases: [
                    'rage drive landing',
                    'rage grab landing',
                    'rage down b landing'
                ],
                link: 'rage drive land'
            },
            {
                name: 'rage drive (input)',
                aliases: [
                    'true rage drive'
                ],
                link: 'rage drive input'
            },
            {
                name: 'rage drive (input landing)',
                aliases: [
                    'true rage drive landing'
                ],
                link: 'rage drive input land'
            },
            {
                name: 'rage drive (falling)',
                aliases: [
                    'rage drive fall',
                    'rage grab fall',
                    'rage grab falling',
                    'rage down b fall',
                    'rage down b falling'
                ],
                link: 'rage drive falling'
            },
            {
                name: 'gates of hell',
                aliases: [
                    'crouch dash grab',
                    '623z',
                ],
                link: 'gates of hell grab'
            },
            {
                name: 'crouch dash',
                aliases: [
                    '623'
                ]
            },
            {
                name: 'side taunt',
                aliases: [
                    'staunt',
                    'demons wrath',
                    'taunt'
                ]
            },
        ],
        attributes: [
            {
                name: 'weight',
                value: 113,
                aliases: ['mass']
            },
            {
                name: 'run speed',
                aliases: ['run'],
                value: 1.55,
            },
            {
                name: 'walk speed',
                aliases: ['walk'],
                value: 0.66,
            },
            {
                name: 'air speed',
                aliases: ['drift'],
                value: 0.89,
            },
            {
                name: 'fall speed',
                value: 1.7,
            },
            {
                name: 'fastfall speed',
                aliases: ['fastfall'],
                value: 2.72,
            },
            {
                name: 'fastfall speed increase',
                aliases: ['ffincrease', 'fastfallincrease', 'ff%'],
                value: 60,
            }
        ]
    },
]