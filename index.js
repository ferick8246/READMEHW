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
-[Installation](#Installation)
-[Usage](#Usage)
-[Constributing](#Constributing)
-[Questions](#Questions)
<br />

## Installation
${answers.installation}
<br />
## Usage
${answers.usage}
<br />
## Contributing
${answers.contribution}
<br />
## Questions
* GitHub: https://github.com/ferick8246/READMEHW
${answers.github}

* For more questions you can reach me at my Email:(ferick8246@gmail.com)

${answers.email}

## **Links**
* [Video](https://www.youtube.com/watch?v=ommY048Wi84)
`
inquirer
  .prompt([
    { type: 'input',
      name: 'title',
      message:'What is the name of your Project?',
    },
    { type: 'input',
      name: 'description',
      message:'Please describe project?',
    },
    { type: 'input',
      name: 'installation',
      message:'What are the steps to install your project?',
    },
    { type: 'input',
      name: 'usage',
      message:'Provide example or what is this project use for?',
    },
    {
      type:'input',
      name:'contribution',
      message:'if any, provide any contributors to your project?',
    },
    {
      type:'list',
      name:'license',
      choices:['Apache license 2.0', 'Boost Software License 1.0', 'MIT', 'Mozilla Public License 2.0',
       'Open Software License 3.0', 'The Unlicense', 'gnu gpl-3.0'],
      message: 'Choose a license used for this project?',
    },
    { type:'input',
      name:'github',
      message:'Enter your GitHub Username',
    },
    { type: 'input',
      name: 'email',
      message: 'What is your email?',
    },
  ])
  .then((answers) => {
    const readmeContent = teLaDejoCaer(answers);
    writeToFile("readme.md", readmeContent)
  });

  


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
