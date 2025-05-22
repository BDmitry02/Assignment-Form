"use client";
import Link from "next/link";
import { routes } from "@/tools/constants/routes";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-100 to-purple-200 p-4">
            <section className="flex w-full max-w-md flex-col items-center gap-4 rounded-xl bg-white p-8 shadow-lg">
                <svg width="64" height="64" fill="none" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="32" fill="#F87171" />
                    <path d="M32 20v16" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
                    <circle cx="32" cy="44" r="2.5" fill="#fff" />
                </svg>
                <h1 className="text-center text-xl font-bold text-red-600">Something went wrong</h1>
                <p className="text-center text-gray-700">
                    {error?.message ||
                        "An unexpected error occurred. Please try again or return to the home page."}
                </p>
                <div className="mt-4 flex gap-2">
                    <button
                        onClick={() => reset()}
                        className="rounded bg-purple-600 px-4 py-2 font-semibold text-white shadow transition hover:bg-purple-700"
                    >
                        Try again
                    </button>
                    <Link
                        href={routes.homePage}
                        className="rounded bg-gray-200 px-4 py-2 font-semibold text-gray-700 shadow transition hover:bg-gray-300"
                    >
                        Back to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
