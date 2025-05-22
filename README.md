# Assignment Submission Portal

A modern web application for submitting coding assignments, built with [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/) and [Tailwind CSS](https://tailwindcss.com/).

## Features

- Assignment submission form with validation
- Candidate level selection (fetched from API)
- Responsive and modern UI
- Error boundaries and skeleton loading states
- Thank you page with submitted data

## Technologies Used

- Next.js 15 (App Router, Suspense, Server/Client Components)
- React 19
- Formik & Yup (form state and validation)
- Tailwind CSS (utility-first styling)
- TypeScript
- ESLint & Prettier (code quality)

## Project Structure

- `src/app/` — Next.js app directory (pages, error boundary, layout)
- `src/components/` — Reusable UI components and form elements
- `src/tools/` — API functions, constants, and TypeScript types

## Getting Started

### Setup

1. Clone this repository:

    ```bash
    git clone https://github.com/BDmitry02/Assignment-Form.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```


### Running the App

To run the development server, use the following command:

```bash
npm run dev
```

To run the production server, follow these steps:

1. **Build the application**:

    First, build the application to prepare it for production. Run the following command:

    ```bash
    npm run build
    ```

    This command will generate an optimized production build in the `.next` directory.

2. **Start the production server**:

    Once the build is complete, run the following command to start the server:

    ```bash
    npm start
    ```
