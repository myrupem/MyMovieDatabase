import log from "./utils/logger.js";
import { shuffle } from "./utils/utils.js";
import { getEl, getElems } from "./utils/domUtils.js";
import { fetchTopMovies, searchSingleMovie } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { pushRecMovies, pushSearchedMovies, pushSingleMovie } from "./modules/gui.js";
import { movieCardListener } from "./modules/eventHandlers.js";
import { getFavorites } from "./modules/localStorage.js";



    if(window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
        document.addEventListener('DOMContentLoaded', async(event) => {
            await pageSetup()
            movieCardListener()
            setfavBtnClass() //denna kansek ska bort
        })

    } else if(window.location.pathname === '/template/favorites.html') {
       

    } else if(window.location.pathname === '/template/movie.html') {
        singleMovieSetup()
        //movieCardListener(movie)
        console.log(localStorage.getItem('movieid'))

    } else if(window.location.pathname === '/template/search.html') {
        document.addEventListener('DOMContentLoaded', (event) => {
            pushSearchedMovies() 
        })

    }

log(window.location.pathname)

async function pageSetup() {
    log("pageSetup()")
    pushRecMovies()

    //Push trailers
    let trailers = shuffle(await fetchTopMovies()) 
    for(let i = 0; i < trailers.length; i++) {
        renderTrailers(trailers[i], i + 1)
    }

    //Eventlyssnare på searchForm
    //Sparar sökInput i local storage & eventlyssnare på knapp
    let searchForm = getEl('#searchForm')
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault()
        let input = getEl('#searchInput').value
        //Detta value ska sparas i localStorage
        localStorage.setItem('searchInput', input)
        log(`localstorage searchInput: ${input}`)
        window.location.href = './search.html';
    })

    //test get fav local storage
    log(getFavorites())
 
}

async function singleMovieSetup() {
    //Hämta idt från local storage
    let input = localStorage.getItem('movieId')
    //Tryck in idt i en function som gör en fetch på singleMovie
    let singleMovie = await searchSingleMovie(input)
    //Hämta funktion som trycker ut single movie på skärmen
    pushSingleMovie(singleMovie)
}

//detta kanske ska bort
function setfavBtnClass() {
    let favBtn = getElems('movie-card_favBtn')
    for(starBtn of favBtn) {
        if(!starBtn.classList.contains('fa-regular') && !starBtn.classList.contains('fa-solid')) {
            addClass(starBtn, 'fa-regular')
        }
    }
}
