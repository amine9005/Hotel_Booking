"use client";
import AdvancedFindPropertyOrganism from "@/components/ui/organisms/filters/Filter.organism";
import { useFindPropertyForm } from "@/hooks/forms/usePlacesForms.hook";
import { useFindPropertySubmit } from "@/hooks/submit/usePlacesSubmit.hook";

const AdvancedFindPropertyAction = () => {
	const form = useFindPropertyForm();
	const { handleSubmit } = form;
	const { onSubmit, loading } = useFindPropertySubmit(form, "advanced");

	return (
		<AdvancedFindPropertyOrganism
			loading={loading}
			form={form}
			formName="find-property"
			handle_submit={handleSubmit(onSubmit)}
		/>
	);
};

export default AdvancedFindPropertyAction;
