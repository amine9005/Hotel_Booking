import PropertyCard from "@/components/ui/organisms/cards/Property.card";
import GlobalMapOrganism from "@/components/ui/organisms/map/GlobalMap.organism";
import React from "react";

const page = () => {
	return (
		<div className="h-full w-full mt-4 lg:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-8 overflow-y-scroll scrollbar-none">
				<PropertyCard />
				<PropertyCard />
			</div>
			<div>
				{" "}
				<GlobalMapOrganism />{" "}
			</div>
		</div>
	);
};

export default page;
