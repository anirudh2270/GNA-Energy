import CTAButtons from "./ctaButtons";
import MobileNav from "./mobileNav";
import { NavigationLinks } from "./navigationLinks";

const Navbar = () => {
	return (
		<div className="px-6 py-4 bg-primary mx-auto text-primary-foreground">
			<div className="flex justify-between gap-5 items-center">
				<a href={"#"}>
					<h1 className="text-3xl">TripWeb</h1>
				</a>
				<div className="xl:hidden">
					<MobileNav />
				</div>

				<div className="hidden xl:block">
					<NavigationLinks />
				</div>

				<div className="hidden xl:block">
					<CTAButtons />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
