//i am planning to add more  arrays and so player can select categories to play with still figuring out how to do it, also need to add music on and off button but totaly clueless about it 
var animal=["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar",
]
let keyboard=document.getElementById('keyboard');
let answer='';
let maxWrong=6;
let mistakes =0;
wordStatus=null;
// Array to store the letters guessed by the player
let guessed = [];
//music
// read this doc from chrome to resolve any browswer autoplay issue https://developer.chrome.com/blog/autoplay/
window.onload = function() {
    const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.play();



}

// Function to generate a random animal name
//reqiorement 3 iterate over a collection of el for some task
function randomWord() {
    answer= animal[Math.floor(Math.random()*animal.length)].toLocaleLowerCase();
   // Checks anwer with alert message,learned my lesson if characters of array is not lowered or upper case (not same as keyboared) it will not work wasted an hour debugging this
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
    // guessed.indexOf(passedLetter) === -1 ? guessed.push(passedLetter) : null;........? //null  i tried not using null as i am not running anything as else statment but program throws error with out it dont know why , using if statement instead
    if (guessed.indexOf(passedLetter) === -1) {
        guessed.push(passedLetter);

    }
        document.getElementById(passedLetter).setAttribute('disabled', true);
        // alert(answer);
    if (answer.indexOf(passedLetter) >= 0) {
        guessedWord();
        gamewon();
    }
    else if(answer.indexOf(passedLetter) === -1) {
        mistakes++;
        updateMistakes();
        gamelost();
        updatePicutre();
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}

//reason my 'gamewon' function was not working, here wordstatus was comparing to answer with "  spaces on wordstatues ,as i used join method on guess word function so it was comparing to' answer ' with spaces as a result compare failed.found a solution to remove spaces
function gamewon() {
    if (wordStatus.replace(/ /g,'') === answer.split('').join('')) {
       keyboard.innerHTML = "You are the champion!";
       keyboard.style.color = "green";
       keyboard.style.fontSize = "30px";
       keyboard.style.textShadow = "2px 2px 4px #000000";
       keyboard.style.fontWeight = "bold";
      
    }
}

function gamelost() {
    if (mistakes===maxWrong) {
        keyboard.innerHTML = "You Lost your Life!";
        document.getElementById('wordSpotlight').innerHTML ="The answer was:"+ answer;
        keyboard.style.color = "red";
        keyboard.style.fontSize = "30px";
        keyboard.style.textShadow = "2px 2px 4px #000000";
        keyboard.style.fontWeight = "bold";
    }
}

function updateMistakes() {
    document.getElementById('mistakes').innerHTML = mistakes;
}





 //functio n to write the letters guessed by the player
function guessedWord() {
    wordStatus = answer.split('').map(letter => {
        if(guessed.indexOf(letter)>=0) {
            return letter;
        }
        else{
            return "_";
        }
    })
    //my "_" was coming as joined "_____"forgot to add space
   .join(" ");
    document.getElementById('wordSpotlight').innerHTML = wordStatus;


}
//update picture
//stack overflow has good example of how to update pictures
function updatePicutre(){
//here i have kept the names of the pictures same as mistakes so it is easy to update
    document.getElementById('hangmanPic').src = "./images/" + mistakes + ".jpg";
}


//reset function
function reset() {
    mistakes = 0;
    guessed = [];
    document.getElementById('hangmanPic').src = "images/0.jpg";
    updateMistakes();
    guessedWord();
    generateButtons();
    randomWord();
}
//https://stackoverflow.com/questions/13983764/creating-falling-snow-using-html-5-and-js there are bunch of ways to do it by following the posts this is the simples way i figured,this is just for experiment
function createSnowflakes() {
    const snowflakeContainer = document.querySelector('.snowflakes');
    const numSnowflakes = 50; // Adjust the number of snowflakes

    for (let i = 0; i < numSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');

        const size = Math.random() * 8 + 5; // Random size between 8px and 13px
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}%`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // speed testing with this one
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay

        // appending this as a child of snowflake container which meets another project requirement 
        snowflakeContainer.appendChild(snowflake);
    }
}








randomWord();
guessedWord();
document.getElementById('maxWrong').innerHTML = maxWrong;
document.getElementById('answer').innerHTML = answer;

const gamecontainer = document.querySelector('.container');
gamecontainer.style.backgroundImage = "url('images/hangmanback.png')";
generateButtons();
createSnowflakes();
handleGuess();
 updatePicutre();