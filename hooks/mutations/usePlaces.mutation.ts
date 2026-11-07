import { apiPaths } from "@/helpers/routes.helper";
import axiosInstance from "@/lib/axios";
import { useSearchParamsStore } from "@/store/search.store";
import { FindPlaceSchemaType } from "@/validations/places.zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useFindPropertyMutation = () => {
	const placeName = useSearchParamsStore((state) => state.placeName);
	const placeType = useSearchParamsStore((state) => state.placeType);
	const queryClient = useQueryClient();

	const findProperty = async () => {
		const response = await axiosInstance.post(
			apiPaths.PLACES_DETAILS_ROUTES.POST.Search,
			{ placeName, placeType },
		);

		return response.data;
	};

	return useMutation({
		mutationFn: findProperty,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["FindProperty"] });
		},
	});
};
