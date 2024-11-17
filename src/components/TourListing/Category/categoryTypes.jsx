import { Checkbox } from "@/components/ui/checkbox";
import Tours from "@/data/tours.json";
import { UpdateFilter } from "@/redux/filtersSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const CategoryTypes = () => {
	const [checkedCategories, setCheckedCategories] = useState([]);
	const dispatch = useDispatch();

	const Categories = useMemo(() => {
		const arr = [];
		for (let i = 0; i < Tours.length; i++) {
			if (!arr.includes(Tours[i].type_of_tour)) {
				arr.push(Tours[i].type_of_tour);
			}
		}
		for (let i = 0; i < arr.length; i++) {
			let count = 0;
			for (let j = 0; j < Tours.length; j++) {
				if (arr[i] == Tours[j].type_of_tour) {
					count = count + 1;
				}
			}
			arr[i] = { title: arr[i], amount: count };
		}
		return arr;
	}, []);

	const handleChange = (e, name) => {
		if (e === true) {
			setCheckedCategories((prev) => [...prev, name]);
		} else {
			setCheckedCategories((prev) =>
				prev.filter((category) => category !== name)
			);
		}
	};

	useEffect(() => {
		dispatch(
			UpdateFilter({ filterName: "category", value: checkedCategories })
		);
	}, [checkedCategories, dispatch]);

	return (
		<div className="border-b pb-6">
			<h4 className="text-lg font-medium"> Category Type</h4>

			<div className="mt-5 flex flex-col gap-2">
				{Categories.map((item, i) => {
					return (
						<div key={i} className="items-top flex space-x-2">
							<Checkbox
								defaultChecked={checkedCategories.includes(item.title)}
								onCheckedChange={(e) => handleChange(e, item.title)}
								id={item.title}
							/>
							<div className="flex justify-between items-center w-full">
								<label
									htmlFor={item.title}
									className="text-sm text-muted-foreground">
									{item.title}
								</label>

								<span className="text-muted-foreground text-sm">
									{item.amount}
								</span>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryTypes;
