# Assignment Submission Portal

A modern web application for submitting coding assignments, built with [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Assignment submission form with validation
- Candidate level selection (fetched from API)
- Responsive and modern UI
- Error boundaries and skeleton loading states
- Thank you page with submitted data

## Getting Started

### 1. Install dependencies

````bash
npm install
# or
yarn install


### 2. Run the development server

```bash
npm run dev
# or
yarn dev


Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### 3. Build for production

```bash
npm run build
npm start
````

## Project Structure

- `src/app/` — Next.js app directory (pages, error boundary, layout)
- `src/components/` — Reusable UI components and form elements
- `src/tools/` — API functions, constants, and TypeScript types

## Technologies Used

- Next.js 15 (App Router, Suspense, Server/Client Components)
- React 19
- Formik & Yup (form state and validation)
- Tailwind CSS (utility-first styling)
- TypeScript
- ESLint & Prettier (code quality)
