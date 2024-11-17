import { Checkbox } from "@/components/ui/checkbox";
import Tours from "@/data/tours.json";
import { UpdateFilter } from "@/redux/filtersSlice";
import { useDispatch } from "react-redux";

const Other = () => {
	const dispatch = useDispatch();

	const CountOthers = () => {
		let count = 0;
		for (let i = 0; i < Tours.length; i++) {
			if (Tours[i].free_cancelation_available) {
				count = count + 1;
			}
		}

		return count;
	};

	return (
		<div className="border-b py-6">
			<h4 className="text-lg font-medium">Others</h4>
			<div className="items-top flex space-x-2 mt-5">
				<Checkbox
					onCheckedChange={(e) =>
						dispatch(UpdateFilter({ filterName: "others", value: e }))
					}
					id={"free_cancelation_available"}
				/>
				<div className="flex justify-between items-center w-full">
					<label
						htmlFor={"free_cancelation_available"}
						className="text-sm text-muted-foreground">
						{"Free Cancelation Available"}
					</label>

					<span className="text-muted-foreground text-sm">{CountOthers}</span>
				</div>
			</div>
		</div>
	);
};

export default Other;
