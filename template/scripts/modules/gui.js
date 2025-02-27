//Här stoppar du in allt som ska visas ut på sidan!
import { getEl } from "../utils/domUtils.js"
import { fetchTopMovies, fetchSearch, searchSingleMovie } from "./api.js"
import getMovieCard, { singleMovieCard } from "../components/movieCard.js"
import { getFavorites } from "./localStorage.js"

export async function pushRecMovies() {
    let allMovies = await fetchTopMovies()
    let twentyMovies = allMovies.slice(0, 20)  
    let sectionRef = getEl('#cardContainer')
    for(let movie of twentyMovies) {
        sectionRef.appendChild(getMovieCard(movie))
    }
}

export async function pushSearchedMovies() {
    //tryck ut sökresultaten på skärmen
    let searchedMovies = await fetchSearch()
    let sectionRef = getEl('#cardContainer')
    for(let movie of searchedMovies) {
        sectionRef.appendChild(getMovieCard(movie))
    }
}

export async function pushSingleMovie() {
    //Hämta idt från local storage
    let input = localStorage.getItem('movieid')
    //Tryck in idt i en function som gör en fetch på singleMovie
    let singleMovie = await searchSingleMovie(input)
    //Hämta funktion som trycker ut single movie på skärmen
    let sectionRef = getEl('#movieInformation')
    sectionRef.innerHTML = singleMovieCard(singleMovie)
}

export async function pushFavoritesMovies() {
    //tryck ut favoriterna på skärmen
    let favoriteIDs = getFavorites()
    let sectionRef = getEl('#cardContainer')
    for(let imdb of favoriteIDs) {
        let movie = await searchSingleMovie(imdb)
        sectionRef.appendChild(getMovieCard(movie))
    }
}
