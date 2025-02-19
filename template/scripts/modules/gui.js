//Här stoppar du in allt som ska visas ut på sidan!
import { getEl } from "../utils/domUtils.js"
import { fetchTopMovies, fetchSearch } from "./api.js"
import getMovieCard from "../components/movieCard.js"

export async function pushRecMovies() {
    let allMovies = await fetchTopMovies()
    let twentyMovies = allMovies.slice(0, 20)  
    let sectionRef = getEl('#cardContainer')
    for(let movie of twentyMovies) {
        sectionRef.appendChild(getMovieCard(movie))
    }
}

export async function pushSearchedMovies(input) {
    //tryck ut sökresultaten på skärmen
    let searchedMovies = await fetchSearch(input)
    let sectionRef = getEl('#cardContainer')
    sectionRef.innerHTML = ''
    for(let movie of searchedMovies) {
        sectionRef.appendChild(getMovieCard(movie))
    }
}