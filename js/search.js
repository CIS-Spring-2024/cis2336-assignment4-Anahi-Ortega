// Get the search bar and accordion elements
const searchBar = document.getElementById('searchBar');
const accordionItems = document.querySelectorAll('.accordion-item');

// Function to handle the search
function handleSearch() {
    const query = searchBar.value.toLowerCase();

    // Iterate through each accordion item
    accordionItems.forEach((accordionItem) => {
        // Get the accordion body and menu item within it
        const accordionBody = accordionItem.querySelector('.accordion-body');
        const menuItem = accordionBody.querySelector('.menu-item');
        
        // Find the dish name and ingredients
        const dishName = menuItem.querySelector('h4').textContent.toLowerCase();
        const ingredients = Array.from(menuItem.querySelectorAll('ul li')).map(li => li.textContent.toLowerCase());
        
        // Check if the query matches the dish name or any ingredient
        const isMatch = dishName.includes(query) || ingredients.some(ingredient => ingredient.includes(query));
        
        // Show or hide the accordion item based on the match
        if (isMatch) {
            // If the query matches, show the accordion item
            accordionItem.style.display = 'block';
            // Ensure the accordion is open
            const button = accordionItem.querySelector('.accordion-button');
            button.setAttribute('aria-expanded', 'true');
            const collapseElement = accordionItem.querySelector('.accordion-collapse');
            collapseElement.classList.add('show');
        } else {
            // If the query doesn't match, hide the accordion item
            accordionItem.style.display = 'none';
            // Collapse the accordion
            const button = accordionItem.querySelector('.accordion-button');
            button.setAttribute('aria-expanded', 'false');
            const collapseElement = accordionItem.querySelector('.accordion-collapse');
            collapseElement.classList.remove('show');
        }
    });
}

// Add event listener to the search bar
searchBar.addEventListener('input', handleSearch);
