import { SelectHTMLAttributes, useMemo } from "react";
import { useField } from "formik";
import { convertStringToUserFriendlyCase } from "@/tools/functions/string-case-converter";

export function CommonSelect(selectProps: SelectHTMLAttributes<HTMLSelectElement>) {
    const [field, meta] = useField(selectProps.name as string);
    const isError = meta.touched && meta.error;
    const label = useMemo(() => convertStringToUserFriendlyCase(selectProps.name || ""), [selectProps.name]);

    return (
        <div className="flex flex-col gap-1">
            <label htmlFor={selectProps.name} className="mb-1 text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                {...field}
                {...selectProps}
                id={selectProps.name}
                aria-label={label}
                aria-invalid={!!isError}
                aria-describedby={isError ? `${selectProps.name}-error` : undefined}
                className={`resize-none rounded border px-3 py-2 text-gray-900 transition focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    isError ? "border-red-500" : "border-gray-300"
                }`}
            >
                {selectProps.children}
            </select>
            {isError && meta.error && (
                <p id={`${selectProps.name}-error`} className="mt-1 text-sm text-red-500" role="alert">
                    {meta.error}
                </p>
            )}
        </div>
    );
}
