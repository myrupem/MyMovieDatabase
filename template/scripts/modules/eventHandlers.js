/* //Här stoppar du in allt som fixar så att saker händer??
Things that should be done every time a page loads.
Things that should be done when the page is closed.
Action that should be performed when a user clicks a button.
Content that should be verified when a user inputs data. */

import { addClass, getEl, getElems, removeClass } from "../utils/domUtils.js"
import { getFavorites, addFavoriteMovie, removeFavoriteMovie } from "./localStorage.js"



//Eventhandler på Moviecard & favBtn

export function movieCardListener() {

    if(window.location.pathname === '/' || window.location.pathname === '/template/index.html' || window.location.pathname === '/template/search.html' || window.location.pathname === '/template/favorites.html') {
        let movieCards = getElems('.movie-card')
        console.log(movieCards)
        for(let card of movieCards) {
            card.addEventListener('click', (event) => {
                let imdbID = event.currentTarget.dataset.id

                if(event.target.closest('.star')) {
                    let favorites = getFavorites()

                    if (favorites.includes(imdbID)) {
                        removeFavoriteMovie(imdbID)
                    } else {
                        addFavoriteMovie(imdbID)
                    }
                    console.log(event.currentTarget)
                    favorites = getFavorites();
                    starToggle(imdbID)//isFavorite(imdbID) toggla mellan regular och solid

                } else if(event.target.closest('.movie-card')) {
                    console.log(event.currentTarget)
                    localStorage.setItem('movieid', imdbID)
                    window.location.href = '/template/movie.html'
                }
            })
        }
    } else if(window.location.pathname === '/template/movie.html') {
        let movieCard = getEl('#movieInformation')
        console.log(movieCard)
        movieCard.addEventListener('click', (event) => {
            let imdbID = event.currentTarget.dataset.id

            if(event.target.closest('.star')) {
                let favorites = getFavorites()

                if (favorites.includes(imdbID)) {
                    removeFavoriteMovie(imdbID)
                } else {
                    addFavoriteMovie(imdbID)
                }
                console.log(event.currentTarget)

                favorites = getFavorites();
                
                starToggle(imdbID)//isFavorite(imdbID) toggla mellan regular och solid

            }
    })

    }
}

//Favorit stjärna toggla mellan regular och solid
export function starToggle(imdbID) {
    let stars = getElems(".star")
    let star = [...stars].find(s =>
        s.closest(".movie-card")?.dataset.id === imdbID ||
        s.closest("#movieInformation")?.dataset.id === imdbID
    );
        
    if (!star) return;
    console.log("Hittad stjärna:", star);

    let favorites = getFavorites()
    if (favorites.includes(imdbID)) {
        removeClass(star, "fa-regular")
        addClass(star, "fa-solid")
    } else {
        removeClass(star, "fa-solid")
        addClass(star, "fa-regular")
    }
}

export function initiateStars() {
    let stars = getElems('.star')
    let favorites = getFavorites()

    console.log('Init stars, favorites:', favorites)

    stars.forEach(star => {
        let imdbID = star.closest(".movie-card")?.dataset.id || star.closest("#movieInformation")?.dataset.id;
        if(!imdbID) return
        console.log('checking star for imdbID: ', imdbID)

        if (favorites.includes(imdbID)) {
            removeClass(star, "fa-regular")
            addClass(star, "fa-solid")
        } else {
            removeClass(star, "fa-solid")
            addClass(star, "fa-regular")
        }
    })
}