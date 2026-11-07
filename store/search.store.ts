import { create } from "zustand";

type searchParamsState = {
	placeName: string | null;
	placeType: string | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	searchResult: any | null;
	setPlaceName: (name: string | null) => void;
	setPlaceType: (name: string | null) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setSearchResult: (name: any | null) => void;
};

export const useSearchParamsStore = create<searchParamsState>((set) => ({
	placeName: "",
	placeType: "",
	searchResult: null,
	setPlaceName: (placeName) => set({ placeName }),
	setPlaceType: (placeType) => set({ placeType }),
	setSearchResult: (searchResult) => set({ searchResult }),
}));
