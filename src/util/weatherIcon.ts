export type WeatherIcon =
	| "drizzle"
	| "fog"
	| "overcast"
	| "partly-cloudy"
	| "rain"
	| "snow"
	| "storm"
	| "sunny";

export const weatherIconMap: Record<WeatherIcon, string> = {
	drizzle: "images/icon-drizzle.webp",
	fog: "images/icon-fog.webp",
	overcast: "images/icon-overcast.webp",
	"partly-cloudy": "images/icon-partly-cloudy.webp",
	rain: "images/icon-rain.webp",
	snow: "images/icon-snow.webp",
	storm: "images/icon-storm.webp",
	sunny: "images/icon-sunny.webp",
};

export const getWeatherIcon = (icon: WeatherIcon) =>
	weatherIconMap[icon];
