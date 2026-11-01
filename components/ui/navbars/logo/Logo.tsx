import { HouseIcon } from "lucide-react";
import Link from "next/link";
import { H2 } from "@/components/ui/atoms/heading/heading2";

const Logo = () => {
	return (
		<Link
			rel="noreferrer noopener"
			href="/"
			className="ml-2 font-bold text-xl flex col-span-1 gap-4"
		>
			<HouseIcon className="size-8 text-primary" />
			<H2>Dari</H2>
		</Link>
	);
};

export default Logo;
