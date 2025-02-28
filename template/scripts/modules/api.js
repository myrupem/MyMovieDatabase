import log from '../utils/logger.js';

export function fetchTopMovies() {
    return fetch('https://santosnr6.github.io/Data/favoritemovies.json')
        .then(response => response.json())
        .then(data => {
            return data; // Returnerar 38 filmer
        })
        .catch(error => {
            log("Något gick fel: ", error.message)
            return []
        });
}

export function fetchSearch() {
    let input = localStorage.getItem('searchInput')
    log(`fetchSearch() localStorage key SearchInput ${input}`)
    return fetch(`http://www.omdbapi.com/?apikey=99013a27&s=${input}*`)
    .then(response => response.json())
    .then(data => {
        return data.Search;
    })
    .catch(error => {
        log("Något gick fel: ", error.message)
        return []
    })
}

export function searchSingleMovie(input) {
    return fetch(`http://www.omdbapi.com/?apikey=99013a27&plot=full&i=${input}`)
    .then(response => response.json())
    .then(data => {
        return data;
    })
    .catch(error => {
        log("Något gick fel: ", error.message)
        return []
    })   
}

