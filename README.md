# AiStarterKit

Open source starter kit for building AI applications with Next.js, and Vercel AI SDK.

## Getting Started

We are using npm as our package manager.

> To use Yarn or any other package manager, delete the `package-lock.json` file and run the below commands using the package manager of your choice.

1. Install dependencies

   ```bash
   npm install
   ```

2. Rename `.env.example` to `.env` and set the environment variables

3. Development server

   ```bash
   npm run dev
   ```

   Your app template should now be running on [http://localhost:3000](http://localhost:3000).

   Additional commands:

   ```bash
   npm run build # Build the project
   npm run start # Start the production server
   ```

## Features

- [Next.js](https://nextjs.org) App Router
  - Advanced routing, SEO, and performance
  - React Server Components (RSCs) and Server Actions for server-side rendering
- [AI SDK](https://sdk.vercel.ai/docs)
  - Unified API for generating text, and tool calls with LLMs
  - Supports OpenAI (default) and other model providers.
- [Auth.js](https://authjs.dev)
  - Simple and secure authentication
