import { RouteProps } from "@/types/Route.types";
import {
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/atoms/navigation-menu/navigation-menu";
import Link from "next/link";

const routeList: RouteProps[] = [
	{
		label: "الملكيات",
		href: "/properties",
	},
	{
		label: "قائمة الأمنيات",
		href: "/wishlist",
	},
	{
		label: "الرسائل",
		href: "/messages",
	},
];
const BuyerNavItems = () => {
	return routeList.map((route: RouteProps, i) => (
		<NavigationMenuItem key={i}>
			<NavigationMenuLink
				rel="noreferrer noopener"
				href={route.href}
				className="text-[17px] hover:scale-105 transition-transform duration-200 hover:text-primary hover:bg-transparent"
			>
				{route.label}
			</NavigationMenuLink>
		</NavigationMenuItem>
	));
};

export default BuyerNavItems;
