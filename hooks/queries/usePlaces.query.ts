import { apiPaths } from "@/helpers/routes.helper";
import axiosInstance from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";

// Custom hook to fetch User using React Query
export const useGetLocationsQuery = () => {
	// Define the API endpoint for fetching the User
	const fetchUser = async () => {
		const response = await axiosInstance.get(
			apiPaths.PLACES_DETAILS_ROUTES.GET.Locations,
		);

		return response ? response : null;
	};
	return useQuery({
		queryFn: fetchUser,
		queryKey: ["Locations"],
		staleTime: 60,
	});
};
