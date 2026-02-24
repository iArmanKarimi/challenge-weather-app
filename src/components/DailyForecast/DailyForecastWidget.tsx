import WidgetSurface from "../Common/WidgetSurface";
import { type WeatherIcon, getWeatherIcon } from "../../util/weatherIcon";

type Props = {
	day: string;
	icon: WeatherIcon;
	degreeHigh: number;
	degreeLow: number;
};

export default function DailyForecastWidget({
	day,
	icon,
	degreeHigh,
	degreeLow,
}: Props) {
	return (
		<WidgetSurface>
			<div
				className="text-center text-sm sm:text-lg
			 	mt-3 px-4"
			>
				{day}
			</div>
			<img
				className="size-15 sm:size-20 mx-auto"
				src={getWeatherIcon(icon)}
				alt="icon"
			/>
			<div className="flex flex-row px-2 mb-2">
				<span className="text-sm sm:text-lg">{degreeHigh}°</span>
				<span className="text-sm sm:text-lg ml-auto">{degreeLow}°</span>
			</div>
		</WidgetSurface>
	);
}
