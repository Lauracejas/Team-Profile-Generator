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

// HINT: make sure to renderHTML out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

const teamMembers = [];

const ManagerData = [
    {
        type: "input",
        message: "What is the team manager's name?: ",
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
    }]

const addMember = {
    type: 'list',
    message: 'Wich type of team member would you like to add?: ',
    choices: ["Intern", "Engineer", "I don't want to add any more team members."],
    name: 'memberRole',
};

const EngineerData = [
    {
        type: "input",
        message: "What is the Engineers name?: ",
        name: "engineerName",
    },
    {
        type: "number",
        message: "What is your Engineer ID number?: ",
        name: "engineerId",
    },
    {
        type: "type",
        message: "What is your Engineer's email address?: ",
        name: "engineerEmail",
    },
    {
        type: "type",
        message: "What is your Engineer's GitHub username?: ",
        name: "github",
    },
]

const internData = [
    {
        type: "input",
        message: "What is the Intern's name?: ",
        name: "internName",
    },
    {
        type: "number",
        message: "What is your Intern's ID number?: ",
        name: "internId",
    },
    {
        type: "type",
        message: "What is your Intern's email address?: ",
        name: "internEmail",
    },
    {
        type: "type",
        message: "What is your Intern's school?: ",
        name: "school",
    },
]

function enterManagerData() {
    inquirer.prompt(ManagerData)
        .then((data) => {
            //console.log(data);
            let manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
            //console.log(manager);
            teamMembers.push(manager);

            addTeamMember();
        });
}

function addTeamMember() {
    inquirer.prompt(addMember)
        .then((data) => {
            if (data.memberRole === "Engineer") {
                inquirer.prompt(EngineerData)
                    .then((data) => {
                        let engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.github);
                        teamMembers.push(engineer);
                        addTeamMember();
                    });
            } else if (data.memberRole === "Intern") {
                inquirer.prompt(internData)
                    .then((data) => {
                        let intern = new Intern(data.internName, data.internId, data.internEmail, data.school);
                        teamMembers.push(intern);
                        addTeamMember();
                    })
            } else {
                renderHTML(teamMembers);
            }
        })
}




async function renderHTML(file) {
const htmlPage = render(file);
expect(fs.writeFileSync).lastCalledWith(outputPath, htmlPage);

//     if (!fs.existsSync(OUTPUT_DIR)) {
//         fs.mkdirSync(OUTPUT_DIR);
//     }
//     fs.writeFileSync(outputPath, render(teamMembers));
}
enterManagerData();