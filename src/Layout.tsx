export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="bg-bg h-screen w-screen p-4 flex flex-col gap-3 overflow-x-hidden">
			{children}
		</div>
	);
}
