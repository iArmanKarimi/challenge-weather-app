import StatWidget from "./StatWidget";

export default function StatWidgetGroup() {
	return (
		<div
			className="mt-1 grid grid-cols-2
			sm:grid-cols-4 gap-3 sm:gap-4"
		>
			<StatWidget value={"64" + "°"} label="Feels Like" />
			<StatWidget value={"46" + "%"} label="Humidity" />
			<StatWidget value={"9" + " mph"} label="Wind" />
			<StatWidget value={"0" + " in"} label="Precipitation" />
		</div>
	);
}
