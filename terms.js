module.exports = [
   // general
   {
      name:  'run cancel',
      definition: 'A Run Cancel allows you to use any move out of a run. It is performed by returning the Control Stick to the neutral (default) position, then performing any move.'
   },
   {
      name: 'shorthop',
      aliases: ['short hop', 'sh'],
      definition: 'A Short Hop, or a SH, is performed in 3 ways in SSBU:\n\n1) Pressing the jump button, then releasing it before becoming airborne\nPressing two jump buttons simultaneously\n3) Buffering an aerial during the jump startup\n\nA SH is a shorter version of a normal jump, allowing you to hit grounded opponents and land quicker.\n\nAfter performing a SH in SSBU, your aerial damage will be reduced to 0.85x its original damage. This applies until you jump, touch the ground, or get hit. This does not apply to specials.'
   },
   {
      name: 'shff',
      definition: 'A Short Hop Fast Fall, or SHFF for short, is the shortest possible jump. By performing a shorthop then fastfalling as soon as possible, you can drastically decrease the time spent in the air. Certain aerials can even autocancel during a SHFF, making them extremely quick to use depending on character. You can also delay the aerial until performing the fastfall to have it come out as you land. In addition, an aerial doesn\'t even need to be performed at all during a SHFF, making for a great fakeout, especially with fastfallers.'
   },
   {
      name: 'fullhop',
      aliases: ['fh'],
      definition: 'A Full Hop, or a FH, is the normal version of a jump. It is performed when you do not buffer an aerial on your jump startup or you hold the jump button throughout your jump startup. Using a FH allows you to hit opponents on high platforms, hit opponents far above you, followup from certain moves, go above enemy attacks, etc.'
   },
   {
      name: 'faf',
      aliases: ['first actionable frame'],
      definition: 'FAF is the First Actionable Frame. It\'s basically the first frame you can perform an action during another one. For instance, if a move has a FAF of 24, the first frame you can act during it is frame 24, and the last frame you cannot act is frame 23.'
   },
   {
      name: 'jmu',
      aliases: ['joint matchup'],
      definition: 'A JMU is a __J__oint __M__atch__U__p. During one, 2 Smashcords come together to discuss the MU between their characters. It\'s a great opportunity to learn! Each Smashcord does it differently - some structure theirs on a schedule and some don\'t, some end theirs with a crew battle and some don\'t, etc.'
   },
   {
      name: 'oos',
      aliases: ['out of shield'],
      definition: 'OoS refers to your Out of Shield options, or the things you can do while shielding. These are, for any character:\n\nGrab, Jump, Up Smash, Up Special, any move after a jump, and any move after a shield drop.\n\nIn games prior to Ultimate, Up Smash/Special needs to be jump cancelled.'
   },
   {
      name: 'reverse aerial rush',
      aliases: ['rar'],
      definition: 'A reverse aerial rush, or RAR, allows a character to jump backwards out of a dash. This is performed pushing back while dashing/running, then jump. Many characters can use this to approach with a back aerial (Mario, Ivysaur, etc), or use the startup of an up aerial that starts behind them (Falco, Pichu, etc).'
   },
   {
      name: 'rgr',
      aliases: ['skid cancel'],
      definition: 'RGR, also known as a Skid Cancel, stands for Reverse Grounded Rush. It\'s essentially the grounded version of RAR. Due to SSBU\'s new dash mechanics, you can cancel a skid with any move. In turn, you can reverse your direction before any move during a dash.'
   },
   {
      name: 'frame',
      definition: 'A frame is the smallest unit of time in a video game. In every Smash game, there are 60 frames per second, and the speed of moves is measured in frames. For instance, Little Mac\'s Jab is Frame 1, meaning it has a hitbox instantly. His FSmash is Frame 14, meaning the hitbox takes about a quarter of a second to come out. The speed of a move is often abbreviated to Fx, where x is the frame the move comes out on. For example, Little Mac\'s Jab would be F1 and his FSmash would be F14.'
   },
   {
      name: 'runbrake',
      definition: 'RunBrake is the technical name for a skid. This occurs when you enter Run, then return the control stick to neutral. Not to be confused with a turnaround skid, also known as a pivot or run turnaround.'
   },
   {
      name: 'anti-air',
      aliases: ['aa',],
      definition: 'An AA is an anti-air, and it\'s basically a move that counters an aerial approach. It is typically disjointed and/or has a high hitbox. For example, Mario\'s USmash is a good anti-air, as his head is intangible during the attack.'
   },
   {
      name: 'rage',
      definition: 'Rage is a mechanic that increases the knockback dealt slightly by a fighter as their percent increases. It starts taking effect at 35% and gradually became stronger, maxing at 150%. It does not affect moves with FKB (fixed knockback). See also: fkb'
   },
   {
      name: 'sdi',
      aliases: ['hitstun shuffling'],
      definition: 'SDI is short for Smash Directional-Influence (oficially called hitstun shuffling). It is NOT DI (Directional Influence) and is a completely different mechanic. It is performed by pressing a direction repeatedly while in hitlag (also known as freeze frames). Each time you press a direction, you will move slightly in that direction before knockback is applied. This allows you to escape multihit moves, such as rapid jabs.\n\nA more effective method on the Gamecube Controller is to push the control stick to the notch of the direction you wanted to SDI in, then move it to the 2 notches beside it. For instance if you wanted to SDI up, you would do an input like this:\n⬆ ↖ ⬆ ↗ ⬆ \nThis is less effective in Ultimate than previous games due to changes to SDI, though it can still be useful.'
   },
   {
      name: 'ledge grab limit',
      definition: 'https://www.youtube.com/watch?v=ZG-msKOIR9g'
   },
   {
      name: 'shac',
      definition: 'ShortHop Autocancel. If a move can SHAC, it means it will autocancel in a shorthop. This is generally a good property for a move to have.'
   },
   {
      name: 'kb',
      aliases: ['knockback'],
      definition: 'Knockback, abbreviated to KB, is the distance you travel when launched by a particular move. Two parts of KB are Base Knockback (BKB) and Knockback Growth (KBG). BKB is the base knockback amount that is always applied at any percent. KBG is a modifier that affects how far you are sent by an attack at higher percents.'
   },
   {
      name: 'bkb',
      definition: 'Base Knockback, or BKB for short, is the baseline knockback for a move. BKB is generally the only form of knockback seen when the opponent is hit at 0%. High BKB means that the move can knock the opponent far even at a low percent, like Marth tippers or Ganon\'s Warlock Punch. Low BKB has very little starting knockback, like Shiek\'s Fair or Most characters\' Jab 1.'
   },
   {
      name: 'kbg',
      definition: 'Knockback Growth, or KBG, is how much knockback strength grows as the opponent takes more and more damage. High KBG means that the move will knock opponents farther sooner like most smashes. Low KBG means that the move will kill later or has a more consistant knockback, like Shiek\'s Fair or Mario\'s Utilt pre-nerf.'
   },
   {
      name: 'wbkb',
      definition: 'WBKB is short for Weight Based Knockback. It is essentially set knockback, and it only changes based on a character\'s weight, though it is also affected by rage. This no longer exists in Ultimate, and was replaced by FKB.'
   },
   {
      name: 'fkb',
      definition: 'FKB is short for Fixed Knockback. Moves with this property will deal the same knockback regardless of percent. It is still affected by weight, like WBKB from previous games, but it is no longer affected by rage.'
   },
   {
      name: 'zac',
      definition: ' A Z-drop Aerial Catch, or ZAC, is performed by pressing grab while in the air to z-drop an item (like bombs), and then immediately inputting an aerial, which will recatch the item. The result will be a slightly delayed aerial while holding the item. This grants access to aerials while holding items, and in can also allow for unique combo potential. For example, ROB can combo ZAC NAir into itself, as the Gyro will combo into the NAir, and the NAir will combo into the next z-drop Gyro.'
   },
   {
      name: 'fastfall',
      aliases: ['ff'],
      definition: 'Fastfall, sometimes shortened to FF, is when you press down on the control stick while falling. This will result in you falling faster than you normally would. After a jump, you cannot perform a fastfall until you have already reached the peak of it. You cannot fastfall at all while in tumble, so you must input an aerial first.'
   },
   {
      name: 'autocancel',
      aliases: ['ac'],
      definition: 'An Autocancel is the window during which a move can land with no additional landing lag. Most moves have an autocancel window before the move comes out and after the move has completed- though there is almost always a break in between these windows and the hitbox where it will not autocancel. If you land during the autocancel period, you will not suffer the aerial\'s extra landing lag. For example, Link\'s down air from very high up can land with no endlag, but if he tries to use it close to the ground, he will have a noticable amount of landing lag. This can be very powerful on moves like Pyra and Mythra\'s Up Aerial, as it autocancels shortly after the hitbox.'
   },
   {
      name: 'b-reverse',
      aliases: ['br'],
      definition: 'A B-reverse happens when you do a special move (such as side-B), and then immediately press the control stick behind you. This will reverse all of your momentum immediately, as well as change the direction you are facing. Not all special moves can do this. For example, Mario\'s FLUDD cannot be B-reversed.'
   },
   {
      name: 'turnaround special',
      aliases: ['rb'],
      definition: 'A Turnaround Special is performed by pressing behind your character briefly before initiating a special move. This will result in a special move facing the other direction. Unlike B-reverses, this does not reverse your momentum.'
   },
   {
      name: 'wavebounce',
      aliases: ['rbr'],
      definition: 'A Wavebounce combines the effects of a B-Reverse and a Turnaround Special. It is performed by pressing behind your character briefly before performing a special, then pressing back in the original direction after the special has started. This will result in a reverse in momentum while facing the original direction. For example, to wavebounce Samus\' Charge Shot while facing right, you would press left, return the stick to neutral, press B, then press right.'
   },
   {
      name: 'dad',
      definition: 'Directional Airdodge. Performed by pressing airdodge while pressing in a direction. Only exists in Melee and Ultimate.'
   },
   {
      name: 'wavedash',
      definition: 'Performed by jumping, then immediately airdoging into the ground. This can be done with a diagonal airdodge to also slide in a direction, allowing for much freedom of movement. Especially powerful considering a directional airdodge has many possible angles, changing the slide distance drastically and ambiguously. However, this technique is only useful in Melee, as you cannot directional airdodge immediately after jumping in Ultimate.'
   },
   {
      name: 'waveland',
      definition: 'A Waveland is performed by airdodging down into a platform or the ground. This allows you to land more quickly, and if performed with a diagonal airdodge, slide at the same time. This is similar to a wavedash, though not done immediately after jumping from the ground. Unlike wavedashing, this is still useful in Ultimate, as for some characters, it is the fastest way to land on a platform above them. In addition, some characters *need* this to land on platforms at all. For example, Pyra cannot reach the platforms on PS2 without wavelanding onto them. This works because airdodges move you slightly in the opposite direction on startup.'
   },
   {
      name: 'jump cancel',
      aliases: ['jc'],
      definition: 'A Jump Cancel, or JC, is commonly used to refer to cancelling your jumpsquat with another move. In games prior to Ultimate, this can be done with a variety of moves such as Up Smash/Special, item toss, and in Melee, grabs. When used out of a dash, JC moves will slide further than normal. This is also how you would perform Up Smash/Special out of shield, though in Ultimate this is no longer required.'
   },
   {
      name: 'rjcus',
      definition: 'A Reverse Jump Cancel Up Smash, or RJCUS for short, allows characters to perform Up Smashes facing the other direction out of run. The technique is very similar to RAR, except instead of jumping, you cancel the jump with USmash. Does not exist in Ultimate due to the removal of JC USmashes, though reverse USmashes are still possible without jumping.'
   },
   {
      name: 'jumpsquat',
      aliases: ['js'],
      definition: 'Jumpsquat, or JS, is an animation that occurs before every jump. When you input a jump, your character takes a few frames to essentially wind themselves up for the jump before performing it. In games prior to Ultimate, the time this took was character dependent, though it now only takes 3 frames for every character.'
   },
   {
      name: 'di',
      definition: 'DI, short for Directional Influence, is a mechanic that allows you to modify your launch angle when being hit. This is performed by pushing the control stick perpendicular to your launch angle, and will shift it in the direction you push. In Ultimate, you can change your angle by about 9.74 degrees. DIing towards someone is usually referred to as "DI in" and DIing away from someone is usually referred to as "DI out". There are two major applications for DI- combo DI and survival DI\n\nKeep in mind there is a second mechanic you must use in conjunction with DI known as LSI. See also - Combo DI, Survival DI, LSI'
   },
   {
      name: 'combo di',
      definition: 'Combo DI refers to using DI to escape from combos. This depends heavily on the specific character comboing you, though in many situations DIing out will be the best. There are exceptions though- for example, moves that send up and slightly sideways. DIing in against these moves will place you higher relative to your opponent, and can make it harder for them to followup. In addition, mixing up your DI on each hit of a combo can also be useful in some scenarios. An example is during Pichu\'s Thunder setups, where your opponent will need to predict your DI and change their followup depending on it. See also - DI, Survival DI, LSI'
   },
   {
      name: 'survival di',
      definition: 'Survival DI refers to using DI to survive kill moves longer. This is performed by changing your angle so that it takes longer for you to reach the blastzone. For instance, against Mewtwo\'s up throw, you can DI away from him to survive longer. See also - DI, Combo DI, LSI'
   },
   {
      name: 'lsi',
      definition: 'LSI, short for Launch Speed Influence, is a mechanic that allows you to change the speed you are launched at. Although it is a separate mechanic from DI, it is usually referred to in conjunction with it as simply "DI". It only applies if the launch angle is not vertical, or 65 and 295 degrees to be exact. It is performed by holding either up/down- up makes you fly faster, donw makes you fly slower. This mechanic is implemented so that you cannot simply hold up to DI into the corners for horizontal knockback, which was the case in games prior to Smash 4. It is critical you do not DI up horizontal moves, as this will make you die much sooner. Instead, you need to hold in and down.\n\nSince LSI is applied after DI, you can actually LSI moves with angles outside of the LSI range. For example, Charizard\'s UThrow has an angle of 70 degrees, so you can hold down and away to remove most of its kill potential. This is so effective because this angle not only is good DI, but allows you to use LSI in combination with it. Moves with this angle (~70 degrees) usually have very poor kill potential because of this fact, i.e. Pyra Up Special. See also - DI'
   },
   {
      name: 'bnb',
      definition: 'Short for Bread and Butter, which refers to a character\'s main damage racking combos.'
   },
   {
      name: 'cqc',
      definition: 'Short for close quarters combat, which refers to a characters options when up close to their opponent.'
   },
   {
      name: 'matchup',
      aliases: ['mu'],
      definition: 'The matchup refers to the dynamic between each of the player\'s characters. Many aspects of how you play depend on this- the way you move in neutral, the combos you use, the way you edgeguard, etc. Each character needs a change in your gameplan to properly fight, and figuring this out is called "learning the matchup".\n\nMany players will give a ranking to a matchup, denoting how much of an advantage one character has. One method is a ratio, where 50:50 is even, 60:40 is an advantage, and 100:0 would be unloseable. Another method is + or - some number, where +0 is even, +1 is a slight advantage, etc. It is also common to simply describe them with words, such as "winning", "slightly winning", "losing" etc. There is no standard, so this often depends on how each person defines these terms, meaning extra clarification may be needed.'
   },
   {
      name: 'crew battle',
      aliases: ['cb'],
      definition: 'A crew battle is where two groups of players play against each other in sequence. The winner of a match carries their remaining stocks from the previous opponent to the next one. Last team with stocks left wins.'
   },
   {
      name: 'dashback',
      definition: 'When you are facing one way, and then input a dash in the other direction, it is called a dashback.'
   },
   {
      name: 'attack cancel',
      aliases: ['atkc'],
      definition: 'An attack cancel is a simple mechanic with many applications. It utilizes the ability to jump out of the startup of tilts and dash attacks, cancelling them. https://youtu.be/v1kjQtMaPkE'
   },
   {
      name: 'sd',
      definition: 'An SD is a Self Destruct, which refers to when a player accidentally (or intentionally) falls off the stage or jumps into the blast zone, KOing themself.'
   },
   {
      name: 'edgeguard',
      definition: 'An Edgeguard refers to preventing the opponent\'s recovery. This can be done in a variety of ways- beating/trading with their recovery special, sniping with projectiles, 2-framing, or trumping them after they grab the ledge. This is extremely important to learn for any new player, as it can lead to taking stocks early.'
   },
   {
      name: 'ledge trapping',
      definition: 'Ledge trapping refers to the situation in which the opponent has grabbed the ledge, and is attempting to get back onstage. This is done by either punishing an opponent\'s ledge options directly, i.e. hitting a ledge jump with an aerial, or punishing what they do after, i.e. punishing a shield after a neutral getup. This usually requires reading your opponent, though many characters have options that can cover multiple ledge options at once. Additionally, characters with a good Up Special OoS can simply hold shield at ledge and use it in reaction to their oppponen\'s options.'
   },
   {
      name: 'jv',
      definition: 'A JV, named after the Smash player \'JV3x3\' is where you defeat an opponent with 0% on your currennt stock. JVs are followed up usually by a number, being one more than how many stocks you have remaining. For example, if you have 3 stocks remaining and 0% when you defeat an opponent, it would be considered a JV4.'
   },
   {
      name: 'hitbox',
      definition: 'The hitbox of an attack refers to the region where it can deal damage. Most moves will have multiple hitboxes, sometimes dealing different amounts of damage. For example, Marth\'s FSmash has multiple hitboxes for each part of his sword, and the one on the tip does more damage.'
   },
   {
      name: 'hurtbox',
      definition: 'A character\'s hurtbox refers to the region where they can take damage. This is made up of many small bubbles, forming a sort of skeleton for a character. Generally having smaller hurtboxes is better, as it makes a character harder to hit. The positioning of hurtboxes also matters. For example, Greninja\'s standing pose positions their hurtboxes very low, making them harder to hit.'
   },
   {
      name: 'disjoint',
      definition: 'A disjoint refers to a move where the attacker\'s hitboxes aren\'t overlayed with their hurtbox. This means that the hitbox can hit the opponent, but cannot be hit back. For example, swords are disjointed, as you can\'t hit someone\'s sword to damage them. Disjoints can still be beaten, either by getting close enough to hit the character themself, or using long ranged moves.'
   },
   {
      name: 'ledge cancel',
      definition: 'A Ledge Cancel is a technique that cancels the end of specials by slipping off of the edge of a platform or the stage. Very useful with moves like teleports, as it allows fast movement on stages with platforms.'
   },
   {
      name: 'tech',
      definition: 'Teching is a technique that allows you to break your fall out of tumble. As long as you are in a tumble animation (including hitstun) and near to the ground, a wall, or a ceiling, you can press shield to tech. It can also be performed by airdodging into a surface, though you cannot do this while in hitstun. Teching will immediately cancel all knockback and grant intangibility. If a tech is performed on the ground, you can also input left or right to roll in that direction while teching. If teching on a wall, you can input jump to instantly perform a wall jump after the tech.'
   },
   {
      name: 'spike',
      definition: 'A spike is a move in Smash that launches an opponent downwards. Spikes are unable to be cancelled by a jump or up-b like meteors (see: meteor). In Ultimate only, opponents are unable to tech spikes if they are hit while grounded, allowing for true follow-ups.'
   },
   {
      name: 'meteor',
      definition: 'A meteor is a move that launches an opponent downwards. Meteors are different from spikes, as they can be meteor canceled (see: meteor cancel). The difference between a meteor and spike is the angle; meteors exist in between a certain range, and anything outside of it is a spike. In Melee, this range is between 260 and 280 degrees, and in Brawl, it is between 230 and 310. Meteors only exist in Melee and Brawl, as in Smash 4 and Ultimate, meteor canceling has been removed. This makes all meteors effectively spikes.'
   },
   {
      name: 'meteor cancel',
      definition: 'A meteor cancel is a technique that allows you to cancel the knockback of a meteor using a jump or Up Special. It is only possible in Melee and Brawl, and is different in each game:\n\n__Melee__\nIn Melee, meteor cancelling is possible to perform 8 frames after the hitlag of a move has ended. However, in order to cancel the meteor twice or more in a row while recovering, you must have at least allowed the control stick to return to neutral position, or else the jump/up special will not come out.\n\n__Brawl__\nIn Brawl, the window to perform a meteor cancel is much later, happening after 25 frames for a majority of characters, with exceptions (shown below). If you input a meteor cancel early, you will be locked out of performing it for 40 frames. This penalty can happen even before being hit.\n\n15 frames - Olimar, Ivysaur, and Zero Suit Samus.\n20 frames - Yoshi.\n30 frames - Charizard.\n32 frames- Meta Knight and Pit.\n60 frames - Wolf.'
   },
   {
      name: 'stage spike',
      definition: 'A stage spike refers to when an attack sends an opponent into the bottom of the stage, causing them to bounce downwards off of it. This is useful for making moves that otherwise wouldn\'t spike function as one. The only downside is the opponent can tech off the bottom of the stage, allowing them to recover even easier, and in some cases punish their attacker.'
   },
   {
      name: 'hitstun',
      definition: 'Hitstun is a period of time after being hit/launched by a move you are unable to act. Hitstun is dependent on a move\'s knockback, and decides the time in which you can combo the opponent. As long as they are in hitstun, your followups will be guaranteed Not to be confused with hitlag.'
   },
   {
      name: 'hitlag',
      aliases: ['shieldlag'],
      definition: 'Hitlag (also known as freeze frames) is the period of time where the game freezes when landing a hit. This is also the period of time in which you can SDI. Hitlag is technically only applied to the entity attacking and the person receiving the hit, so hitlag can vary between players. For example, projectiles do not cause hitlag to the attacker, and in free for alls other opponents who were not hit can move during hitlag. This also happens when hitting shields, known as shieldlag. Certain effects cause more hitlag, such as electricity. Not to be confused with hitstun.'
   },
   {
      name: 'blast zone',
      definition: 'The blast zone is the area of the stage that causes KOs upon contact. It always surrounds the entire stage, a short distance away from the bounds of the camera. Different stages have differently sized blast zones, affecting the percent a character can kill at. This is most notable in stages with higher or lower top blast zones. Stage elements which can instantly KO you such as lava are not considered blast zones.'
   },
   {
      name: 'walkoff',
      definition: 'Refers to a part of a stage where the ground goes into the blast zone. This allows characters to walk off the stage into the blast zone, hence the name. Walkoffs are usually a reason for a stage to be banned from competitive play, as standing near a walkoff can lead to extremely early KOs.'
   },
   {
      name: 'rcg',
      definition: 'A Roll Cancel Grab, or RCG for short, is a technique that allows characters to perform an extended version of their dash grab. It is performed by buffering a roll from an initial dash, and then cancelling the first few frames of the roll with an attack or grab input. While on certain characters the range gained is minimal, other characters burst forward a large distance, and can even travel through opponents. This can also be used to perform Pivot Grabs. This is very notable on characters such as Pichu, as they can use it as a staple burst option.'
   },
   {
      name: 'footstool',
      aliases: ['fs', 'phantom footstool', 'phantom fs'],
      definition: 'A footstool refers to jumping off an opponents head. When above an opponent you can input jump to footstool them, which will stun them for a short while. If performed in the air, this will them into tumble, which can be used to edgeguard opponents jumping to ledge. On stage, midair footstools will knock the opponent down, forcing a tech situation, or allow for jab locks if the opponent misses their tech. Footstooling also grants a brief period of invincibility. In Smash 4, midair footstools are untechable.\n\nIf the opponent is doing anything other than movement options, you will instead perform a phantom footstool, where you get a large amount of height without stunning the opponent. This can be useful for landing, as you can phantoom footstool an opponent trying to juggle you, dodging the attack retaining your jump.'
   },
   {
      name: 'jab lock',
      aliases: ['jab reset', 'lock'],
      definition: 'A jab lock, sometimes referred to as a jab reset, or simply a lock, is a technique used to punish missed techs. When an opponent misses a tech, you can hit them with certain attacks to reset the knockdown animation, adding in quick damage and opening up extra punishes. Jab locking is mainly useful if your attack is too slow to punish a missed tech; locking the oppponent will essentially reset the timer, guaranteeing a punish.\n\nDespite the name, jab locks are possible with any attack that doesn\'t lift the opponent off the ground. Typically, this is a move that has the Sakurai Angle when it deals low knockback. In addition, spikes can be used to lock before they begin to ground bounce. It is just most common to use a jab, as they are a fast and nearly universal option.'
   },
   {
      name: 'uaft',
      definition: 'Refers to Up Angled Forward Tilt.',
   },
   {
      name: 'sharking',
      aliases: ['shark'],
      definition: 'Sharking refers to a technique where you hit the opponent from below the platform they\'re standing on. For example, using Link\'s UTilt under the Battlefield platforms. Some characters can also shark through the stage with their Up B, for example Marth and Lucina. When using Up B to ledge, it will hit opponents standing on the ledge.',
   },
   {
      name: 'pancake',
      aliases: ['pancaking'],
      definition: 'Pancaking refers to landing lag animations that are very low to the ground. This allows some characters to duck under moves after using an aerial. Pikachu is a very notable example of this.',
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

   // link
   {
      name: 'rr',
      definition: 'Refers to Returning Rang, which is the hitbox on Link\'s Boomerang as it returns to him. The returning Boomerang hitbox has set knockback and is an excellent pressure and combo tool. Applies to all Links.',
      character: 'link'
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
   
   // pichu
   {
      name: 'lightning loops',
      definition: 'https://youtu.be/xJyufyRb2F4',
      character: 'pichu'
   },

   // ice climbers
   {
      name: 'backdash cheerless',
      definition: 'You can get a cheerless grab off of backdash. \nhttps://gfycat.com/distortedwillingbeagle',
      character: 'ice climbers'
   },
   {
      name: 'belay',
      definition: 'ICs up special.',
      character: 'ice climbers'
   },
   {
      name: 'belay desync',
      definition: 'When you belay to ledge, both ICs will be actionable on the same frame, so you can desync by inputting something for Nana within 6 frames before Popo is actionable, and then buffering something for Popo (this is necessary) as well.\nWhile not the same desync, you can also attempt for a reconnect buffer by holding an input as you belay, giving you a chance to buffer that input for Nana only. This can be applied in more guaranteed, or more flexible ways by applying Grab Storage. \nhttps://gfycat.com/groundedvengefulcentipede',
      character: 'ice climbers'
   },
   {
      name: 'blizz',
      definition: 'Blizzard - ICs down special.',
      character: 'ice climbers'
   },
   {
      name: 'blizzblock',
      definition: 'Blizzblock is a powerful neutral tool that refers to alternating desynced Ice Blocks with a desynced Blizzard mixed in to send any reflected Ice Blocks back at the opponent. It is a very versatile tool as it can be used offensively to pressure shields or confirm into a combo, as well as defensively to force an approach or invalidate certain projectiles. To use Blizzblock effectively, it is important to stay reactive. One climber is free to counter the opponent\’s response while the other climber is in lag, be that stopping the Blizzblock, continuing it, stuffing out a jump, or transitioning to a different desynced option. \nhttps://gfycat.com/timelyfittingdachshund \n\nFor a more intensive guide, read here: <https://docs.google.com/document/d/1IRYkx4wro643NB0r_zkPMfUR4V9OmiqSc-xbAieYA88/edit?usp=sharing>',
      character: 'ice climbers'
   },
   {
      name: 'blizz confirms',
      definition: 'Kill Confirms out of a synced blizzard freeze: <https://twitter.com/techyCoder81/status/1119463888410562560>',
       character: 'ice climbers'
   },
   {
      name: 'blizzard wavedash',
      aliases: ['blizzdash'],
      definition: '<https://twitter.com/madmonk12345/status/1089084293241061378>',
      character: 'ice climbers'
   },
   {
      name: 'blizzwall',
      definition: 'Blizzwall is desynced blizzards in neutral. specifically, its when you alternate nana/popo blizzard to form a soft of wall of blizzard forwards, sometimes short hopping, sometimes moving backward or forward. When performed correctly, there is no gap in the blizzard projectiles, since each one covers the endlag of the one that came before it. The counterplay to this is jumping, which can be uaired instead. Many characters have specific moves that can hit you through blizzwall, so keep these in mind.',
      character: 'ice climbers'
   },
   {
      name: 'button storage desyncs',
      aliases: ['grab storage', 'special storage', 'shield storage', 'taunt storage', 'jump storage', 'button storage', 'the greatest thing to ever happen to ics'],
      definition: 'By getting Nana to ignore an input while we respawn (which can be done either by whiffing a grab and holding it immediately after, holding it as we die, or after a failed reconnect buffer), we can observe various anomalies.\nThis is most usefully applied with Special Storage (which requires Smash Stick) or Grab Storage (which can be used with any control scheme), however it also has known effects with Shield, Jump and Taunt.\nVideo Guide: <https://youtu.be/6oret9hMXek>\nFor a slightly more detailed text guide on Grab Storage and Special Storage, see <https://docs.google.com/document/d/1Ftem9sr7ULRqfC0fHwTei1W1vjCf73lz6V9tXfofRwU/edit>',
      character: 'ice climbers'
   },
   {
      name: 'ccj fsmash',
      aliases: ['jump cc fsmash', 'jump cc (fsmash)', 'jump cc nair fsmash', 'jump cc (nair) (fsmash)', 'ccj nair fsmash', 'ccj (fsmash)', 'ccj (nair) (fsmash)'],
      definition: '(Fsmash) from a cheer cancel jump grab. Perform a CCJ grab and hold the A button used to pummel. Then briefly tap down on the control stick from frames 11 - 20. This will result in [dthrow] (fast fall nair). Lastly, input (fsmash) with c stick or AB smash, it is significantly harder otherwise. Release quickly to have the fsmash come out as early as possible. \nIf you dair, or nana hits the nair but there\’s no fsmash, or you don\’t fastfall, you pressed down too early. All of the above result from pressing down before frame 11. \nhttps://gfycat.com/windingcavernousinvisiblerail \n\nMore details: <https://docs.google.com/document/d/1ggMr0TXWiWE5xf1J2qchvnve0n9Oiloa-X4fwwhigEY/edit?usp=sharing>',
      character: 'ice climbers'
   },
   {
      name: 'chars doc',
      definition: 'Doc that lists what specific things work on which characters, such as utilt (footstool squall), (utilt) footstool as an infinite, and the gimfinite. Work in progress, contact techy#5973 for editing access/corrections. <https://docs.google.com/spreadsheets/d/1WI_xGi1OQ3b0bhrue42OqjrlufqYJQXM2m0FNil6-hw/edit#gid=0>',
      character: 'ice climbers'
   },
   {
      name: 'cheer cancel',
      aliases: ['pummel buffer desync'],
      definition: 'You can buffer certain options for nana as popo\'s grab is coming out but before it actually lands. IMPORTANT NOTE: This is NOT Cheerless, and does not directly involve cheerless, though it is one method (amongst many) that can lead into Cheerless.\nFrame data: The window for grab (spotdodge) is 5 frames from standing grab (-3 to +1, with grab being f0), and  6 frames from grab during initial dash (-2 to +3). You can also Roll with the same timing. This window works because you can input down before the grab, and popo\'s grab input will count as a shield input for Nana. And of course, down + shield == spotdodge.\n\nThe window for grab (AB smash) is 2 frames from standing grab (0 to +1, with grab being f0), and 3 frames from grab during initial dash (+1 to +3). This is the generalized window for things that aren\'t roll or spotdodge. For example, you can grab (jump) , or grab (taunt) with this same timing.\n\nUnfortunately, while you CAN do tilts and specials while grabbing they are all a 1 frame window from a dash grab, and are not possible from a standing grab. In the future I may do a more in depth video on the specific reasons for why that is the case, but for now just don\'t worry about that at all. Spotdodge is the most common choice for CC option. <https://www.youtube.com/watch?v=m-NKjph9fFI&feature=youtu.be>',
      character: 'ice climbers'
   },
   {
      name: 'cheerless',
      definition: 'If you get a synced grab with ICs, when you input a throw Nana will do a taunt (called cheer). This means she cannot act while you are throwing. Certain setups can allow you to get a cheerless throw, where Nana will be able to buffer an option as you throw, before she cheers. An example of this is the yeet.<https://youtu.be/377qQF66n9M>',
      character: 'ice climbers'
   },
   {
      name: 'dash dance buffer desync',
      aliases: ['ddb', 'ddb (aerials)', 'dash dance buffer (aerials)'],
      definition: 'Dash dancing clears the input buffer entirely. This allows you to attack cancel an aerial nana only by dashing forward, inputting a dash walk via the cstick, dash dancing, then jumping. For more information on how to learn it check here: <https://pastebin.com/1SNvDXeg> \n\nVideo introduction: <https://twitter.com/WalnutSSBU/status/1359283149033897985>',
      character: 'ice climbers'
   },
   {
      name: 'desync',
      definition: 'Any situation or setup that involves having nana and popo acting independantly of one another, usually though buffering an input for one while the other is busy.',
      character: 'ice climbers'
   },
   {
      name: 'dtac',
      aliases: ['dtilt attack cancel', 'down tilt attack cancel'],
      definition: 'DTAC, or Dtilt Attack Cancel, is a hitlag based desync that allows Nana to attack cancel off of a synced dtilt. \n\nOverwriting the attack cancelled aerial with a Nana special allows for a powerful shield pressure option with DTAC (squall) or a tech chase option with DTAC (IB). \n\nTo perform, immediately after inputting a synced dtilt on hit, input a  jump followed by Nana\'s special option. \nThis desync will not work if dtilt is spaced. \n\nExamples: \n<https://www.youtube.com/watch?v=FEUgLKcFzDQ> \n<https://www.youtube.com/watch?v=mIdrUjzXjbA>',
      character: 'ice climbers'
   },
   {
      name: '[dthrow] (delayed fair)',
      aliases: ['kakko', 'kakko combo', 'dthrow delayed fair', '[dthrow] (delayed fair spike)', 'dthrow delayed fair spike',],
      definition: '[Dthrow] (delayed fair) is a low percent desynced combo starter that, at its core, uses a delayed pre-tumble (fair spike) to give Popo massive frame advantage over the opponent for completely true follow ups. The most common follow ups are [sh landing nair] and [spotdodge] (blizz) [jab 1] \{kakko combo\}. \nhttps://gfycat.com/lazyfluidelectriceel \nPercent chart: https://cdn.discordapp.com/attachments/457051061526593536/842867577742295050/Kakko_Chart.png \n\nPerforming details: <https://docs.google.com/document/d/1fl9yEFLCNua4HzzzpdOclklYXB_qaJCmmxzBCJ0mgJg/edit?usp=sharing>',
      character: 'ice climbers'
   },
   {
      name: 'dthrow footstool',
      aliases: ['dthrow fs'],
      definition: 'Off of a cheerless dthrow, you can confirm into (footstool), which can be used for a variety of confirms if they miss the tech. \nhttps://gfycat.com/descriptiveslimbongo \nDetailed guide: <https://docs.google.com/document/d/18XMLglb05D2zXQQerpznfg8N8JNj1lyF11GC8t99UyA/edit>',
      character: 'ice climbers'
   },
   {
      name: 'fair footstool',
      aliases: ['dthrow fair footstool', 'fair fs', 'dthrow fair footstool'],
      definition: 'Off of a cheerless dthrow, you can confirm into (delayed fair) [footstool]. \nhttps://gfycat.com/calmuniquefugu',
      character: 'ice climbers'
   },
   {
      name: 'footstool squall',
      aliases: ['fs squall'],
      definition: 'If you get a popo solo utilt, you can footstool with nana and immediately input squall with nana, which will drag the opponent down potentially into a grab. <https://youtu.be/gnKpZjXZA40>',
      character: 'ice climbers'
   },
   {
      name: 'gimfinite',
      definition: '<https://youtu.be/BCovjXUecDw>',
      character: 'ice climbers'
   },
   {
      name: 'ib',
      definition: 'Ice Block/Ice Shot - ICs neutral special.',
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
      name: 'jab interrupt',
      aliases: ['jab desync'],
      definition: 'You can desync off of jab on hit/shield (including on things like Pikmin/hydrant) if you buffer jab out of any state where you can not jab (immediately out of dash, dropping shield, after a move etc etc), then input something for Nana in the next 3 frames. \nhttps://gfycat.com/testyhauntingeastsiberianlaika',
      character: 'ice climbers'
   },
   {
      name: 'landing lag desync',
      aliases: ['bair uair', 'uair uair', 'double uair', 'll desync'],
      definition: 'If you do a short hop buffered bair or uair, and then buffer an uair right before landing, Nana\'s uair will autocancel, and you can input something for nana right before you land, which popo will ignore.\n<https://www.youtube.com/watch?v=79BBYmOR78I> \nhttps://gfycat.com/tautfantasticaustraliancattledog',
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
      definition: 'Dthrow (shield) [uair] (fair), a popular low percent throw conversion commonly used for a regrab.\nDuring dthrow, hold shield+jump+up and time an attack input during Popo\'s buffer window for dthrow, this should result in (shield) [uair] which can be followed up with (fair) inputted normally. \nhttps://gfycat.com/ashamedmeekbarebirdbat \n<https://www.youtube.com/watch?v=6WR5V7FGEmg&t=345s> \nPercent ranges: <https://docs.google.com/spreadsheets/d/1WI_xGi1OQ3b0bhrue42OqjrlufqYJQXM2m0FNil6-hw/edit#gid=740493672>',
      character: 'ice climbers'
   },
   {
      name: 'nair interrupt',
      definition: 'Nair interrupt is a hitlag based desync that allows Nana to overwrite her short hop neutral aerial into any other aerial or special. \n\nPopo’s short hop nair must hit on either frame 1 (reverse hitbox) or frame 2 (forward hitbox) for Nana to desync. This allows for a powerful shield pressure option with [nair] (squall) or a tech chase option with [nair] (IB). \n\nMore info: <https://docs.google.com/document/d/12f_J5neaipWebvqdbXjDZIEQQxrx8JR-4drF51niPmc/edit> \nCharacter details: <https://docs.google.com/spreadsheets/d/1WI_xGi1OQ3b0bhrue42OqjrlufqYJQXM2m0FNil6-hw/edit#gid=280315553> \n\nExamples: \n<https://www.youtube.com/watch?v=E-wczC5ffEA> \n<https://www.youtube.com/watch?v=MTe5xxQPvEY> \n<https://youtu.be/v6ygCP04k24?t=98> \n<https://gfycat.com/bluevictoriouscopepod>',
      character: 'ice climbers'
   },
   {
      name: 'nanapult',
      definition: 'A tech originating from Melee where Nana is thrown across the stage with a SH/FH blizzard. From a desynced state where Popo is in lag, have Nana dash/run in the desired launch direction, then jump and blizzard before she leaves the Poposphere. Nana\'s launch distance is determined by how far forward the control stick is when she exits her jump squat animation. So, use a diagonal down and forward angle when inputting the blizzard then roll up to forward to get the maximum launch distance. From run state storage it is a little more complicated: <https://twitter.com/madmonksmash/status/1327675464035360769?s=21>',
      character: 'ice climbers'
   },
   {
      name: 'nanatrump',
      definition: 'While trumping is only mediocre for a lot of characters in this game, since the opponent can DI in or away from the stage and limit your options for directly punishing it, Ice Climbers has what is likely the best trump punishes in the game. The answer is to make nana trump the opponent, while immdiately hitting ledge with popo fsmash. This is called nanatrump.\nThere are two main ways to do this - \n1. Run towards ledge and pivot grab towards center stage right before you reach ledge. While popo is in the endlag from the pivot grab, you can trump with nana.\n2. You can jump towards ledge, and if you space your landing just right, nana will grab ledge but popo will land on stage.\n\nAs nana trumps the opponent, you must immediately fsmash the ledge with popo. If done properly, they will get hit by the fsmash immediately after breaking contact with the ledge, which guarantees the fsmash.\nExample: <https://twitter.com/bigd_ssb/status/1086753626670809088>',
      character: 'ice climbers'
   },
   {
      name: 'notation',
      definition: '__**Ice Climbers combo notation:**__\n**Fair** - this is a synced Fair, performed by both climbers\n**(Fair)** - this is a desynced Fair, performed by Nana (secondary climber) only\n**[Fair]** - this is a desynced Fair, performed by Popo [primary climber] only\n**DThrow** - this is a synced, cheered DThrow\n**[DThrow]** - this is a desynced, cheerless DThrow\nUsing arrows between components (DThrow > Uair) is helpful but not necessary. Use them to convey a sense of timing, where arrows represent inputs that are not performed almost simultaneously.',
      character: 'ice climbers'
   },
   {
      name: 'nut',
      definition: 'dthrow > (roll) > [uaft/nair] > (sideb) > grab > [fthrow] > (fair).\n*Note: (Squall) can be escaped with SDI, making this combo not true.\n<https://youtu.be/KmbBGbuMTZI?t=27>* \n<https://twitter.com/v23God/status/1096525627094650880>',
      character: 'ice climbers'
   },
   {
      name: 'reconnect buffer',
      definition: 'Whenever Nana comes back into Popo\'s range, if you\'re holding an input there\'s a chance that Nana will read that input immediately, thereby letting you get things like (blizz) as Nana reconnects, while Popo remains fully actionable. While it is known to not be truly random, the conditions for whether she reads the input or not are unknown.\nIf the reconnect buffer fails, this notably gives you storage for that input, making attempted reconnect buffers for special and attack particularly noteworthy.',
      character: 'ice climbers'
   },
   {
      name: 'rollback desync',
      definition: 'You can roll while also launching nana forward with a (squall) or (utilt). Technical details are in the video description: <https://youtu.be/lA6l1H_DcMQ> \nhttps://gfycat.com/remotemisguidedconch \nhttps://gfycat.com/dampgrandiosedore',
      character: 'ice climbers'
   },
   {
      name: 'run state storage',
      definition: 'When forward is held on the control stick, nana and popo maintain their current state of running or walking.\n\nRun state storage is where you get popo to walk and nana to run. In this state, releasing the stick cause only nana to enter skid for 12 frames during which she cannot dash backwards or shield. This allows you to dash backwards or shield with popo and immediately do a nana first desync.\n\nThis state can be achieved from any previous desync.\n\nIf only popo can act, you can quickly mash forward twice quickly and then continue to hold forward 6-12 frames before nana can act to cause popo to do a dashwalk and nana to dash which converts into run state storage.\n\nWhen nana can act, you can simply hold forward more than 6 frames before popo can act. This causes nana to dash and popo to walk.\n\nExamples:\n<https://twitter.com/madmonk12345/status/1188207819780050944?s=21>\n<https://twitter.com/madmonk12345/status/1195622276680433664?s=21>',
      character: 'ice climbers'
   },
   {
      name: 'run turn desync',
      aliases: ['run turn'],
      definition: 'During Run (not dash), if you turn (without skidding), then in frames 1-5 input roll/spotdodge and in the same window, but on or after the frame you input shield, you input a grounded option for Popo, you can desync that shield option+Popo option. For example, you can do [rar shorthop] (roll back) or [blizz] (spotdodge), or much more.\nNote that you can also (shield) with it, however the window is much tighter. There is also a potential polling issue in theory, where the game may read the left stick as being neutral for 1 frame, which will also tighten the window, and make (shield) impossible (though this outcome is quite unlikely). \nhttps://gfycat.com/shrillmintyhapuka',
      character: 'ice climbers'
   },
   {
      name: 'ruri combo',
      definition: 'A solid conversion off of synced grab at mid percents. <https://twitter.com/ruripikaics/status/1105443229095190529>',
      character: 'ice climbers'
   },
   {
      name: 'semisync',
      definition: 'A state of being where nana will sometimes be under popo\'s control, and sometimes not. \n<https://gfycat.com/MellowTerribleFawn>',
      character: 'ice climbers'
   },
   {
      name: 'shield jump storage',
      aliases: ['sjs'],
      definition: 'While only one climber is able to shield, hold shield+b or shield+shield (2 shield inputs) and hold jump, once the other climber starts to shield, you\'ll be able to let go of b or 1 of the shield inputs to get the first climber to jump, while the other stays in shield. \n<https://twitter.com/negyxo18/status/1243498964533407744?s=19>',
      character: 'ice climbers'
   },
   {
      name: 'shieldstun desync',
      definition: 'Often when an opponent hits our shield Nana and Popo will end up less or more than 6 frames apart, meaning we can desync out of the shieldstun. \nhttps://gfycat.com/dishonestjointbordercollie',
      character: 'ice climbers'
   },
   {
      name: 'soymilk',
      aliases: ['skid turn', 'skid turn desync'],
      definition: 'Soymilk desync aka "skid turn": Dash in one direction until you enter run, then let go of the control stick to enter skid, then move the control stick in the opposite direction so Popo enters turn, and quickly interrupt the turning animation with any grounded move. If done correctly, Popo will perform the move and Nana will perform a short dash forward. See "Soymilk Gif Guide." \n\nTechnical details: Just like with other run turn desynchs, you have to input the move before Nana goes into turn so that she interprets the turn input as a dash forward. Out of skid, dash interrupts as early as frame 8. So you have to skid, turn, and then input a move at least 8 frames after the original skid, but less than 6 frames after the turn.',
      character: 'ice climbers'
   },
   {
      name: 'soymilk gif guide',
      aliases: ['soymilk gifs'],
      definition: 'https://gfycat.com/fluidunrealistickitfox \nhttps://gfycat.com/reasonableseriouseeve \nhttps://gfycat.com/sickwelloffjackrabbit \nhttps://gfycat.com/willingcomplicatedbluemorphobutterfly',
      character: 'ice climbers'
   },
   {
      name: 'squall',
      definition: 'Squall Hammer - ICs side special.',
      character: 'ice climbers'
   },
   {
      name: 'squall desync',
      definition: 'At the end of squall, you can buffer an option just for nana, and then buffer something for popo, so that they perform two different things. Note that like with throw desync, you must buffer something for Popo as well. \nhttps://gfycat.com/lazydesertedape \nBasics: <https://twitter.com/v23God/status/1102950879672627207>\nTechnical Details: <https://www.youtube.com/watch?v=xVuxZxmc358>',
      character: 'ice climbers'
   },
   {
      name: 'synced',
      definition: 'When nana and popo are synchronized, and are acting at the same time doing the same thing.',
      character: 'ice climbers'
   },
   {
      name: 'teeter cheerless',
      definition:   'If you can get nana to teeter on the edge of a platform or the main stage, you can guarantee a cheerless throw from it. Nana will not cheer if she is teetering when you throw someone. This can be setup\n1. in the same way that nanatrump is setup with whiff grab\n2. with a dash towards ledge\n3. airdodging onto a platform with the right timing\nExamples-<https://gfycat.com/DearElaborateAlaskanmalamute>\n<https://youtu.be/Yp69Y3gjSMk>',
      character: 'ice climbers'
   },
   {
      name: 'throw desync',
      aliases: ['dthrow desync'],
      definition: 'When you do a synced, cheered throw, you can buffer an option for Nana that Popo will not read in a 6 frame window, before Popo is actionable. This means that you can throw with Popo, and have Nana buffer just about anything, such as jump, blizzard, and roll (which is that is used to perform the Nut combo).\nNote that you must buffer something for Popo (which can be anything, even just movement) for Nana to register the desynced input.',
      character: 'ice climbers'
   },
   {
      name: 'tilt turn',
      aliases: ['tilt turn desync'],
      definition: 'One of the hardest desyncs ICs can do. Allows you to very quickly desync from standing, and can be applied to (blizzard) [wavedash]\n<https://twitter.com/v23God/status/1114949522256539648>',
      character: 'ice climbers'
   },
   {
      name: 'turn buffer desync',
      aliases: ['turn buffer'],
      definition: 'A fast desync done from standing or walking. Turn without dashing, then buffer another turn without dashing with popo that nana will do in 6 frames, then after 6 or more frames have passed, input a dash in the original direction you turned followed by an immediate attack you can do from walk but not run. Nana’s turning animation during this cannot be interrupted by a dash in that direction, so she dashes 4 frames late, creating a window for a nana only input.\nVideo: <https://twitter.com/madmonk12345/status/1144807399854751744?s=21>\nStick movement guide: <https://twitter.com/madmonk12345/status/1140854288517718017?s=21>',
      character: 'ice climbers'
   },
   {
      name: 'utilt footstool',
      aliases: ['utilt fs', 'utilt fs squall', 'utilt footstool squall'],
      definition: 'Desynced utilt can lead into a footstool with the other climber. [utilt] (footstool squall) in particular is quite popular as a conversion that can lead into a grab. \nhttps://gfycat.com/harmoniousfreshduckbillcat \n(utilt) [footstool airdodge down] or [utilt] (footstool airdodge down) is a semi useful combo, which is an infinite on Puff, Kirby and GnW, but otherwise can be teched and therefore is not super reliable. \n https://gfycat.com/harmoniousfreshduckbillcat',
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
   },

   // aegis
   {
      name: 'fn',
      aliases: ['fn1', 'fn2', 'fn3'],
      definition: 'Refers to Flame Nova, Pyra\'s Neutral Special. FN has three levels of charge, which are referred to as FN1/FN2/FN3.',
      character: 'pyra/mythra'
   },
   {
      name: 'be',
      definition: 'Refers to Blazing End, Pyra\'s Side Special.',
      character: 'pyra/mythra'
   },
   {
      name: 'pr',
      definition: 'Refers to Prominence Revolt, Pyra\'s Up Special.',
      character: 'pyra/mythra'
   },
   {
      name: 'lb',
      definition: 'Refers to Lightning Buster, Mythra\'s Neutral Special.',
      character: 'pyra/mythra'
   },
   {
      name: 'pe',
      definition: 'Refers to Photon Edge, Mythra\'s Side Special.',
      character: 'pyra/mythra'
   },
   {
      name: 'rop',
      definition: 'Refers to Ray of Punishment, one of Mythra\'s Up Specials. It is performed by tapping Up Special.',
      character: 'pyra/mythra'
   },
   {
      name: 'cd',
      definition: 'Refers to Chroma Dust, one of Mythra\'s Up Specials. It is performed by holding Up Special.',
      character: 'pyra/mythra'
   },
   {
      name: 'bustersaw',
      definition: 'Refers to the charging hitbox on Mythra\'s Neutral special. Can combo into the rest of the special if timed right.',
      character: 'pyra/mythra'
   },
   {
      name: 'beps',
      aliases: ['pickup skip', 'be pickup skip', 'blazing end pickup skip'],
      definition: 'Blazing End Pickup Skip, or BEPS for short. Normally, when the sword returns after Blazing End, Pyra is forced into an animation where she can\'t do anything. However, if you are in certain other animations, the pickup animation can be skipped:\n\nJumpsquat, Shield, Roll, Spotdodge, Shield drop, Airdodge, Ledge grab, Ledge options, Ledge teeter, Footstool, and Platform drop\n\nThe most useful of these are shield and shield drop. These allow for combos out of Blazing End, especially the latter, as the shield drop animation continues for a while after you would normally interrupt it. This means if you drop shield and buffer an attack, the attack will come out instantly as soon as your sword returns.',
      character: 'pyra/mythra'
   }
]
