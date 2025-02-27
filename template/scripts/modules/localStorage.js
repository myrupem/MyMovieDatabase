
export function getLSItem() {
    let movieId = localStorage.getItem(movieId)
    return movieId
}

export function getFavorites() {
    let favoritesArray = localStorage.getItem('favoritesArray');
    return favoritesArray ? JSON.parse(favoritesArray) : [];
}

export function addFavoriteMovie(imdbID) {
    console.log('addFav()' + ' ' + imdbID)
    //hämta arrayen
    let favoritesArray = getFavorites()
    //lägg till en favorit i arrayen
    favoritesArray.push(imdbID)
    //pusha up nya favArrayen med den nya filmen som nyss las till
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
    console.log(favoritesArray)
}

export function removeFavoriteMovie(imdbID) {
    console.log('removeFav()' + ' ' + imdbID)
    //hämta arrayen
    let favoritesArray = getFavorites()
    //filtrera bort filmen med imdbIDt
    favoritesArray = favoritesArray.filter(id => id !== imdbID)
    //puscha up arrayen igen
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
}