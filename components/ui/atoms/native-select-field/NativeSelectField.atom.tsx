import {
	Field,
	FieldError,
	FieldLabel,
} from "@/components/ui/atoms/field/field";
import { FieldValues } from "react-hook-form";
import {
	NativeSelect,
	NativeSelectOption,
} from "../native-select/native-select";

interface Item {
	name: string;
	labelTitle?: React.ReactNode;
	options: string[];
	placeholder?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	form: any;
}
interface Props {
	item: Item;
	field: FieldValues;
	onSelectChange?: (value: string) => void;
	fieldState: {
		invalid: boolean;
		isTouched: boolean;
		isDirty: boolean;
		isValidating: boolean;
		error?: { message?: string | undefined } | undefined;
	};
}
const NativeSelectField = ({
	item,
	field,
	fieldState,
	onSelectChange,
}: Props) => {
	return (
		<Field className="z-100" data-invalid={fieldState.invalid}>
			<FieldLabel className="z-100" htmlFor={`form-${item.name}`}>
				{item.labelTitle}
			</FieldLabel>
			<NativeSelect
				{...field}
				onChange={(e) =>
					onSelectChange
						? onSelectChange(e.target.value as string)
						: item.form.setValue(item.name, e.target.value as string)
				}

				aria-invalid={fieldState.invalid}
			>
				{item.options.map((value, index) => (
					<NativeSelectOption value={value} key={index}>
						{" "}
						{value}
					</NativeSelectOption>
				))}
			</NativeSelect>
			{fieldState.invalid && <FieldError errors={[fieldState.error]} />}
		</Field>
	);
};

export default NativeSelectField;
