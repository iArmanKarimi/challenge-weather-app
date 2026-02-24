export default function WidgetSurface({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="bg-surface rounded-xl border-border border-2">
			{children}
		</div>
	);
}
