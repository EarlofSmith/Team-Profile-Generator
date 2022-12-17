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
      message: 'Enter employee name?',
      name: 'name',
      validate: nameInput => {
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
        validate: idInput => {
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
        validate: emailInput => {
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
        teamMembers.push(teamManager);
        addMembers();
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
        teamMembers.push(teamEngineer);
        addMembers();
      })
    }else if (info.position === 'Intern') {
      inquirer.prompt([
        {
          type: 'input',
          message: 'What school was attended?',
          name: 'school',
          validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                return 'Enter what school that was attended.';
            }
          }
        }
      ])
      .then(answer=> {
        console.log(answer.school);
        const teamIntern = new Intern (info.name, info.id, info.email, info.position, answer.school)
        teamMembers.push(teamIntern);
        addMembers();
      })
    }


    function addMembers() {
      inquirer.prompt([
        {
          type: 'confirm',
          message: 'Would you like to add another member to the team?',
          name: 'addMember'
        }
      ])
      .then(add => {
        if(add.addMember === true){
          userData(teamMembers);
        }else{
          console.log('Current Team: ', teamMembers)
        }
      })
    }
  })

};

userData();