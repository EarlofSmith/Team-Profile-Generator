// creating a constructor class to cover employees

class Employee {
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.position =position;
    }

    grabName() {
        return this.name
    }

    grabID() {
        return this.id
    }

    grabEmail() {
        return this.email
    }

    grabPosition() {
        return this.position
    }
}

// export this class
module.exports = Employee;