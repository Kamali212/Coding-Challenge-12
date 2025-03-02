// Task 1 Business Dashboard – DOM Element Selection and Creation
const dashboardID = document.getElementById('dashboard'); // Selecr dashboard 
const dashboardQuery = document.getElementById('dashboard'); // Select dashboard

const revenueCard = document.createElement('div'); // Create element
revenueCard.setAttribute('class', 'revenueCard'); // Set attribute
revenueCard.setAttribute('id', 'metric-card'); // Set attribute
dashboardQuery.appendChild(revenueCard); // Append metric

