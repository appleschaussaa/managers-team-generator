const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super (name, id, email);
    }

    getGithub() {

    }

    getRole() {

    }
    
}

module.exports = Engineer;