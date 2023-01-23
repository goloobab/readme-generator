const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is your project title?'
},
{
    type: 'list',
    name: 'license',
    message: 'What kind of license should the project have?',
    choices: ['APACHE 2.0','CCO', 'GNU v3', 'MIT', 'No License']
},
{
    type: 'editor',
    name: 'description',
    message: 'Please write a description about your project'
},

{
    type: 'input',
    name: 'installation',
    message: 'What installation command is needed for the project?'
},
{
    type: 'input',
    name: 'usage',
    message: 'What is the usage requirement to use your project?'
},

{
    type: 'input',
    name: 'contributing',
    message: 'What is needed to contribute to your project?'
},
{
    type: 'input',
    name: 'test',
    message: 'What commands do you use to run tests in this the project?'
},
{
    type: 'input',
    name: 'github',
    message: 'What is your github username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
}];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
