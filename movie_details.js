function showMovieDetails(movieId) {
    // make a GET request to the TMDB API using fetch
    const appi = "745f19f07f9c65ca17f6e8e625ba3f6a";
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${appi}&language=ar-SA`)
      .then(response => response.json())
      .then(data => {
        // get the movie details elements
        const poster = document.getElementById('poster');
        const title = document.getElementById('title');
        const releaseDate = document.getElementById('release-date');
        const overview = document.getElementById('overview');
  
        // set the movie details
        poster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        title.textContent = data.title;
        releaseDate.textContent = `Released: ${data.release_date}`;
        overview.textContent = data.overview;
      });
  }

  const searchParams = new URLSearchParams(window.location.search);
  const movieId = searchParams.get('id');  
  
  