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

export const lowPriceValidation = z
	.number({
		message: "Please Enter A Valid Number",
	})
	.min(0)
	.nullish();

export const highPriceValidation = z.number().min(0).nullish();

export const bedNumberValidation = z
	.enum(bedNumberOptions, {
		message: "Please Enter A Valid Number",
	})
	.nullish();

export const bathsNumberValidation = z
	.enum(bathsNumberOptions, {
		message: "Please Select Number Of Baths",
	})
	.nullish();

export const furnishingValidation = z
	.enum(furnishingOptions, {
		message: "Please Select Furnishing",
	})
	.nullish();

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
