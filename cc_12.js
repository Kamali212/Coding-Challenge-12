// Task 1 Business Dashboard – DOM Element Selection and Creation
const dashboardID = document.getElementById('dashboard'); // Selecr dashboard 
const dashboardQuery = document.getElementById('dashboard'); // Select dashboard

const revenueCard = document.createElement('div'); // Create element
revenueCard.setAttribute('class', 'revenueCard'); // Set attribute
revenueCard.setAttribute('id', 'metric-card'); // Set attribute
dashboardQuery.appendChild(revenueCard); // Append metric

// Task 2 Updating Dashboard Metrics – Working with NodeLists and Arrays

const metricCard = document.querySelectorAll('.metric-card') // Select metric card
const metricCardArray = Array.from(metricCard) // Turn metric card to array
metricCardArray.forEach(card => { // Array method to update inner text
    card.innerHTML += '-Updated';
    card.style.backgroundColor = 'lightpink'; // Change background color
});

// Task 3: Dynamic Inventory Management – Adding and Removing Items

const inventoryList = document.getElementById('inventoryList');

function addInventoryItem() { // Function to add inventory item 
    const newProduct = document.createElement('li');
    newProduct.setAttribute('class', 'product-item'); // Add a class
    newProduct.addEventListener('click', function () {
        inventoryList.appendChild(newProduct); // Append product 
    });

    inventoryList.removeChild(newProduct) // Remove product item 
};

// Task 4: 

const customerSection = document.getElementById('customerSection');
const customerCards = document.getElementById('customer-card')
