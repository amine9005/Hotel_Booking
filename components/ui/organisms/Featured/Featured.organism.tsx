"use client";

import { BlurFade } from "@/components/ui/Effects/blur-fade";
import PropertyCard from "../cards/Property.card";

export function FeaturedPropertiesOrganism() {
	return (
		<div className="w-full max-w-7xl h-full pt-20 space-y-5 md:space-y-10 lg:space-y-20">
			<BlurFade delay={0.1} inView onlyOnce={false}>
				<div className="flex justify-center items-center w-full">
					<h2 className="max-w-7xl  pl-4 mx-auto lg:text-5xl text-xl md:text-5xl font-bold  text-[42px] text-semiBold font-sans">
						Featured Properties
					</h2>
				</div>
			</BlurFade>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{Array.from({ length: 10 }).map((_, index) => (
					<BlurFade
						delay={0.1 + index * 0.1}
						inView
						onlyOnce={false}
						key={index}
					>
						<PropertyCard />
					</BlurFade>
				))}
			</div>
		</div>
	);
}
