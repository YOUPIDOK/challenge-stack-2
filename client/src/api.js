// api.js
export async function fetchRecipes() {
    // Simuler une requête à l'API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Recette 1' },
                { id: 2, name: 'Recette 2' },
                { id: 3, name: 'Recette 3' },
            ]);
        }, 1000);
    });
}
