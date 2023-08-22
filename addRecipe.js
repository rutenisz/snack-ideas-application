const recipeFormBtn = document.getElementById("recipe-btn");

recipeFormBtn.addEventListener("click", async () => {
  const recipeTitle = document.getElementById("recipe-title").value;
  const recipeDescription = document.getElementById("recipe-description").value;
  const recipeFlavor = document.getElementById("recipeFlavor").value;
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
    const data = await response.json();

    if (data) {
      const messageWrapper = document.getElementById("response-message");
      messageWrapper.innerHTML = "Idea was inserted";

      setTimeout(() => {
        window.location.replace("./index.html");
      }, 3000);
    }
  } catch (err) {
    console.log("err", err);
    const messageWrapper = document.getElementById("response-message");
    messageWrapper.innerHTML = "An error occured, idea was not inserted.";
  }
});
