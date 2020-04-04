const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_MealEl = document.getElementById('single-meal');

// Event listeners
submit.addEventListener('submit', searchMeal);
