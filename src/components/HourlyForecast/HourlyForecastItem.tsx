import type { HourlyForecastItem } from "../../Types/HourlyForecastData";
import { getWeatherIconPath } from "../../Util/weatherIcon";

type Props = HourlyForecastItem & {};

export default function HourlyForecastItemCard({ degree, hour, icon }: Props) {
	const iconPath = getWeatherIconPath(icon);
	return (
		<div
			className="flex items-center p-2 rounded-lg 
			bg-neutral-700 border border-neutral-600"
		>
			<img className="size-10" src={iconPath} alt={icon} />
			<span className="text-md ml-2">{hour}</span>
			<span className="text-sm ml-auto mr-2">{degree}°</span>
		</div>
	);
}
