// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')

// this is the object from which the license prompt choices will be pulled.
const licenses = {
  'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
  'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  'Creative Commons Attribution 4.0 International': '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)'
}





// // TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    message: 'Enter the project title: ',
    name: 'title',
  },
  {
    type: 'input',
    message: "Enter the project discription: ",
    name: 'description',
  },
  {
      type: 'input',
      message: 'Enter the installation instructions: ',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter the usage information: ',
      name: 'usage',
    },
    {
    type: 'list',
    message: 'Choose the license: ',
    name: 'license',
    choices: Object.keys(licenses),
    },
    {
        type: 'input',
        message: 'Enter the contributing: ',
        name: 'contributing',
      },
      {
        type: 'input',
        message: "Enter the tests: ",
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Enter your Github username: ',
        name: 'username',
      },
      {
          type: 'input',
          message: 'Enter your email address: ',
          name: 'email',
        },
];


// this is the section that determines the contents that will be added to the readme based on user responses to inquirer prompts
inquirer
    .prompt(questions)
    .then((data) => {
        const chosenLicense = licenses[data.license];

        var readMe = `# ${data.title}${chosenLicense}\n## Description\n${data.description}\n## Contents\n 1.[Description](##Description)\n 2.[Installation](##Installation)\n 3.[Usage](##Usage)\n 4.[License](##License)\n 5.[Contributing](##Contributing)\n 6.[Tests](##Tests)\n 7.[Contact](##Contact)\n## Installation\n${data.installation}\n## Usage\n${data.usage}\n## License\n${data.license}\n## Contributing\n${data.contributing}\n## Tests\n${data.tests}\n## Contact Me\nContact me by finding me on GitHub at https://github.com/users/${data.username} \nYou can also reach me by sending me an email at: ${data.email}`

// this is the filesystem method that generates the readme and appends the contents of the variable "readme"
            fs.writeFile('README.md', readMe, 
            (err) =>
            err ? console.error(err) : console.log('ReadMe Generated!'))
        })

