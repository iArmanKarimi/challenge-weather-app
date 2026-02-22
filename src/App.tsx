import Layout from "./Layout";
import TopBar from "./components/TopBar";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import CityWeatherHeader from "./components/CityWeatherHeader";
import TitleHeader from "./components/TitleHeader";
import StatWidgetGroup from "./components/StatWidgetGroup";

function App() {
	return (
		<Layout>
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
			<StatWidgetGroup />
		</Layout>
	);
}

export default App;
