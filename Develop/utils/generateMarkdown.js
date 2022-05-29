// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

    `
  }
  else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

    `
  }
  else if (license === "mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "apache") {
    return `https://opensource.org/licenses/Apache-2.0`
  }
  else if (license === "MIT") {
    return `https://opensource.org/licenses/MIT`
  }
  else if (license === "mozilla") {
    return `https://opensource.org/licenses/MPL-2.0)`
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
1. [Description](#description)
2. [Usage](#usage)
3. [Contributors](#contributors)
4. [Tests](#tests)
5. [Installation](#installation)
6. [Questions](#questions)

## Description
${data.description}

## License
This application is licensed by ${data.license}
${renderLicenseLink(data.license)}

## Usage
${data.usage}

## Contributors
${data.contributing}

## Tests
${data.tests}

## Installation
${data.installation}

## Questions
For info you can reach me at ${data.email} or http//github.com/${data.github}
`;
}

module.exports = generateMarkdown;
