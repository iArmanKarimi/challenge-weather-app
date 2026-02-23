import WidgetSurface from "./WidgetSurface";

type Props = {
	day: string;
};

export default function DailyForecastWidget({ day }: Props) {
	return (
		<WidgetSurface>
			<div
				className="text-center text-sm sm:text-lg
			 	py-3 px-4"
			>
				{day}
			</div>
		</WidgetSurface>
	);
}
