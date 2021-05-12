
const Engineer = require('../lib/engineer');

test('tests to see if github username is stored', () =>{
    const testing = "gitHub";
    const employee = new Engineer("Jacob", 10, "test@test.com", testing)
    expect(employee.gitHub).toBe(testing);
});

test("getRole(); should pull up 'Engineer'", () => {
    const testing = "Engineer"
    const employee = new Engineer("Jacob", 10, "test@test.com", testing);
    expect(employee.getRole()).toBe("Engineer");
});

test("can get GitHub username using getGithub();", () =>{
    const testing = "gitHub";
    const employee = new Engineer("Jacob", 10, "test@test.com", testing)
    expect(employee.getGithub()).toBe(testing);
})