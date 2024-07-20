let getSingleMovieApi = async (id) => {
	let res = await fetch(
		`https://api.themoviedb.org/3/movie/${id}?api_key=e2dac0a02e53c51ad11b312ca2bfde7c&language=en`
	);
	let data = await res.json();

	return data;
};

document.addEventListener("DOMContentLoaded", async () => {
	let row = document.querySelector("#single-page-row");
	let idParams = window.location.search.substr(4);
	let single = await getSingleMovieApi(idParams);

	console.log(single);
	row.innerHTML = `
                        <div class="movie-info d-flex flex-wrap border">
                            <div class="img p-4 mx-auto">
                                <img src="https://images.tmdb.org/t/p/w500${single.backdrop_path}"
                                 alt="" />
                            </div>
                            <div class="info p-4">
                                <h2 class="movie-title">Title: ${single.title}</h2>
                                <h3 class="my-4">Date: ${single.release_date}</h3>
                                <h3 class="my-4">Count of votes: ${single.vote_count}</h3>
                                <h3 class="my-4">Rate: ${single.vote_average}</h3>
                                <h3>Overview:</h3>
                                <p class="my-4 px-5"> ${single.overview}</p>
                                <a target="blank" href="${single.homepage}" class="btn btn-primary text-white">visit movie</a>
                                <a href="/" class="btn btn-primary text-white"
                                    >back to home page</a
                                >
                            </div>
                        </div>
            `;
});
