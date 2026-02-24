import Layout from "./Layout";
import TopBar from "./components/TopBar/TopBar";
import Button from "./components/Common/Button";
import SearchBar from "./components/Search/SearchBar";
import Title from "./components/Title/Title";
import DailyForecast from "./components/DailyForecast/DailyForecast";
import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import StatWidgetGroup from "./components/WeatherSummary/StatWidgetGroup";
import WeatherLocation from "./components/WeatherSummary/WeatherLocation";

function App() {
	return (
		<Layout>
			<TopBar />
			<Title />
			<SearchBar />
			<Button text="Search" />
			<WeatherLocation
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
