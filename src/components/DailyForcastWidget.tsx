import WidgetSurface from "./WidgetSurface";
import { type WeatherIcon, getWeatherIcon } from "../util/weatherIcon";

type Props = {
	day: string;
	icon: WeatherIcon;
};

export default function DailyForecastWidget({ day, icon }: Props) {
	return (
		<WidgetSurface>
			<div
				className="text-center text-sm sm:text-lg
			 	py-3 px-4"
			>
				{day}
			</div>
			<img src={getWeatherIcon(icon)} alt="icon" />
		</WidgetSurface>
	);
}
