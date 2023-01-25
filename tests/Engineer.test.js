const Engineer = require("../lib/engineer");
// apparently toBe is better for an absolute comparison will change later
describe("Engineer",() => {
    it("should display an engineers name, id, email from super and a GitHub username", () => {
        const githubUserValue = "DavidsGithub";
        const engineer = new Engineer("David", 1, "David@gmail.com", githubUserValue);
        expect(engineer.github).toEqual(githubUserValue);
    })

    describe("getGithub()", () => {
        it("should give the username for the engineer", () => {
            const githubUserValue = "DavidsGithub";
            const engineer = new Engineer("David", 1, "David@gmail.com", githubUserValue);
            expect(engineer.getGithub()).toEqual(githubUserValue)
        })
    })

    describe("getRole()", () => {
        it("it should return the role Engineer", () => {
            const roleValue = "Engineer";
            const engineer = new Engineer("David", 1, "David@gmail.com", "DavidsGithub");
            expect(engineer.getRole()).toEqual(roleValue)
        })
    })
});