"use client";
import type { Variants } from "motion";
import { motion } from "motion/react";
import { H2 } from "../ui/atoms/heading/heading2";
import { P } from "../ui/atoms/text/Text";
import { APP_FEATURES } from "@/constants/data";
import CategoryCard from "../ui/organisms/cards/CategoryCard";

const Categories = () => {
	const container_variant: Variants = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.4,
			},
		},
	};

	const popup_variant: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 150,
				damping: 10,
				ease: "easeInOut",
				duration: 0.5,
			},
		},
	};

	const card_variant: Variants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 150,
				damping: 10,
				ease: "easeInOut",
			},
		},
	};

	return (
		<div className="container my-8 lg:my-15">
			<motion.div
				variants={popup_variant}
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.8 }}
				className="text-center"
			>
				<H2 className="text-slate-700 text-[42px] text-semiBold">
					Browse By Category
				</H2>
				<P className="text-gray-500 max-w-lg mx-auto">
					Explore curated collections of properties tailored to your specific
					lifestyle and needs.
				</P>
			</motion.div>
			<motion.div
				variants={container_variant}
				initial="hidden"
				whileInView="visible"
				viewport={{ amount: 0.2 }}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20 px-4 md:px-12 lg:px-16"
			>
				{APP_FEATURES.map((feature) => (
					<motion.div key={feature.id} variants={card_variant}>
						<CategoryCard key={feature.id} feature={feature} />
					</motion.div>
				))}
			</motion.div>
		</div>
	);
};

export default Categories;
