const getDataFromApi = async () => {
	let url =
		"https://newsapi.org/v2/everything?q=Apple&from=2024-06-21&sortBy=popularity&apiKey=879e83ab33d747f79846cf9aae95f3b5";
	let data;
	try {
		let res = await fetch(url);
		data = await res.json();
	} catch (e) {
		console.log(e);
	}
	return data;
};
// console.log(getDataFromApi());

let viewData = async () => {
	let article = await getDataFromApi();
	console.log(article.articles);
	let fackData = [1, 3, 4, 5, 6, 7, 8, 9];
	let row = document.querySelector(".row");
	article.articles &&
		article.articles.forEach((ele) => {
			let newEle = document.createElement("div");
			newEle.classList = "col-xl-3 col-lg-4 col-sm-6 col-xs-12";
			let child = `
        <div class="card my-2 p-2">
            <div class="card-body">
                <h5 class="card-title">${ele.title}</h5>
                <p class="card-text">
                    ${ele.description}
                </p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
		`;
			newEle.innerHTML = child;
			row.appendChild(newEle);
		});
};
viewData();
