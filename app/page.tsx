import Categories from "@/components/actions/catagories";
import PropertyCard from "@/components/ui/organisms/cards/Property.card";
import TwoSectionsHero from "@/components/ui/organisms/Heros/Hero-1/TwoSections.hero";
import { PopularCityListOrganism } from "@/components/ui/organisms/popular-city-list/PopularCityList.organism";

export default function Home() {
	return (
		<div className="flex flex-col flex-1 items-center justify-center font-sans ">
			<TwoSectionsHero />
			<Categories />
			<PopularCityListOrganism />
			<PropertyCard />
		</div>
	);
}
