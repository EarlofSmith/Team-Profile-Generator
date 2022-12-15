const Employee = require('./employee')

class Intern extends Employee {
    constructor (name, id, email, position, school) {
        super (name, id, email, position)
        this.school = school;
    }

    grabSchool() {
        return this.school
    }
}

// export
module.exports = Intern