import { MailCheck } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const EmailSubcription = () => {
	return (
		<div className="bg-[#0d2856] text-white">
			<div className="mx-auto py-[4.5rem] px-5 flex justify-between items-center gap-5 flex-wrap max-w-7xl">
				<div className="flex gap-6 items-center">
					<MailCheck size={70} />
					<div>
						<h4 className="text-3xl font-semibold mb-1">
							Your Travel Journey Starts Here
						</h4>
						<p className="text-sm">
							Sign up and we&apos;ll send the best deals for you
						</p>
					</div>
				</div>

				<div className="flex items-center gap-2">
					<Input
						type="email"
						className="bg-white h-14 w-full xl:w-[20rem] rounded-sm"
						placeholder="Your Email"
					/>
					<Button className="h-14 rounded-sm" size="lg">
						Subscribe
					</Button>
				</div>
			</div>
		</div>
	);
};

export default EmailSubcription;
