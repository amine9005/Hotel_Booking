export const BASE_URL = process.env.BETTER_AUTH_URL;
// console.log("BASE_URL: ", BASE_URL);

export const apiPaths = {
	SUBSCRIPTION_ROUTES: {
		GET: {
			SUBSCRIPTION_BY_ID: "api/subscriptions/",
		},
		POST: {
			UPDATE: "/api/subscriptions/update",
			PORTAL: "/api/subscriptions/portal",
			RESTORE: "/api/subscriptions/restore",
			CANCEL: "/api/subscriptions/restore",
		},
	},

	IMAGES_ROUTES: {
		POST: {
			UNSPLASH: "/api/trip-planner/unsplash-photos",
		},
	},

	PLACES_DETAILS_ROUTES: {
		GET: {
			Locations: "/api/places/locations",
		},
		POST: {
			GOOGLE: "/api/places/google/place-details",
		},
	},
};
