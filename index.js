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
        name: 'manager-name',
        message: "What is the manager's name?"
    },
    {
        type: "input",
        name: 'manager-id',
        message: "What is the managers employee ID number?"
    },
    {
        type: "input",
        name: "manager-email",
        message: "What is the manager's email address?"
    },
    {
        type: "input",
        name: "office-number",
        message: "What is the office number?"
    }
])
.then(function(data){
    const email = data.email;
    const name = data.name;
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
        name: "engineer-name",
        message: "What is the engineer's name?"
    },
    {
        type: "input",
        name: "engineer-id",
        message: "What is the engineer's ID number?"
    },
    {
        type: "input",
        name: "engineer-email",
        message: "what is the engineer's email address?"
    },
    {
        type: "input",
        name: "engineer-github",
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
        name: "intern-name",
        message: "What is the intern's name?"
    },
    {
        type: "input",
        name: "intern-id",
        message: "What is the intern's ID number?"
    },
    {
        type: "input",
        name: "intern-email",
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
 
function formTeam() {

}
managerQuestions();



