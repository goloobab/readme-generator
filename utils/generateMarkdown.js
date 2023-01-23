// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${getLicense(data.license)}

  ## Description 

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation) 
  * [Usage](#usage) 
  * [License](#license) 
  * [Contributing](#contributing) 
  * [Tests](#tests) 
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is licensed under the ${data.license} license.

  ## Contributing

  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  * GitHub: [${data.github}](https://github.com/${data.github}/)
  * Email: [Mail](${data.email})



`;
}

function getLicense(license) {
  const licenses = new Map([
    ["APACHE 2.0", "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
    ["CCO", "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"],
    ["GNU v3", "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"],
    ["MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
    ["No License", "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"]
  ])
  
  return licenses.get(license)
}

module.exports = generateMarkdown;
