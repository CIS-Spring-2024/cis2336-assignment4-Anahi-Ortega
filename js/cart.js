document.addEventListener('DOMContentLoaded', function () {
    // Get quantity input fields and cart element
    const quantityInputs = document.querySelectorAll('.quantity-input');
    const cartItems = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');
    const totalMealSwipes = document.getElementById('totalMealSwipes');

    // Initialize cart object to store selected items and quantities
    let cart = {};

    // Define menu items with their names and prices
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

    // Function to update cart
    function updateCart() {
        // Clear cart and meal swipes
        cartItems.innerHTML = '';
        let totalPrice = 0;
        let totalSwipes = 0;

        // Loop through each item in the cart and display in the cart
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

        // Display total amount and meal swipes
        totalAmount.textContent = `Total: $${totalPrice.toFixed(2)}`;
        totalMealSwipes.textContent = `Total Meal Swipes: ${totalSwipes}`;
    }

    // Function to get price of an item
    function getItemPrice(item) {
        const menuItem = menuItems.find(menuItem => menuItem.name === item);
        return menuItem ? menuItem.price : 0;
    }

    // Event listeners for quantity input fields to update cart
    quantityInputs.forEach(input => {
        input.addEventListener('change', function () {
            const itemName = input.dataset.item;
            const quantity = parseInt(input.value);
            cart[itemName] = quantity;
            updateCart();
        });
    });
});
