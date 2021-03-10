// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = 'UNCC';
    const employ = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(employ.school).toEqual(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = 'Intern';
    const employ = new Intern('Foo', 1, 'test@test.com', 'UNCC');
    expect(employ.getRole()).toEqual(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = 'UNCC';
    const employ = new Intern('Foo', 1, 'test@test.com', testValue);
    expect(employ.getSchool()).toEqual(testValue);
});
