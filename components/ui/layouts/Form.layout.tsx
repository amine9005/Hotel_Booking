const FormLayout = ({ children }: { children?: React.ReactNode }) => {
	return (
		<div className="flex min-w-full justify-center items-start min-h-[calc(100dvh-60px)]">
			{children}
		</div>
	);
};

export default FormLayout;
