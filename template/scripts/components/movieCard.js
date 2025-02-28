import { addClass, createEl, getEl } from "../utils/domUtils.js";

export default function getMovieCard(movie) {
    const movieCard = createEl('div')
    movieCard.dataset.id = movie.imdbID
    movieCard.href = "./movie.html"
    addClass(movieCard, 'movie-card')

    movieCard.innerHTML = `
        <span class="star movie-card_favBtn fa-star fa-regular fa-2xl"></span>
        <img class="movie-card_img" src="${moviePoster(movie)}" alt="${movie.Title}">
        <p class="movie-card_title">${movie.Title}</p>
    `
    return movieCard
}


export function singleMovieCard(singleMovie) {
    let movieCard = getEl('#movieInformation')
    movieCard.dataset.id = singleMovie.imdbID
    return movieCard.innerHTML = `
        <div class="single-movie-card_img-cont">
            <img class="single-movie-card_img" src="${moviePoster(singleMovie)}" alt="${singleMovie.Title}">
        </div>
        <div class="single-movie-card_info-cont">
            <div class="single-movie-card_fav-cont">
                <span class="star single-movie-card_favBtn fa-regular fa-star fa-2xl"></span>
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

function moviePoster(movie) {
    return (!movie.Poster || movie.Poster === 'N/A')
    ? "res/icons/missing-poster.svg"
    : movie.Poster
}