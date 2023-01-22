const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
    }

    getSchool() {

    }

    getRole() {

    }
}

module.exports = Intern;