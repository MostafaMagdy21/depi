let url =
	"https://api.themoviedb.org/3/discover/movie?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&include_adult=false&include_video=false&language=en&page=1";

let getDataFromApi = async (num) => {
	let res = await fetch(
		`https://api.themoviedb.org/3/discover/movie?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&include_adult=false&include_video=false&language=en&page=${num}`
	);
	let data = await res.json();
	return data;
};
let getSingleMovieApi = async (id) => {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&language=en`
	);
	let data = await res.json();

	console.log(data);
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
// href="./src/pages/singlemovie.html"
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
		let row = document.querySelector("#single-page-row");

		window.location.href = `./src/pages/singlemovie.html?id=${movieId}`;
		let single = getSingleMovieApi(movieId);
		row.innerHTML = `
					<div class="movie-info d-flex flex-wrap border">
						<div class="img p-4 col-md-4 col-lg-4 col-xl-4 col-xs-12 col-12">
							<img src="/src/assets/images/image1.jpg" alt="" />
						</div>
						<div class="info p-4 col-md-8 col-lg-8 col-xl-8 col-xs-12 col-12">
							<h2 class="movie-title">movie title</h2>
							<h3 class="my-4">movie date</h3>
							<h3 class="my-4">num of rates</h3>
							<h3 class="my-4">rate</h3>
							<p class="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque est odit tempora quam fugit accusantium ea soluta eos cumque laudantium dignissimos sed quas optio, consequatur ut! Consequuntur fuga harum nobis.<10></10></p>
							<a href="#" class="btn btn-primary text-white">visit movie</a>
							<a href="/" class="btn btn-primary text-white"
								>back to home page</a
							>
						</div>
					</div>
		`;
		// console.log(movieId);
	}
});
