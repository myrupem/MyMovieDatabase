import { addClass, createEl } from "../utils/domUtils.js";

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

export function singleMovieCard(movie) {
    let movieCard = ''
    movieCard.innerHTML = `
        <span class="movie-card_favBtn fa-regular fa-star fa-2xl"></span>
        <img class="movie-card_img" src="${movie.Poster}" alt="${movie.Title}">
        <p class="movie-card_title">${movie.Title}</p>
        <p class="movie-card_director">${movie.Director}</p>
        <p class="movie-card_genre">${movie.Genre}</p>
        <p class="movie-card_actors">${movie.Actors}</p>
        <p class="movie-card_plot">${movie.Plot}</p>
    `
    return singleMovieCard
}