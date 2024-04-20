const cart = require('./cartModule');
// add items to the cart
cart.addItem({ name: 'Laptop', price: 1000, quantity: 1 });
cart.addItem({ name: 'Mouse', price: 20, quantity: 2 });
cart.addItem({ name: 'Keyboard', price: 100, quantity: 1 });

// items
console.log('Items in Cart:', cart.getItems());

// total
console.log('Total:', cart.getTotal());

// remove an item and display the new total
cart.removeItem('Mouse');
console.log('Items after removal:', cart.getItems());
console.log('New Total:', cart.getTotal());
