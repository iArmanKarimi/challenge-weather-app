import WidgetSurface from "../Common/WidgetCard";

export default function StatWidget({
	value,
	label,
}: {
	value: string;
	label: string;
}) {
	return (
		<WidgetSurface>
			<div className="flex flex-col gap-3 px-4 py-3 h-full w-full">
				<span className="text-sm text-text-secondary">{label}</span>
				<span className="text-2xl font-extralight">{value}</span>
			</div>
		</WidgetSurface>
	);
}
