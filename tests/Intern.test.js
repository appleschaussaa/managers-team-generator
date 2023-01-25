const Intern = require("../lib/intern");
// apparently toBe is better for an absolute comparison will change later
describe("Intern", () => {
    it("should display the interns name, id, email from super and a school", () => {
        const schoolValue = "UW";
        const intern = new Intern("David", 1, "David@gmail.com", schoolValue);
        expect(intern.school).toEqual(schoolValue);
    })

    describe("getSchool()", () => {
        it("should give you the interns school", () => {
            const schoolValue = "UW";
            const intern = new Intern("David", 1, "David@gmail.com", schoolValue);
            expect(intern.getSchool()).toEqual(schoolValue);
        })
    })

    describe("getRole()", () => {
        it("should return the role Intern", () => {
            const roleValue = "Intern";
            const intern = new Intern("David", 1, "David@gmail.com", "UW");
            expect(intern.getRole()).toEqual(roleValue);
        })
    })
});