const choices = ['rock ✊', 'paper ✋', 'scissors ✌️'];

module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName('rps')
        .setDescription('Play Rock Paper Scissors with me!')
        .addStringOption(option => 
            option.setName('choice')
                .setDescription('Choose which option to pick')
                .setRequired(true)
                .addChoices(
                    { name: 'Rock', value: 'rock ✊' },
                    { name: 'Paper', value: 'paper ✋' },
                    { name: 'Scissors', value: 'scissors ✌️' }
                )),
    aliases: ['rockpaperscissors'],
    execute(interaction) {
        return new Promise ((resolve, reject) => {
            const userChoice = interaction.options.getString('choice');
            let myChoice = choices[Math.floor(Math.random() * 3)];

            let toSend = 'You picked... ' + userChoice + '!\nI pick... ' + myChoice + '!';

            if (userChoice === 'rock ✊') {
                if (myChoice === 'rock ✊') toSend += '\nIt\'s a tie! <:thinkabelle:562485986379038750>';
                else if (myChoice === 'paper ✋') toSend += '\nI win! <:isaGlee:513917768568143882>';
                else if (myChoice === 'scissors ✌️') toSend += '\nYou win! <:isaBadDay:562485951558057984>';
            }
            else if (userChoice === 'paper ✋') {
                if (myChoice === 'paper ✋') toSend += '\nIt\'s a tie! <:thinkabelle:562485986379038750>';
                else if (myChoice === 'scissors ✌️') toSend += '\nI win! <:isaGlee:513917768568143882>';
                else if (myChoice === 'rock ✊') toSend += '\nYou win! <:isaBadDay:562485951558057984>';
            }
            else if (userChoice === 'scissors ✌️') {
                if (myChoice === 'scissors ✌️') toSend += '\nIt\'s a tie! <:thinkabelle:562485986379038750>';
                else if (myChoice === 'rock ✊') toSend += '\nI win! <:isaGlee:513917768568143882>';
                else if (myChoice === 'paper ✋') toSend += '\nYou win! <:isaBadDay:562485951558057984>';
            }

            interaction.reply(toSend).then(resolve()).catch(e => reject(e));
        });
    }
};
