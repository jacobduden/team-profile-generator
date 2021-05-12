const Employee = require("../lib/employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
    super (name, id, email);
    this.title = "Engineer";
    this.gitHub = gitHub;
}

getGithub(){
    return this.gitHub;
}

getRole(){
    return this.title;
}
}

module.exports = Engineer