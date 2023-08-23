const recipeId = localStorage.getItem("recipeId");
const deleteBtn = document.getElementById("delete-btn");

const addRecipeToScreen = (recipe) => {
  const title = document.getElementById("title");
  title.innerHTML = recipe.title;

  console.log(recipe);
  const description = document.getElementById("description");
  description.innerHTML = recipe.description;

  const flavor = document.getElementById("flavor");
  flavor.innerHTML = recipe.flavor;

  const ingredients = document.getElementById("ingredients");
  ingredients.innerHTML = recipe.ingredients;

  const instructions = document.getElementById("instructions");
  instructions.innerHTML = recipe.recipe;
  console.log(instructions);
  const calories = document.getElementById("calories");
  calories.innerHTML = recipe.calories;

  const img = document.getElementById("recipe-img");
  img.src = recipe.imgUrl;
};

const getRecipe = async () => {
  const response = await fetch(
    "https://64e3bab0bac46e480e79229a.mockapi.io/snacks/" + recipeId
  );

  const recipe = await response.json();

  addRecipeToScreen(recipe);
};

getRecipe();

deleteBtn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://64e3bab0bac46e480e79229a.mockapi.io/snacks/" + recipeId,
      {
        method: "DELETE",
      }
    );

    const data = await response.json();

    if (data) {
      const infoMessage = document.getElementById("info-msg");
      infoMessage.innerHTML = "Snack was deleted.";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 3000);
    }
  } catch (err) {
    console.log(err);
    const infoMessage = document.getElementById("info-msg");
    infoMessage.innerHTML = "An error occured, snack wasn't deleted.";
  }
});
