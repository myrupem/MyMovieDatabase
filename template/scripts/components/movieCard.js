import { addClass, createEl, getEl } from "../utils/domUtils.js";

export default function getMovieCard(movie) {
    const movieCard = createEl('a')
    movieCard.href = "./movie.html"
    addClass(movieCard, 'movie-card')
    movieCard.innerHTML = `
        <span class="movie-card_favBtn fa-regular fa-star fa-2xl"></span>
        <img class="movie-card_img" src="${movie.Poster}" alt="${movie.Title}">
        <p class="movie-card_title">${movie.Title}</p>
    `
    movieCard.addEventListener('click', () => {
        localStorage.setItem('movieId', movie.imdbID)
        console.log(movieId.imdbID)
    })

    return movieCard
}

function isFav(id) {
    //Om fav innehåller id, returnera fa-solid, annars fa-reg
    //${isFav(movie.imdbID)}  i koden

}

export function singleMovieCard(singleMovie) {
    let movieInfo = getEl('#movieInformation')
    return movieInfo.innerHTML = `
        <div class="single-movie-card_img-cont">
            <img class="single-movie-card_img" src="${singleMovie.Poster}" alt="${singleMovie.Title}">
        </div>
        <div class="single-movie-card_info-cont">
            <div class="single-movie-card_fav-cont">
                <span class="single-movie-card_favBtn fa-regular fa-star fa-2xl"></span>
                <p class="single-movie-card_fav-text">Add to your favorites</p>
            </div>
                <p class="single-movie-card_title">${singleMovie.Title}</p>
                <p class="single-movie-card_info">Director: ${singleMovie.Director}</p>
                <p class="single-movie-card_info">Genre: ${singleMovie.Genre}</p>
                <p class="single-movie-card_info">Actors: ${singleMovie.Actors}</p>
                <p class="single-movie-card_plot">${singleMovie.Plot}</p>
        </div>
        ` 
}