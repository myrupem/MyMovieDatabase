import log from "./utils/logger.js";
import { shuffle } from "./utils/utils.js";
import { fetchTopMovies } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import getMovieCard from "./components/movieCard.js";
import { getEl } from "./utils/domUtils.js";


if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}

pageSetup()

async function pageSetup() {
    log("pageSetup()")

    //Push trailers
    let trailers = shuffle(await fetchTopMovies()) 
    for(let i = 0; i < trailers.length; i++) {
        renderTrailers(trailers[i], i + 1)
    }

    //MovieCard top20
    let allMovies = await fetchTopMovies()
    let twentyMovies = allMovies.slice(0, 20)  
    let sectionRef = getEl('#cardContainer')
    for(let movie of twentyMovies) {
        sectionRef.appendChild(getMovieCard(movie))
    }

}
