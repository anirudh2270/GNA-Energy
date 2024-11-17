import { Compass } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Tour = () => {
	const [tourData, setTourData] = useState({ adult: 2, children: 2, room: 1 });
	const [open, setOpen] = useState(false);

	function handleSubmit(e) {
		const formData = new FormData(e.currentTarget);
		e.preventDefault();
		setTourData({
			adult: formData.get("Adults"),
			children: formData.get("Childrens"),
			room: formData.get("Rooms"),
		});

		setOpen(false);
	}

	return (
		<div className="flex gap-4">
			<Compass className="text-muted-foreground mt-1" />
			<div>
				<Label className="text-base ">Tour Type</Label>
				<div>
					<Dialog open={open}>
						<DialogTrigger onClick={() => setOpen(true)} asChild>
							<Button
								type="button"
								variant="ghost"
								className="text-sm text-muted-foreground p-0 hover:text-muted-foreground hover:bg-transparent">
								{`${tourData.adult} adults - ${tourData.children} children - ${tourData.room} room`}
							</Button>
						</DialogTrigger>
						<DialogContent className="sm:max-w-[425px]">
							<form onSubmit={handleSubmit}>
								<DialogHeader>
									<DialogTitle>Tour Type</DialogTitle>
									<DialogDescription>
										Make changes to your tour here. Click save when you&apos;re
										done.
									</DialogDescription>
								</DialogHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="Adults" className="">
											Adults
										</Label>
										<Input
											type="number"
											id="Adults"
											name="Adults"
											defaultValue="2"
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="Childrens" className="">
											Childrens
										</Label>
										<Input
											type="number"
											id="Childrens"
											name="Childrens"
											defaultValue="2"
											className="col-span-3"
										/>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<Label htmlFor="Rooms" className="">
											Rooms
										</Label>
										<Input
											type="number"
											id="Rooms"
											name="Rooms"
											defaultValue="1"
											className="col-span-3"
										/>
									</div>
								</div>
								<DialogFooter>
									<Button
										onClick={() => setOpen(false)}
										variant="secondary"
										className="border"
										type="button">
										Cancel
									</Button>
									<Button type="submit">Save changes</Button>
								</DialogFooter>
							</form>
						</DialogContent>
					</Dialog>
				</div>
			</div>
		</div>
	);
};

export default Tour;
