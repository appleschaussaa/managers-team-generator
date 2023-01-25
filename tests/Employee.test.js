const Employee = require("../lib/employee");
// apparently toBe is better for an absolute comparison will change later
describe("Employee", () => {
    it("should be determinded by employee class in Employee.js", () => {
        const employee = new Employee();
        expect(typeof(employee)).toEqual("object");
    })

    describe("Employee name", () => {
        it("should be the employees name", () => {
            const name = "David"
            const employee = new Employee(name);
            expect(employee.name).toEqual(name);
        })
    })

    describe("Employee id", () => {
        it("should be the employees id", () => {
            const idValue = 1;
            const employee = new Employee("David", idValue);
            expect(employee.id).toEqual(idValue);
        })
    })

    describe("Employee email", () => {
        it("should be the employees email", () => {
            const emailValue = "David@gmail.com";
            const employee = new Employee("David", 1, emailValue);
            expect(employee.email).toEqual(emailValue);
        })
    })
    
    describe("getName()", () => {
        it("should return the employees name", () => {
            const nameValue = "David";
            const employee = new Employee(nameValue);
            expect(employee.getName()).toEqual(nameValue);
        })
    })

    describe("getId()", () => {
        it("should return the employees email", () => {
            const idValue = 1;
            const employee = new Employee("David", idValue);
            expect(employee.getID()).toEqual(idValue);
        })
    })

    describe("getEmail()", () => {
        it("should return the employees email", () => {
            const emailValue = "David@gmail.com";
            const employee = new Employee("David", 1, emailValue);
            expect(employee.getEmail()).toEqual(emailValue);
        })
    })

    describe("getRole()", () => {
        it("should return the employees role", () => {
            const roleValue = "Employee";
            const employee = new Employee("David", 1, "David@gmail.com");
            expect(employee.getRole()).toEqual(roleValue);
        })
    })
});
