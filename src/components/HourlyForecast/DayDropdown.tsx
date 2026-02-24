const DAYS_OF_WEEK = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
] as const;

export default function DayDropdown() {
	return <div className="ml-auto">{DAYS_OF_WEEK[2]}</div>;
}
