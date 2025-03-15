import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';

const Search = ({ setSearchResults }) => {
  const [query, setQuery] = useState(''); // State to store user input

  const [suggestions, setSuggestions] = useState([]);  // State to store search suggestions

  // Fetch movie suggestions when the user types (only if query length is 3 or more)
                       
  useEffect(() => {
    if (query.length >= 3) {
      const fetchSuggestions = async () => {
        const results = await fetchMovies(query);
        setSuggestions(results);
      };
      fetchSuggestions();
    } else {
      setSuggestions([]); // Clear suggestions if query is too short
    }
  }, [query]);

  // Handle search when the form is submitted

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await fetchMovies(query);
    setSearchResults(results); // Update search results
    setSuggestions([]); // Clear suggestions after search
  };

    // Handle click on a suggestion to select a movie

  const handleSuggestionClick = (movie) => {
    setSearchResults([movie]); // Set the selected movie as the search result
    setSuggestions([]); // Clear suggestions
    setQuery(movie.Title); // Update the search bar with the selected movie title
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((movie) => (
            <li key={movie.imdbID} onClick={() => handleSuggestionClick(movie)}>
              {movie.Title} ({movie.Year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;