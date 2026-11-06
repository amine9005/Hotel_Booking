import React from "react";
import HeroImageMolecule from "@/components/ui/molecules/hero/hero-image/HeroImage.molecule";
import LeftSideHero from "@/components/ui/organisms/Heros/Hero-1/left-side/LeftSide.hero";
import LeftRightThreeColLayout from "@/components/ui/layouts/OneTwoThree.layout";

const TwoSectionsHero = () => {
	return (
		<LeftRightThreeColLayout
			left={<LeftSideHero />}
			right={<HeroImageMolecule />}
		/>
	);
};

export default TwoSectionsHero;
