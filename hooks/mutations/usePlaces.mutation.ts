import { apiPaths } from "@/helpers/routes.helper";
import axiosInstance from "@/lib/axios";
import { useSearchParamsStore } from "@/store/search.store";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useFindPropertyMutation = () => {
	const placeName = useSearchParamsStore((state) => state.placeName);
	const placeType = useSearchParamsStore((state) => state.placeType);
	const lowPrice = useSearchParamsStore((state) => state.lowPrice);
	const highPrice = useSearchParamsStore((state) => state.highPrice);
	const bathsNumber = useSearchParamsStore((state) => state.bathsNumber);
	const bedNumber = useSearchParamsStore((state) => state.bedNumber);
	const furnishing = useSearchParamsStore((state) => state.furnishing);
	const queryClient = useQueryClient();

	const findProperty = async () => {
		const response = await axiosInstance.post(
			apiPaths.PLACES_DETAILS_ROUTES.POST.Search,
			{
				placeName,
				placeType,
				lowPrice,
				highPrice,
				bathsNumber,
				bedNumber,
				furnishing,
			},
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
