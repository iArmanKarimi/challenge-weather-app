import type { HourlyForecastData } from "../../Types/HourlyForecastData";
import WidgetCard from "../Common/WidgetCard";
import DayDropdown from "./DayDropdown";
import HourlyForecastItemCard from "./HourlyForecastItem";
import type { WeatherIcon } from "../../Types/WeatherIcon";

const _hourly_forecast_data = [
	{
		icon: "drizzle",
		hour: "3 PM",
		degree: 36,
	},
	{
		icon: "sunny",
		hour: "3 PM",
		degree: 40,
	},
	{
		icon: "drizzle",
		hour: "3 PM",
		degree: 42,
	},
	{
		icon: "drizzle",
		hour: "3 PM",
		degree: 39,
	},
] satisfies HourlyForecastData;

function _randomWeatherIcon(): WeatherIcon {
	const icons: WeatherIcon[] = [
		"drizzle",
		"fog",
		"overcast",
		"partly-cloudy",
		"rain",
		"snow",
		"storm",
		"sunny",
	];

	return icons[Math.floor(Math.random() * icons.length)];
}

export default function HourlyForecast() {
	return (
		<WidgetCard>
			<div className="py-4 px-3">
				<div className="flex">
					<span className="text-lg sm:text-xl">Hourly forecast</span>
					<DayDropdown />
				</div>
				<div className="flex flex-col gap-4 mt-4">
					{_hourly_forecast_data.map((data) => {
						return (
							<HourlyForecastItemCard
								key={data.hour}
								degree={30}
								hour="7 PM"
								icon={_randomWeatherIcon()}
							/>
						);
					})}
				</div>
			</div>
		</WidgetCard>
	);
}
