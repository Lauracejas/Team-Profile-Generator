// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const teamMembers = [];
function enterNewMember() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the managers name?: ",
            name: "managerName",

        },
        {
            type: "number",
            message: "What is your ID number?: ",
            name: "managerId",

        },
        {
            type: "input",
            message: "What is your email address?: ",
            name: "managerEmail",

        },
        {
            type: "input",
            message: "What is your office number?: ",
            name: "officeNumber",
        }
    ])
        .then((data) => {
            //console.log(data);

            const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
            console.log(manager);
            teamMembers.push(manager);
            // TODO: Create a function to write README file
            // const filename = data.title.replace(' ', "").toLowerCase()
            // fs.writeFile(`${filename}.md`, generateMarkdown(data), (err) =>
            // err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
        })
    build();
}
function build() {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(teamMembers));
}
enterNewMember();