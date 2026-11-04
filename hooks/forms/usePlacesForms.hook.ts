import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { findPlaceSchema, FindPlaceSchemaType } from "@/validations/places.zod";

export const useFindPropertyForm = () => {
	const form = useForm<FindPlaceSchemaType>({
		resolver: zodResolver(findPlaceSchema),
		defaultValues: {
			placeName: "",
			placeType: "Flat/Apartment",
		},
	});

	return form;
};
