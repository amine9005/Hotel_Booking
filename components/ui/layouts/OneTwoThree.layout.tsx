import { ReactNode } from "react";

interface Props {
	left: ReactNode;
	right: ReactNode;
}

const LeftRightThreeColLayout = ({ left, right }: Props) => {
	return (
		<div className="grid grid-cols-1 mt-5 lg:grid-cols-5 gap-5 md:p-1 lg:p-5 ">
			{left}
			{right}
		</div>
	);
};

export default LeftRightThreeColLayout;
