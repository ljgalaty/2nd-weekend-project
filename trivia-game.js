let  readlineSync  =  require('readline-sync');

const maxTries = 5;
let currentTries = 0;
let scoreCounter = 0;

let userInput = prompt.question(
    `Welcome to the trivia game!/n 
    To win the game, get 10 points in ${maxTries} tries or less. Otherwise, you lose./n 
    Easy questions are worth 1 pt, intermediate questions are worth 2 points, and hard questions are worth 3 points.`, )

const playGame = userInput => {
    for (let currentTries = 0; tries < maxTries; tries++) {
        if (scoreCounter >= 10) {
            console.log(`You win!`);
        } else if (currentTries === maxTries) {
            console.log(`You ran out of tries.`);
        } else {
            console.log(`Pick your next question. Would you like it to be a) Easy(+1 pt), b) Medium(+2 pts), or c) Hard(+3 pts)? Please enter a, b, or c when you've made your choice.`)
        }
    }
};





// switch() {
//     case "a":
//         console.log("Question from easy question bank")
//         break;
//     case "b":
//         console.log("question from medium question bank")
//         break;
//     case c:
//         console.log("question from hard question bank")
//         break;
//     default:
//         console.log(`please choose one of the listed options`)
// }


// let questionBank {
//     "Easy": {
//         "question1": {
//             "question": "This is the question",
//             "options": "a) b) c)",
//             "correctAnswer": "b)"
//         },
//         "question2": {
//             "question": "This is the question",
//             "options": "a) b) c)",
//             "correctAnswer": "b)"
//         },
//         "question3": {
//             "question": "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question4: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         }
//     },
//     "Medium": {
//         question1: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question2: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question3: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question4: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         }
//     },
//     "Hard": {
//         question1: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question2: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question3: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         },
//         question4: {
//             question: "This is the question",
//             options: "a) b) c)",
//             correctAnswer: "b)"
//         }
//     },
// }
   







