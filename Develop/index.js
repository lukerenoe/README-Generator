// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the title of your application?",
    },
    {
        type: "input", 
        name: "description",
        message: "What is the description of your application?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license does your application have?",
        choices: ["MIT", "apache", "mozilla"]
    },
    {
        type: "input", 
        name: "installation",
        message: "How to install?",
    },
    {
        type: "input", 
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input", 
        name: "github",
        message: "What is your Github username?",
    },
    {
        type: "input", 
        name: "usage",
        message: "How is the app used?",
    },
    {
        type: "input", 
        name: "tests",
        message: "Are there any tests associated with your app?",
    },
    {
        type: "input", 
        name: "contributing",
        message: "Who contributed to your application?",
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        fs.writeFileSync("readme4.md", generateMarkdown(response))
    })
}

// Function call to initialize app
init();
