export function searchIngredients(query: string = '') {
    const ingredients = [
        { id: 1, name: 'Carotte' },
        { id: 2, name: 'Pomme de terre' },
        { id: 3, name: 'Oignon' },
        { id: 4, name: 'Poireau' },
        { id: 5, name: 'Tomate' },
        { id: 6, name: 'Courgette' },
        { id: 7, name: 'Ail' },
        { id: 8, name: 'Champignon' },
        { id: 9, name: 'Pomme' },
        { id: 10, name: 'Banane' },
        { id: 11, name: 'Orange' },
        { id: 12, name: 'Citron' },
        { id: 13, name: 'Fraise' },
        { id: 14, name: 'Framboise' },
        { id: 15, name: 'Cerise' },
    ];

    return query === ''
        ? ingredients
        : ingredients.filter((ingredient) => {
            return ingredient.name.toLowerCase().includes(query.toLowerCase())
        })

}
