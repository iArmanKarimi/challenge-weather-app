import WidgetSurface from "./WidgetSurface";

export default function StatWidget({
	value,
	label,
}: {
	value: string;
	label: string;
}) {
	return (
		<WidgetSurface>
			<div
				className="flex flex-col gap-3 px-4 py-3
				border border-border rounded-md h-full w-full"
			>
				<span className="text-sm text-text-secondary">{label}</span>
				<span className="text-lg font-thin">{value}</span>
			</div>
		</WidgetSurface>
	);
}
