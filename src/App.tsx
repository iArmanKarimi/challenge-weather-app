import TopBar from "./components/TopBar";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import CityWeatherHeader from "./components/CityWeatherHeader";
import TitleHeader from "./components/TitleHeader";

function App() {
	return (
		<div className="bg-bg h-screen w-screen p-4 flex flex-col gap-3">
			<TopBar />
			<TitleHeader />
			<SearchBar />
			<Button text="Search" />
			<CityWeatherHeader
				city="Berlin, Germany"
				date="Mon, 12 Jun 2023"
				degree={68}
				icon="sunny"
			/>
		</div>
	);
}

export default App;
