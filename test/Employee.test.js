// Starter file provided by Instructor (03/09/2021) AC
//const { expect } = require("@jest/globals")
const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employ = new Employee();
    expect(typeof (employ)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = 'Laura';
    const employ = new Employee(name);
    expect(employ.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 1234;
    const employ = new Employee('Names', testValue);
    expect(employ.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = 'test@test.com'
    const employ = new Employee('Names', 1, testValue);
    expect(employ.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = 'Laura';
    const employ = new Employee(testValue);
    expect(employ.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = '1234';
    const employ = new Employee('Names', testValue);
    expect(employ.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = 'test@test.com';
    const employ = new Employee('Names', 1, testValue);
    expect(employ.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = 'Employee';
    const employ = new Employee('Laura', 1, 'test@test.com');
    expect(employ.getRole()).toBe(testValue);
});
