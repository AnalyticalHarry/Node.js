// cart module has been loaded
console.log('Cart module loaded');

// an empty array to store products in the cart
let products = [];

// add a product to the cart
const addItem = (product) => {
    // push the given product object into the products array
    products.push(product);
}

// remove a product from the cart by its name
const removeItem = (productName) => {
    // filter out the product with the given name from the products array
    products = products.filter(product => product.name !== productName);
}

// Function to retrieve all items currently in the cart
const getItems = () => {
    // return the array of products currently in the cart
    return products;
}

// total price of all items in the cart
const getTotal = () => {
    // reduce method to sum up the prices of all products in the cart
    return products.reduce((total, product) => {
        return total + product.price;
    }, 0);
}

// export the functions so they can be used by other modules
module.exports = {
    addItem,
    removeItem,
    getItems,
    getTotal
};
