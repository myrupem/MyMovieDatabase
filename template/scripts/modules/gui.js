//Här stoppar du in allt som ska visas ut på sidan!
import { getEl } from "../utils/domUtils.js"
import { fetchTopMovies, fetchSearch } from "./api.js"
import getMovieCard, { singleMovieCard } from "../components/movieCard.js"

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
        //ska jag spara movie i local storage här?
    }
}

export async function pushSingleMovie(singleMovie) {
    let sectionRef = getEl('#movieInformation')
    sectionRef.innerHTML = singleMovieCard(singleMovie)
    //ska jag spara movie i local storage här?
}