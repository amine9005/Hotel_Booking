"use client";
import { APP_FEATURES } from "@/constants/data";
import { useRef, useState, type MouseEvent } from "react";
import { H2 } from "@/components/ui/atoms/heading/heading2";
import { P } from "@/components/ui/atoms/text/Text";
import Link from "next/link";

const CategoryCard = ({ feature }: { feature: (typeof APP_FEATURES)[0] }) => {
	const [visible, setVisible] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const divRef = useRef<HTMLDivElement>(null);

	const handleMouseMove = (e: MouseEvent) => {
		const bounds = divRef.current!.getBoundingClientRect();
		setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
	};
	return (
		<Link href={feature.href}>
			<div
				ref={divRef}
				onMouseMove={handleMouseMove}
				onMouseEnter={() => setVisible(true)}
				onMouseLeave={() => setVisible(false)}
				className="relative group transition-transform duration-300 hover:-translate-y-2 rounded-xl p-px backdrop-blur-lg text-white overflow-hidden shadow-2xl cursor-pointer"
			>
				<div
					className={`pointer-events-none blur-3xl rounded-full bg-linear-to-r ${
						feature.bg_from
					} ${feature.bg_via} ${
						feature.bg_to
					} size-60 absolute z-0 transition-opacity duration-500 ${
						visible ? "opacity-40" : "opacity-0"
					}`}
					style={{ top: position.y - 120, left: position.x - 120 }}
				/>

				<div
					className={`flex flex-col min-w-full h-80 max-h-80 bg-secondary text-center items-center justify-center rounded-xl p-6 border-2 ${feature.border_color} gap-6 max-w-sm`}
				>
					<div
						className={`p-6 aspect-square transition duration-500 rounded-full ${feature.icon_color}`}
					>
						<feature.icon className="text-white size-15" />
					</div>

					<div className="space-y-2">
						<H2 className=" text-xl font-semibold text-slate-900 dark:text-white">
							{feature.title}
						</H2>
						<P className="text-md text-slate-700 dark:text-white">
							{feature.description}
						</P>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default CategoryCard;
