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
    let searchedMovies = await fetchSearch()
    let sectionRef = getEl('#cardContainer')
    for(let movie of searchedMovies) {
        sectionRef.appendChild(getMovieCard(movie))
    }
}

export async function pushSingleMovie() {
    let input = localStorage.getItem('movieid')
    let singleMovie = await searchSingleMovie(input)
    let sectionRef = getEl('#movieInformation')
    sectionRef.innerHTML = singleMovieCard(singleMovie)
}

export async function pushFavoritesMovies() {
    let favoriteIDs = getFavorites()
    let sectionRef = getEl('#cardContainer')
    for(let imdb of favoriteIDs) {
        let movie = await searchSingleMovie(imdb)
        sectionRef.appendChild(getMovieCard(movie))
    }
}
