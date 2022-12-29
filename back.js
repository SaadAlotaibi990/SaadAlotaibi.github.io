// function setBackgroundImage() {
//     // make a GET request to the TMDB API using fetch
//     const appi = "745f19f07f9c65ca17f6e8e625ba3f6a";
//     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${appi}`)
//       .then(response => response.json())
//       .then(data => {
//         // get the background image element
//         const background = document.getElementById('background');
  
//         // select a random movie from the list of popular movies
//         const randomIndex = Math.floor(Math.random() * data.results.length);
//         const randomMovie = data.results[randomIndex];
  
//         // set the src of the background image element
//         background.src = `https://image.tmdb.org/t/p/w1280${randomMovie.backdrop_path}`;
//       });

//   }


// window.addEventListener('load', setBackgroundImage);
