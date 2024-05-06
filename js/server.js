const { createServer } = require('node:http');
const url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  
  if (pathname === '/order') {
    const { item1, item2, item3 } = query; // Assuming item1, item2, and item3 represent quantities of different items

    // Calculate total based on item prices and quantities
    const totalPrice = calculateTotal(item1, item2, item3); // Implement the calculateTotal function
  
    // Send response with order received message and total
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`Order Received!\nTotal: $${totalPrice.toFixed(2)}`);
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Error');
  }
});

function calculateTotal() {
  // Implement your logic to calculate the total based on item quantities and prices
  const menuItems = [
    // spice symphony grill
    { name: 'Chicken', price: 6.99 },
    { name: 'Burger', price: 7.99 },
    { name: 'Noodles', price: 6.99 },
    { name: 'Soup', price: 5.99 },
    // urban spoon
    { name: 'Urban Spoon Signature Salad', price: 5.99 },
    { name: 'Grilled Salmon with Lemon Herb Butter', price: 7.99 },
    { name: 'Urban Spoon Veggie Stir Fry', price: 8.99 },
    { name: 'Classic Beef Lasagna', price: 6.99 },
    // the palate pavillion
    { name: 'Palatial Seafood Paella', price: 8.99 },
    { name: 'Savory Chicken Marsala', price: 7.99 },
    { name: 'Exotic Coconut Curry Bowl', price: 6.99 },
    { name: 'Gourmet Mushroom Risotto', price: 5.99},
    // ember and sage
    { name: 'Smoked Salmon Benedict', price: 8.99 },
    { name: 'Grilled Vegetable Panini', price: 7.99 },
    { name: 'Blackened Shrimp Tacos', price: 6.99 },
    { name: 'Truffle Mushroom Risotto', price: 5.99 },
    // best harvest kitchen
    { name: 'Quinoa Stuffed Bell Peppers', price: 8.99 },
    { name: 'Chickpea Curry Bowl', price: 7.99 },
    { name: 'Eggplant Parmesan', price: 5.99 },
    { name: 'Roasted Vegetable Tart', price: 5.99 },
    // fusion heat
    { name: 'Sushi Burrito', price: 6.99 },
    { name: 'Korean BBQ Tacos', price: 7.99 },
    { name: 'Thai Peanut Ramen', price: 6.99 },
    { name: 'Teriyaki Pizza', price: 5.99 }
];
Object.keys(cart).forEach(item => {
    const quantity = cart[item];
    const itemPrice = getItemPrice(item);
    const itemTotalPrice = quantity * itemPrice;
    totalPrice += itemTotalPrice;
    totalSwipes += quantity; // Increment total swipes by quantity

    const li = document.createElement('li');
    li.textContent = `${item}: ${quantity} x $${itemPrice.toFixed(2)} = $${itemTotalPrice.toFixed(2)}`;
    cartItems.appendChild(li);
});
  return itemTotalPrice;
}

