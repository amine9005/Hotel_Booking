import React from "react";
import OneTwoLayout from "@/components/ui/layouts/OneTwo.layout";
import HeroImageMolecule from "@/components/ui/molecules/hero/hero-image/HeroImage.molecule";
import LeftSideHero from "@/components/ui/organisms/Heros/Hero-1/left-side/LeftSide.hero";

const TwoSectionsHero = () => {
	return <OneTwoLayout left={<LeftSideHero />} right={<HeroImageMolecule />} />;
};

export default TwoSectionsHero;
