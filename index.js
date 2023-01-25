const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const fs = require("fs");
const inquirer = require("inquirer");

const generateEmployee = require("./src/generateEmployeeHTML");

const questions = 
    inquirer.prompt [
        {
            type: "input",
            name: "",
            message: "",
            validate: function (data) {
                if (data.length < 1) {
                    return console.log("");
                }
                        return true;
                }
        }
    ]
