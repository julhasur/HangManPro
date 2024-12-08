var animal=["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar",
]
let answer='';
let maxWrong=6;
let mistakes =0;
wordStatus='';
// Array to store the letters guessed by the player
let guessed = [];

// Function to generate a random animal name
//reqiorement 3 iterate over a collection of el for some task
function randomWord() {
    answer= animal[Math.floor(Math.random()*animal.length)].toLocaleLowerCase();
   // Checks anwer with alert message
}
//button generating function
function generateButtons() {
    let buttonsHTML = 'abcdefghijklmnopqrstuvwxyz'
        .split('').map(letter => 
            `<button
                class="btn btn-lg btn-primary m-2"
                id='` + letter + `'
                onClick="handleGuess('` + letter + `')"
            >
                ` + letter + `
            </button>`
        ).join('');

    document.getElementById('keyboard').innerHTML = buttonsHTML;
}



//function to handle the guess, check guess array , -1 is used to indicates not found when no match is found using index of method , there are different was to use it ex: if statment but i am using this shorthand ,


function handleGuess(passedLetter) {
    // guessed.indexOf(passedLetter) === -1 ? guessed.push(passedLetter) : null;........? //null  i tried not using null as i am not running anything as else statment but program throws error with out it , using if statement isead
    if (guessed.indexOf(passedLetter) === -1) {
        guessed.push(passedLetter);
    }
        document.getElementById(passedLetter).setAttribute('disabled', true);
        alert(answer);
    if (answer.indexOf(passedLetter) >= 0) {
        guessedWord();
        gamewon();
    }
    else if(answer.indexOf(passedLetter) === -1) {
        mistakes++;
        updateMistakes();
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

function gamewon() {
    if (wordStatus === answer) {
        document.getElementById('keyboard').innerHTML = "You are the champion!";
    }
}

function gamelost() {
    if (mistakes===maxWrong) {
        document.getElementById('keyboard').innerHTML = "You are a Loser!";
    }
}







 //function to write the letters guessed by the player
function guessedWord() {
    wordStatus = answer.split('').map(letter => {
        if(guessed.includes(letter)) {
            return letter;
        }
        else{
            return "_";
        }
    })
    //my _ was coming as joined forgot to add space
    .join(' ');
    document.getElementById('wordSpotlight').innerHTML = wordStatus;
}


randomWord();
generateButtons();
guessedWord();
handleGuess();