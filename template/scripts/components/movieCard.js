import { addClass, createEl } from "../utils/domUtils.js";

export default function getMovieCard(movie) {
    const movieCard = createEl('div')
    addClass(movieCard, 'movie-card')
    movieCard.innerHTML = `
        <img class="movie-card_img" src="${movie.Poster}" alt="${movie.Title}">
        <p class="movie-card_title">${movie.Title}</p>
    `
    return movieCard
}