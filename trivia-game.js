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
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    },
    {
        question: "Does this work?",
        options: "a) yes b) no",
        correctAnswer: "a"
    }
];
// let questionBank = [
//     question1: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b"
//     },
//     question2: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question3: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question4: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question5: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question6: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b"
//     },
//     question7: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question8: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question9: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question10: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question11: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     },
//     question12: {
//         question: "This is the question",
//         options: "a) b) c)",
//         correctAnswer: "b)"
//     }
// ];

playGame();
   









