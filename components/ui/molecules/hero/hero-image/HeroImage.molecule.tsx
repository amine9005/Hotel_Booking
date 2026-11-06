import { BlurFade } from "@/components/ui/Effects/blur-fade";
import FormLayout from "@/components/ui/layouts/Form.layout";
import { BlurImageMolecule } from "@/components/ui/molecules/blur-image/BlurImage.molecule";

const HeroImageMolecule = () => {
	return (
		<BlurFade delay={0.5} onlyOnce={false} inView className="w-full col-span-2">
			<FormLayout>
				<BlurImageMolecule
					alt="Hero Image"
					src={"/hero.jpg"}
					url={"/hero.jpg"}
					width={480}
					height={480}
					loading="eager"
					className="w-120 h-120 rounded-4xl transition-all duration-300 hover:-translate-y-1"
				/>
			</FormLayout>
		</BlurFade>
	);
};

export default HeroImageMolecule;
