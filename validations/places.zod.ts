import {
	bathsNumberOptions,
	bedNumberOptions,
	furnishingOptions,
	propertyType,
} from "@/types/property.types";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const placeNameValidation = z
	.string()
	.min(3, { message: "Please Enter A Location" });

export const placeTypeValidation = z.enum(propertyType, {
	message: "Please Select A Property Type",
});

export const lowPriceValidation = z.number().min(0).nullable();

export const highPriceValidation = z.number().min(0).nullable();

export const bedNumberValidation = z
	.enum(bedNumberOptions, {
		message: "Please Select Number Of Beds",
	})
	.nullable();

export const bathsNumberValidation = z
	.enum(bathsNumberOptions, {
		message: "Please Select Number Of Baths",
	})
	.nullable();

export const furnishingValidation = z
	.enum(furnishingOptions, {
		message: "Please Select Furnishing",
	})
	.nullable();

export const findPlaceSchema = z
	.object({
		placeName: placeNameValidation,
		placeType: placeTypeValidation,
		lowPrice: lowPriceValidation,
		highPrice: highPriceValidation,
		bedNumber: bedNumberValidation,
		bathNumber: bathsNumberValidation,
		furnishing: furnishingValidation,
	})
	.superRefine(({ lowPrice, highPrice }, ctx) => {
		if (lowPrice && highPrice && highPrice <= lowPrice) {
			ctx.addIssue({
				code: "custom",
				message: "Low Price cannot be greater than or equal to High Price",
				path: ["lowPrice"],
			});
		}
	});

export type FindPlaceSchemaType = z.infer<typeof findPlaceSchema>;

export type FindPlaceFormType = UseFormReturn<FindPlaceSchemaType>;
