import { Link } from "react-router-dom";

export const HeaderComponent = () => {
	return (
		<header className="header">
			<nav className="navbar navbar-expand-lg">
				<div className="container">
					<Link className="navbar-brand text-light" to="#">
						Navbar
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mb-2 mb-lg-0 d-flex">
							<li className="nav-item">
								<Link
									className="nav-link text-light"
									aria-current="page"
									to="/"
								>
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-light" to="/about">
									About
								</Link>
							</li>
							<li className="nav-item">
								<Link
									className="nav-link text-light"
									to="/
								sample-posts"
								>
									Single-Blog
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link text-light" to="/contact">
									Contact
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default HeaderComponent;
