"use client";
import { useEffect, useState } from "react";
import { Assignment } from "@/tools/types/assignment";
import { sessionStorageKeys } from "@/tools/constants/session-storage-keys";
import { getSessionStorage, removeSessionStorage } from "@/tools/functions/session-storage";

export function ThankYouAssignmentData() {
    const [assignment, setAssignment] = useState<Assignment>();

    useEffect(() => {
        const data = getSessionStorage<Assignment>(sessionStorageKeys.submittedAssignment);
        setAssignment(data);

        return () => removeSessionStorage(sessionStorageKeys.submittedAssignment);
    }, []);

    if (!assignment) return null;

    return (
        <div className="flex w-full flex-col gap-2 overflow-x-auto rounded bg-purple-50 p-2 break-words text-gray-700 sm:p-4">
            <div>
                <span className="font-semibold">Name:</span> {assignment.name}
            </div>
            <div>
                <span className="font-semibold">Email:</span> {assignment.email}
            </div>
            <div>
                <span className="font-semibold">Candidate Level:</span> {assignment.candidateLevel}
            </div>
            <div>
                <span className="font-semibold">GitHub Repository:</span>{" "}
                <a
                    href={assignment.githubRepositoryUrl}
                    className="break-all text-blue-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {assignment.githubRepositoryUrl}
                </a>
            </div>
            <div>
                <span className="font-semibold">Assignment Description:</span>
                <div className="whitespace-pre-line">{assignment.assignmentDescription}</div>
            </div>
        </div>
    );
}
