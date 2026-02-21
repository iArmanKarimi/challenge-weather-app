type Props = {
	text: string;
	bg?: "blue";
};

const variantMap = {
	blue: {
		bg: "bg-blue-500",
		hover: "hover:bg-blue-600",
		focus: "focus:ring-blue-300",
	},
};

export default function Button({ text, bg: variant = "blue" }: Props) {
	return (
		<button
			className={`
				${variantMap[variant].bg}
				${variantMap[variant].hover}
				${variantMap[variant].focus}
				text-white w-full sm:w-25
				outline-offset-3 focus:outline-2
				font-bold py-2.5 px-4 rounded-lg
			`}
		>
			{text}
		</button>
	);
}
