import { InputHTMLAttributes, useMemo } from "react";
import { useField } from "formik";
import { convertStringToUserFriendlyCase } from "@/tools/functions/string-case-converter";

export function CommonTextInput(inputProps: InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(inputProps.name as string);
    const isError = meta.touched && meta.error;

    const label = useMemo(() => convertStringToUserFriendlyCase(inputProps.name || ""), [inputProps.name]);

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={inputProps.name} className="mb-1 text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                {...inputProps}
                {...field}
                id={inputProps.name}
                aria-label={label}
                aria-invalid={!!isError}
                aria-describedby={isError ? `${inputProps.name}-error` : undefined}
                className={`rounded border px-3 py-2 text-gray-900 transition placeholder:capitalize focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    isError ? "border-red-500" : "border-gray-300"
                }`}
            />
            {isError && meta.error && (
                <p id={`${inputProps.name}-error`} className="mt-1 text-sm text-red-500" role="alert">
                    {meta.error}
                </p>
            )}
        </div>
    );
}
