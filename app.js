const inputDiv = document.querySelector(".search-text"); 
const searchBtn = document.querySelector(".search-btn");
const cardImg = document.querySelector(".food-img");
const imgContent = document.querySelector(".food-sub-title");





async function recipe() {
    const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputDiv.value}`);

    const response = await api.json(); 
    console.log(response);
    cardImg.src = response.meals[0].strMealThumb;
    imgContent.innerHTML = response.meals[0].strArea;
}

searchBtn.addEventListener("click", recipe);

