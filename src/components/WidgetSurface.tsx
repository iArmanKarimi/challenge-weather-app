export default function WidgetSurface({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="bg-surface rounded-md">{children}</div>;
}
