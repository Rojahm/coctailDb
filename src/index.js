function showCocktail(response) {
  console.log(response);
  document.querySelector("#cocktail-name").innerHTML =
    response.data.drinks[0].strDrink;
  document.querySelector("#cocktail-instruction").innerHTML =
    response.data.drinks[0].strInstructions;
  document.querySelector("#cocktail-img").src =
    response.data.drinks[0].strDrinkThumb;
}
function searchCocktail(event) {
  event.preventdefault();
  let cocktailInputName = document.querySelector("#input-text").value;
  console.log(cocktailInputName);
  let apiUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
  axios.get(`${apiUrl}`).then(showCocktail);
}
let searchForm = document.querySelector("#cocktail-search-form");
searchForm.addEventListener("submit", searchCocktail);
