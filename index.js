const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'fullName',
        message: 'What is yout full name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function(email)
        {
            // Check if the user input is a valid email
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'repoName',
        message: 'What is the name of your Github repository?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description for your project.'
    },
    {
        type: "checkbox",
        name: "technologies",
        message: "What are the technologies you have used in this project?",
        choices: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'jQuery', 'Node.js', 'Express.js', 'React']
    },
    {
        type: 'input',
        name: 'installDependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Show users how to use your app. Can you provide an image/gif(path) demonstrating its functionality?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),
        (err) => err ? console.error(err) : console.log("\nYour ReadMe has been created."))
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((res) => writeToFile("README.md", res));
}

// function call to initialize program
init();