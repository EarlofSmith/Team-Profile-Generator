const Employee = require('./employee')

class Manager extends Employee {
    constructor (name, id, email, position, office) {
        super (name, id, email, position)
        this.office = office;
    }

    grabOffice() {
        return this.office;
    }
}

module.exports = Manager;