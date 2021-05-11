
const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

test("creates a new employee object", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
});

test("set name using constructor arguments", () => {
    const name = "Jacob";
    const employee = new Employee(name);
    expect(employee.name).toBe(name)
});

test("Set ID using constructor arguments", () => {
    const id = 10;
    const employee = new Employee("Jacob", id);
    expect(employee.id).toBe(id);
});

test("Set email using constructor arguments", () => {
    const email = "test@test.com";
    const employee = new Employee("jacob", 10, email);
    expect(employee.email).toBe(email);
});

test("can get name with getName();", () => {
    const name = "jacob";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

test("can get id using getId()", () => {
    const id = 10;
    const employee = new Employee("Jacob", id);
    expect(employee.getId()).toBe(id);
});

test("can get email using getEmail()", () => {
    const email = "test@test.com";
    employee = new Employee("Jacob", 10, email);
    expect(employee.getEmail()).toBe(email);
});

test("get role should get title", () => {
    const title = "Employee";
    const employee = new Employee("Jacob", 10, "test@test.com");
    expect(employee.getRole()).toBe(title);
});