import { create } from "zustand";

type searchParamsState = {
	placeName: string | null;
	placeType: string | null;
	lowPrice: number | null;
	highPrice: number | null;
	bedNumber: string | null;
	bathsNumber: string | null;
	furnishing: string | null;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	searchResult: any | null;
	setPlaceName: (name: string | null) => void;
	setPlaceType: (name: string | null) => void;
	setLowPrice: (name: number | null) => void;
	setHighPrice: (name: number | null) => void;
	setBedNumber: (name: string | null) => void;
	setFurnishing: (name: string | null) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setSearchResult: (name: any | null) => void;
};

export const useSearchParamsStore = create<searchParamsState>((set) => ({
	placeName: "",
	placeType: "",
	lowPrice: null,
	highPrice: null,
	bedNumber: null,
	bathsNumber: null,
	furnishing: null,
	searchResult: null,
	setPlaceName: (placeName) => set({ placeName }),
	setPlaceType: (placeType) => set({ placeType }),
	setLowPrice: (lowPrice) => set({ lowPrice }),
	setHighPrice: (highPrice) => set({ highPrice }),
	setBedNumber: (bedNumber) => set({ bedNumber }),
	setFurnishing: (furnishing) => set({ furnishing }),
	setSearchResult: (searchResult) => set({ searchResult }),
}));
