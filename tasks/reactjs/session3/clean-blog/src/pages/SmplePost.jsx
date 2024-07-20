import singleimg from "../assets/images/post-sample-image.jpg";

export const SamplePosts = () => {
	return (
		<div>
			<section className="contact">
				<div className="img">
					<img src={singleimg} alt="" />
				</div>

				<div className="text text-center text-light">
					<h1>Clean Blog</h1>
					<h4>A Blog Theme by Start Bootstrap</h4>
				</div>
			</section>
		</div>
	);
};

export default SamplePosts;
