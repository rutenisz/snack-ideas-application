const snackWrapper = document.getElementById("snacks");

const buildSnackCard = (recipe) => {
  const wrapper = document.createElement("a");
  wrapper.setAttribute("class", "recipe-wrapper");
  wrapper.href = "./recipe.html?recipeId=" + recipe.id;
  console.log("hjk");
  const title = document.createElement("h1");
  title.innerHTML = recipe.title;

  const description = document.createElement("p");
  description.innerHTML = recipe.description;

  const image = document.createElement("img");
  image.setAttribute("class", "recipe-image");
  image.src = recipe.imgUrl;

  wrapper.append(image);
  wrapper.append(title);
  wrapper.append(description);

  return wrapper;
};

const getAllSnacks = async () => {
  const response = await fetch(
    "https://64e3bab0bac46e480e79229a.mockapi.io/snacks"
  );
  const snack = await response.json();

  snack
    .sort((a, b) => {
      return a.title > b.title ? 1 : -1;
    })
    .forEach((recipe) => {
      const card = buildSnackCard(recipe);
      snackWrapper.append(card);
    });
};

getAllSnacks();
