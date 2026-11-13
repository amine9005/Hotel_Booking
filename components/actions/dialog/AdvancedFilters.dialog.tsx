import { buttonVariants } from "@/components/ui/atoms/button/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/atoms/dialog/dialog";
import { P } from "@/components/ui/atoms/text/Text";
import LoadingSubmitButtonMolecule from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";

import { SyntheticEvent, useState } from "react";
import AdvancedFiltersDialogContent from "@/components/ui/organisms/dialog/AdvancedFilters.dialog.content";
import { FindPlaceFormType } from "@/validations/places.zod";

interface Props {
	form: FindPlaceFormType;
	handle_submit: (formEvent: SyntheticEvent) => void;
	formName: string;
	loading: boolean;
	title: string;
	text?: string;
}

const AdvancedFiltersDialog = ({
	title,
	form,
	loading,
	formName,
	handle_submit,
}: Props) => {
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<P className="text-md font-semibold text-primary text-center underline hover:cursor-pointer">
					More Filters
				</P>
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-106.25 md:max-w-lg lg:max-w-4xl "
				aria-describedby={"advanced filters"}
			>
				<DialogHeader>
					<DialogTitle className="text-primary">{title}</DialogTitle>
				</DialogHeader>
				<div className="flex justify-center items-center my-4">
					<AdvancedFiltersDialogContent
						loading={loading}
						form={form}
						handle_submit={handle_submit}
						formName={formName}
					/>
				</div>
				<DialogFooter className="grid grid-cols-2 lg:flex w-full justify-center lg:justify-end items-center gap-4">
					<DialogClose
						className={buttonVariants({
							size: "lg",
							width: "md_or_full",
							variant: "outline",
						})}
					>
						Cancel
					</DialogClose>

					<LoadingSubmitButtonMolecule
						loading={loading}
						handle_click={handle_submit}
						width={"md_or_full"}
					>
						Search
					</LoadingSubmitButtonMolecule>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default AdvancedFiltersDialog;
