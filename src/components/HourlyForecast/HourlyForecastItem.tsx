import type { HourlyForecastItem } from "../../Types/HourlyForecastData";
import { getWeatherIconPath } from "../../Util/weatherIcon";

type Props = HourlyForecastItem & {};

export default function HourlyForecastItemCard({ degree, hour, icon }: Props) {
	const iconPath = getWeatherIconPath(icon);
	return (
		<div className="flex items-center">
			<img className="size-10" src={iconPath} alt={icon} />
			<span className="text-md ml-2">{hour}</span>
			<span className="ml-auto">{degree}</span>
		</div>
	);
}
