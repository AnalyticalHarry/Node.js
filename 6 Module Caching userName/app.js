const UserName = require('./userName');

const user = new UserName('Harry');
console.log(user.getName());
// method chaining
console.log(user.setName('Jane').getName()); 
console.log(user.getName());