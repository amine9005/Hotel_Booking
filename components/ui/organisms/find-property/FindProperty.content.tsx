import { MapPin } from "lucide-react";
import { SyntheticEvent } from "react";
import InputField from "@/components/ui/molecules/input-field/InputField.molecule";
import { FieldGroup } from "../../atoms/field/field";
import { Controller } from "react-hook-form";
import { FindPlaceFormType } from "@/validations/places.zod";

interface Props {
	form: FindPlaceFormType;
	handle_submit: (formEvent: SyntheticEvent) => void;
	formName: string;
}

const placeNameInputValues = {
	name: "placeName",
	labelTitle: "Location",
	type: "text",
	placeholder: "Where Are You Looking",
	autoComplete: "off",
};

const placeTypeInputValues = {
	name: "placeType",
	labelTitle: "Property Type",
	type: "text",
	placeholder: "Where Are You Looking",
	autoComplete: "off",
};

const FindPropertyOrganism = ({ form, formName, handle_submit }: Props) => {
	return (
		<form id={formName} onSubmit={handle_submit}>
			<FieldGroup>
				<div className="grid grid-cols-2">
					<div className="flex w-full justify-center items-center">
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
			</FieldGroup>
		</form>
	);
};
export default FindPropertyOrganism;
