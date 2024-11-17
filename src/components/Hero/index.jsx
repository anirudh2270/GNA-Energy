import { Search } from "lucide-react";
import { Button } from "../ui/button";
import CheckIn from "./checkIn";
import SearchLocation from "./searchLocation";
import Tour from "./tour";
import { useDispatch, useSelector } from "react-redux";
import { UpdateFilter } from "@/redux/filtersSlice";

function SearchButton() {
	const dispatch = useDispatch();
	const inp = useSelector((state) => state.location.value);

	return (
		<div className="">
			<Button
				onClick={() =>
					dispatch(UpdateFilter({ filterName: "location", value: inp }))
				}
				className="h-14 px-5">
				<div className="flex gap-2 items-center">
					<Search />
					<span>Search</span>
				</div>
			</Button>
		</div>
	);
}

const Hero = () => {
	return (
		<div className="p-7 py-16 bg-muted ">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-3xl text-center font-semibold">Tours in London</h2>

				<div className="bg-white p-5 rounded-lg mt-10 grid gap-5 grid-cols-12">
					<div className="col-span-12 xl:col-span-4 border-b xl:border-b-0 pb-5 xl:pb-0 ">
						<SearchLocation />
					</div>
					<div className=" col-span-12 xl:col-span-8 xl:border-l-2 xl:ps-10 flex justify-between items-center flex-wrap gap-8">
						<CheckIn />
						<Tour />
						<SearchButton />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
