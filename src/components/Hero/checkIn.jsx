import { CalendarCheck } from "lucide-react";
import { Label } from "../ui/label";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";

const CheckIn = () => {
	const [date, setDate] = useState({
		from: new Date(),
		to: addDays(new Date(), 3),
	});
	return (
		<div className="flex gap-4">
			<CalendarCheck className="text-muted-foreground mt-1" />
			<div>
				<Label className="text-base ">Check in - Check out</Label>
				<div className={cn("grid gap-2")}>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								type="button"
								id="date"
								variant={"outline"}
								className={cn(
									" justify-start border-none p-0 text-muted-foreground hover:bg-transparent hover:text-muted-foreground text-left font-normal",
									!date && "text-muted-foreground"
								)}>
								{date?.from ? (
									date.to ? (
										<>
											{format(date.from, "LLL dd, y")} -{" "}
											{format(date.to, "LLL dd, y")}
										</>
									) : (
										format(date.from, "LLL dd, y")
									)
								) : (
									<span>Pick a date</span>
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent className="w-auto p-0" align="start">
							<Calendar
								initialFocus
								mode="range"
								defaultMonth={date?.from}
								selected={date}
								onSelect={setDate}
								numberOfMonths={2}
							/>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</div>
	);
};

export default CheckIn;
