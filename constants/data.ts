import { Hotel, HousePlus, Houses, Store } from "lucide-react";

export const APP_FEATURES = [
	{
		id: 1,
		icon: Hotel,
		title: "Modern Flats",
		description: "",
		border_color: "border-primary",
		icon_color: "group-hover:bg-primary text-color",
		bg_from: "from-blue-500",
		bg_via: "via-blue-300",
		bg_to: "to-blue-50",
		href: "/browse/flats",
	},
	{
		id: 2,
		icon: HousePlus,
		title: "Luxury Villas",
		description: "",
		border_color: "border-primary",
		icon_color: "group-hover:bg-primary text-color",
		bg_from: "from-blue-500",
		bg_via: "via-blue-300",
		bg_to: "to-blue-50",
		href: "/browse/villas",
	},
	{
		id: 3,
		icon: Houses,
		title: "Penthouse",
		description: "",
		border_color: "border-primary dark:border-primary",
		icon_color: "group-hover:bg-primary text-color",
		bg_from: "from-blue-500",
		bg_via: "via-blue-300",
		bg_to: "to-blue-50",
		href: "/browse/penthouses",
	},
	{
		id: 4,
		icon: Store,
		title: "Commercial",
		description: "",
		border_color: "border-primary",
		icon_color: "group-hover:bg-primary text-color",
		bg_from: "from-blue-500",
		bg_via: "via-blue-300",
		bg_to: "to-blue-50",
		href: "/browse/commercial",
	},
];

export const TESTIMONIALS = [
	{
		id: 1,
		name: "John Doe",
		rating: 5,
		img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop",
		review:
			"I was skeptical about the AI-powered medical consolation but after using it, I was completely blown away. It's a game-changer!",
	},
	{
		id: 2,
		name: "Mark Smith",
		rating: 5,
		img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&h=200&auto=format&fit=crop",
		review:
			"I love how easy it is to get medical advice from AI. It's like having a doctor at your fingertips!",
	},
	{
		id: 3,
		name: "Alice Johnson",
		rating: 5,
		img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop",
		review:
			"I was amazed by how accurate and helpful the AI-powered medical consultation platform was. It's a game-changer for people who want quick and reliable medical advice!",
	},
	{
		id: 4,
		img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
		name: "Jordan Lee",
		rating: 4,
		review:
			"Using AI for health advice is the future no waiting lists no hassle just quick and easy consolation",
	},
];
