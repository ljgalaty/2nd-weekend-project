const readlineSync  =  require('readline-sync');

const maxTries = 10;
let currentTries = 0;
const winScore = 7;
let scoreCounter = 0;
readlineSync.setDefaultOptions({limit: ["a", "b", "c", "d"]});

let userInput = readlineSync.question(
    `Welcome to the trivia game! 
    To win the game, get 7 points in ${maxTries} tries or less. Otherwise, you lose. 
    Type a and hit enter when you're ready!\n`);

const playGame = userInput => {
    for (let currentTries = 0; currentTries < maxTries; currentTries++) {
        if (scoreCounter >= 10) {
            console.log(`You win!`);
        } else if (currentTries === maxTries) {
            console.log(`You ran out of tries.`);
        } else {
            console.log(`You have ${maxTries - currentTries} tries left to get ${winScore - scoreCounter} points.`);
            console.log(questionBank[currentTries].question);
            userInput = readlineSync.question(questionBank[currentTries].options);
                if (userInput === questionBank[currentTries].correctAnswer) {
                    scoreCounter++;
                    console.log("That's correct! You've earned a point!");
                    console.log(questionBank[currentTries].explanation);
                    userInput = readlineSync.question("Press a and enter when you're ready to proceed.");
                } else {
                    console.log("That's incorrect. You have earned no points.");
                    userInput = readlineSync.question("Press a and enter when you're ready to proceed.");
                }
        }
    }
};

let questionBank = [
    {
        question: "How do you treat marijuana hyperemesis\n (uncontrollable vomiting due to marijuana use)?",
        options: "a) rub a spicy cream on their belly\n b) give strong pain meds with anti-nausea medication\n c) Do nothing. You can't treat it.\n",
        correctAnswer: "a",
        explanation: "Believe it or not, a surprisingly effective treatment for this bizarre syndrome is to apply topical capsaicin cream, derived from hot peppers, which distracts the brainstem center that induces vomiting."
    },
    {
        question: "The haunted house benign tumor known as a teratoma is famous for containing skin, hair, nails, and, often, teeth, but lesser known is its tendency to develop cancer of what within itself?",
        options: "a) Bone b) Skin c) Muscle d) Fat",
        correctAnswer: "b",
        explanation: "A teratoma itself is a benign tumor of reproductive cells, but inside the mass, the rapidly dividing skin cells have a tendency to transform into a squamous cell carcinoma, which is malignant."
    },
    {
        question: "A young male is brought to the emergency department by family for 24 hours of unresponsiveness. Family says he has not eaten or drunk anything during this time.He is alert and awake, makes eye contact, but he does not talk. He does not make purposeful movements, but when you lift his arm, he holds it just where you left it. What would you do?",
        options: "a) Nothing; he's faking. b) Call a neurologist; he's having a stroke! c) Treat his anxiety. This is psychiatric.",
        correctAnswer: "c"
        explanation: "This patient is suffering from a psychiatric illness known as catatonia, typically induced by severe psychological trauma. Many of these patients exhibit a quality known as 'waxiness,' in which they hold the position they're placed in. Unless they're all Googling this, pretty hard to fake. Strong anti-anxiety medications typically resolve the symptoms."
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
];

playGame();
   









