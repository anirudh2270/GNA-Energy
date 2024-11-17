import EmailSubcription from "./components/EmailSubcription/index.jsx";
import Footer from "./components/Footer/index.jsx";
import Hero from "./components/Hero/index.jsx";
import Navbar from "./components/Navbar/index.jsx";
import TourListing from "./components/TourListing/index.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<TourListing />
			<EmailSubcription />
			<Footer />
		</>
	);
}

export default App;
