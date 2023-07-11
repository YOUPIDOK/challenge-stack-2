export function getKcal(recipe) {
    let kcal = 0;

    recipe.ingredients.forEach((ingredient) => {
        kcal += (ingredient.quantity * ingredient.nutrition.energ_kcal)/100;
    });

    return kcal;
}
