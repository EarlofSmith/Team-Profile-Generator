const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./class/manager');
const Engineer = require('./class/engineer');
const Intern = require('./class/intern');


const teamMembers = []
// basic prompt that covers all employees
function userData(){
  inquirer.prompt([
    {
      type: 'input',
      message: 'Enter employees name?',
      name: 'name',
      validate: function (nameInput) {
        if (nameInput) {
            return true;
        } else {
            return 'Employee name is required.';
        }
      }
    },
      {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
        validate: function (idInput) {
          if (idInput) {
              return true;
          } else {
              return 'Enter employee ID.';
          }
        }
      },
      {
        type: 'input',
        message: 'Enter your Email',
        name: 'email',
        validate: function (emailInput) {
          if (emailInput) {
              return true;
          } else {
              return 'Enter employee email.';
          }
        }
      },
      {
        type: 'list',
        message: 'Select employee position',
        name: 'position',
        choices: ["Manager", "Engineer", "Intern"],
      },

  ])
  .then(info => {
    if (info.position === 'Manager') {
      inquirer.prompt([
        {
          type: 'input',
          message: 'Enter office number',
          name: 'office',
          validate: officeInput => {
            if (officeInput) {
                return true;
            } else {
                return 'Enter an office number.';
            }
          }
       }
      ])
      .then(answer => {
        console.log(answer.office);
        const teamManager = new Manager (info.name, info.id, info.email, info.position, answer.office)
        teamMembers.push(teamManager)
      })
    } else if (info.position === 'Engineer'){
      inquirer.prompt([
        {
          type: 'input',
          message: 'Enter GitHub name',
          name: 'gitHub',
          validate: gitHubInput => {
            if (gitHubInput) {
              return true;
            }else {
              return 'Enter a GitHub name'
            }
          }
        }
      ])
      .then(answer => {
        console.log(answer.gitHub);
        const teamEngineer = new Engineer (info.name, info.id, info.email, info.position, answer.gitHub)
      })
    }
  })

};