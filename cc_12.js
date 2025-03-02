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
metricCardArray.forEach(card => {
    card.innerHTML += '-Updated';
    card.style.backgroundColor = 'lightpink'; // Change background color
});