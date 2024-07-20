let getDataFromApi = async (num) => {
	let res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&include_adult=false&include_video=false&language=en&page=${num}`
	);
	let data = await res.json();
	return data;
};

let displayMoviesInScreen = async (pn) => {
	let data = await getDataFromApi(pn);
	let movies = data.results;
	let row = document.querySelector("#movie-row");
	row.innerHTML = "";
	movies &&
		movies.forEach((movie) => {
			let movieCard = document.createElement("div");
			movieCard.classList =
				"movie-card col-xl-3 col-lg-4 col-md-4 col-sm-6 col-6 my-2 position-relative";
			movieCard.id = movie.id;
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
								
								class="card-btn btn btn-primary"
								>movie info</a
							>
						</div>`;
			row.appendChild(movieCard);
		});
};
displayMoviesInScreen(1);
// pagination

document.addEventListener("click", (e) => {
	if (e.target.classList[1] == "pagination-item") {
		displayMoviesInScreen(e.target.textContent);
	}
});

// single page
document.addEventListener("click", (e) => {
	if (e.target.classList[0] == "card-btn") {
		let movieId = e.target.parentElement.parentElement.id;
		window.location.href = `./src/pages/singlemovie.html?id=${movieId}`;
	}
});
