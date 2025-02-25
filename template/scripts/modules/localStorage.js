

export function getLSItem() {
    let movieId = localStorage.getItem(movieId)
    return movieId
}

export function getFavorites() {
    let favoritesArray;
    if(localStorage.favoritesArray) {
        favoritesArray = JSON.parse(localStorage.getItem('favoritesArray'))
    } else {
        favoritesArray = []
        localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
    } 
    return favoritesArray 
}

export function addFavoriteMovie(imdbID) {
    //hämta arrayen
    let favoritesArray = getFavorites()
    //lägg till en favorit i arrayen
    favoritesArray.push(imdbID)
    //pusha up nya favArrayen med den nya filmen som nyss las till
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
    console.log(favoritesArray)
}

export function removieFavoriteMovie(imdbID) {
    //hämta arrayen
    let favoritesArray = getFavorites()
    //filtrera bort filmen med imdbIDt
    favoritesArray = favoritesArray.filter(id => id !== imdbID)
    //puscha up arrayen igen
    localStorage.setItem('favoritesArray', JSON.stringify(favoritesArray))
}

export function isFavorite(imdbID) {
    let favoritesArray = getFavorites()
     if(favoritesArray.includes(imdbID)) {
            return 'fa-solid'
        } else {
            return 'fa-regular'
        }
    //Om favoritesArray i local storage innehåller id, returnera fa-solid, annars fa-reg
    //${isFav(movie.imdbID)}  i koden
}