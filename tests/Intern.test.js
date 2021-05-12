const Intern = require('../lib/intern');

test('tests to see if "School" is stored', () =>{
    const testing = "UT";
    const employee = new Intern("Jacob", 10, "test@test.com", "UT")
    expect(employee.school).toBe(testing);
});

test("tests to see if title 'Intern' is stored", () =>{
    const testing = "Intern";
    const employee = new Intern("Jacob", 10, "testing@testing.com", testing);
    expect(employee.title).toBe(testing);
});

test("tests to see if getSchool(); stores school name", () =>{
    const testing = "UT";
    const employee = new Intern("Jacob", 10, "test@test.com", testing);
    expect(employee.getSchool()).toBe(testing);
})