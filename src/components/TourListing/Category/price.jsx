import DualRangeSlider from "@/components/ui/dual-range-slider.jsx";
import Tours from "@/data/tours.json";
import { UpdateFilter } from "@/redux/filtersSlice";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const Price = () => {
	const dispatch = useDispatch();
	const MaxPrice = useMemo(() => {
		let max = 0;
		for (let i = 0; i < Tours.length; i++) {
			if (Tours[i].price > max) {
				max = Tours[i].price;
			}
		}

		return max;
	}, []);

	const [values, setValues] = useState([0, MaxPrice]);
	const debouncedPrice = useDebounce(values, 500);

	useEffect(() => {
		dispatch(UpdateFilter({ filterName: "price", value: debouncedPrice }));
	}, [dispatch, debouncedPrice]);

	return (
		<div className="border-b py-6 pb-12">
			<h4 className="text-lg font-medium">Price</h4>
			<div className="text-muted-foreground mt-5">
				<p className="mb-3">$0 - {MaxPrice}</p>
				<DualRangeSlider
					labelPosition="bottom"
					label={(value) => value}
					value={values}
					onValueChange={setValues}
					min={0}
					max={MaxPrice}
					step={5}
				/>
			</div>
		</div>
	);
};

export default Price;
