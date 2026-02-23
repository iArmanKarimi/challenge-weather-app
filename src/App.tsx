import Layout from "./Layout";
import TopBar from "./components/TopBar";
import Button from "./components/Button";
import SearchBar from "./components/SearchBar";
import TitleHeader from "./components/TitleHeader";
import DailyForecast from "./components/DailyForecast";
import HourlyForecast from "./components/HourlyForecast";
import StatWidgetGroup from "./components/StatWidgetGroup";
import CityWeatherHeader from "./components/CityWeatherHeader";

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
			<DailyForecast />
			<HourlyForecast />
		</Layout>
	);
}

export default App;
