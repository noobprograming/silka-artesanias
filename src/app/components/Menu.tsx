import * as React from "react";
import Image from "next/image";
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
import { Api } from "@/app/api/api";
import resinaPreview from "@/public/resina-preview.jpeg";
import duendesPreview from "@/public/duendes-preview.jpeg";
import crochetPreview from "@/public/crochet-preview.jpeg";
import logo from "@/public/logo-silka.jpg";

export async function Menu() {
	const api = new Api();
	const menu = await api.getMenu();

	const images = {
		resina: resinaPreview,
		duendes: duendesPreview,
		crochet: crochetPreview,
	};

	return (
		<NavigationMenu className="w-full flex justify-items-center justify-center sm:justify-between">
			<Image
				className="rounded-md"
				src={logo}
				alt={menu.logo}
				width={150}
				height={150}
			/>
			<NavigationMenuList className="hidden sm:flex">
				{menu.options.map((menuOption) => (
					<NavigationMenuItem key={menuOption.label} className="">
						<NavigationMenuTrigger>{menuOption.label}</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<Image
											className="rounded-md"
											src={images[menuOption.img as keyof typeof images]}
											alt={menuOption.label}
										/>
									</NavigationMenuLink>
								</li>
								{menuOption.items.map((menuOptionItem) => (
									<ListItem
										key={menuOptionItem.label}
										title={menuOptionItem.label}
									>
										{menuOptionItem.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
