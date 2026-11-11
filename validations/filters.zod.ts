import { propertyType } from "@/types/property.types";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const placeNameValidation = z
	.string()
	.min(3, { message: "Please Enter A Location" });

export const placeTypeValidation = z.enum(propertyType, {
	message: "Please Select A Property Type",
});

export const findPlaceSchema = z.object({
	placeName: placeNameValidation,
	placeType: placeTypeValidation,
});

export type FindPlaceSchemaType = z.infer<typeof findPlaceSchema>;

export type FindPlaceFormType = UseFormReturn<FindPlaceSchemaType>;
