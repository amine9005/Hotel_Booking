import { ReactNode } from "react";

interface Props {
	left: ReactNode;
	right: ReactNode;
}

const OneTwoLayout = ({ left, right }: Props) => {
	return (
		<div className="grid w-full grid-cols-1 md:grid-cols-2 min-h-[calc(100dvh-60px)] gap-5 md:p-1 lg:p-5 lg:pt-12 pt-3 ">
			{left}
			{right}
		</div>
	);
};

export default OneTwoLayout;
