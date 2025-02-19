import log from '../utils/logger.js';

export function fetchTopMovies() {
    return fetch('https://santosnr6.github.io/Data/favoritemovies.json')
        .then(response => response.json())
        .then(data => {
            log(data)
            return data; // Returnerar 38 filmer
        })
        .catch(error => {
            log("Något gick fel: ", error.message)
            return []
        });
}

export function fetchSearch(input) {
    return fetch(`http://www.omdbapi.com/?apikey=99013a27&s=${input}*`)
    .then(response => response.json())
    .then(data => {
        log(data.Search); //Returnerar en array med alternativ efter sök. Bred sökning
        return data.Search;
    })
    .catch(error => {
        log("Något gick fel: ", error.message)
        return []
    })
}


//Denna funkar men behöver nu ta emot ett IMDB id
export function searchSingleMovie(input) {
    return fetch(`http://www.omdbapi.com/?apikey=99013a27&i=${input}*`)
    .then(response => response.json())
    .then(data => {
        log(data);
        return data;
    })
    .catch(error => {
        log("Något gick fel: ", error.message)
        return []
    })   
}

