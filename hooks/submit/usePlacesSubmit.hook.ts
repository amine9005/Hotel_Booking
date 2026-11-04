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
		},
		[],
	);

	// return handleSubmit(onSubmit);

	return { onSubmit, loading };
}
