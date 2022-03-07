// const generateDescription = (descrptionText) => {
//   if (!descrptionText) {
//     return "";
//   }

//   return `
//   # Description
//   ${descrptionText}
//   `;
// };

const generateLicense = (licenseText) => {
  if (licenseText == "MIT") {
    return `
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
`;
  } else {
    return `
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
`;
  }
};

module.exports = (templateData) => {
  const { license, ...answer } = templateData;
  return `# ${answer.projectname}
${generateLicense(license)}
## Description
${answer.description}

## Table of Contents
[Installation](#installation)

## Installation
\`\`\`${answer.dependencies}\`\`\`

## Usage
${answer.using}

## License
This project is licensed under the ${license} license

## Contributing
${answer.contributing}

## Tests
To run tests, run the following command:
\`\`\`${answer.tests}\`\`\`

## Questions
If you have any questions about the repo, open an issue or contact me directly at [${
    answer.email
  }](mailto:${answer.email}). You can find mor of my work at [${
    answer.githubname
  }](https://github.com/${answer.githubname})
`;
};

// ${generateDescription(description)}
