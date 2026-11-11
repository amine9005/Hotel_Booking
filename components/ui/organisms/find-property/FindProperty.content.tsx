import { HouseIcon, MapPin } from "lucide-react";
import { SyntheticEvent } from "react";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { FieldGroup } from "@/components/ui/atoms/field/field";
import { Controller } from "react-hook-form";
import { FindPlaceFormType } from "@/validations/places.zod";
import SelectField from "@/components/ui/atoms/select-field/SelectField.molecule";
import { propertyType } from "@/types/property.types";
import LoadingSubmitButtonMolecule from "@/components/ui/molecules/loading-submit-button/loadingSubmitButton.molecule";

interface Props {
	form: FindPlaceFormType;
	handle_submit: (formEvent: SyntheticEvent) => void;
	formName: string;
	loading: boolean;
}

const placeNameInputValues = {
	name: "placeName",
	labelTitle: "Location",
	type: "text",
	placeholder: "Where Are You Looking",
	autoComplete: "off",
};

const FindPropertyOrganism = ({
	form,
	formName,
	handle_submit,
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
		<form id={formName} onSubmit={handle_submit}>
			<FieldGroup className="grid grid-cols-2 md:grid-cols-5  gap-8 md:gap-8">
				<div className="flex col-span-2 w-full justify-center items-center">
					<div className="flex p-2 justify-center items-center">
						<MapPin className="size-10 text-primary" />
					</div>
					<Controller
						name="placeName"
						control={form?.control}
						render={({ field, fieldState }) => (
							<InputField
								field={field}
								fieldState={fieldState}
								item={placeNameInputValues}
							/>
						)}
					/>{" "}
				</div>
				<div className="flex col-span-2 w-full justify-center items-center">
					<div className="flex p-2 justify-center items-center">
						<HouseIcon className="size-10 text-primary" />
					</div>
					<Controller
						name="placeType"
						control={form?.control}
						render={({ field, fieldState }) => (
							<SelectField
								field={field}
								fieldState={fieldState}
								item={propertiesTypeInputValues}
								onSelectChange={(e) => {
									form.setValue("placeType", e);
								}}
							/>
						)}
					/>
				</div>
				<div className="flex col-span-2 md:col-span-1 w-full justify-center items-center">
					<LoadingSubmitButtonMolecule
						width={"full"}
						loading={loading}
						formName={formName}
					>
						Search
					</LoadingSubmitButtonMolecule>
				</div>
			</FieldGroup>
		</form>
	);
};
export default FindPropertyOrganism;
