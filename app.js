const inputDiv = document.querySelector(".search-text");
const searchBtn = document.querySelector(".search-btn");
const cardImg = document.querySelector(".food-img");
const imgContent = document.querySelector(".food-sub-title");
const ingredientsList = document.querySelector(".ingredients");
const recipeBtn = document.querySelector(".view-recipe-btn");
const instructions = document.querySelector(".instructionsX");
const exitBtn = document.querySelector(".fa-times");
const strInstructions = document.querySelector(".strInstructions");



// strInstructions




async function recipe() {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputDiv.value}`);

    const response = await api.json();
    console.log(response);

    // Yemek resmini ve adını güncelle
    cardImg.src = response.meals[0].strMealThumb;
    imgContent.innerHTML = response.meals[0].strMeal;

    // Malzemeleri görüntüle
    displayIngredients(response.meals[0]);



}

searchBtn.addEventListener("click", recipe);

function displayIngredients(meal) {
    // Önce mevcut içeriği temizle
    ingredientsList.innerHTML = "";

    // Malzemeleri listele
    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        // Malzeme ve ölçüsü boş değilse ekle
        if (meal[ingredientKey] && meal[ingredientKey].trim() !== "") {
            const ingredientItem = document.createElement("li");
            ingredientItem.textContent = `${meal[measureKey]} ${meal[ingredientKey]}`;
            ingredientsList.appendChild(ingredientItem);
        }
    }
}


function viewRecipe(){
    console.log("aaa");
    instructions.style.display = "block";
    strInstructions.innerHTML = response.meals[0].strMeal;

}


function invisibleIns(){
    instructions.style.display = "none";

}