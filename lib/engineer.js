const Employee = require("./employee.js");

class Engineer extends Employee {
    constructor(name,id,email,github,engineerBlock){
    super(name,id,email)
    this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
        
    }


 module.exports = Engineer;