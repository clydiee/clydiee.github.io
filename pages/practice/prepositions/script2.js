const words = [
    { word: "Red", translation: "Dearg" },
    { word: "Orange", translation: "Orainds" },
    { word: "Yellow", translation: "Buidhe" },
    { word: "Green", translation: "Uaine" },
    { word: "Light Blue", translation: "Liath" },
    { word: "Dark Blue", translation: "Gorm" },
    { word: "Purple", translation: "Purpaidh" },
    { word: "Pink", translation: "Pinc" },
    { word: "Brown", translation: "Donn" },
    { word: "Black", translation: "Dubh" },
    { word: "White", translation: "Geal" },
    { word: "Grey", translation: "Glas" },
    { word: "Scarlet", translation: "Sgàrlaid" },
    { word: "Crimson", translation: "Crò-dhearg" },
    { word: "Turquoise", translation: "Tuirc-ghorm" },
    { word: "Navy Blue", translation: "Dubh-ghorm" },
    { word: "Reddish-brown", translation: "Ruadh" },
    { word: "Indigo", translation: "Guirmean" },
    { word: "Gold", translation: "Òir-bhuidhe" },
];
let currentIndex = -1;
let correctCount = 0;
let wrongCount = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to shuffle and reset the words
let shuffledWords = [];

function shuffleAndReset() {
    shuffledWords = [...words]; // Make a copy of the original words
    shuffleArray(shuffledWords); // Shuffle the copy
    currentIndex = -1; // Reset the index to start from the beginning
}

shuffleAndReset(); // Shuffle the words initially

const wordDisplay = document.getElementById("wordDisplay");
const userInput = document.getElementById("userInput");
const feedback = document.getElementById("feedback");
const correctCounter = document.getElementById("correctCounter");
const wrongCounter = document.getElementById("wrongCounter");
const lastAnswerFeedback = document.getElementById("lastAnswerFeedback");

function getRandomWord() {
    if (currentIndex === shuffledWords.length - 1) {
        // Shuffle the words when we reach the end of the shuffled list
        shuffleArray(shuffledWords);
        currentIndex = -1;
    }
    currentIndex++;
    return shuffledWords[currentIndex];
}

function createTableRows() {
    const wordTable = document.getElementById("wordTable");

    words.forEach((item) => {
        const row = wordTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = item.word;
        cell2.textContent = item.translation;
    });
}

createTableRows();

function displayNextWord() {
    const { word, translation } = getRandomWord();
    wordDisplay.textContent = word;
    userInput.value = "";
    feedback.textContent = "";
    userInput.dataset.translation = translation; // Store the correct translation as a data attribute
}

function displayFeedback(isCorrect) {
   const userTranslation = userInput.value.trim().toLowerCase(); // Convert user input to lowercase
   const correctTranslation = userInput.dataset.translation.toLowerCase(); // Convert correct translation to lowercase

   if (userTranslation === correctTranslation) {
       feedback.textContent = "Correct!";
       feedback.style.color = "green";
       lastAnswerFeedback.textContent = "Correct!";
       lastAnswerFeedback.style.backgroundColor = "green";
       correctCount++;
   } else {
       feedback.textContent = `Incorrect. The answer was...\n(${correctTranslation})`;
       feedback.style.color = "red";
       lastAnswerFeedback.textContent = `Incorrect. The answer was...\n(${correctTranslation})`;
       lastAnswerFeedback.style.backgroundColor = "red";
       wrongCount++;
   }

   updateCounters(); // Update the counters here
   displayNextWord(); // Move to the next word after providing feedback
}


function updateCounters() {
    correctCounter.textContent = `Correct: ${correctCount}`;
    wrongCounter.textContent = `Wrong: ${wrongCount}`;
}

function checkWord() {
    const currentWord = wordDisplay.textContent.trim();
    const userTranslation = userInput.value.trim();
    const correctTranslation = userInput.dataset.translation;

    const isCorrect = userTranslation === correctTranslation;

    displayFeedback(isCorrect);
}

userInput.addEventListener("keyup", function (event) {
   if (event.key === "Enter") {
       checkWord();
   }
});

displayNextWord();

const wordTable = document.getElementById("wordTable");
const hideButton = document.getElementById("hideButton");

hideButton.addEventListener("click", function () {
    if (wordTable.style.display === "none" || wordTable.style.display === "") {
        wordTable.style.display = "table";
        hideButton.textContent = "Hide Table";
    } else {
        wordTable.style.display = "none";
        hideButton.textContent = "Show Table";
    }
});

