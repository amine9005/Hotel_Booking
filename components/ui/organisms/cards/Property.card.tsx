import { BlurImageMolecule } from "@/components/ui/molecules/blur-image/BlurImage.molecule";
import { P } from "@/components/ui/atoms/text/Text";
import { Bath, BedDouble, Expand, Eye, Heart, MapPin } from "lucide-react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import LoadingSubmitButtonMolecule from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
// Featured
const PropertyCard = () => {
	return (
		<div className=" flex group flex-col rounded-4xl h-120 max-h-120 dark:bg-secondary transition-all duration-300 hover:-translate-y-2 overflow-hidden">
			<div className="relative overflow-hidden max-w-120 max-h-60 h-60 w-full">
				<div className="absolute w-full z-5 p-4 flex items-center justify-between">
					<div className="flex gap-2">
						<div className="bg-white rounded-xl p-2">
							<P variant={"secondary"}>New</P>
						</div>
					</div>

					<Heart className="size-10 hover:cursor-pointer text-white fill-white hover:text-red-400 duration-400 transition-all" />
				</div>
				<BlurImageMolecule
					alt="PROPERTY_NAME"
					src={"/Property_place_holder.avif"}
					url={"/Property_place_holder.avif"}
					width={240}
					height={120}
					loading="eager"
					className=" rounded-t-4xl group-hover:scale-110 transition duration-700 "
				/>
			</div>
			<div className="p-4 flex flex-col space-y-1">
				<div className="flex justify-between items-center w-full">
					<P size={"sm"} variant={"primary"}>
						{" "}
						PROPERTY_TYPE{" "}
					</P>
					<div className="flex justify-center items-center gap-2">
						<Eye /> <P size={"sm"}> 0 </P>
					</div>
				</div>
				<H2>PROPERTY TITLE</H2>
				<div className="flex items-center gap-4">
					<MapPin className="text-primary" /> PROPERTY ADDRESS
				</div>

				<div className="grid grid-cols-3 p-3">
					<div className="flex flex-col justify-center items-center space-y-2">
						<BedDouble className="size-8" />
						<P>3</P>
						<P size={"xs"}>Beds</P>
					</div>

					<div className="flex flex-col justify-center items-center space-y-2">
						<Bath className="size-8" />
						<P>3</P>
						<P size={"xs"}>Baths</P>
					</div>

					<div className="flex flex-col justify-center items-center space-y-2">
						<Expand className="size-8" />
						<P>1200</P>
						<P size={"xs"}>m 2</P>
					</div>
				</div>

				<LoadingSubmitButtonMolecule
					loading={false}
					className="w-full text-white h-12 rounded-xl text-lg"
				>
					View Details
				</LoadingSubmitButtonMolecule>
			</div>
		</div>
	);
};

export default PropertyCard;
