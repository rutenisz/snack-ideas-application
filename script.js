const snackWrapper = document.getElementById("snacks");

const getallSnacks = async () => {
  const response = await fetch(
    "https://64e3bab0bac46e480e79229a.mockapi.io/snacks"
  );
  const snack = await response.json();
  console.log("dsad");
  snack.forEach((recipe) => {
    const wrapper = document.createElement("a");
    wrapper.setAttribute("class", "recipe-wrapper");
    wrapper.href = "./recipe.html";
    wrapper.addEventListener("click", () => {
      localStorage.setItem("recipeId", recipe.id);
    });

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

    snackWrapper.append(wrapper);
  });
};

const addSnack = () => {
  //   const snack = {
  //     title: "Chocolate Almond Bites",
  //     description: "Delicious chocolate-covered almond bites.",
  //     flavor: "Sweet",
  //     ingredients: ["Almonds", "Chocolate", "Sugar"],
  //     recipe: "Melt chocolate, dip almonds, and let cool.",
  //     calories: 150,
  //     imgUrl: "https://example.com/chocolate-almond-bites.jpg",
  //     id: "",
  //   };

  const snack1 = {
    title: "Zesty Lemon Bars",
    description: "Tangy and sweet lemon-flavored bars.",
    flavor: "Sour",
    ingredients: ["Lemon", "Flour", "Sugar"],
    recipe: "Mix lemon juice, flour, and sugar. Bake until golden.",
    calories: 120,
    imgUrl: "https://example.com/zesty-lemon-bars.jpg",
    id: "",
  };

  fetch("https://64e3bab0bac46e480e79229a.mockapi.io/snacks", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(snack1),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};

getallSnacks();
