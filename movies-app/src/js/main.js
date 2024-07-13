let url =
	"https://api.themoviedb.org/3/discover/movie?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&include_adult=false&include_video=false&language=en&page=1";

let getDataFromApi = async (num) => {
	let res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&include_adult=false&include_video=false&language=en&page=${num}`
	);
	let data = await res.json();
	return data;
};
// getDataFromApi();

let displayMoviesInScreen = async (pn) => {
	let data = await getDataFromApi(pn);
	let movies = data.results;
	let row = document.querySelector("#movie-row");
	movies &&
		movies.forEach((movie) => {
			let movieCard = document.createElement("div");
			movieCard.classList =
				"movie-card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 my-2 position-relative";
			movieCard.innerHTML = `<img
							src="https://images.tmdb.org/t/p/w500${movie.poster_path}"
							class="card-image"
							alt=""
						/>
						<div class="card-info position-absolute">
							<h4>${movie.title}</h4>
							<h5>${movie.release_date}</h5>
							<h5>Rate count: ${movie.vote_count}</h5>
							<h5>Rate: ${movie.vote_average}</h5>
							<a
								href="./src/pages/singlemovie.html"
								class="card-btn btn btn-primary"
								>movie info</a
							>
						</div>`;
			row.appendChild(movieCard);
		});
};
let displayPaginationMoviesInScreen = () => {
	let pagination = document.querySelector(".pagination-item");
	pagination.addEventListener("click", () => {
		console.log(pagination.textContent);
	});
};
displayMoviesInScreen(1);
displayPaginationMoviesInScreen();
