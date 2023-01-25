const Manager = require("../lib/manager");
// const Employee = require("./employee");
// apparently toBe is better for an absolute comparison will change later
describe("Manager",() => {
    // describe("Initialization", () => { realized this was just for that arithmatic values
    it("should display a managers name, id, email from super and an office number", () => {
        const officeNumberValue = 425-333-3333;
        const manager = new Manager("David", 1, "David@gmail.com", officeNumberValue);
        expect(manager.officeNumber).toEqual(officeNumberValue);
        })
    // })

    describe("getOfficeNumber()", () => {
        it("should give an office number for a manager", () => {
            const officeNumberValue = 425-333-3333;
            const manager = new Manager("David", 1, "David@gmail.com", officeNumberValue);
            expect(manager.getOfficeNumber()).toEqual(officeNumberValue);
        })
    })

    describe("getRole()", () => {
        it("should return the role Manager", () => {
            const roleValue = "Manager";
            const manager = new Manager("David", 1, "David@gmail.com", 425-333-3333);
            expect(manager.getRole()).toEqual(roleValue);
        })
    })
});