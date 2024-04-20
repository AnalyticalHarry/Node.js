Classic example of Local Module export & Scope in Node.js, which are similar to python and react. where in python and react we use import but here we use required.

1. Module Scope: Each JavaScript file (db.js, user.js, app.js) is a module that has its own scope. Functions and variables within each module are not accessible from other modules unless they are exported and imported explicitly. For instance, userArray in db.js is not directly accessible from app.js; it is accessed via functions addUser and findUser that are exported from db.js and imported into user.js.

2. Function Scope: Within functions like addUser and findUser, any variables declared inside these functions would be local to them. For example, if you had a temporary variable inside addUser, it wouldn't be accessible from outside this function.

3. Encapsulation: By using exports to share only what is necessary (like functions addUser and findUser), you encapsulate the implementation details. This keeps the userArray private, protecting it from unauthorized access and modification, which is a direct application of scoping principles to manage visibility and maintain integrity.
