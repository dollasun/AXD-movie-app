// Init API

const omdb = new OMDB();

// Init UI

const ui = new UI();

// Get Movies

document.addEventListener('DOMContentLoaded', getMoives);

// Search Movies

document.getElementById('searchForm').addEventListener('submit', searchMovie);




// Get Movies Function

function getMoives() {
  // Make a Request to API

  omdb.getMovies().then(results => {

    console.log(results.movie);

    ui.showMovies(results.movie);
    ui.showSeries(results.series);




  }).catch(err => {

    console.log(err);

  })





}

// Search Movie Function

function searchMovie(e) {

  const inputText = document.querySelector('.search');

  // Get Input Text 
  const userText = inputText.value;

  // Make a call to API

  omdb.search(userText).then(results => {

    ui.showSearch(results);

  }).catch(err => {

    console.log(err);
  })






  e.preventDefault();
}


// Movie Clicked

function movieClicked(id) {

  console.log(id);
  sessionStorage.setItem('movieID', id);
  location.assign('./movie.html');
  return false;


}


// Movie Info

function movie_info() {

  let id = sessionStorage.getItem('movieID');

  // Make a call to omdb API

  omdb.movieInfo(id).then(results => {

    ui.showInfo(results);


  }).catch(err => {

    console.log(err);
  })


}

