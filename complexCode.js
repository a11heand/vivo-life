// complexCode.js - A complex code demonstrating advanced concepts in JavaScript

/**
 * This code demonstrates a complex implementation of a website's shopping cart functionality.
 * It includes features like adding and removing items, calculating total price, applying discounts, and more.
 * The code is organized into multiple JavaScript modules and uses modern JavaScript features.
 */

// Module 1: ShoppingCart
// Implements the shopping cart functionality

const ShoppingCart = (() => {
  // Private variables
  const cart = [];
  const taxRate = 0.1;
  let discount = 0;

  // Private methods
  const calculateTotalPrice = () => {
    const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const tax = subtotal * taxRate;
    const totalPrice = subtotal + tax - discount;
    return totalPrice.toFixed(2);
  };

  // Public methods
  const addItem = (item) => {
    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      cart.push(item);
    }
  };

  const removeItem = (itemId) => {
    const index = cart.findIndex((item) => item.id === itemId);
    if (index !== -1) {
      cart.splice(index, 1);
    }
  };

  const applyDiscount = (amount) => {
    discount = amount;
  };

  const clearCart = () => {
    cart.length = 0;
    discount = 0;
  };

  return {
    addItem,
    removeItem,
    applyDiscount,
    clearCart,
    calculateTotalPrice,
  };
})();

// Module 2: Products
// Provides a list of available products

const Products = (() => {
  // Private variables
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    // ... more products
  ];

  // Public methods
  const getProducts = () => {
    return products;
  };

  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return {
    getProducts,
    getProductById,
  };
})();

// Usage example
ShoppingCart.addItem({ id: 1, quantity: 2 });
ShoppingCart.addItem({ id: 2, quantity: 1 });
ShoppingCart.addItem({ id: 3, quantity: 3 });
console.log("Total Price:", ShoppingCart.calculateTotalPrice());

ShoppingCart.applyDiscount(5);
console.log("Total Price with Discount:", ShoppingCart.calculateTotalPrice());

ShoppingCart.removeItem(2);
console.log("Total Price after removing item:", ShoppingCart.calculateTotalPrice());

ShoppingCart.clearCart();
console.log("Total Price after clearing cart:", ShoppingCart.calculateTotalPrice());

const sampleProduct = Products.getProductById(1);
console.log("Sample product:", sampleProduct);

const allProducts = Products.getProducts();
console.log("All products:", allProducts);

// ... more code related to the shopping cart and products

// Note: This is a simplified example and may not include all necessary error handling or validation.