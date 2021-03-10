// Starter file provided by Instructor (03/09/2021) AC

const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
    const testValue = 'GitHub';
    const employ = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(employ.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = 'Engineer';
    const employ = new Engineer('Foo', 1, 'test@test.com', 'GitHub');
    expect(employ.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
    const testValue = 'GitHub';
    const employ = new Engineer('Foo', 1, 'test@test.com', testValue);
    expect(employ.getGitHub()).toBe(testValue);
});
