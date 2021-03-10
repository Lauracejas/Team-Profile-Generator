// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 1234;
    const employ = new Manager('Names', 1, 'test@test.com', testValue);
    expect(employ.officeNumber).toEqual(testValue);
});

test('getRole() should return "Manager"', () => {
    const testValue = "Manager";
    const employ = new Manager('Names', 1, 'test@test.com', 1234);
    expect(employ.getRole()).toEqual(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 1234;
    const employ = new Manager('Names', 1, 'test@test.com', 1234);
    expect(employ.getOffice()).toEqual(testValue);
});
