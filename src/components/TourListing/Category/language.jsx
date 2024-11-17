import { Checkbox } from "@/components/ui/checkbox";
import Tours from "@/data/tours.json";
import { UpdateFilter } from "@/redux/filtersSlice";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const Language = () => {
	const dispatch = useDispatch();
	const [checkedLanguages, setCheckedLanguages] = useState([]);

	const Languages = useMemo(() => {
		const arr = [];
		for (let i = 0; i < Tours.length; i++) {
			if (!arr.includes(Tours[i].language)) {
				arr.push(Tours[i].language);
			}
		}

		for (let i = 0; i < arr.length; i++) {
			let count = 0;
			for (let j = 0; j < Tours.length; j++) {
				if (arr[i] == Tours[j].language) {
					count = count + 1;
				}
			}

			arr[i] = { title: arr[i], amount: count };
		}

		return arr;
	}, []);

	const handleChange = (e, name) => {
		if (e === true) {
			setCheckedLanguages((prev) => [...prev, name]);
		} else {
			setCheckedLanguages((prev) => prev.filter((lang) => lang !== name));
		}
	};

	useEffect(() => {
		dispatch(
			UpdateFilter({ filterName: "languages", value: checkedLanguages })
		);
	}, [checkedLanguages, dispatch]);

	return (
		<div className="py-6">
			<h4 className="text-lg font-medium">Languages</h4>
			<div className="mt-5 flex flex-col gap-2">
				{Languages.map((item, i) => {
					return (
						<div key={i} className="items-top flex space-x-2">
							<Checkbox
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

export default Language;
