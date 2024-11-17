import { ScrollArea } from "@/components/ui/scroll-area";
import CategoryTypes from "./categoryTypes";
import Language from "./language";
import Other from "./other";
import Price from "./price";

const Category = () => {
	return (
		<div className="sticky top-0 left-[9rem] py-5 w-[20rem]">
			<ScrollArea className="h-[100vh] pb-10">
				<div className="me-6">
					<CategoryTypes />
					<Other />
					<Price />
					<Language />
				</div>
			</ScrollArea>
		</div>
	);
};

export default Category;
