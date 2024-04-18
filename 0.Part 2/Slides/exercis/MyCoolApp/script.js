require('dotenv').config();

const API_URL = process.env.API_URL;
const IMG_PATH_W500 = 'https://image.tmdb.org/t/p/w500';
const IMG_PATH_W1280 = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API_BASE = 'https://api.themoviedb.org/3/search/movie?api_key=d7f89781d01251450fa7113ad85c5e1a&query=';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
    try {
        const response = await fetch(url); // Fetch data from the URL
        if (!response.ok) {
            throw new Error('Failed to fetch movies');
        }
        const data = await response.json(); // Parse response as JSON
        showMovies(data.results); // Call showMovies function with the results
    } catch (error) {
        console.error('Error fetching movies:', error); // Handle any errors
    }
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
            <img src="${IMG_PATH_W500 + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                ${overview}
            </div>
        `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return 'blue';
    } else if (vote >= 5) {
        return 'black';
    } else {
        return 'orange';
    }
}

// Get initial movies
getMovies(API_URL);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value; // we create a var with the search term

    if (searchTerm && searchTerm !== '') { // and if the term exists 
        getMovies(SEARCH_API_BASE + searchTerm);

        search.value = '';
    } else {
        window.location.reload();
    }
});
