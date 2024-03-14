import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
function sleep() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}
async function Welcome() {
    const message = chalkAnimation.rainbow("Lets Start Calculation");
    await sleep();
    message.stop();
    console.log(chalk.blueBright(`     _____________________
    |  _________________  |
    | | JO           0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    
    CREATED BY    
   `));
    console.log(chalk.yellow(`
   _______               ______     _______    _______              _________   _______ 
  (       )  |\\     /|  (  ___ \\   (  ___  )  (  ____ \\  |\\     /|  \\__   __/  (  ____ )
  | () () |  | )   ( |  | (   ) )  | (   ) |  | (    \\/  | )   ( |     ) (     | (    )|
  | || || |  | |   | |  | (__/ /   | (___) |  | (_____   | (___) |     | |     | (____)|
  | |(_)| |  | |   | |  |  __ (    |  ___  |  (_____  )  |  ___  |     | |     |     __)
  | |   | |  | |   | |  | (  \\ \\   | (   ) |        ) |  | (   ) |     | |     | (\\ (   
  | )   ( |  | (___) |  | )___) )  | )   ( |  /\\____) |  | )   ( |  ___) (___  | ) \\ \\__
  |/     \\|  (_______)  |/ \\___/   |/     \\|  \\_______)  |/     \\|  \\_______/  |/   \\__/
                                                                                        
                                                            

                                                                          
                                                                          
   `));
}
await Welcome();
async function Calculation() {
    const askQuestion = await inquirer
        .prompt([{
            type: "list",
            name: "Operation",
            message: "Which Operation do you want to perform",
            choices: ['Addtion', 'Multiplication', 'Division', 'Subtraction']
        },
        {
            type: "number",
            name: "num1",
            message: "Enter 1st Number: "
        },
        {
            type: "number",
            name: "num2",
            message: "Enter 2nd Number: "
        }]);
    if (askQuestion.Operation == "Addition") {
        console.log(`${askQuestion.num1} + ${askQuestion.num2} = ${askQuestion.num1 + askQuestion.num2}`);
    }
    else if (askQuestion.Operation == "Multiplication") {
        console.log(`${askQuestion.num1} * ${askQuestion.num2} = ${askQuestion.num1 * askQuestion.num2}`);
    }
    else if (askQuestion.Operation == "Division") {
        console.log(`${askQuestion.num1} / ${askQuestion.num2} = ${askQuestion.num1 / askQuestion.num2}`);
    }
    else if (askQuestion.Operation == "Subtraction") {
        console.log(`${askQuestion.num1} - ${askQuestion.num2} = ${askQuestion.num1 - askQuestion.num2}`);
    }
}
async function startAgain() {
    let again = true;
    while (again) {
        await Calculation();
        const Again = await inquirer.prompt({
            type: "confirm",
            name: "Restart",
            message: "Do you want to start again?"
        });
        again = Again.Restart;
    }
}
startAgain();
