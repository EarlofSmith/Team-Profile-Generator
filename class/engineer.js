const Employee = require('./employee')

class Engineer extends Employee {
    constructor (name, id, email, position, gitHub) {
        super (name, id, email, position)
        this.gitHub = gitHub;
    }

    grabGitHub() {
        return this.gitHub;
    }
}

// export
module.exports = Engineer