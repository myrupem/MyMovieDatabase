
import { addClass, getEl, getElems, removeClass } from "../utils/domUtils.js"
import { getFavorites, addFavoriteMovie, removeFavoriteMovie } from "./localStorage.js"

export function movieCardListener() {
    if(window.location.pathname === '/' || window.location.pathname === '/template/index.html' || window.location.pathname === '/template/search.html' || window.location.pathname === '/template/favorites.html') {
        let movieCards = getElems('.movie-card')
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
                    favorites = getFavorites();
                    starToggle(imdbID)//isFavorite(imdbID) toggla mellan regular och solid

                } else if(event.target.closest('.movie-card')) {
                    localStorage.setItem('movieid', imdbID)
                    window.location.href = '/template/movie.html'
                }
            })
        }
    } else if(window.location.pathname === '/template/movie.html') {
        let movieCard = getEl('#movieInformation')
        movieCard.addEventListener('click', (event) => {
            let imdbID = event.currentTarget.dataset.id

            if(event.target.closest('.star')) {
                let favorites = getFavorites()

                if (favorites.includes(imdbID)) {
                    removeFavoriteMovie(imdbID)
                } else {
                    addFavoriteMovie(imdbID)
                }

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

    stars.forEach(star => {
        let imdbID = star.closest(".movie-card")?.dataset.id || star.closest("#movieInformation")?.dataset.id;
        if(!imdbID) return

        if (favorites.includes(imdbID)) {
            removeClass(star, "fa-regular")
            addClass(star, "fa-solid")
        } else {
            removeClass(star, "fa-solid")
            addClass(star, "fa-regular")
        }
    })
}