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
