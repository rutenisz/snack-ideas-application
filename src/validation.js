export const validateInputForm = (
    recipeTitle,
    recipeDescription,
    recipeFlavor,
    recipeIngredients,
    recipeInstructions,
    recipeCalories,
    recipeImage
) => {
    const urlRegex =
    /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i;

    if(!recipeTitle) {
        throw new Error("Input is empty");
    }

    if(!recipeDescription) {
        throw new Error("Input is empty");
    }

    if(!recipeFlavor) {
        throw new Error("Input is empty");
    }

    if(!recipeIngredients) {
        throw new Error("Input is empty");
    }

    if(!recipeInstructions) {
        throw new Error("Input is empty");
    }

    if(!recipeCalories) {
        throw new Error("Input is empty");
    }

    if(!urlRegex.test((recipeImage))) {
        throw new Error("Error link");
    }
}