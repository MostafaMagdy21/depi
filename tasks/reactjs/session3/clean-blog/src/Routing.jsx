import { Route, Routes } from "react-router-dom";
import Pages from "./pages/pages";

export const RoutingPages = () => {
	return (
		<Routes>
			<Route path="/" element={<Pages.HomePage />} />
			<Route path="/about" element={<Pages.AboutPage />} />
			<Route path="/sample-posts" element={<Pages.SamplePosts />} />
			<Route path="/contact" element={<Pages.ContactPage />} />
			<Route path="*" element={<Pages.ErrorPage />} />
		</Routes>
	);
};

export default RoutingPages;
