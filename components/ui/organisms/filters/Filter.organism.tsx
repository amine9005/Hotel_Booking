import {
	InputFieldLeftLabel,
	InputFieldNoLabel,
} from "@/components/ui/molecules/input-field/InputField.molecule";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { Controller } from "react-hook-form";
import { SyntheticEvent } from "react";
import { FindPlaceFormType } from "@/validations/places.zod";
import { MapPin } from "lucide-react";
import LoadingSubmitButtonMolecule from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";
import { SelectFieldNoLabel } from "@/components/ui/atoms/select-field/SelectField.molecule";
import { propertyType } from "@/types/property.types";
import AdvancedFiltersDialog from "../../../actions/dialog/AdvancedFilters.dialog";
interface Props {
	form: FindPlaceFormType;
	handle_submit: (formEvent: SyntheticEvent) => void;
	formName: string;
	loading: boolean;
}

const placeNameInputValues = {
	name: "placeName",
	labelTitle: "",
	type: "text",
	placeholder: "Where Are You Looking",
	autoComplete: "off",
};

const lowPriceInputValues = {
	name: "lowPrice",
	labelTitle: "Min",
	type: "number",
	placeholder: "Min Price",
	autoComplete: "off",
	min: 0,
};

const highPriceInputValues = {
	name: "highPrice",
	labelTitle: "Max",
	type: "number",
	placeholder: "Max Price",
	autoComplete: "off",
	min: 0,
};

const AdvancedFindPropertyOrganism = ({
	formName,
	handle_submit,
	form,
	loading,
}: Props) => {
	const propertiesTypeInputValues = {
		name: `propertyType`,
		labelTitle: "Property Type",
		options: propertyType,
		placeholder: "Select Property Type",
		form: form,
	};
	return (
		<form className="w-full" id={formName} onSubmit={handle_submit}>
			<FieldGroup className="w-full space-y-4">
				<div className="flex justify-between items-center w-full gap-4">
					<div className="flex items-center justify-center">
						<MapPin className="size-10 text-primary" />
					</div>
					<Controller
						name="placeName"
						control={form?.control}
						render={({ field, fieldState }) => (
							<InputFieldNoLabel
								field={field}
								fieldState={fieldState}
								item={placeNameInputValues}
							/>
						)}
					/>{" "}
					<LoadingSubmitButtonMolecule
						width={"md"}
						loading={loading}
						formName={formName}
					>
						Search
					</LoadingSubmitButtonMolecule>
				</div>
				<div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
					<Controller
						name="placeType"
						control={form?.control}
						render={({ field, fieldState }) => (
							<SelectFieldNoLabel
								field={field}
								fieldState={fieldState}
								item={propertiesTypeInputValues}
								onSelectChange={(e) => {
									form.setValue("placeType", e);
								}}
							/>
						)}
					/>

					<Controller
						name="lowPrice"
						control={form?.control}
						render={({ field, fieldState }) => (
							<InputFieldLeftLabel
								field={field}
								fieldState={fieldState}
								item={lowPriceInputValues}
							/>
						)}
					/>

					<Controller
						name="highPrice"
						control={form?.control}
						render={({ field, fieldState }) => (
							<InputFieldLeftLabel
								field={field}
								fieldState={fieldState}
								item={highPriceInputValues}
							/>
						)}
					/>
					<div className="flex justify-center items-center">
						<AdvancedFiltersDialog
							form={form}
							formName={formName}
							handle_submit={handle_submit}
							loading={loading}
							title="Advanced Filters"
						/>
					</div>
				</div>
			</FieldGroup>
		</form>
	);
};

export default AdvancedFindPropertyOrganism;
