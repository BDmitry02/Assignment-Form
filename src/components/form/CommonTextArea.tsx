import { TextareaHTMLAttributes, useMemo } from "react";
import { useField } from "formik";
import { convertStringToUserFriendlyCase } from "@/tools/functions/string-case-converter";

export function CommonTextArea(textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement>) {
    const [field, meta] = useField(textareaProps.name as string);
    const isError = meta.touched && meta.error;
    const label = useMemo(
        () => convertStringToUserFriendlyCase(textareaProps.name || ""),
        [textareaProps.name],
    );

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={textareaProps.name} className="mb-1 text-sm font-medium text-gray-700">
                {label}
            </label>
            <textarea
                {...textareaProps}
                {...field}
                id={textareaProps.name}
                aria-label={label}
                aria-invalid={!!isError}
                aria-describedby={isError ? `${textareaProps.name}-error` : undefined}
                className={`resize-none rounded border px-3 py-2 text-gray-900 transition placeholder:capitalize focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    isError ? "border-red-500" : "border-gray-300"
                }`}
            />
            {isError && meta.error && (
                <p id={`${textareaProps.name}-error`} className="mt-1 text-sm text-red-500" role="alert">
                    {meta.error}
                </p>
            )}
        </div>
    );
}
