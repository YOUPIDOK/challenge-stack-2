import {getIngredients} from "../api/ingredientApi";

/**
 * Get the total kcal of a recipe
 * @param recipe
 */
export function getKcal(recipe) {
    if (recipe.ingredients == undefined) {
        return 0;
    }

    return (recipe.ingredients.reduce(
        (prev, acc) => prev + acc.nutrition.energ_kcal * acc.quantity,
        0
    ) / 100).toFixed(0);
}

export async function getRandomRecipe() {
    let recipe = {
        title: "Recette aléatoire",
        description: "Description de la recette aléatoire",
        ingredients: [],
        steps: [],
        image: 'https://picsum.photos/seed/picsum/200/300'
    };

    const nbSteps = getRandomInt(1, 10);
    for (let i = 1; i <= nbSteps;  i++) {
        recipe.steps.push({
            title: `Etape ${i}`,
            description: `Description de l'étape ${i}`
        });
    }

    const nbRecipes = getRandomInt(1, 10);
    const nutritions = await getIngredients();
    const recipesLength = nutritions.length;

    for (let i = 1; i <= nbRecipes;  i++) {
        const randomIndex = getRandomInt(0, recipesLength - 1);
        const randomNutrition = nutritions[randomIndex];

        recipe.ingredients.push({
            nutrition: randomNutrition,
            quantity: getRandomInt(1, 1000)
        });
    }

    return recipe
}

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
