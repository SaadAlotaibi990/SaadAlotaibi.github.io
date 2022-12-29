// get the form and results elements
const form = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');


// add a submit event listener to the form
form.addEventListener('submit', e => {
  // prevent the default form submission behavior
  e.preventDefault();

  // get the search query from the input field
  const searchQuery = document.getElementById('search-query').value;

  // make a GET request to the TMDB API using fetch
  const appi = "745f19f07f9c65ca17f6e8e625ba3f6a";
  // fetch(`https://api.themoviedb.org/3/search/movie?api_key=${appi}&query=${searchQuery}`)
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${appi}&language=ar-SA&query=${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      // clear the previous search results
      resultsContainer.innerHTML = '';

      // loop through the results and create a result element for each movie
      data.results.forEach(movie => {
        const resultEl = document.createElement('div');
        resultEl.href = `/movie-details.html?id=${movie.id}`;

        resultEl.innerHTML = `
          <a href="movie-details.html?id=${movie.id}">
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <p>Released: ${movie.release_date}</p>
          </a>
        `;
        resultsContainer.appendChild(resultEl);
      });
      
    });
});









