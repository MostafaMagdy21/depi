import { BrowserRouter } from "react-router-dom";
import RoutingPages from "./Routing";
import HeaderComponent from "./components/sharing/HeaderComponent";
import FooterComponent from "./components/sharing/FooterComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export const App = () => {
	return (
		<BrowserRouter>
			<HeaderComponent />
			<RoutingPages />
			<FooterComponent />
		</BrowserRouter>
	);
};

export default App;
