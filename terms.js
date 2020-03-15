module.exports = [
   // general
   {
      name:  'run cancel',
      definition: 'A Run Cancel allows you to use any move out of a run. It is performed by returning the Control Stick to the neutral (default) position, then performing any move.',
      character: 'general'
   },
   {
      name: 'shorthop',
      aliases: ['short hop'],
      definition: 'A Short Hop, or a SH, is performed in 2 ways in SSBU:\n\n1) Pushing the jump button, then releasing it before becoming airborne\n2) Buffering an aerial during the jump startup\n\nA SH is a shorter version of a normal jump, allowing you to hit grounded opponents and land quicker.\n\nAfter performing a SH in SSBU, your aerial damage will be reduced to 0.85x its original damage. This applies until you jump or touch the ground. It is currently unknown if this applies to specials. It is also unknown if hitting an aerial, performing a special, performing an aerial, or being hit resets this.',
      character: 'general'
   },
   {
      name: 'faf',
      aliases: ['first actionable frame'],
      definition: 'FAF is the First Actionable Frame. It\'s basically the first frame you can perform an action during another one. For instance, if a move has a FAF of 24, the first frame you can act during it is frame 24, and the last frame you cannot act is frame 23.',
      character: 'general'
   },
   {
      name: 'jmu',
      aliases: ['joint matchup'],
      definition: 'A JMU is a __J__oint __M__atch__U__p. During one, 2 Smashcords come together to discuss the MU between their characters. It\'s a great opportunity to learn! Each Smashcord does it differently - some structure theirs on a schedule and some don\'t, some end theirs with a crew battle and some don\'t, etc.',
      character: 'general'
   },
   {
      name: 'oos',
      aliases: ['out of shield'],
      definition: 'OoS refers to your Out of Shield options, or the things you can do while shielding. These are, for any character:\n\n- Grab\n- Jump\n- USmash\n- Up Special\n- Any  move after a jump\n- Any move after a shield drop.\n\nIn games prior to Ultimate, USmash/Up Special need to be jump cancelled.',
      character: 'general'
   },
   {
      name: 'reverse aerial rush',
      aliases: ['rar'],
      definition: 'A reverse aerial rush, or RAR, allows a character to jump backwards out of a dash. This is performed pushing back while dashing/running, then jump. Many characters can use this to approach with a back aerial (Mario, Ivysaur, etc), or use the startup of an up aerial that starts behind them (Falco, Pichu, etc).',
      character: 'general'
   },
   {
      name: 'rgr',
      aliases: ['skid cancel'],
      definition: 'RGR, also known as a Skid Cancel, stands for Reverse Grounded Rush. It\'s essentially the grounded version of RAR. Due to SSBU\'s new dash mechanics, you can cancel a skid with any move. In turn, you can reverse your direction before any move during a dash.',
      character: 'general'
   },
   {
      name: 'frame',
      definition: 'A frame is the smallest unit of time in Smash. There are 60 frames per second, and the speed of moves is usually measured in frames. For instance, in Smash 4, Little Mac\'s Jab 1 is Frame 1, which is instant. Mario\'s Jab 1 is Frame 2, which is almost instant, etc. The speed of a move is often abbreviated to Fx, where x is the frame the move comes out on. For example, Little Mac\'s Jab would be F1 and Mario\'s would be F2.',
      character: 'general'
   },
   {
      name: 'runbrake',
      definition: 'RunBrake is the technical name for a skid. This occurs when you enter Run, then return the control stick to neutral. Not to be confused with a turnaround skid, also known as a pivot, or run turnaround.',
      character: 'general'
   },
   {
      name: 'fullhop',
      aliases: ['fh'],
      definition: 'A Full Hop, or a FH, is the normal type of jump. It is performed when you do not buffer an aerial on your jump startup or you hold the jump button throughout your jump startup. Using a FH allows you to hit opponents on high platforms, hit opponents far above you, followup from certain moves, etc.',
      character: 'general'
   },
   {
      name: 'anti-air',
      aliases: ['aa',],
      definition: 'An AA is an anti-air, and it\'s basically a move that counters an aerial approach. It is typically disjointed and/or has a high hitbox. A traditional fighting game example is Ryu\'s Heavy Kick or Shoryuken in Street Fighter. A Smash Bros example is Cloud\'s Cross Slash.',
      character: 'general'
   },
   {
      name: 'rage',
      definition: 'Rage is a mechanic that increases the knockback dealt slightly by a fighter as their percent increases. It starts taking effect at 35% and gradually became stronger, maxing at 150%. It does not affect moves with WBKB (weight based knockback). See also: wbkb',
      character: 'general'
   },
   {
      name: 'wbkb',
      definition: 'WBKB is short for Weight Based Knockback. It is essentially set knockback, and it only changes based on a character\'s weight, hence the name. See also: kb, bkb, kbg',
      character: 'general'
   },
   {
      name: 'sdi',
      definition: 'SDI is short for Smash Directional-Influence (oficially called hitstun shuffling). It is NOT DI (Directional Influence) and is a completely different mechanic. It is performed while pressing a direction repeatedly while in hitlag (also known as freeze frames). Each time you press a direction, you will move slightly in that direction **before** knockback. This allows you to escape multihit moves, such as rapid jabs.\n\nA more effective method in Smash 4 on the Gamecube Controller was to push the control stick to the notch of the direction you wanted to SDI in, then move it to the 2 notches beside it. For instance if you wanted to SDI up, you would do an input like this:\n\n⬆ ↖ ⬆ ↗ ⬆ \n\nIt is unknown if this is the most effective SDI method in SSBU.',
      character: 'general'
   },
   {
      name: 'ledge grab limit',
      definition: 'https://www.youtube.com/watch?v=ZG-msKOIR9g',
      character: 'general'
   },
   {
      name: 'shac',
      definition: 'ShortHop Autocancel. If a move can SHAC, it means it will autocancel in a shorthop. This is generally a good property for a move to have. See also: AC',
      character: 'general'
   },
   {
      name: 'hitstun shuffling',
      definition: 'Hitstun Shuffling is the offical name for SDI. See: sdi',
      character: 'general'
   },
   {
      name: 'kb',
      aliases: ['knockback'],
      definition: 'Knockback, abbreviated to KB, is the distance you travel when launched by a particular move. Two parts of KB are Base Knockback (BKB) and Knockback Growth (KBG). BKB is the base knockback amount that is always applied at any percent. KBG is a modifier that affects how far you are sent by an attack at higher percents. See also: bkb, kbg, wbkb',
      character: 'general'
   },
   {
      name: 'zac',
      definition: ' A Z-drop Aerial Catch, or ZAC, is performed by pressing grab while in the air to z-drop an item (like bombs), and then immediately inputting an aerial, which will recatch the bomb. The result will be a somewhat delayed aerial while holding a bomb. This can allow for some more unique combo potential.',
      character: 'general'
   },
   {
      name: 'fastfall',
      aliases: ['ff'],
      definition: 'Fastfall, sometimes shortened to FF, is when you press down on the control stick after reaching the peak of your jump. This will result in you falling faster than you normally would.',
      character: 'general'
   },
   {
      name: 'autocancel',
      aliases: ['ac'],
      definition: 'An Autocancel is the window during which a move can land with no additional landing lag. Most moves have an autocancel window before the move comes out and after the move has completed. If you land during this period, you will land without the aerial\'s extra landing lag. For example, Link\'s down air from very high up can land with no endlag, but if he tries to use it close to the ground, he will have a noticable amount of landing lag.',
      character: 'general'
   },
   {
      name: 'b-reverse',
      definition: 'A B-reverse happens when you do a Special move (such as side-B), and then immediately press the control stick in the opposite direction that you are facing. This will shift all your momentum from the original direction of travel into the new direction. Not all special moves can do this and get the momentum shift. See also: wavebounce, turnaroundspecial',
      character: 'general'
   },
   {
      name: 'turnaround special',
      definition: 'A Turnaround Special is performed by  pressing left or right before initiating a special move. This will result in a special move facing the new direction, with no shift in momentum. See also: breverse, wavebounce',
      character: 'general'
   },
   {
      name: 'wavebounce',
      definition: 'A Wavebounce combines the effects of a B-Reverse and a Turnaround Special. If you move to the right, for example, and do a turnaround Shorthop Lucas PK Fire to the left, but immediately input to the right after inputting the special, you will end up \'bouncing\' back to the left, while shooting right. The inputs for this are jump to the right > left special > right. The timing for this is precise, and requires practice to perform reliably. See also: breverse, turnaroundspecial',
      character: 'general'
   },
   {
      name: 'dad',
      definition: 'Directional Airdodge. Press airdodge while pressing in a direction.',
      character: 'general'
   },
   {
      name: 'waveland',
      definition: 'A Waveland is where you airdodge down into a platform or the ground to land more quickly. The name is related to a wavedash, as both can end with you sliding on the ground.',
      character: 'general'
   },
   {
      name: 'jump cancel',
      aliases: ['jc'],
      definition: '[Smash 4] A Jump Cancel, or JC, is commonly used to refer to when you jump and then cancel that jump into something else before you leave the ground. During Jumpsquat (JS), you can input an Up Special, Up Smash, or Item Toss, and it will cancel your jump into that action. Some techs like JC item toss have, in previous games, caused you to slide while tossing. JC Usmash is how you do an Usmash OOS, and JC UpB is how you can do an UpB OOS, since you can jump straight out of shielding. See also: OOS, JS',
      character: 'general'
   },
   {
      name: 'jumpsquat',
      aliases: ['js'],
      definition: 'Jumpsquat, or JS, is the animation that you go into where you are essentially squatting before you leave the ground during a jump. When you input a jump, your character will squat for 3 frames (in ultimate). After these 3 frames you will leave the ground.',
      character: 'general'
   },
   {
      name: 'bkb',
      definition: 'Base Knockback, or BKB for short, is the baseline knockback for a move. BKB is generally the only form of knockback seen when the opponent is hit at 0%. High BKB means that the move can knock the opponent far even at a low percent, like Marth tippers or Ganon\'s Warlock Punch. Low BKB has very little starting knockback, like Shiek\'s Fair or Most characters\' Jab 1. See: kb, wbkb, kbg',
      character: 'general'
   },
   {
      name: 'kbg',
      definition: 'Knockback Growth, or KBG, is how much knockback strength grows as the opponent takes more and more damage. High KBG means that the move will knock opponents farther sooner like most smashes. Low KBG means that the move will kill later or has a more consistant knockback, like Shiek\'s Fair or Mario\'s Utilt pre-nerf. See also: bkb, wbkb, kb',
      character: 'general'
   },
   {
      name: 'di',
      definition: 'DI, short for Directional Influence, is a mechanic that allows you to slightly change your launch angle. This is performed by pushing the control stick perpendicular to your launch angle, and will shift it in the direction you push. In Smash 4, you could change your angle by about 9.7 degrees. DIing towards someone is usually referred to as "DI in" and DIing away from someone is usually referred to as "DI out". There are two major applications for DI- combo DI and survival DI\n\nKeep in mind there is a second mechanic you must use in conjunction with DI known as LSI. See also - Combo DI, Survival DI, LSI',
      character: 'general'
   },
   {
      name: 'combo di',
      definition: 'Combo DI allows you to escape combos by changing your launch angle in a way that you get hit farther from the opponent. For instance, when DK uses an aerial cargo up throw, you can DI it towards him. This will place you farther from him than you would normally be, making it harder for him to connect an up air. See also - DI, Survival DI, LSI',
      character: 'general'
   },
   {
      name: 'survival di',
      definition: 'Survival DI allows you to survive kill moves by changing your launch angle in a way that makes you take more time to reach the blast zones. For instance, against Mewtwo\'s up throw, you can DI away from him to survive longer. See also - DI, Combo DI, LSI',
      character: 'general'
   },
   {
      name: 'lsi',
      definition: 'LSI, short for Launch Speed Influence, is a mechanic that allows you to change the speed you are launched at. It only applies if the launch angle is between 65 and 295 degrees. The method to perform it is simple- hold up to fly faster, hold down to fly slower! However, its applications are much more complicated. This comes from the fact that you can use both DI and LSI at the same time. This matters because *DIing down is not good* in most situations. There\'s 2 reasons for this: 1) DIing down makes it harder to recover, because you have less time to drift and 2) it makes you reach the blast zone quicker.\n\nTo avoid this problem, you must find the angle that takes advantage of both good DI and good LSI. On more horizontal moves, this is usually simply in, which only takes advantage of DI. On diagonal launch angles, however, this is usually down and in. The down part is for LSI, the in part is for DI. Breaking it down further, the down input slows your momentum and the in part makes you take longer to reach the blast zone.\n\nThere is another mechanic related to LSI that makes certain moves kill at much later percents- LSI is applied after DI. This means if a move launches you outside of the LSI range originally (i.e. at 70 degrees) and you DI it into the LSI range, you can also begin to LSI it. For example, Charizard\'s Smash 4 UThrow had an angle of 70 degrees and you could hold down and away to remove most of its kill potential. Not only is this angle perfect to bring it into LSI range, but it also DIs the *vertical* half of it, by DIing away from Charizard as well.\n\nFinally, if you played Melee, you will know the optimal survival DI for diagonal or horizontal moves was up. In SSBU, **this will kill you. Do not do it.** While this angle is the correct *DI*, it is the incorrect *LSI*. In this situation, LSI takes more effect, and you die sooner. Make sure whenever you DI something, your DI "agrees" with your LSI. See also - DI',
      character: 'general'
   },
   {
      name: 'bnb',
      definition: 'Short for Bread and Butter, which is a character\'s main damage racking combos.',
      character: 'general'
   },
   {
      name: 'cqc',
      definition: 'Short for close quarters combat, which is the game when two players are close to each other. Some characters are good at CQC, some are not.',
      character: 'general'
   },
   {
      name: 'matchup',
      aliases: ['mu'],
      definition: 'The way in which two character\'s attributes change the game when fighting each other, and who has the advantage in such a match. For example, Pikachu is small and fast, allowing him to avoid many of Isabelle\'s tools. This gives him an advantage in the Pika-Isa matchup.\n\nMany players will give a ranking to a matchup, denoting how much of an advantage there are. One method is a ratio, where 50:50 is even, 60:40 is an advantage, and 100:0 would be unloseable. Another method is + or - some number, where +0 is even +1 is an advantage, etc.',
      character: 'general'
   },
   {
      name: 'crew battle',
      aliases: ['cb'],
      definition: 'A crew battle is where two groups of players play against each other in sequence. The winner of a match carries their remaining stocks over against the next opponent. Last team with stocks left wins.',
      character: 'general'
   },
   {
      name: 'dashback',
      definition: 'When you are facing one way, and then input a dash in the other direction, it is called a dashback.',
      character: 'general'
   },
   {
      name: 'attack cancel',
      aliases: ['atkc'],
      definition: 'An attack cancel is a simple mechanic with many applications. It utilizes the ability to jump out of the startup of tilts and dash attacks, cancelling them. https://youtu.be/v1kjQtMaPkE',
      character: 'general'
   },
   {
      name: 'attack cancel',
      definition: 'Attack Cancel. You can jump out of the startup of tilts and dash attacks which can be useful. https://youtu.be/v1kjQtMaPkE',
      character: 'general'
   },
   {
      name: 'sd',
      definition: 'An SD is a __S__elf __D__estruct, where a player accidentally or intentionally leads themselves into the blast zone. When done intentionally, it is usually with intention to end the game early, either due to an incorrect stage/character pick, button testing, or because the player is simply upset.',
      character: 'general'
   },
   {
      name: 'edge guard',
      definition: 'An Edge Guard is the act of preventing a player from returning to the stage after knocking them off of it, usually by using an attack to knock them away/prevent them getting closer to the stage.',
      character: 'general'
   },
   {
      name: 'ledge guard',
      definition: 'A Ledge Guard is done by reacting and acting against someone\'s ledge options in order to deal more damage to them, knock them off of the stage or outright KO them.',
      character: 'general'
   },
   {
      name: 'jv',
      definition: 'A JV, coined by and named after the Smash player \'JV3x3\' is where you defeat an opponent with 0% on your currennt stock. JVs are followed up usually by a number, being how many stocks you have remaining + the 0%, so if you have 3 stocks remaining and 0% when you defeat an opponent, it would be considered a JV4.',
      character: 'general'
   },
   {
      name: 'matchup',
      definition: 'Matchup, the discussion of and understanding how well one character performs against another character.',
      character: 'general'
   },
   {
      name: 'hitbox',
      definition: 'Hitboxes are a structure used in Smash to cause moves to deal damage to an opponent when it comes into contact with their hurtbox (see: hurtbox). Hitboxes cannot be seen normally without the use of mods or external software.',
      character: 'general'
   },
   {
      name: 'hurtbox',
      definition: 'Hurtboxes are a structure used in Smash that, when comes in contact with a hitbox (see: hitbox), will cause whoever the hurtbox is attached to to take damage. Hurtboxes cannot be seen normally without the use of mods of external software.',
      character: 'general'
   },
   {
      name: 'ledge cancel',
      definition: 'A Ledge Cancel is performed by cancelling an aerial/special or its endlag by using said aerial/special near a ledge and then sliding off of it. These can be used to open up more movement options, making punishes more difficult for opponents if the move misses and possibly opening up combo potential.',
      character: 'general'
   },
   {
      name: 'tech',
      definition: 'Teching, officially referred to as a \'fall break\' in Smash Ultimate, is performed by pressing the shield button or air-dodging into the ground, a wall or a ceiling before hitting the ground while in the tumble animation, cancelling all knockback and is accompanied with temporary invincibility during the tech animation.\n\nA standard tech is performed by teching into the ground. Teching into the ground while holding down lets you tech in place, and holding forwards or backwards lets you perform a tech roll. Tech rolls vary in length and speed between characters, and some may be faster/slower or cover more/less distance than a regular roll.\n\nTeching into a wall is known as a wall tech. Teching into a wall normally will cancel momentum and cause you to drop down, holding away after teching allows you to perform a tech wall jump, and holding in will allow you to cling to the wall immediately after teching (character dependant).\n\nLastly is ceiling techs, which allow you cancel momentum off of a ceiling. There is only one variation of this tech, which causes you to drop down from the ceiling immediately after teching, however they are still extremely important to prevent being stage-spiked!',
      character: 'general'
   },
   {
      name: 'spike',
      definition: 'A spike is a move in Smash that launches an opponent downwards. Spikes are unable to be cancelled by a jump or up-b like meteors (see: meteor) and, as a unique feature to Smash Ultimate, opponents are unable to tech spikes if they are hit while grounded, allowing for possible true follow-ups.',
      character: 'general'
   },
   {
      name: 'meteor',
      definition: 'A meteor is a move in Smash that launches an opponent downwards. Meteors are possible to be cancelled by a jump up-b unlike spikes (see: spike) and are exclusive to Melee and Brawl:\n__Melee__\nIn Melee, meteor cancelling is possible to perform 8 frames after the hitlag of a move has ended. In order however to cancel the meteor twice or more in a row while recovering, you must have at least allowed the control stick to return to neutral position, or else the jump/up-b will not come out.\n\n__Brawl__\nBrawl\'s hitlag is unique and slightly more in-depth than Melee\'s. Meteor cancels require the same waiting time universally across all moves, being (for majority of characters) 25 frames. If a jump or up-b is input however just before or during the hitlag of a meteor however, a 40 frame penalty is added.\n\nSome characters in Brawl also have a unique number of frames before they\'re able to cancel the meteor, including:\n**Charizard** with 30 frames.\n**Olimar**, **Ivysaur** and **Zero Suit Samus** with 15 frames.\n**Meta Knight** and **Pit** with 32 frames.\n**Wolf** with 60 frames.\n**Yoshi** with 20 frames.',
      character: 'general'
   },
   {
      name: 'hitstun',
      definition: 'Hitstun is a period of time after being hit/launched by a move you are unable to act. Hitstun is dependant on a move\'s knockback, and is essentially for combos as it allows for a move to have a true follow up if the move after is able to hit the opponent while they\'re still in hitstun.\nNot to be confused with: hitlag',
      character: 'general'
   },
   {
      name: 'hitlag',
      definition: 'Hitlag (also known as a freeze frame) is a period of time after being hit that you, an opponent or both freeze in place. Hitlag can vary between moves or part of certain moves, such as electricity which causes 1.5x what the hitlag would normally be. For more info, read here: <https://www.ssbwiki.com/Freeze_frame>.\nNot to be confused with: hitstun',
      character: 'general'
   },
   {
      name: 'blast zone',
      definition: "The blast zone is the area of the stage where you will be immediately KO'd if you touch it. It always surrounds the entire stage, off (but not far from) the visible screen. Different stages have differently sized blast zones, affecting a character's kill percents. This is most notable in stages with higher/lower top blast zones, aka ceilings. Other stage elements which can instantly KO you such as lava are not considered blast zones.",
      character: 'general'
   },
   {
      name: 'rcg',
      definition: "A Roll Cancel Grab (RCG) is a technique that allows characters to perform an extended version of their dash grab. It is performed by buffering a roll from an initial dash, and then cancelling the first few frames of the roll with an attack or grab input. While on certain characters the range gained is minimal, other characters burst forward a large distance, and can even travel through opponents. This can be used in a variation of this technique- the Roll Cancel Pivot Grab. It is the same input as a normal RCG, but after the grab, hold back to perform a pivot grab. Both of these are viable burst options for certain characters, such as Pichu.",
      character: 'general'
   },
   {
      name:  'footstool',
      aliases: ['fs', 'phantom footstool', 'phantom fs'],
      definition: 'When you input jump on top of another character you can footstool off of them. Footstooling a character in the air will put them into tumble (which they can tech), if the opponent is in the middle of an action you can still footstool them, but it will not put the opponent into a special animation/tumble like normal, this is commonly referred to as a Phantom Footstool. Footstooling also grants a brief period of invincibility.',
      character: 'general'
   },

   // isabelle
   {
      name: 'glyroid',
      definition: 'To Glyroid, first plant a lloid. Then, upon dashing, press down B and then hold in the direction of the dash, it will make Isabelle slide a considerable distance while doing the animation of manually triggering the mine. You cannot B-Reverse this. Found by Vinylic.',
      character: 'isabelle'
   },
   {
      name: 'eviction notice',
      definition: '(Thread): https://twitter.com/Spexx_/status/1072250448537677824',
      character: 'isabelle'
   },
   {
      name: 'wobbelle',
      aliases: ['isa wobble', 'soap mouthwasher'],
      definition: 'Methods:\n- Tap A, then move the control stick forward to buffer the walk. You can go completely forward as long as it\'s early enough. After you walk for 2-4 frames, release forward and repeat.\n- There is a sweet spot area of the control stick, near a quarter-way out, that will make you walk but still jab when you press A. It\'s easier to find using a diagonal. If you can find that sweet spot, then hold it there and tap A repeatedly, allowing 2-4 frames of walk after every jab.\n\nVideo - https://youtu.be/S2grkRvHHqI',
      character: 'isabelle'
   },

   // young link
   {
      name: 'c4',
      definition: 'C4 is placing a bomb in a way that it lies on the ground without exploding. You can do this by performing either a forward toss or back toss. You can also perform it by z-dropping the bomb right after jumping or right before landing.',
      character: 'young link'
   },
   {
      name: 'gsa',
      definition: 'A gSA is a Grounded Spin Attack. When grounded, Spin Attack is a multi-hit move that acts as a combo starter. Its main followup is Uair, which can be a 50/50 within a percent range.',
      character: 'young link'
   },
   {
      name: 'asa',
      definition: 'An aSA is an Aerial Spin Attack. When aerial, Spin Attack is a multi-hit move that acts as a KO move. It can kill off the side, and its main setup is off of a Bomb.',
      character: 'young link'
   },
   {
      name: 'soft toss',
      definition: 'A soft toss is where you toss a bomb that does not explode upon hitting the ground, but rather does a little bounce and then sits there, as an item, until it explodes. This is performed by simply tossing a bomb with no directional input in front of you. To soft toss behind you, you can press tilt stick behind you, if you have the cstick set to tilt. This can be useful for a number of reasons. Our relatively short bomb timer can remain as a threat to players who are not actively keeping up with its explosion timer. In addition, if you space yourself perfectly, you can soft toss a bomb such that it bounces right off the edge of the stage, and then falls almost straight down, which can sometimes stage spike.',
      character: 'young link'
   },
   {
      name: 'rr',
      definition: 'The hitbox on Young Link\'s Boomerang when it starts to return to him. The Returning Boomerang hitbox has set knockback and is an excellent pressure and combo tool. Applies to all Links.',
      character: 'young link'
   },
   
   // pichu
   {
      name: 'lightning loops',
      definition: 'https://youtu.be/xJyufyRb2F4',
      character: 'pichu'
   },

   // ice climbers
   {
      name: 'uaft',
      definition: 'Up angled forward tilt.',
      character: 'ice climbers'
   },
   {
      name: 'nut',
      definition: 'dthrow > (roll) > [uaft/nair] > (sideb) > grab > [fthrow] > (fair).\n*Note: (Squall) can be escaped with SDI, making this combo not true.\n<https://youtu.be/KmbBGbuMTZI?t=27>* \n<https://twitter.com/v23God/status/1096525627094650880>',
      character: 'ice climbers'
   },
   {
      name: 'desync',
      definition: 'Any situation or setup that involves having nana and popo acting independantly of one another, usually though buffering an input for one while the other is busy.',
      character: 'ice climbers'
   },
   {
      name: 'cheerless',
      definition: 'If you get a synced grab with ICs, when you input a throw Nana will do a taunt (called cheer). This means she cannot act while you are throwing. Certain setups can allow you to get a cheerless throw, where Nana will be able to buffer an option as you throw, before she cheers. An example of this is the yeet.<https://youtu.be/377qQF66n9M>',
      character: 'ice climbers'
   },
   {
      name: 'synced',
      definition: 'When nana and popo are synchronized, and are acting at the same time doing the same thing.',
      character: 'ice climbers'
   },
   {
      name: 'semisync',
      definition: 'A state of being where nana will sometimes be under popo\'s control, and sometimes not. \n<https://gfycat.com/MellowTerribleFawn>',
      character: 'ice climbers'
   },
   {
      name: 'belay',
      definition: 'ICs up special.',
      character: 'ice climbers'
   },
   {
      name: 'blizz',
      definition: 'Blizzard - ICs down special.',
      character: 'ice climbers'
   },
   {
      name: 'squall',
      definition: 'Squall Hammer - ICs side special.',
      character: 'ice climbers'
   },
   {
      name: 'ib',
      definition: 'Ice Block/Ice Shot - ICs neutral special.',
      character: 'ice climbers'
   },
   {
      name: 'tilt turn',
      aliases: ['tilt turn desync'],
      definition: 'One of the hardest desyncs ICs can do. Allows you to very quickly desync from standing, and can be applied to (blizzard) [wavedash]\n<https://twitter.com/v23God/status/1114949522256539648>',
      character: 'ice climbers'
   },
   {
      name: 'blizzard wavedash',
      aliases: ['blizzdash'],
      definition: '<https://twitter.com/madmonk12345/status/1089084293241061378>',
      character: 'ice climbers'
   },
   {
      name: 'jab interrupt',
      aliases: ['jab desync'],
      definition: 'You can desync off of jab on hit/shield (including on things like Pikmin/hydrant) if you buffer jab out of any state where you can not jab (immediately out of dash, dropping shield, after a move etc etc), then input something for Nana in the next 3 frames\n https://gfycat.com/equatorialsentimentalbooby',
      character: 'ice climbers'
   },
   {
      name: 'soymilk',
      aliases: ['skid turn', 'skid turn desync'],
      definition: 'Soymilk desync aka "skid turn": Dash in one direction until you enter run, then let go of the control stick to enter skid, then move the control stick in the opposite direction so Popo enters turn, and quickly interrupt the turning animation with any grounded move. If done correctly, Popo will perform the move and Nana will perform a short dash forward.\n\nTechnical details: Just like with other run turn desynchs, you have to input the move before Nana goes into turn so that she interprets the turn input as a dash forward. Out of skid, dash interrupts as early as frame 8. So you have to skid, turn, and then input a move at least 8 frames after the original skid, but less than 6 frames after the turn',
      character: 'ice climbers'
   },
   {
      name: 'gimfinite',
      definition: '<https://youtu.be/BCovjXUecDw>',
      character: 'ice climbers'
   },
   {
      name: 'ruri combo',
      definition: 'A solid conversion off of synced grab at mid percents. <https://twitter.com/ruripikaics/status/1105443229095190529>',
      character: 'ice climbers'
   },
   {
      name: 'chars doc',
      definition: 'Doc that lists what specific things work on which characters, such as utilt (footstool squall), (utilt) footstool as an infinite, and the gimfinite. Work in progress, contact techy#5973 for editing access/corrections. <https://docs.google.com/spreadsheets/d/1WI_xGi1OQ3b0bhrue42OqjrlufqYJQXM2m0FNil6-hw/edit#gid=0>',
      character: 'ice climbers'
   },
   {
      name: 'squall desync',
      definition: 'At the end of squall, you can buffer an option just for nana, and then buffer something for popo, so that they perform two different things. Note that like with throw desync, you must buffer something for Popo as well.\nBasics: <https://twitter.com/v23God/status/1102950879672627207>\nTechnical Details: <https://www.youtube.com/watch?v=xVuxZxmc358>',
      character: 'ice climbers'
   },
   {
      name: 'nanatrump',
      definition: 'While trumping is only mediocre for a lot of characters in this game, since the opponent can DI in or away from the stage and limit your options for directly punishing it, Ice Climbers has what is likely the best trump punishes in the game. The answer is to make nana trump the opponent, while immdiately hitting ledge with popo fsmash. This is called nanatrump.\nThere are two main ways to do this - \n1. Run towards ledge and pivot grab towards center stage right before you reach ledge. While popo is in the endlag from the pivot grab, you can trump with nana.\n2. You can jump towards ledge, and if you space your landing just right, nana will grab ledge but popo will land on stage.\n\nAs nana trumps the opponent, you must immediately fsmash the ledge with popo. If done properly, they will get hit by the fsmash immediately after breaking contact with the ledge, which guarantees the fsmash.\nExample: <https://twitter.com/bigd_ssb/status/1086753626670809088>',
      character: 'ice climbers'
   },
   {
      name: 'teeter cheerless',
      definition:   'If you can get nana to teeter on the edge of a platform or the main stage, you can guarantee a cheerless throw from it. Nana will not cheer if she is teetering when you throw someone. This can be setup\n1. in the same way that nanatrump is setup with whiff grab\n2. with a dash towards ledge\n3. airdodging onto a platform with the right timing\nExamples-<https://gfycat.com/DearElaborateAlaskanmalamute>\n<https://youtu.be/Yp69Y3gjSMk>',
      character: 'ice climbers'
   },
   {
      name: 'landing lag desync',
      aliases: ['bair uair', 'uair uair', 'double uair', 'll desync'],
      definition: 'If you do a short hop buffered bair or uair, and then buffer an uair right before landing, Nana\'s uair will autocancel, and you can input something for nana right before you land, which popo will ignore.\n<https://www.youtube.com/watch?v=79BBYmOR78I>',
      character: 'ice climbers'
   },
   {
      name: 'ics megaguide',
      aliases: ['megaguide', 'mentor guide'],
      definition: 'https://docs.google.com/document/d/1fs1J6xsBlsRGqCxJsfyANRR8W8ZA87oZ8kS9ppGeNi4/edit?usp=sharing',
      character: 'ice climbers'
   },
   {
      name: 'izaw guide',
      definition: 'A beginners intro to a few useful ICs things. <https://www.youtube.com/watch?v=Y2uVdqAVoUQ>',
      character: 'ice climbers'
   },
   {
      name: 'footstool squall',
      aliases: ['fs squall'],
      definition: 'If you get a popo solo utilt, you can footstool with nana and immediately input squall with nana, which will drag the opponent down potentially into a grab. <https://youtu.be/gnKpZjXZA40>',
      character: 'ice climbers'
   },
   {
      name: 'rollback desync',
      definition: 'You can roll while also launching nana forward and squalling. technical details are in the video description: <https://youtu.be/lA6l1H_DcMQ> \n https://gfycat.com/oblongfriendlycrow',
      character: 'ice climbers'
   },
   {
      name: 'utilt footstool',
      aliases: ['utilt fs', 'utilt fs squall', 'utilt footstool squall'],
      definition: 'Desynced utilt can lead into a footstool with the other climber. [utilt] (footstool squall) in particular is quite popular as a conversion that can lead into a grab. \nhttps://gfycat.com/harmoniousfreshduckbillcat \n(utilt) [footstool airdodge down] or [utilt] (footstool airdodge down) is a semi useful combo, which is an infinite on Puff, Kirby and GnW, but otherwise can be teched and therefore is not super reliable. \n https://gfycat.com/harmoniousfreshduckbillcat',
      character: 'ice climbers'
   },
   {
      name: 'notation',
      definition: '__**Ice Climbers combo notation:**__\n**Fair** - this is a synced Fair, performed by both climbers\n**(Fair)** - this is a desynced Fair, performed by Nana (secondary climber) only\n**[Fair]** - this is a desynced Fair, performed by Popo [primary climber] only\n**DThrow** - this is a synced, cheered DThrow\n**[DThrow]** - this is a desynced, cheerless DThrow\nUsing arrows between components (DThrow > Uair) is helpful but not necessary. Use them to convey a sense of timing, where arrows represent inputs that are not performed almost simultaneously.',
      character: 'ice climbers'
   },
   {
      name: 'throw desync',
      aliases: ['dthrow desync'],
      definition: 'When you do a synced, cheered throw, you can buffer an option for Nana that Popo will not read in a 6 frame window, before Popo is actionable. This means that you can throw with Popo, and have Nana buffer just about anything, such as jump, blizzard, and roll (which is that is used to perform the Nut combo).\nNote that you must buffer something for Popo (which can be anything, even just movement) for Nana to register the desynced input.',
      character: 'ice climbers'
   },
   {
      name: 'blizz confirms',
      definition: 'Kill Confirms out of a synced blizzard freeze: <https://twitter.com/techyCoder81/status/1119463888410562560>',
       character: 'ice climbers'
   },
   {
      name: 'cheer cancel',
      aliases: ['pummel buffer desync'],
      definition: 'You can buffer certain options for nana as popo\'s grab is coming out but before it actually lands. IMPORTANT NOTE: This is NOT Cheerless, and does not directly involve cheerless, though it is one method (amongst many) that can lead into Cheerless.\nFrame data: The window for grab (spotdodge) is 5 frames from standing grab (-3 to +1, with grab being f0), and  6 frames from grab during initial dash (-2 to +3). You can also Roll with the same timing. This window works because you can input down before the grab, and popo\'s grab input will count as a shield input for Nana. And of course, down + shield == spotdodge.\n\nThe window for grab (AB smash) is 2 frames from standing grab (0 to +1, with grab being f0), and 3 frames from grab during initial dash (+1 to +3). This is the generalized window for things that aren\'t roll or spotdodge. For example, you can grab (jump) , or grab (taunt) with this same timing.\n\nUnfortunately, while you CAN do tilts and specials while grabbing they are all a 1 frame window from a dash grab, and are not possible from a standing grab. In the future I may do a more in depth video on the specific reasons for why that is the case, but for now just don\'t worry about that at all. Spotdodge is the most common choice for CC option. <https://www.youtube.com/watch?v=m-NKjph9fFI&feature=youtu.be>',
      character: 'ice climbers'
   },
   {
      name: 'nair interrupt',
      definition: 'If you hit someone with the first 2 frames of nair in a sh, you can buffer a squall for nana instead of the nair. <https://www.youtube.com/watch?v=MTe5xxQPvEY>',
      character: 'ice climbers'
   },
   {
      name: 'blizzwall',
      definition: 'Blizzwall is desynced blizzards in neutral. specifically, its when you alternate nana/popo blizzard to form a soft of wall of blizzard forwards, sometimes short hopping, sometimes moving backward or forward. When performed correctly, there is no gap in the blizzard projectiles, since each one covers the endlag of the one that came before it. The counterplay to this is jumping, which can be uaired instead. Many characters have specific moves that can hit you through blizzwall, so keep these in mind.',
      character: 'ice climbers'
   },
   {
      name: 'turn buffer desync',
      aliases: ['turn buffer'],
      definition: 'A fast desync done from standing or walking. Turn without dashing, then buffer another turn without dashing with popo that nana will do in 6 frames, then after 6 or more frames have passed, input a dash in the original direction you turned followed by an immediate attack you can do from walk but not run. Nana’s turning animation during this cannot be interrupted by a dash in that direction, so she dashes 4 frames late, creating a window for a nana only input.\nVideo: <https://twitter.com/madmonk12345/status/1144807399854751744?s=21>\nStick movement guide: <https://twitter.com/madmonk12345/status/1140854288517718017?s=21>',
      character: 'ice climbers'
   },   
   {
      name: 'shieldstun desync',
      definition: 'Often when an opponent hits our shield Nana and Popo will end up less or more than 6 frames apart, meaning we can desync out of the shieldstun.',
      character: 'ice climbers'
   },
   {
      name: 'button storage desyncs',
      aliases: ['grab storage', 'special storage', 'shield storage', 'taunt storage', 'jump storage', 'button storage', 'the greatest thing to ever happen to ics'],
      definition: 'By getting Nana to ignore an input while we respawn (which can be done either by whiffing a grab and holding it immediately after, holding it as we die, or after a failed reconnect buffer), we can observe various anomalies.\nThis is most usefully applied with Special Storage (which requires Smash Stick) or Grab Storage (which can be used with any control scheme), however it also has known effects with Shield, Jump and Taunt.\nVideo Guide: <https://youtu.be/6oret9hMXek>\nFor a slightly more detailed text guide on Grab Storage and Special Storage, see <https://docs.google.com/document/d/1Ftem9sr7ULRqfC0fHwTei1W1vjCf73lz6V9tXfofRwU/edit>',
      character: 'ice climbers'
   },
   {
      name: 'run turn desync',
      aliases: ['run turn'],
      definition: 'During Run (not dash), if you turn (without skidding), then in frames 1-5 input roll/spotdodge and in the same window, but on or after the frame you input shield, you input a grounded option for Popo, you can desync that shield option+Popo option. For example, you can do [rar shorthop] (roll back) or [blizz] (spotdodge), or much more.\nNote that you can also (shield) with it, however the window is much tighter. There is also a potential polling issue in theory, where the game may read the left stick as being neutral for 1 frame, which will also tighten the window, and make (shield) impossible (though this outcome is quite unlikely)',
      character: 'ice climbers'
   },
   {
      name: 'belay desync',
      definition: 'When you belay to ledge, both ICs will be actionable on the same frame, so you can desync by inputting something for Nana within 6 frames before Popo is actionable, and then buffering something for Popo (this is necessary) as well.\n While not the same desync, you can also attempt for a reconnect buffer by holding an input as you belay, giving you a chance to buffer that input for Nana only. This can be applied in more guaranteed, or more flexible ways by applying Grab Storage.',
      character: 'ice climbers'
   },
   {
      name: 'reconnect buffer',
      definition: 'Whenever Nana comes back into Popo\'s range, if you\'re holding an input there\'s a chance that Nana will read that input immediately, thereby letting you get things like (blizz) as Nana reconnects, while Popo remains fully actionable. While it is known to not be truly random, the conditions for whether she reads the input or not are unknown.\nIf the reconnect buffer fails, this notably gives you storage for that input, making attempted reconnect buffers for special and attack particularly noteworthy.',
      character: 'ice climbers'
   },
   {
      name: 'run state storage',
      definition: 'When forward is held on the control stick, nana and popo maintain their current state of running or walking.\n\nRun state storage is where you get popo to walk and nana to run. In this state, releasing the stick cause only nana to enter skid for 12 frames during which she cannot dash backwards or shield. This allows you to dash backwards or shield with popo and immediately do a nana first desync.\n\nThis state can be achieved from any previous desync.\n\nIf only popo can act, you can quickly mash forward twice quickly and then continue to hold forward 6-12 frames before nana can act to cause popo to do a dashwalk and nana to dash which converts into run state storage.\n\nWhen nana can act, you can simply hold forward more than 6 frames before popo can act. This causes nana to dash and popo to walk.\n\nExamples:\n<https://twitter.com/madmonk12345/status/1188207819780050944?s=21>\n<https://twitter.com/madmonk12345/status/1195622276680433664?s=21>',
      character: 'ice climbers'
   },
   {
      name: 'landing tilt desync',
      definition: 'Often when you land (even if you just empty hop normally) Nana will land less than 6 frames after Popo due to the effects of Popoforce. This allows us to input grounded attacks right before Popo lands so he performs an autocancelled aerial (can\'t be done with Dair for obvious reasons) while Nana receives the input while grounded. Functionally this results in Popo doing an empty, lagless landing, while Nana lands with a tilt/jab/smash attack. This can be used to get an immediate (smash attack charge), or even an (ftilt) which can combo into grab at all percents.',
      character: 'ice climbers'
   },
   {
      name: 'murasat combo',
      aliases: ['murasat', 'mura combo', 'mura'],
      definition: 'dthrow (shield) [uair] (fair), popular low percent throw conversion commonly used for a regrab.\nDuring dthrow, hold shield+jump+up and time an attack input during the desync window for dthrow, this should result in (shield) [uair] which can be followed up with (fair) inputted normally. \n https://gfycat.com/barepopularkinkajou \n<https://www.youtube.com/watch?v=6WR5V7FGEmg&t=345s>',
      character: 'ice climbers'
   },
   {
      name: 'fair footstool',
      aliases: ['dthrow fair footstool', 'fair fs', 'dthrow fair footstool'],
      definition: 'Off of a cheerless dthrow, you can confirm into (fair) [footstool].\n https://gfycat.com/naughtytalkativedove',
      character: 'ice climbers'
   },
   {
      name: 'dthrow footstool',
      aliases: ['dthrow fs'],
      definition: 'Off of a cheerless dthrow, you can confirm into (footstool), which can be used for a variety of confirms if they miss the tech. \n https://gfycat.com/lightheartedbigaustraliansilkyterrier',
      character: 'ice climbers'
   },
   {
      name: 'backdash cheerless',
      definition: 'You can get a cheerless grab off of backdash. \n https://gfycat.com/honesttidyermine',
      character: 'ice climbers'
   },
   // wii fit trainer
   {
      name: 'hc',
      definition: 'Header Cancel. This can be performed by using Header and then pressing your shield/airdodge button. This will put you in a temporary helpless state, but will allow you to hit the ball in many different directions, as seen in <#536384936563965967>.',
      character: 'wii fit trainer'
   },
   {
      name: 'db',
      definition: 'Deep Breathing',
      character: 'wii fit trainer'
   },
   {
      name: 'hoop kick',
      definition: 'Performed offstage. Grab the ledge after hitting an enemy with Super Hoop, and then quickly let go of the ledge and use Back Air. Command: .hoopkick',
      character: 'wii fit trainer'
   },
   {
      name: 'dbc',
      definition: 'Deep Breathing Cancel. You can cancel Deep Breathing by pressing your shield/airdodge button. This is most effectively performed on the ground, because you can then jump out of shield, while in the air, you will be helpless after your airdodge.',
      character: 'wii fit trainer'
   },
   {
      name: 'header getup',
      definition: 'A tech that is performed while hanging on the ledge.  Let go of the ledge, jump, and then use Header. If performed correctly, Wii Fit Trainer will progressively go up in height, until they are on stage. You can follow this up with other moves for shield pressure / shield breaking, or as a combo starter. For a visual, please use the command .headergetup',
      character: 'wii fit trainer'
   },
   {
      name: 'header shielding',
      definition: 'Use a Header Cancel, but do not hit the ball after using it. Instead, simply use shield. This tech will cause an opponent who attacks you to be in hitlag for an extended duration, making it much easier for us to punish. For more detailed information, please use the command .headershielding',
      character: 'wii fit trainer'
   },
   {
      name: 'sun blocking',
      definition: 'This tech involves charging Sun Salutation. Simply charge your sun and it will block some projectiles. The windbox on the charge can also block an edgeguard attempt. You can find a list of moves that this will block by using the command .sunblocking',
      character: 'wii fit trainer'
   },
   {
      name: 'headwhiffing',
      definition: 'This can only occur after coming out of strong hitstun, typically a smash attack. Once you are getting out of hitstun, use Header. Wii Fit Trainer will miss the ball, and you will be able to hit it with another move, typically dair. This is especially useful for reverse edgeguarding. For more information, use the command .headwhiff',
      character: 'wii fit trainer'
   }
]
