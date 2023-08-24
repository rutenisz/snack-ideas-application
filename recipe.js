const RECIPES_URL = "https://64e3bab0bac46e480e79229a.mockapi.io/snacks/";

const deleteBtn = document.getElementById("delete-btn");

const url = new URL(window.location.href); // leidzia issitraukti parametrus is url
const recipeId = url.searchParams.get("recipeId");

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

const getRecipe = async () => { // parsifetchina recepta
  try {
    const response = await fetch(RECIPES_URL + recipeId);
    const recipe = await response.json();
    return recipe;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteRecipe = async () => {
  try {
    const response = await fetch(RECIPES_URL + recipeId, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const oneRecipeDeleted = (data) => {
  const infoMessage = document.getElementById("info-msg");
  if (data) {
    infoMessage.innerHTML = "Snack was deleted.";

    setTimeout(() => {
      window.location.replace("./index.html");
    }, 3000);
  } else {
    infoMessage.innerHTML = "An error occured, snack wasn't deleted.";
  }
};

const onClickDeleteBtn = async () => {
  try {
    const response = await deleteRecipe();
    oneRecipeDeleted(response);
  } catch (err) {
    console.log(err);
  }
};

deleteBtn.addEventListener("click", onClickDeleteBtn);

const displayRecipe = async () => {
  const recipe = await getRecipe();
  recipe && addRecipeToScreen(recipe);
};

displayRecipe();
console.log("fwedf");
