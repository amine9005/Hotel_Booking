import {
	FindPlaceFormType,
	FindPlaceSchemaType,
} from "@/validations/places.zod";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";

export function useFindPropertySubmit(form: FindPlaceFormType) {
	const [loading, setLoading] = useState(false);

	const onSubmit: SubmitHandler<FindPlaceSchemaType> = useCallback(
		async (data) => {
			setLoading(false);
			console.log("data: ", data);
		},
		[],
	);

	// return handleSubmit(onSubmit);

	return { onSubmit, loading };
}
