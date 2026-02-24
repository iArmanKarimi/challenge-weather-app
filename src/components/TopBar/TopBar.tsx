import UnitsDropdown from "./UnitsDropdown";
export default function TopBar() {
	return (
		<div className="flex flex-row w-full h-10 items-center justify-between">
			<img
				className="h-full max-w-1/2 sm:h-10 self-start my-auto"
				src="images/logo.svg"
				alt="logo"
			/>
			<UnitsDropdown />
		</div>
	);
}
