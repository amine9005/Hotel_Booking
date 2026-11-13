import { Controller } from "react-hook-form";
import { FindPlaceFormType } from "@/validations/places.zod";
import { SyntheticEvent } from "react";
import {
	bathsNumberOptions,
	bedNumberOptions,
	furnishingOptions,
} from "@/types/property.types";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import NativeSelectField from "../../atoms/native-select-field/NativeSelectField.atom";
interface Props {
	form: FindPlaceFormType;
	handle_submit: (formEvent: SyntheticEvent) => void;
	formName: string;
	loading: boolean;
}

const AdvancedFiltersDialogContent = ({ form }: Props) => {
	const bedNumberInputValues = {
		name: `bedNumber`,
		labelTitle: "Number of Bedrooms",
		options: bedNumberOptions,
		placeholder: "Select Number of Bedrooms",
		form: form,
	};

	const bathNumberInputValues = {
		name: `bathNumber`,
		labelTitle: "Number of Baths",
		options: bathsNumberOptions,
		placeholder: "Select Number of Baths",
		form: form,
	};

	const furnishingInputValues = {
		name: `furnishing`,
		labelTitle: "Furnishing",
		options: furnishingOptions,
		placeholder: "Select Select Furnishing",
		form: form,
	};
	return (
		<form className="w-full h-full">
			<FieldGroup className="w-full h-full">
				<div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
					<Controller
						name="bedNumber"
						control={form.control}
						render={({ field, fieldState }) => (
							<NativeSelectField
								field={field}
								fieldState={fieldState}
								item={bedNumberInputValues}
								onSelectChange={(e) => {
									form.setValue("bedNumber", e);
								}}
							/>
						)}
					/>
					<Controller
						name="bathNumber"
						control={form?.control}
						render={({ field, fieldState }) => (
							<NativeSelectField
								field={field}
								fieldState={fieldState}
								item={bathNumberInputValues}
								onSelectChange={(e) => {
									form.setValue("bathNumber", e);
								}}
							/>
						)}
					/>

					<Controller
						name="furnishing"
						control={form?.control}
						render={({ field, fieldState }) => (
							<NativeSelectField
								field={field}
								fieldState={fieldState}
								item={furnishingInputValues}
								onSelectChange={(e) => {
									form.setValue("furnishing", e);
								}}
							/>
						)}
					/>
				</div>
			</FieldGroup>
		</form>
	);
};

export default AdvancedFiltersDialogContent;
