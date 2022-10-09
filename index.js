const { Person } = require("./person");

// require("./modules/path");
// require("./modules/fs");
require("./modules/http");

const person = new Person("Enmanuel");


console.log(person.sayMyName());