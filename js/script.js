document.addEventListener('DOMContentLoaded', function () {
    // Get the form element
    const orderForm = document.getElementById('orderForm');

    // Event listener for the form submission
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get order data from the form
        const orderData = {
            'Quinoa Stuffed Bell Peppers': parseInt(document.getElementById('quantityPeppers').value),
            'Chickpea Curry Bowl': parseInt(document.getElementById('quantityBowl').value),
            'Eggplant Parmesan': parseInt(document.getElementById('quantityParmesan').value),
            'Roasted Vegetable Tart': parseInt(document.getElementById('quantityTart').value)
            // Add more items as needed
        };

        // Make a POST request to the server
        fetch('/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server
            const totalAmount = data.totalAmount;
            alert(`Order Received! Total Amount: $${totalAmount}`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
