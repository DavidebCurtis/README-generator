const inquirer = require("inquirer");
const generatePage = require("./src/README-template.js");
const { writeFile } = require("./utils/generate-README.js");
const fs = require("fs");

const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "githubname",
      message: "What is your Github username?",
      validate: (githubUsernameInput) => {
        if (githubUsernameInput) {
          return true;
        } else {
          console.log("Please enter your Github username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your Email Address?",
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your Email Address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "projectname",
      message: "Please enter your project's name",
      validate: (projectInput) => {
        if (projectInput) {
          return true;
        } else {
          console.log("Please enter your project username.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "description",
      message: "Please enter a short description of your project",
      validate: (descriptionInput) => {
        if (descriptionInput) {
          return true;
        } else {
          console.log("Please enter a description.");
          return false;
        }
      },
    },
    {
      type: "checkbox",
      name: "license",
      message: "What kind of license should your project have?",
      choices: ["MIT", "isc"],
      validate: (licenseInput) => {
        if (licenseInput) {
          return true;
        } else {
          console.log("Please enter what license your project should have.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?",
      validate: (dependenciesInput) => {
        if (dependenciesInput) {
          return true;
        } else {
          console.log(
            "Please enter what command should be run to install dependencies."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "tests",
      message: "What command should be run to run tests?",
      validate: (testsInput) => {
        if (testsInput) {
          return true;
        } else {
          console.log("Please enter what command should be run to run tests.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "using",
      message: "What does the user need to know about running the repo?",
      validate: (usingInput) => {
        if (usingInput) {
          return true;
        } else {
          console.log(
            "Please enter what the user need to know about running the repo."
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "contributing",
      message:
        "What does the user need to know about contributing to the repo?",
      validate: (contributingInput) => {
        if (contributingInput) {
          return true;
        } else {
          console.log(
            "Please enter what the user need to know about contributing to the repo."
          );
          return false;
        }
      },
    },
  ]);
};

promptUser()
  .then((data) => {
    console.log(data);
    return generatePage(data);
  })
  .then((READMEtemplate) => {
    return writeFile(READMEtemplate);
  });
