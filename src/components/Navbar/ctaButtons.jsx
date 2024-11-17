import { Button } from "../ui/button";

export default function CTAButtons() {
	return (
		<>
			<div className="flex flex-col xl:flex-row gap-3 xl:items-center mt-5 xl:mt-0">
				<Button
					size="lg"
					className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12">
					Become an expert
				</Button>
				<Button
					size="lg"
					className="bg-primary text-primary-foreground border  h-12">
					Sign in / Register
				</Button>
			</div>
		</>
	);
}
