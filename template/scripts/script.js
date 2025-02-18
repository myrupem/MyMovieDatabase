import log from "./utils/logger.js";
import { fetchTrailers } from "./modules/api.js";
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

    let trailers = await fetchTrailers() //returnerar en shufflad array av fem trailers
    //ska denna va här?
    for(let i = 0; i < trailers.length; i++) {
        renderTrailers(trailers[i], i + 1)
    }
    
    //MovieCard test
    let sectionRef = getEl('#cardContainer')
    for(let movie of trailers) {
        sectionRef.appendChild(getMovieCard(movie))
    }

}
