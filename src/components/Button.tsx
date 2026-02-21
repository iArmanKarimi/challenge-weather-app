type Props = {
	text: string;
	bg?: (string & {}) | "blue";
};

export default function Button({ text, bg: variant = "blue" }: Props) {
	return (
		<button
			className={`bg-${variant}-500 hover:bg-${variant}-800 text-white 
				w-full sm:w-25 outline-offset-3 focus:outline-2 focus:outline-${variant}-500
				font-bold py-2.5 px-4 rounded-lg`}
		>
			{text}
		</button>
	);
}
