import { addClass, createEl } from "../utils/domUtils.js";

export default function getMovieCard(movie) {
    const movieCard = createEl('div')
    addClass(movieCard, 'movie-card')
    movieCard.innerHTML = `
        <span class="movie-card_favBtn fa-regular fa-star fa-2xl"></span>
        <img class="movie-card_img" src="${movie.Poster}" alt="${movie.Title}">
        <p class="movie-card_title">${movie.Title}</p>
    `
    return movieCard
}

function isFav(id) {
    //Om fav innehåller id, returnera fa-solid, annars fa-reg
    //${isFav(movie.imdbID)}  i koden

}