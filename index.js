const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');

let workTeam = [];

function managerQuestions() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: 'id',
        message: "What is the managers employee ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the office number?"
    }
])
.then(function(data){
    const email = data.email
    const name = data.name
    const officeNumber = data.officeNumber
    const id = data.id
    const newMember = new Manager(name, id, email, officeNumber)
    workTeam.push(newMember)
    options();

})
}

function options() {
    inquirer.prompt([
{
    type: "list",
    name: "select",
    message: "What would you like to add?",
    choices: ["Engineer", "Intern", "Done!"]
}
])
.then(function(data){
    switch (data.select) {
        case "Engineer":
            engineerQuestions();
            break;
        
        case "Intern":
            internQuestions();
            break;
        
        case "Done!":
            formTeam();
            break;
    }
})
}

function engineerQuestions() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "what is the engineer's email address?"
    },
    {
        type: "input",
        name: "gitHub",
        message: "What is the engineer's Github username?"
    },
])
.then(function(data){
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const gitHub = data.gitHub;
    const newMember = new Engineer(name, id, email, gitHub);
    workTeam.push(newMember)
    options();
})
}

function internQuestions() {
    inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's ID number?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email address?"
    },
    {
        type: "input",
        name: "school",
        message: "What school is the intern attending?"
    },
])
.then(function(data){
    const name = data.name;
    const id = data.id;
    const email = data.email;
    const school = data.school;
    const newMember = new Intern(name, id, email, school);
    workTeam.push(newMember)
    options();
})
}

 const htmlArr = [];
function formTeam() {
const htmlTop =`
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../htmlTest/style.css">
    <title>Work Team</title>
</head>

<body>
    <div class="container">
        <header class="header">
            <h1>Team Members</h1>
        </header>
        `
        htmlArr.push(htmlTop)
            for (var i = 0; i< workTeam.length; i++){
let htmlBottom = `
            
        <div class="row">
            <div class="column">
                <div class="test-card">
                    <h1>${workTeam[i].title}</h1>
                    <p>Team member's Name: ${workTeam[i].name}</p>
                    <p>Team member's ID: ${workTeam[i].id}</p>
                    <p>Email: <a href = "mailto: ${workTeam[i].email}">${workTeam[i].email}</a></p>
                    `
                    if(workTeam[i].gitHub){
                        htmlBottom += `
                        <p>GitHub link: <a href="https://github.com/${workTeam[i].gitHub}">${workTeam[i].gitHub}</a></p> 
                        `
                    }
                    if(workTeam[i].school){
                        htmlBottom += `
                        <p>School attended: ${workTeam[i].school}</p> 
                        `
                    }
                    if(workTeam[i].officeNumber){
                        htmlBottom += `
                        <p>Officenumber: #${workTeam[i].officeNumber}</p> 
                        `
                    }
                    htmlArr.push(htmlBottom)
                    const htmlEnd = `
                </div>
            </div>
        </div>
    </div>
</body>

</html>
`
htmlArr.push(htmlEnd)


}
fs.writeFile(`./generate-html/${workTeam[0]}.html`, htmlArr.join(""), function(err){
    console.log(err)
    })
}
managerQuestions();