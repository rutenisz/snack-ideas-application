const recipeFormBtn = document.getElementById("recipe-btn");

const getRecipeObject = () => {
  const recipeTitle = document.getElementById("recipe-title").value;
  const recipeDescription = document.getElementById("recipe-description").value;
  const recipeFlavor = document.getElementById("recipe-flavor").value;
  const recipeIngredients = document.getElementById("recipe-ingredients").value;
  const recipeInstructions = document.getElementById(
    "recipe-instructions"
  ).value;
  const recipeCalories = document.getElementById("recipe-calories").value;
  const recipeImage = document.getElementById("recipe-image");

  const recipe = {
    title: recipeTitle,
    description: recipeDescription,
    flavor: recipeFlavor,
    ingredients: recipeIngredients,
    instructions: recipeInstructions,
    calories: recipeCalories,
    img: recipeImage,
  };

  return recipe;
};

const insertRecipe = async (recipe) => {
  try {
    const response = await fetch(
      "https://64e3bab0bac46e480e79229a.mockapi.io/snacks",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    );
    console.log("dsad");
    const data = await response.json();
    return data;
  } catch (err) {
    return false;
  }
};

const oneRecipeInserted = (data) => {
  const messageWrapper = document.getElementById("response-message");
  if (data) {
    messageWrapper.innerHTML = "Idea was inserted";

    setTimeout(() => {
      window.location.replace("./index.html");
    }, 3000);
  } else {
    console.log("err", err);
    messageWrapper.innerHTML = "An error occured, idea was not inserted.";
  }
};

recipeFormBtn.addEventListener("click", async () => {
  const recipe = getRecipeObject();
  const data = await insertRecipe(recipe);
  oneRecipeInserted(data);
});
