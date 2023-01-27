const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const fs = require("fs");
const inquirer = require("inquirer");

const generateEmployee = require("./src/generateEmployeeHTML.js");
const generateEmployeeCSS = require("./src/generateEmployeeHTML.js");

const questions = [
        {
            type: "input",
            name: "name",
            message: "What is you employees name?",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("Must include a name");
                }
                        return true;
                }
        },
        {
            type: "list",
            name: "role",
            message: "What is your employees role?",
            // validate: function (data) {
            //     if (data.length < 1) {
            //         return console.log("Must include a role");
            //     }
            //             return true;
            //     }
            choices: ["Manager", "Engineer", "Intern"],
        },
        {
            type: "input",
            name: "id",
            message: "What is you employees id?",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("Must include an id");
                }
                        return true;
                }
        },
        {
            type: "input",
            name: "email",
            message: "What is you employees email?",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("must include an email so they can be reached");
                }
                        return true;
                }
        },
        {
            when: input => {
                return input.role === "Manager"
            },
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("must include an email so they can be reached");
                }
                        return true;
                }
        },
        {
            when: input => {
                return input.role === "Engineer"
            },
            type: "input",
            name: "github",
            message: "What is the engineers GitHub username?",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("must include a username");
                }
                        return true;
                }
        },
        {
            when: input => {
                return input.role === "Intern"
            },
            type: "input",
            name: "school",
            message: "What is the interns school?",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("must include a school");
                }
                        return true;
                }
        },
        // {
        //     type: "confirm",
        //     name: "anotherEmployee",
        //     message: "Would you like to add another employee to your team?",
        //     validate: function (data) {
        //         if (data === yes) {
        //             return 
        //         }
        //                 return true;
        //         }
        // }
    ];
    
    function writeToFile (fileName, data) {
        fs.writeFile(fileName, data, err => {
            if (err) { 
                return console.log("something went wrong")
            } else {
            console.log("Check out your employee html")
            }
        })
    };

    function init() {
        inquirer.prompt(questions)
        .then(function(data) {
            console.log(data);
            writeToFile("./dist/Employee-team.html", generateEmployee(data));
                // .then(function(data))
            // writeToFile("./dist/Employee-team.css", generateEmployeeCSS());
        })
    };

    init();
