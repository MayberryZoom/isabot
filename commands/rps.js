module.exports = {
    name: 'rps',
    aliases: ['rockpaperscissors'],
    usage: ['<rock, paper, or scissors>'],
    description: 'Play Rock Paper Scissors with me! I\'m not too good at it though..',
    category: 'fun',
    execute(msg, args) {
        return new Promise ((resolve, reject) => {
            const argsFixed = toOneWord(args.join(' ').toLowerCase());

            const num = Math.floor(Math.random() * 3);
            let option;

            switch (num) {
                case 0: option = 'rock ✊'; break;
                case 1: option = 'paper ✋'; break;
                case 2: option = 'scissors ✌️'; break;
            }

            if (argsFixed === 'rock') {
                let toSend = 'I pick... ' + option + '!';

                if (option === 'rock ✊') toSend += '\nIt\'s a tie! <:thinkabelle:562485986379038750>';
                else if (option === 'paper ✋') toSend += '\nI win! <:isaGlee:513917768568143882>';
                else if (option === 'scissors ✌️') toSend += '\nYou win! <:isaBadDay:562485951558057984>';

                msg.channel.send(toSend);
            }
            else if (argsFixed === 'paper') {
                let toSend = 'I pick... ' + option + '!';

                if (option === 'paper ✋') toSend += '\nIt\'s a tie! <:thinkabelle:562485986379038750>';
                else if (option === 'scissors ✌️') toSend += '\nI win! <:isaGlee:513917768568143882>';
                else if (option === 'rock ✊') toSend += '\nYou win! <:isaBadDay:562485951558057984>';

                msg.channel.send(toSend);
            }
            else if (argsFixed === 'scissors') {
                let toSend = 'I pick... ' + option + '!';

                if (option === 'scissors ✌️') toSend += '\nIt\'s a tie! <:thinkabelle:562485986379038750>';
                else if (option === 'rock ✊') toSend += '\nI win! <:isaGlee:513917768568143882>';
                else if (option === 'paper ✋') toSend += '\nYou win! <:isaBadDay:562485951558057984>';

                msg.channel.send(toSend);
            }
            else msg.channel.send('Please say a valid option! (Rock, paper, or scissors)').then(resolve()).catch(e => reject(e));
        });
    }
};
