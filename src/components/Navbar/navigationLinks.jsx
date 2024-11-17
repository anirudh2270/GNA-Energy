import * as React from "react";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const components = [
	{
		title: "Booking Confirmation Dialog",
		href: "#",
		description:
			"A modal dialog that confirms a user's booking details and requires a confirmation action.",
	},
	{
		title: "Room Preview Card",
		href: "#",
		description:
			"Allows users to preview room details and images when hovering over room options.",
	},
	{
		title: "Booking Progress",
		href: "#",
		description:
			"Displays the current step in the booking process, such as selecting dates, choosing a room, or confirming payment.",
	},
];

export function NavigationLinks() {
	return (
		<div className="lg:flex items-center gap-2">
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger className="">Home</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[300px] gap-3 p-4  md:grid-cols-1 ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Categories</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[300px]  gap-3 p-4  md:grid-cols-1 ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<a href="#">
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Documentation
							</NavigationMenuLink>
						</a>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>

			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Blogs</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[300px]  gap-3 p-4  md:grid-cols-1 ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Dashboard</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[300px]  gap-3 p-4  md:grid-cols-1 ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<a href="#">
							<NavigationMenuLink className={navigationMenuTriggerStyle()}>
								Contact
							</NavigationMenuLink>
						</a>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</div>
	);
}

const ListItem = React.forwardRef(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							"block select-none space-y-1 rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
							className
						)}
						{...props}>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = "ListItem";
