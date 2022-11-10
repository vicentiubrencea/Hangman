let animals = ["CAT", "FROG", "DOG", "HORSE", "CHICKEN", "TURTLE", "CROCODILE", "GIRAFE", "BUTTERFLY", "SNAKE"];

let hintAnimals = ["Likes milk", "Sings in the lake", "Best friend", "Majestic creature", "Skinny legs, tastes good", "Most chill movement",
"His grandpa was a T-Rex", "Lives in savanna", "Used to be a worm", "Lightling-fast bite"];

let countries = ["ROMANIA", "ITALY","FRANCE","SPAIN","ENGLAND", "MEXICO", "CHINA", "GERMANY", "TURKEY", "INDIA"];

let hintCountries = ["Country of Dracula", "Best pizza", "Country in Europe with iconic iron tower", "Best sangria", "Country of soccer",
"You can find mariachi", "Cheep products", "Country with top european car brands", "You can hear an imam singing", "Spicy food"];

let randomIndex, word, displayWord = "", hint, cathegorySelected = 0;

function randomWord(wordArray, hintArray) {
    if (cathegorySelected == 0) {   
    randomIndex = Math.floor(Math.random() * wordArray.length);
    word = wordArray[randomIndex];
    hint = hintArray[randomIndex];   
    generateDisplayWord(word);
    }
    cathegorySelected = 1;
}

document.getElementById("animals").onclick = function() {
    randomWord(animals, hintAnimals);
}
document.getElementById("countries").onclick = function() {
    randomWord(countries, hintCountries);
}

function generateDisplayWord(text) {
    for (let i = 0; i < text.length; ++i) { 
        displayWord += "-";
    }
    document.getElementById("theWord").innerHTML = displayWord;
}

let lives = 10;
let lettersFound = 0;
document.getElementById("message2").innerHTML = "Number of lives left: " + lives;

function addLetter() {
    let letter = document.getElementById("letter").value.toUpperCase();
    if (letter.trim().length == 1) {    
        let isFound = 0;
        if (displayWord.includes(letter) == false) {
            for (let i = 0; i < word.length; ++i) {
                if (letter == word[i]) {           
                    displayWord = displayWord.substring(0, i) + letter + displayWord.substring(i + 1);
                    ++lettersFound;
                    isFound = 1;   
                } 
            }
        } 
        document.getElementById("theWord").innerHTML = displayWord;
        if (isFound == 1) {
            document.getElementById("message").innerHTML = "Nice!"; 
        } else if (isFound == 0) {
            --lives; 
            document.getElementById("message").innerHTML = "Try another letter!";
            document.getElementById("message2").innerHTML = "Number of lives left: " + lives;       
        }
        if (lettersFound == word.length) {
            document.getElementById("message").innerHTML = "Good Job, YOU WON!";
            displayWord = "";
        }
        if (lives == 0) {
            document.getElementById("message").innerHTML = "GAME OVER! Good luck next time!";
        }
        document.getElementById("letter").value ="";
    } else {
        document.getElementById("message").innerHTML = "Please enter ONE letter";
    }
}   

function getHint() {
    document.getElementById("hintText").innerHTML = hint;
}
