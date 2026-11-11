import { useSearchParamsStore } from "@/store/search.store";
import {
	FindPlaceFormType,
	FindPlaceSchemaType,
} from "@/validations/places.zod";
import { useCallback, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useFindPropertyMutation } from "../mutations/usePlaces.mutation";

export function useFindPropertySubmit(
	form: FindPlaceFormType,
	type: "simple" | "advanced" = "simple",
) {
	const [loading, setLoading] = useState(false);
	const setPlaceName = useSearchParamsStore((state) => state.setPlaceName);
	const setPlaceType = useSearchParamsStore((state) => state.setPlaceType);
	const setSearchResult = useSearchParamsStore(
		(state) => state.setSearchResult,
	);
	const { mutateAsync: findProperty, isPending } = useFindPropertyMutation();

	const onSubmit: SubmitHandler<FindPlaceSchemaType> = useCallback(
		async (data) => {
			setLoading(true);
			setPlaceName(data.placeName);
			setPlaceType(data.placeType);
			const resp = await findProperty();
			setSearchResult(resp);
			setLoading(isPending);
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[setPlaceName, setPlaceType],
	);

	// return handleSubmit(onSubmit);

	return { onSubmit, loading };
}
