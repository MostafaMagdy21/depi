class Course {
	constructor(title, price, instructor, duration) {
		this.title = title;
		this.price = price;
		this.instructor = instructor;
		this.duration = duration;
	}
}
class CourseActions {
	static addCourse(course) {
		const tbody = document.querySelector("tbody");
		const row = document.createElement("tr");
		row.innerHTML = `
		<td  class="border border-1 p-2 text-center">${course.title}</td>
		<td  class="border border-1 p-2 text-center">${course.price}</td>
		<td  class="border border-1 p-2 text-center">${course.instructor}</td>
		<td  class="border border-1 p-2 text-center">${course.duration}</td>
		<td  class="border border-1 p-2 text-center">
			<button class="btn btn-danger delete">Delete</button>
		</td>
		`;
		tbody.appendChild(row);
	}

	static clearForm() {
		document.querySelector(".title").value = "";
		document.querySelector(".price").value = "";
		document.querySelector(".instructor").value = "";
		document.querySelector(".duration").value = "";
	}

	static DeleteCourse(ele) {
		// const deleteBtn = document.querySelector(".delete");
		// deleteBtn.addEventListener("click", () => {
		// 	console.log("delete");
		// });
		if (ele.classList.contains("delete")) {
			ele.parentElement.parentElement.remove();
		}
	}
}

document.querySelector(".add").addEventListener("click", (e) => {
	e.preventDefault();
	const title = document.querySelector(".title").value;
	const price = document.querySelector(".price").value;
	const instructor = document.querySelector(".instructor").value;
	const duration = document.querySelector(".duration").value;
	if (!title && !price && !duration && !instructor) {
		alert("Please fill all the fields");
	} else if (price < 1000) {
		alert("Price must be greater than 1000");
	} else {
		const course = new Course(title, price, instructor, duration);
		CourseActions.addCourse(course);
		CourseActions.clearForm();
	}
});

document.querySelector("tbody").addEventListener("click", (e) => {
	CourseActions.DeleteCourse(e.target);
});
