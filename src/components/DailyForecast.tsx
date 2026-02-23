import DailyForecastWidget from "./DailyForcastWidget";

const weekdays = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"];

export default function DailyForecast() {
	return (
		<div className="mt-3">
			<h2 className="text-xl">Daily Forecast</h2>
			<div className="mt-4 grid grid-cols-3 gap-2 sm:gap-4">
				{weekdays.map((day) => (
					<DailyForecastWidget key={day} day={day} icon="drizzle" />
				))}
			</div>
		</div>
	);
}
