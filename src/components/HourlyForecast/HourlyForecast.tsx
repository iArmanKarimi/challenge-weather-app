import type { HourlyForecastData } from "../../Types/HourlyForecastData";
import WidgetCard from "../Common/WidgetCard";
import DayDropdown from "./DayDropdown";
import HourlyForecastItemCard from "./HourlyForecastItem";

const hourly_forecast_data = [
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

export default function HourlyForecast() {
	return (
		<WidgetCard>
			<div className="p-4">
				<div className="flex">
					<span className="text-lg sm:text-xl">Hourly forecast</span>
					<DayDropdown />
				</div>
				<div className="flex flex-col gap-2">
					{hourly_forecast_data.map((data) => {
						return (
							<HourlyForecastItemCard
								key={data.hour}
								degree={30}
								hour="3 PM"
								icon="drizzle"
							/>
						);
					})}
				</div>
			</div>
		</WidgetCard>
	);
}
