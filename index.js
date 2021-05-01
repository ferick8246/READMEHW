const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
//const questions = [];
const teLaDejoCaer = (answers) =>
`
## ${answers.title} 
<br/>

## Description 
${answers.description}
<br/>
${answers.license}
<br/>

## Table of Contents


`
inquirer
  .prompt([
    { type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    { type: 'input',
      name: 'location',
      message: 'Where are you from?',
    },
    { type: 'input',
      name: 'hobby',
      message: 'What is your favorite hobby?',
    },
    { type: 'input',
      name: 'food',
      message: 'What is your favorite food?',
    },
    { type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    { type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL.',
    },
  ])
  



// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
