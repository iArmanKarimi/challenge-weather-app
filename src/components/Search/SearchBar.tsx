import Button from "../Common/Button";

export default function SearchBar() {
	return (
		<>
			<div
				className="flex items-center px-4 w-full sm:w-[50%]
		bg-surface rounded-lg focus-within:ring-2 focus-within:ring-white"
			>
				<img src="images/icon-search.svg" alt="" />
				<input
					type="text"
					placeholder="Search for a place..."
					className="w-full sm:w-64 px-4 py-2 rounded-lg text-white
				focus:outline-none "
				/>
			</div>
			<Button text="Search" />
		</>
	);
}
