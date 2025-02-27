import log from "./utils/logger.js";
import { shuffle } from "./utils/utils.js";
import { getEl, getElems } from "./utils/domUtils.js";
import { fetchTopMovies, searchSingleMovie } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { pushRecMovies, pushSearchedMovies, pushSingleMovie, pushFavoritesMovies } from "./modules/gui.js";
import { movieCardListener, initiateStars } from "./modules/eventHandlers.js";
import { getFavorites } from "./modules/localStorage.js";



    if(window.location.pathname === '/' || window.location.pathname === '/template/index.html') {
        document.addEventListener('DOMContentLoaded', async(event) => {
            await pageSetup()
            movieCardListener()
            initiateStars()
        })

    } else if(window.location.pathname === '/template/favorites.html') {
        document.addEventListener('DOMContentLoaded', async (event) => { 
            await pushFavoritesMovies()
            movieCardListener()
            initiateStars()
        })

    } else if(window.location.pathname === '/template/movie.html') {
        document.addEventListener('DOMContentLoaded', async(event) => {
            await pushSingleMovie()
            movieCardListener()
            initiateStars()
            console.log(localStorage.getItem('movieid'))
        })
        

    } else if(window.location.pathname === '/template/search.html') {
        document.addEventListener('DOMContentLoaded', async(event) => {
            await pushSearchedMovies() 
            movieCardListener()
            initiateStars()
        })

    }

async function pageSetup() {
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
}