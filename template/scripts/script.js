import log from "./utils/logger.js";
import { shuffle } from "./utils/utils.js";
import { getEl, getElems } from "./utils/domUtils.js";
import { fetchTopMovies, searchSingleMovie } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { pushRecMovies, pushSearchedMovies } from "./modules/gui.js";


if(window.location.pathname === '/' || window.location.pathname === '/index.html') {
    console.log('index.html');

} else if(window.location.pathname === '/favorites.html') {
    console.log('favorites.html');

} else if(window.location.pathname === '/movie.html') {
    console.log('movie.html');

} else if(window.location.pathname === '/search.html') {
    console.log('search.html');

}

document.addEventListener('DOMContentLoaded', (event) => {
    log("Locked and loaded")
    pageSetup()
})



async function pageSetup() {
    log("pageSetup()")
    pushRecMovies()

    //Push trailers
    let trailers = shuffle(await fetchTopMovies()) 
    for(let i = 0; i < trailers.length; i++) {
        renderTrailers(trailers[i], i + 1)
    }

    //Eventlyssnare på searchForm
    

    //Pushar ut sökresultat på skärmen
    let searchForm = getEl('#searchForm')
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault()
        let input = getEl('#searchInput').value
        pushSearchedMovies(input)
    })

    //Eventlyssnare på Card Container
    let movieCards = getElems('.movie-card')
    
//Denna funkar men behöver nu ta emot ett IMDB id
    movieCards.forEach(cardDiv => { 
        cardDiv.addEventListener('click', () => {
        //Vid klick på specifik film skicka in den infon i ett singleCard
        let input = cardDiv.textContent
        /* pushSingleMovie(movieSearch) //pusha infon in i single card */
        searchSingleMovie(input)
        log(cardDiv.textContent)
    });
});

}
