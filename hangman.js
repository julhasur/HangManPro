var animal=["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar",
]
let answer='';
let maxWrong=6;
let mistakes =0;
// Array to store the letters guessed by the player
let guessed = [];

// Function to generate a random animal name
//reqiorement 3 iterate over a collection of el for some task
function randomWord() {
    answer= animal[Math.floor(Math.random()*animal.length)];
   // Checks anwer with alert message
    alert(answer);
}

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
randomWord();
generateButtons();
