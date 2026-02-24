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
	return (
		<div
			onClick={() => {
				throw new Error("show dropdown menu");
			}}
			className="flex items-center gap-2 text-sm 
			ml-auto rounded-md bg-neutral-600 py-1 px-3"
		>
			<span className="">{DAYS_OF_WEEK[2]}</span>
			<img className="size-2.75" src="images/icon-dropdown.svg" alt="🔽" />
		</div>
	);
}
