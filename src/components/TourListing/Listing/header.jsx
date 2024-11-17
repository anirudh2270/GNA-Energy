import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UpdateFilter } from "@/redux/filtersSlice";
import { ArrowDownAZ, ArrowDownUp, ArrowDownZA, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function NoOfProperties() {
	const location = useSelector((state) => state.filter.location);
	const amount = useSelector((state) => state.filter.total_tour_on_location);
	return (
		<h3 className="text-xl ">
			<span className="font-medium">
				{amount} {amount > 1 ? "Properties" : "Property"}
			</span>{" "}
			{location && <span>in {location}</span>}
		</h3>
	);
}

function Sort() {
	const dispatch = useDispatch();
	const sortValue = useSelector((state) => state.filter.sort);

	function handleValuechange(e) {
		dispatch(UpdateFilter({ filterName: "sort", value: e }));
	}
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button className="rounded-full bg-primary/10 text-primary hover:bg-primary/10">
						<div className="flex items-center gap-2">
							<ArrowDownUp />
							<span>Sort</span>
						</div>
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-[10rem]">
					<DropdownMenuRadioGroup
						value={sortValue}
						onValueChange={handleValuechange}>
						<DropdownMenuRadioItem value="A-Z">
							<ArrowDownAZ size={15} className="me-2" />
							A-Z
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="Z-A">
							<ArrowDownZA size={15} className="me-2" />
							Z-A
						</DropdownMenuRadioItem>
						<DropdownMenuRadioItem value="Popularity">
							<Star size={15} className="me-2" />
							Popularity
						</DropdownMenuRadioItem>
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}

const Header = () => {
	return (
		<div className="flex justify-between items-center gap-5 flex-wrap border-b pb-10">
			<NoOfProperties />
			<Sort />
		</div>
	);
};

export default Header;
