import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import { BlurFade } from "@/components/ui/Effects/blur-fade";
import FindPropertyAction from "@/components/actions/forms/places/FindProperty.action";

const LeftSideHero = () => {
	return (
		<div className="flex col-span-3 flex-col justify-start items-start space-y-5 md:space-y-10">
			<BlurFade delay={0.1} onlyOnce={false} inView className="w-full">
				<H2 className="text-3xl md:text-7xl  font-bold">
					Find Your <span className="text-primary">Perfect</span> Next Chapter.
				</H2>
			</BlurFade>
			<BlurFade delay={0.2} onlyOnce={false} inView className="w-full">
				<P className="text-md md:text-xl lg:text-2xl">
					Experience The Most Advanced Real Estate Search Platform, Discover
					Verified Listing, Connect With Trusted Agents, And Find Places You
					Love.
				</P>
			</BlurFade>
			<BlurFade delay={0.3} onlyOnce={false} inView className="w-full">
				<FindPropertyAction />
			</BlurFade>
		</div>
	);
};

export default LeftSideHero;
