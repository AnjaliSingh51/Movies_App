const axios = require('axios');  // Import axios for making HTTP requests
const fs = require('fs'); //Import fs module to handle file operations


const API_KEY = '39a30936'; // OMDB API key
const SEARCH_TERM = 'movie'; // // Search term for fetching movies
const URL = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(SEARCH_TERM)}`; // API URL


// Function to fetch movies from the OMDB API

async function fetchMovies() {
  try {
    console.log('Fetching movies from OMDB API...');

        // Make an API request to get movie data

    const response = await axios.get(URL);  // Sends a GET request to the OMDB API
    const movies = response.data.Search;   // Extract movie list from the response

    // Checks if movies exist in the response

    if (!movies) {
      throw new Error('No movies found in the API response.');
    }

    // Save movies to a JSON file
    fs.writeFileSync('../frontend/public/movies.json', JSON.stringify(movies, null, 2));//Writes the movies array into movies.json in the frontend/public/ directory.
    console.log('Movies saved to ../frontend/public/movies.json');    //

  } catch (error) {
    console.error('Error fetching movies:', error.message); // Error Handling
  }
}

fetchMovies();


