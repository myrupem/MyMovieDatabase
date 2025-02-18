//import oData from '../data/data.js';
import { shuffle } from '../utils/utils.js';
import log from '../utils/logger.js';

export function fetchTopMovies() {
    return fetch('https://santosnr6.github.io/Data/favoritemovies.json')
        .then(response => response.json())
        .then(data => {
        return data; // Returnerar 38 filmer
        })
        .catch(error => {
            log("Något gick fel: ", error.message)
        });
}

//Ska denna va här?
export async function fetchTrailers() {
    let movies = await fetchTopMovies()
    let fiveArray = shuffle(movies)
    return fiveArray //Returnerad en shufflad array av 5 filmer
}


