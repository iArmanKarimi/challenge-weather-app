type Props = {
	city: string;
	date: string;
	degree: number;
	icon:
		| "drizzle"
		| "fog"
		| "overcast"
		| "partly-cloudy"
		| "rain"
		| "cloudy"
		| "snow"
		| "storm"
		| "sunny";
};

const iconMap = {
	sunny: "images/icon-sunny.webp",
	drizzle: "images/icon-drizzle.webp",
	fog: "images/icon-fog.webp",
	overcast: "images/icon-overcast.webp",
	"partly-cloudy": "images/icon-partly-cloudy.webp",
	rain: "images/icon-rain.webp",
	cloudy: "images/icon-cloudy.webp",
	snow: "images/icon-snow.webp",
	storm: "images/icon-storm.webp",
} satisfies Record<Props["icon"], string>;

export default function CityWeatherHeader({ city, date, degree, icon }: Props) {
	return (
		<div
			className={`flex flex-col items-center gap-1 w-full rounded-xl sm:rounded-2xl
				aspect-square object-contain mt-5
				bg-[url('images/bg-today-small.svg')] 
				sm:bg-[url('images/bg-today-large.svg')]
				bg-cover bg-center`}
		>
			<h1 className="text-3xl font-bold">{city}</h1>
			<p className="text-sm text-neutral-500">{date}</p>
			<div className="flex flex-row items-center justify-center">
				<img className="w-18" src={iconMap[icon]} alt={icon} />
				<p className="text-5xl font-semibold italic">{degree}°</p>
			</div>
		</div>
	);
}
