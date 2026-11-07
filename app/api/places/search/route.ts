import { NextRequest, NextResponse } from "next/server";
import { getClient } from "@/db/mongoose";
// import SubscriptionModel from "@/db/models/Subscription.model";
import { headers } from "next/headers";
import { getAuth } from "@/lib/auth";
const auth = await getAuth();
const db = await getClient();
export async function POST(req: NextRequest) {
	try {
		const { placeName, placeType } = await req.json();
		console.log("placeName ", placeName, "placeType: ", placeType);

		return NextResponse.json(
			{
				message: "Subscription Retrieved Successfully",
				data: "Dummy Data",
			},
			{
				status: 200,
			},
		);
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ message: "Internal Server Error", error },
			{ status: 500 },
		);
	}
}
