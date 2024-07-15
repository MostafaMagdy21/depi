let getDataFromApi = async () => {
	let url = "https://jsonplaceholder.typicode.com/users";
	let userData;
	try {
		let res = await fetch(url);
		userData = await res.json();
	} catch (e) {
		console.log(e);
	}
	return userData;
};

let viewContentPage = async () => {
	let users = await getDataFromApi();
	let selectElement = document.querySelector(".root");
	let table = `<div class="container">
                    <table class="table">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Country</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        ${
													users &&
													users.map((user) => {
														return `
                            <tr>
                                <td>${user.name}</td>
                                <td>${user.email}</td>
                                <td>${user.address.city}</td>
                                <td>${user.phone}</td>
                                <td>${user.company.name}</td>
                            </tr>
                            `;
													})
												}
                        
                        </tbody>
                    </table>
                </div>`;
	selectElement.innerHTML = table;
};
viewContentPage();
