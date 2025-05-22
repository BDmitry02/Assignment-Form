import { Suspense } from "react";
import { AssignmentForm } from "@/components/assignment-form/AssignmentForm";
import { AssignmentFormSkeleton } from "@/components/assignment-form/AssignmentFormSkeleton";
import { endpoints } from "@/tools/constants/endpoints";
import { fetchGet } from "@/tools/functions/api";
import { CandidateLevel } from "@/tools/types/candidate-level";

export default function Home() {
    const candidateLevels = fetchGet<CandidateLevel>(endpoints.getCandidateLevels);

    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
            <section className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                <h1 className="mb-6 text-center text-2xl font-bold text-purple-400">Assignment Submission</h1>
                <Suspense fallback={<AssignmentFormSkeleton />}>
                    <AssignmentForm candidateLevelsPromise={candidateLevels} />
                </Suspense>
            </section>
        </main>
    );
}
