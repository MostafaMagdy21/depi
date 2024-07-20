import aboutimg from "../assets/images/about-bg.jpg";

export const AboutPage = () => {
	return (
		<div>
			<section className="contact">
				<div className="img">
					<img src={aboutimg} alt="" />
				</div>

				<div className="text text-center text-light">
					<h1>About Me</h1>
					<h4>This is what I do.</h4>
				</div>
			</section>
		</div>
	);
};

export default AboutPage;
