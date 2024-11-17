import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { NavigationLinks } from "./navigationLinks";
import CTAButtons from "./ctaButtons";

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle className="text-muted-foreground text-start text-base">
						Menu
					</SheetTitle>
					<SheetDescription>
						<div className="mt-5">
							<NavigationLinks />
							<CTAButtons />
						</div>
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
