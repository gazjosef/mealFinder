const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_MealEl = document.getElementById('single-meal');

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_MealEl.innerHTML = '';

  // Get search term
  const term = search.value;

  console.log(term);
}

// Event listeners
submit.addEventListener('submit', searchMeal);
