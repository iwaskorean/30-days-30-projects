const button = document.querySelector('.button-primary');
const mealDescription = document.querySelector('.container .description');
const mealDetail = document.querySelector('.container .detail');
const mealIngredients = document.querySelector('.container .ingredients');
const mealVideo = document.querySelector('.container .video');
let image = '';

button.addEventListener('click', ()=> {    
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(response => {
    getMeal(response.meals[0]);
    // console.log(response);
    });
});

const getMeal = result => {
    const ingredientList = [];
    
    image = `
        <img src=${result[`strMealThumb`]} alt="image error" />
    `;

    const description = () => {
       return `
        <h2>${result[`strMeal`]}</h2>
        <p>${result[`strInstructions`]}</p>
       `;
    };

    const ingredients = () => {
        for(let i=1; i<=20; i++) {
            if(result[`strIngredient${i}`]) {
                ingredientList.push(`<li>${result[`strIngredient${i}`]} : ${result[`strMeasure${i}`]}</li>`);
            } else {
                const text = ingredientList.join("")
                return `
                    <h2>ingredients</h2>
                    ${text}
                `;
            };
        };
    };

    const video = () => {
        return `
            <h2>Video Recipe</h2>
            <iframe class="youtube" src="https://www.youtube.com/embed/${result.strYoutube.slice(-11)}">
            </iframe>
        `;
    };

    mealDescription.innerHTML = description();    
    mealDetail.innerHTML = image;
    mealVideo.innerHTML = video();
    mealIngredients.innerHTML = ingredients();
};







