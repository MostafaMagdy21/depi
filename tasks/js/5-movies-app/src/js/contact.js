function sendMail() {
	(function () {
		emailjs.init("I0Gkf4D2v2Qra2jpz");
	})();
	let params = {
		user_name: document.querySelector("#user-name").value,
		email: document.querySelector("#email").value,
		subject: document.querySelector("#subject").value,
		message: document.querySelector("#message").value,
	};
	let serviceId = "service_rcl6164";
	let templateId = "template_x5dfb82";
	try {
		emailjs
			.send(serviceId, templateId, params)
			.then((res) => {
				alert("Email Sent Successfully!");

				document.querySelector("#user-name").value = "";
				document.querySelector("#email").value = "";
				document.querySelector("#subject").value = "";
				document.querySelector("#message").value = "";
			})
			.catch();
	} catch (e) {
		console.log(e);
	}
}
document.querySelector("#email-send").addEventListener("click", (e) => {
	e.preventDefault();
	sendMail();
});
