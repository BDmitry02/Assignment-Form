import * as yup from "yup";

export const assignmentFormInitialValues = {
    name: "",
    email: "",
    assignmentDescription: "",
    githubRepositoryUrl: "",
    candidateLevel: "",
    errors: [],
};

export const assignmentFormValidationSchema = yup.object().shape({
    name: yup.string().required("Name is required.").typeError("Name must be a string."),
    email: yup.string().email("Email must be a valid email address.").required("Email is required."),
    assignmentDescription: yup
        .string()
        .min(10, "Assignment description must be at least 10 characters.")
        .required("Assignment description is required.")
        .typeError("Assignment description must be a string."),
    githubRepositoryUrl: yup
        .string()
        .url("GitHub repository URL must be a valid URL.")
        .required("GitHub repository URL is required."),
    candidateLevel: yup
        .string()
        .oneOf(
            ["Junior", "Middle", "Senior", "Principal"],
            "Candidate level must be one of Junior, Middle, Senior or Principal.",
        )
        .required("Candidate level is required."),
});
