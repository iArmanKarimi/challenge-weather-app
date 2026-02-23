export type weatherIcon =
	| "drizzle"
	| "fog"
	| "overcast"
	| "partly-cloudy"
	| "rain"
	| "cloudy"
	| "snow"
	| "storm"
	| "sunny";

export const iconMap = {
	sunny: "images/icon-sunny.webp",
	drizzle: "images/icon-drizzle.webp",
	fog: "images/icon-fog.webp",
	overcast: "images/icon-overcast.webp",
	"partly-cloudy": "images/icon-partly-cloudy.webp",
	rain: "images/icon-rain.webp",
	cloudy: "images/icon-cloudy.webp",
	snow: "images/icon-snow.webp",
	storm: "images/icon-storm.webp",
} satisfies Record<weatherIcon, string>;

export function getWeatherIcon(icon: weatherIcon) {
	return iconMap[icon];
}
