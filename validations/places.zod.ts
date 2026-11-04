import { propertyType } from "@/types/placeType.types";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const placeNameValidation = z
	.string()
	.min(3, { message: "Place Name must be at least 3 char longs" });

export const placeTypeValidation = z.enum(propertyType);

export const findPlaceSchema = z.object({
	placeName: placeNameValidation,
	placeType: placeTypeValidation,
});

export type FindPlaceSchemaType = z.infer<typeof findPlaceSchema>;

export type FindPlaceFormType = UseFormReturn<FindPlaceSchemaType>;
