import { MapPin } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Tours from "@/data/tours.json";
import { useMemo, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { UpdateLocation } from "@/redux/locationSlice";
import { useClickAway } from "@uidotdev/usehooks";

const SearchLocation = () => {
	const dispatch = useDispatch();
	const inp = useSelector((state) => state.location.value);
	const [showSuggestion, setShowSuggestion] = useState(false);
	const ref = useClickAway(() => {
		setShowSuggestion(false);
	});

	const Countries = useMemo(() => {
		let UniqueCountries = [];

		for (let i = 0; i < Tours.length; i++) {
			if (!UniqueCountries.includes(Tours[i].country)) {
				UniqueCountries.push(Tours[i].country);
			}
		}

		return UniqueCountries;
	}, []);

	const FilterCountry = () => {
		let FilteredCountries = Countries.filter((e) =>
			e.toLowerCase().includes(inp.toLowerCase())
		);

		if (FilteredCountries.length) {
			return FilteredCountries.map((item, i) => {
				return (
					<li key={i}>
						<Button
							type="button"
							variant="ghost"
							className="w-full text-start justify-start rounded-none"
							onClick={() => {
								dispatch(UpdateLocation(item));
								setShowSuggestion(false);
							}}>
							{item}
						</Button>
					</li>
				);
			});
		} else {
			return <li className="text-center text-sm ">No Result Found</li>;
		}
	};

	return (
		<div className="flex gap-4">
			<MapPin className="text-muted-foreground mt-1" />
			<div>
				<Label className="text-base ">Location</Label>

				<div ref={ref} className="relative">
					<Input
						onChange={(e) => {
							dispatch(UpdateLocation(e.target.value));
							setShowSuggestion(true);
						}}
						value={inp}
						placeholder="Where are you going?"
						className="p-0 border-none  focus-visible:ring-0"
					/>

					{showSuggestion && inp && (
						<div className="absolute z-[999] w-full">
							<ScrollArea className="border animate__animated animate__fadeIn w-full py-3 h-[250px] top-[1rem] bg-background shadow-md rounded-md">
								<ul className="flex flex-col">{FilterCountry()}</ul>
							</ScrollArea>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default SearchLocation;
