

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
            return 'Employee name is required.'
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
              return 'Enter employee ID.'
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
              return 'Enter employee email.'
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
  
};