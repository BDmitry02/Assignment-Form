"use client";

import { startTransition, use, useActionState } from "react";
import { useRouter } from "next/navigation";
import { Form, Formik } from "formik";
import { CommonTextInput } from "@/components/form/CommonTextInput";
import {
    assignmentFormInitialValues,
    assignmentFormValidationSchema,
} from "@/components/assignment-form/assignment-form-data";
import { CommonTextArea } from "@/components/form/CommonTextArea";
import { CommonSelect } from "@/components/form/CommonSelect";
import { assignmentConstants } from "@/tools/constants/assignment-constants";
import { CandidateLevel } from "@/tools/types/candidate-level";
import { Assignment } from "@/tools/types/assignment";
import { endpoints } from "@/tools/constants/endpoints";
import { fetchPost } from "@/tools/functions/api";
import { routes } from "@/tools/constants/routes";
import { CustomApiResponse } from "@/tools/types/custom-api-response";
import { sessionStorageKeys } from "@/tools/constants/session-storage-keys";
import { setSessionStorage } from "@/tools/functions/session-storage";

interface AssignmentFormProps {
    candidateLevelsPromise: Promise<CandidateLevel>;
}

export function AssignmentForm({ candidateLevelsPromise }: AssignmentFormProps) {
    const candidateLevels = use(candidateLevelsPromise);
    const router = useRouter();

    const [formData, setFormData, isLoading] = useActionState(submitAssignment, assignmentFormInitialValues);

    async function submitAssignment(_: Assignment, formData: Assignment) {
        try {
            await fetchPost(endpoints.postAssignment, {
                name: formData.name,
                email: formData.email,
                assignment_description: formData.assignmentDescription,
                github_repo_url: formData.githubRepositoryUrl,
                candidate_level: formData.candidateLevel,
            });

            setSessionStorage(sessionStorageKeys.submittedAssignment, formData);

            router.push(routes.thankYouPage);

            return { ...formData, error: [] };
        } catch (error) {
            const customError = error as CustomApiResponse;

            const errorMessages = customError?.errors
                ? customError.errors
                : customError?.message
                  ? [customError.message]
                  : [];

            return { ...formData, errors: errorMessages };
        }
    }

    return (
        <Formik
            initialValues={formData}
            validationSchema={assignmentFormValidationSchema}
            onSubmit={(values: Assignment) => startTransition(() => setFormData(values))}
        >
            <Form className="mx-auto flex w-full max-w-xl flex-col gap-6 bg-white">
                <div className="flex flex-col gap-4">
                    <CommonTextInput type="text" name={assignmentConstants.name} className="w-full" />
                    <CommonTextInput
                        type="email"
                        name={assignmentConstants.email}
                        autoComplete="email"
                        className="w-full"
                    />
                    <CommonTextArea
                        name={assignmentConstants.assignmentDescription}
                        rows={3}
                        className="w-full"
                    />
                    <CommonTextInput
                        type="text"
                        name={assignmentConstants.githubRepositoryUrl}
                        className="w-full"
                    />
                    <CommonSelect name={assignmentConstants.candidateLevel} className="w-full">
                        <option value="" disabled>
                            Select candidate level
                        </option>
                        {candidateLevels.levels.map((level) => (
                            <option key={level} value={level}>
                                {level}
                            </option>
                        ))}
                    </CommonSelect>
                </div>
                {formData.errors && formData.errors.length > 0 && (
                    <div className="rounded bg-red-100 p-4 text-red-700">
                        <ul className="list-disc space-y-1 pl-5">
                            {formData.errors.map((error: string, idx: number) => (
                                <li key={idx}>{error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <button
                    type="submit"
                    className="mt-4 flex w-full cursor-pointer items-center justify-center rounded bg-purple-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-purple-700"
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <span className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                            Submitting...
                        </span>
                    ) : (
                        "Submit Assignment"
                    )}
                </button>
            </Form>
        </Formik>
    );
}
