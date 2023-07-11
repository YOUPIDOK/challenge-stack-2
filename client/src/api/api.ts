// api.js
export async function getRecipes(page: number = 1) {
    return new Promise((resolve) => {
        page = page++;
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Recette 1' },
                { id: 2, name: 'Recette 2' },
                { id: 3, name: 'Recette 3' },
            ]);
        }, 1000);
    });
}
