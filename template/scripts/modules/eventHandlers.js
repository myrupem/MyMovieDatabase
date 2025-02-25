/* //Här stoppar du in allt som fixar så att saker händer??
Things that should be done every time a page loads.
Things that should be done when the page is closed.
Action that should be performed when a user clicks a button.
Content that should be verified when a user inputs data. */

import { getElems } from "../utils/domUtils.js"
import { addFavoriteMovie, isFavorite, removieFavoriteMovie } from "./localStorage.js"



//Eventhandler på Moviecard & favBtn

export function movieCardListener(movie) {
    //let cardContainer = getEl('.card-container')
    let movieCards = getElems('.movie-card')

    console.log(movieCards)
    for(let card of movieCards) {
        card.addEventListener('click', (event) => {
            let imdbID = event.currentTarget.dataset.id
            if(event.target.closest('.movie-card_favBtn') || event.target.closest('.single-movie-card_favBtn')) {
                if (isFavorite(imdbID)) {
                    removieFavoriteMovie(imdbID)
                } else {
                    addFavoriteMovie(imdbID)
                }
                console.log(event.currentTarget)
            } else if(event.target.closest('.movie-card')) {
                console.log(event.currentTarget)
                localStorage.setItem('movieid', event.currentTarget.dataset.id)
                window.location.href = '/template/movie.html'
            }
        })
    }

    
}