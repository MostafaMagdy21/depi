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
				<form action=""></form>
			</section>
		</div>
	);
};

export default ContactPage;
