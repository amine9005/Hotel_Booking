"use client";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuLink,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";

import { Button, buttonVariants } from "@/components/ui/atoms/button/button";
import Link from "next/link";
import MenuButtonMolecule from "@/components/ui/molecules/menu-button/MenuButton.molecule";
import { motion } from "motion/react";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useUserQuery } from "@/hooks/queries/useUser.query";
import { signOutAction } from "@/app/api/actions/auth/auth.controller";
import Logo from "@/components/ui/navbars/logo/Logo";
import { RouteProps } from "@/types/Route.types";
import BuyerNavItems from "./roles/Buyer.navitems";

const routeList: RouteProps[] = [
	{
		label: "Home",
		href: "/",
	},
	{
		label: "Pricing",
		href: "/pricing",
	},
];

const Navbar2Organism = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: user } = useUserQuery();

	const link = user ? "/create-new-trip" : "/sign-in";
	const text = user ? "Create New Trip" : "Get Started";

	return (
		<header
			className={`sticky border-b top-0 z-50 w-full dark:border-b-primary overflow-x-hidden
      bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 min-h-15`}
		>
			<NavigationMenu className="flex max-w-full w-full overflow-hidden flex-col items-center justify-center">
				<NavigationMenuList className=" w-full  min-h-14 flex justify-between lg:grid lg:grid-cols-3 ">
					<NavigationMenuItem className="font-bold ">
						<Logo />
					</NavigationMenuItem>
					<NavigationMenuList className="hidden lg:flex gap-2 col-span-1">
						{routeList.map((route: RouteProps, i) => (
							<NavigationMenuItem key={i}>
								<NavigationMenuLink
									rel="noreferrer noopener"
									href={route.href}
									className="hover:bg-transparent text-[17px] hover:scale-105 transition-transform duration-200 hover:text-primary"
								>
									{route.label}
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
						<BuyerNavItems />
					</NavigationMenuList>
					<MenuButtonMolecule isOpen={isOpen} setIsOpen={setIsOpen} />
					<div className="hidden lg:flex w-full justify-end gap-4">
						<Link
							className={buttonVariants({
								variant: "default",
								size: "sm",
								width: "lg",
							})}
							href={link}
						>
							{text}
						</Link>
						{user && (
							<Button
								rel="noreferrer noopener"
								type="submit"
								className={`border ${buttonVariants({ variant: "secondary" })}`}
								onClick={signOutAction}
							>
								Logout
								<LogOut className="w-4 h-4 ml-2" />
							</Button>
						)}
					</div>{" "}
				</NavigationMenuList>

				{/* Mobile View */}
				<motion.div
					initial={{ height: 0 }}
					animate={{ height: isOpen ? "auto" : "0px" }}
					transition={{ duration: 0.3 }}
				>
					<NavigationMenuList className="lg:hidden flex flex-col justify-center items-center">
						{routeList.map((route: RouteProps, i) => (
							<NavigationMenuItem key={i}>
								<NavigationMenuLink
									onClick={() => setIsOpen(false)}
									rel="noreferrer noopener"
									href={route.href}
									className={`text-[17px] ${buttonVariants({
										variant: "ghost",
									})}`}
								>
									{route.label}
								</NavigationMenuLink>
							</NavigationMenuItem>
						))}
						<NavigationMenuItem className="">
							<NavigationMenuLink
								onClick={() => setIsOpen(false)}
								className={buttonVariants({
									variant: "default",
									size: "sm",
									width: "lg",
								})}
								href={link}
							>
								{text}
							</NavigationMenuLink>
						</NavigationMenuItem>
						{user && (
							<>
								<NavigationMenuItem>
									<NavigationMenuLink
										className="hover:bg-transparent text-[17px] hover:scale-105 transition-transform duration-200 hover:text-primary"
										rel="noreferrer noopener"
										href={"/trips"}
									>
										My Trips
									</NavigationMenuLink>
								</NavigationMenuItem>
								<Button
									rel="noreferrer noopener"
									type="submit"
									className={`border ${buttonVariants({ variant: "secondary" })} mb-2`}
									onClick={signOutAction}
								>
									Logout
									<LogOut className="w-4 h-4 ml-2" />
								</Button>
							</>
						)}
					</NavigationMenuList>
				</motion.div>
			</NavigationMenu>
		</header>
	);
};

export default Navbar2Organism;
