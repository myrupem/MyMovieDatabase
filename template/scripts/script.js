import { shuffle } from "./utils/utils.js";
import { getEl } from "./utils/domUtils.js";
import { fetchTopMovies } from "./modules/api.js";
import { renderTrailers } from "./modules/caroussel.js";
import { pushRecMovies, pushSearchedMovies, pushSingleMovie, pushFavoritesMovies } from "./modules/gui.js";
import { movieCardListener, initiateStars } from "./modules/eventHandlers.js";


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

    let searchForm = getEl('#searchForm')
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault()
        let input = getEl('#searchInput').value
        localStorage.setItem('searchInput', input)
        window.location.href = './search.html';
    })
}