import type { WeatherIcon } from "./WeatherIcon";

export interface HourlyForecastItem {
	icon: WeatherIcon;
	hour: string;
	degree: number;
}

export type HourlyForecastData = HourlyForecastItem[];
