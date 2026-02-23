import { getWeatherIcon, type WeatherIcon } from "../util/weatherIcon";

type Props = {
	city: string;
	date: string;
	degree: number;
	icon: WeatherIcon;
};

export default function CityWeatherHeader({ city, date, degree, icon }: Props) {
	return (
		<div
			className={`flex flex-col items-center justify-center 
				gap-1 w-full rounded-xl sm:rounded-2xl px-4
				mt-4 min-h-55 text-center
				bg-[url('images/bg-today-small.svg')] 
				sm:bg-[url('images/bg-today-large.svg')]
				bg-cover bg-center`}
		>
			<h1 className="text-3xl font-bold">{city}</h1>
			<p className="text-sm text-text-secondary">{date}</p>
			<div className="flex flex-row items-center justify-center mt-4">
				<img className="w-20" src={getWeatherIcon(icon)} alt={icon} />
				<p className="text-7xl font-semibold italic mr-5">{degree}°</p>
			</div>
		</div>
	);
}
