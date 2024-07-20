import { useState } from "react";
import homeimg from "../assets/images/home-bg.jpg";
import { Link } from "react-router-dom";
export const HomePage = () => {
	const [blog, setBlog] = useState([
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
		{
			title: "Man must explore, and this is exploration at its greatest",
			desc: "Problems look mighty small from 150 miles up",
			info: "Posted by Start Bootstrap on September 24, 2023",
		},
	]);
	return (
		<div>
			<section className="home">
				<div className="img">
					<img src={homeimg} alt="" />
				</div>

				<div className="text text-center text-light">
					<h1>Clean Blog</h1>
					<h4>A Blog Theme by Start Bootstrap</h4>
				</div>
			</section>
			<section className="blog my-5 py-5">
				<div className="container">
					<div className="row">
						{blog.map((item, i) => (
							<div
								key={i}
								className="d-flex justify-content-center text-center py-4"
							>
								<Link className="blog-item">
									<h2>{item.title}</h2>
									<h4>{item.desc}</h4>
									<h5>{item.info}</h5>
									<hr />
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default HomePage;
