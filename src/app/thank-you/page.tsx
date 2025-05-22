import Link from "next/link";
import { routes } from "@/tools/constants/routes";
import { ThankYouAssignmentData } from "@/components/thank-you-assignment-data/ThankYouAssignmentData";

export const metadata = {
    title: "Thank You | Assignment Submission Portal",
    description:
        "Thank you for submitting your assignment. We have received your submission and will review it soon.",
};

export default async function ThankYouPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 p-4">
            <section className="flex w-full max-w-lg flex-col items-center gap-4 rounded-xl bg-white p-4 shadow-lg sm:p-8">
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="32" fill="#A78BFA" />
                    <path
                        d="M20 33l8 8 16-16"
                        stroke="#fff"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <h1 className="w-full text-center text-xl font-bold break-words text-purple-700">
                    Thank you for submitting your assignment!
                </h1>
                <ThankYouAssignmentData />
                <Link
                    href={routes.homePage}
                    className="inline-block rounded bg-purple-600 px-6 py-2 font-semibold text-white shadow transition hover:bg-purple-700"
                >
                    Back to Home
                </Link>
            </section>
        </main>
    );
}
