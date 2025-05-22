export function AssignmentFormSkeleton() {
    return (
        <div className="mx-auto flex w-full max-w-xl flex-col gap-6 rounded-xl bg-white p-8 shadow-lg">
            <div className="flex flex-col gap-4">
                <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-20 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-10 w-full animate-pulse rounded bg-gray-200" />
            </div>
            <div className="mt-4 h-10 w-full animate-pulse rounded bg-purple-200" />
        </div>
    );
}
