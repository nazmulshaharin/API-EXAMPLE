const searchFood = async () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  //console.log(searchText);
  searchField.value = '';
  const error = document.getElementById('error-something');
  if(searchText == ''){
    // please write something display
  error.style.display = 'block';
  }

  else {
     //load data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  //console.log(url)

  const res = await fetch(url);
  const data = await res.json();
  displaySearchResult(data.meals);
  //fetch(url)
  //.then(res => res.json())
  //.then(data => displaySearchResult(data.meals))
  }

 /*  //load data
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
  //console.log(url)
  fetch(url)
  .then(res => res.json())
  .then(data => displaySearchResult(data.meals)) */
}

const displaySearchResult = meals => {
  //console.log(meals);
  const searchResult = document.getElementById('search-result');
  searchResult.textContent = ''  // এটা search result  কে ক্লীয়ার করার জন্য
  //or 
  //searchResult.innerHTML = ''
  const resultError = document.getElementById('no-result');
if(meals.length == 0){
  // show no result
  resultError.style.display = 'block';
}
  meals.forEach(meal => {
    //console.log(meal)
//
const div = document.createElement('div');
div.classList.add('col');
div.innerHTML = `
<div onClick="loadMealDetail(${meal.idMeal})" class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
        </div>
      </div>
`
searchResult.appendChild(div)
  })
}

const loadMealDetail = async mealId => {
  //console.log(mealId);

  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayMealDetail(data.meals[0])
  // fetch(url)
  // .then(res => res.json())
  // .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
  console.log(meal);

  const mealDetails = document.getElementById('meals-detail');
  mealDetails.textContent = '';
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
    <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
  </div>
  `;
  mealDetails.appendChild(div);
}

document.getElementById('closeButton').addEventListener('click', function(){
  const error = document.getElementById('error-something');
  error.style.display = 'none'
})

document.getElementById('result').addEventListener('click', function(){
  const anotherErrpr = document.getElementById('no-result');
  anotherErrpr.style.display = 'none';
})