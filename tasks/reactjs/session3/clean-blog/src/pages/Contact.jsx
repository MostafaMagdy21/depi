import contactimg from "../assets/images/contact-bg.jpg";

export const ContactPage = () => {
	return (
		<div>
			<section className="contact">
				<div className="img contact-img">
					<img src={contactimg} alt="" />
				</div>

				<div className="text text-center text-light">
					<h1>Contact Me</h1>
					<h4>Have questions? I have answers.</h4>
				</div>
			</section>
			<section className="form">
				<p>
					Want to get in touch? Fill out the form below to send me a message and
					I will get back to you as soon as possible!
				</p>
				<form action="">
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder="Name"
						/>
						<label htmlFor="floatingInput">Name</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="Email address"
							className="form-control"
							id="floatingInput"
							placeholder="name@example.com"
						/>
						<label htmlFor="floatingInput">Email address</label>
					</div>
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control"
							id="floatingInput"
							placeholder="012345....."
						/>
						<label htmlFor="floatingInput">phone number</label>
					</div>
					<div className="form-floating mb-3">
						<textarea
							className="form-control"
							placeholder="Leave a comment here"
							id="floatingTextarea2Disabled"
							style="height: 100px"
						></textarea>
						<label htmlFor="floatingInput">phone number</label>
					</div>
					<button className="btn btn-primary px-3">SEND</button>
				</form>
			</section>
		</div>
	);
};

export default ContactPage;
