import { ListFilter } from "lucide-react";
import { Button } from "../ui/button";
import Category from "./Category";
import Listing from "./Listing";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet";

const TourListing = () => {
	return (
		<div className="xl:py-14 py-8 px-6">
			<div className="grid grid-cols-12">
				<div className="col-span-4 hidden xl:block">
					<Category />
				</div>
				<div className="col-span-12 xl:col-span-8 relative">
					<div className="mb-5 xl:hidden">
						<Sheet>
							<SheetTrigger>
								<Button variant="outline">
									<ListFilter />
									Filters
								</Button>
							</SheetTrigger>
							<SheetContent side="left" className="w-[350px]">
								<SheetHeader>
									<SheetDescription>
										<Category />
									</SheetDescription>
								</SheetHeader>
							</SheetContent>
						</Sheet>
					</div>

					<Listing />
				</div>
			</div>
		</div>
	);
};

export default TourListing;
