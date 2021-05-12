
const Manager = require("../lib/manager");

test("tests to see if office number is stored", () =>{
    const testing = 1;
    const employee = new Manager("Jacob", 10, "test@test.com", testing);
    expect(employee.officeNumber).toBe(testing);
})

test("tests to see if getOffice(); stores office number", ()=>{
    const testing = 1;
    const employee = new Manager("Jacob", 10, "test@test.com", testing);
    expect(employee.getOffice()).toBe(testing);
});

test("tests to see if getRole(); stores title 'Manager'", ()=>{
    const testing = "Manager";
    const employee = new Manager("Jacob", 10, "testing@testing.com", testing);
    expect(employee.getRole()).toBe(testing);
})