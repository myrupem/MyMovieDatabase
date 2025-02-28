
export function getFavorites() {
    let favoritesArray = localStorage.getItem('favoritesArray');
    return favoritesArray ? JSON.parse(favoritesArray) : [];
}

export function addFavoriteMovie(imdbID) {
    let favoritesArray = getFavorites()
    favoritesArray.push(imdbID)
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
}

export function removeFavoriteMovie(imdbID) {
    let favoritesArray = getFavorites()
    favoritesArray = favoritesArray.filter(id => id !== imdbID)
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
}