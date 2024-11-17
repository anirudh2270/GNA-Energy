import Tours from "@/data/tours.json";
import { ArrowUpRight, Dot } from "lucide-react";
import ratings from "@/assets/images/rating.png";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { UpdateFilter } from "@/redux/filtersSlice";
import PaginationComp from "./pagination";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "@/components/ui/dialog";

function Details({ data }) {
	return (
		<Dialog>
			<DialogTrigger>
				<Button className="h-12 w-full xl:w-auto">
					<div className="flex items-center gap-2">
						<span>View Details</span>
						<ArrowUpRight />
					</div>
				</Button>
			</DialogTrigger>
			<DialogContent className="xl:min-w-[50rem]">
				<DialogHeader>
					<div className="grid grid-cols-12 animate__animated  animate__fadeIn">
						<div className="xl:col-span-8 col-span-12">
							<div className=" w-full max-w-full lg:flex">
								<div
									className="h-[15rem] rounded-md lg:w-[15rem] flex-none bg-cover text-center overflow-hidden"
									style={{ backgroundImage: `url(${data.image})` }}></div>
								<div className="p-4 flex flex-col justify-between leading-normal">
									<div className="mb-8">
										<p className="text-sm flex items-center text-muted-foreground mb-4">
											<span> {data.tour_duration}</span>
											<span>
												<Dot />
											</span>
											<span>{data.type_of_tour}</span>
										</p>
										<div className="font-semibold text-xl mb-1">
											{data.name + " , " + data.address}
										</div>
										<p className="text-muted-foreground">
											{data.city + " , " + data.country}
										</p>
									</div>
									<div className="">
										<p className="text-sm font-medium mb-2">
											Taking safety measures
										</p>

										{data.free_cancelation_available ? (
											<p className="text-success font-medium text-sm">
												Free cancellation
											</p>
										) : (
											<p className="text-destructive font-medium text-sm">
												No free cancellation
											</p>
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="xl:col-span-4 col-span-12 text-end">
							<div className="p-4 flex xl:flex-col flex-wrap justify-between xl:justify-normal  items-end leading-normal">
								<div className="mb-8">
									<img src={ratings} className="w-[100px]" alt="" />
									<p className="text-muted-foreground text-sm mt-1">
										{data.no_of_reviews + " reviews"}
									</p>
								</div>

								<div className="text-sm text-muted-foreground flex flex-col gap-2">
									<span>From</span>
									<h4 className="text-3xl font-semibold text-black">
										{"US$" + data.price}
									</h4>
									<span className="">per adult</span>
								</div>

								<div className="mt-6 w-full">
									<Button className="h-12 w-full  bg-[#00c851] hover:bg-[#00c851]/80">
										<div className="flex items-center gap-2">
											<span>Book Now</span>
											<ArrowUpRight />
										</div>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

function Cards({ data }) {
	return (
		<div className="grid grid-cols-12 animate__animated  animate__fadeIn">
			<div className="xl:col-span-8 col-span-12">
				<div className=" w-full max-w-full lg:flex">
					<div
						className="h-[15rem] rounded-md lg:w-[15rem] flex-none bg-cover text-center overflow-hidden"
						style={{ backgroundImage: `url(${data.image})` }}></div>
					<div className="p-4 flex flex-col justify-between leading-normal">
						<div className="mb-8">
							<p className="text-sm flex items-center text-muted-foreground mb-4">
								<span> {data.tour_duration}</span>
								<span>
									<Dot />
								</span>
								<span>{data.type_of_tour}</span>
							</p>
							<div className="font-semibold text-xl mb-1">
								{data.name + " , " + data.address}
							</div>
							<p className="text-muted-foreground">
								{data.city + " , " + data.country}
							</p>
						</div>
						<div className="">
							<p className="text-sm font-medium mb-2">Taking safety measures</p>

							{data.free_cancelation_available ? (
								<p className="text-success font-medium text-sm">
									Free cancellation
								</p>
							) : (
								<p className="text-destructive font-medium text-sm">
									No free cancellation
								</p>
							)}
						</div>
					</div>
				</div>
			</div>

			<div className="xl:col-span-4 col-span-12 text-end">
				<div className="p-4 flex xl:flex-col flex-wrap justify-between xl:justify-normal  items-end leading-normal">
					<div className="mb-8">
						<img src={ratings} className="w-[100px]" alt="" />
						<p className="text-muted-foreground text-sm mt-1">
							{data.no_of_reviews + " reviews"}
						</p>
					</div>

					<div className="text-sm text-muted-foreground flex flex-col gap-2">
						<span>From</span>
						<h4 className="text-3xl font-semibold text-black">
							{"US$" + data.price}
						</h4>
						<span className="">per adult</span>
					</div>

					<div className="mt-6 w-full xl:w-auto">
						<Details data={data} />
					</div>
				</div>
			</div>
		</div>
	);
}

const ListingCards = () => {
	const filters = useSelector((state) => state.filter);
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(4);
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	const nestedSort =
		(prop1, prop2 = null, direction = "asc") =>
		(e1, e2) => {
			const a = prop2 ? e1[prop1][prop2] : e1[prop1],
				b = prop2 ? e2[prop1][prop2] : e2[prop1],
				sortOrder = direction === "asc" ? 1 : -1;
			return a < b ? -sortOrder : a > b ? sortOrder : 0;
		};

	const FilteredList = useMemo(() => {
		let arr = [...Tours];
		if (filters.location !== "") {
			arr = Tours.filter(
				(e) => e.country.toLowerCase() == filters.location.toLowerCase()
			);
		}

		if (filters.sort == "A-Z") {
			arr.sort(nestedSort("name"));
		} else if (filters.sort == "Z-A") {
			arr.sort(nestedSort("name", null, "desc"));
		} else if (filters.sort == "Popularity") {
			arr.sort(nestedSort("no_of_reviews", null, "desc"));
		}

		if (filters.category.length) {
			arr = arr.filter((item) => {
				for (let i = 0; i < filters.category.length; i++) {
					if (item.type_of_tour == filters.category[i]) {
						return true;
					}
				}
				return false;
			});
		}

		if (filters.languages.length) {
			arr = arr.filter((item) => {
				for (let i = 0; i < filters.languages.length; i++) {
					if (item.language == filters.languages[i]) {
						return true;
					}
				}
				return false;
			});
		}

		if (filters.others) {
			arr = arr.filter((e) => e.free_cancelation_available === true);
		}

		if (filters.price !== null) {
			arr = arr.filter(
				(e) => e.price >= filters.price[0] && e.price <= filters.price[1]
			);
		}

		return arr;
	}, [filters]);

	const currentItems = FilteredList.slice(indexOfFirstItem, indexOfLastItem);
	const totalPages = Math.ceil(FilteredList.length / itemsPerPage);

	useEffect(() => {
		dispatch(
			UpdateFilter({
				filterName: "total_tour_on_location",
				value: FilteredList.length,
			})
		);
	}, [FilteredList.length, dispatch]);

	return (
		<>
			<div className="mt-6 flex flex-col gap-[2rem]">
				{currentItems.map((item, i) => {
					return <Cards key={i} data={item} />;
				})}
			</div>

			<PaginationComp
				setCurrentPage={setCurrentPage}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</>
	);
};

export default ListingCards;
