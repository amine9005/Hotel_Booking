"use client";
import FindPropertyOrganism from "@/components/ui/organisms/find-property/FindProperty.content";
import { useFindPropertyForm } from "@/hooks/forms/usePlacesForms.hook";
import { useFindPropertySubmit } from "@/hooks/submit/usePlacesSubmit.hook";

const FindPropertyAction = () => {
	const form = useFindPropertyForm();
	const { handleSubmit } = form;
	const { onSubmit, loading } = useFindPropertySubmit(form);

	return (
		<FindPropertyOrganism
			loading={loading}
			form={form}
			formName="find-property"
			handle_submit={handleSubmit(onSubmit)}
		/>
	);
};

export default FindPropertyAction;
