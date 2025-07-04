const movies = [
  {
    title: "Inception",
    poster: "https://i.ibb.co/6RdT7Xp/inception.jpg",
    genre: "Sci-Fi",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
  },
  {
    title: "RRR",
    poster: "https://i.ibb.co/jVw92pV/rrr.jpg",
    genre: "Action",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  }
];

const movieList = document.getElementById('movie-list');
const searchInput = document.getElementById('search');

function displayMovies(list) {
  movieList.innerHTML = "";
  list.forEach(movie => {
    const div = document.createElement('div');
    div.classList.add('movie-card');
    div.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>${movie.genre}</p>
      <a href="${movie.trailer}" target="_blank">▶️ Watch Trailer</a>
    `;
    movieList.appendChild(div);
  });
}

searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(keyword));
  displayMovies(filtered);
});

displayMovies(movies);
