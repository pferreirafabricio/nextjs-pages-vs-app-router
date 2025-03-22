# NextJS: Pages vs App router

## Side-by-side comparison

| Feature                                   | Pages Router (`pages/`)                                                                   | App Router (`app/`)                                                                          |
| ----------------------------------------- | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **Routing System**                        | File-based routing using `pages/` directory.                                              | File-based routing using `app/` directory with React Server Components.                      |
| **Rendering Methods**                     | Supports SSR (`getServerSideProps`), SSG (`getStaticProps`), ISR (`revalidate`), and CSR. | Uses Server Components by default, supports Server Actions, React Suspense, and Streaming.   |
| **Data Fetching**                         | Uses `getServerSideProps`, `getStaticProps`, and `getInitialProps`.                       | Uses `fetch` in Server Components, `useEffect` in Client Components, and `useServerAction`.  |
| **Server Components**                     | Not supported. Everything is a Client Component.                                          | Server Components by default; Client Components must be explicitly defined (`"use client"`). |
| **Static Site Generation (SSG)**          | Uses `getStaticProps` and `getStaticPaths`.                                               | Uses `fetch` in Server Components and `generateStaticParams` for SSG.                        |
| **Server-Side Rendering (SSR)**           | Uses `getServerSideProps`.                                                                | Built-in for Server Components, requires a Client Component for interactivity.               |
| **Incremental Static Regeneration (ISR)** | Uses `revalidate` in `getStaticProps`.                                                    | Uses `revalidate` option in `fetch()`.                                                       |
| **Streaming & Suspense**                  | Not supported.                                                                            | Fully supported. Enables progressive hydration and partial rendering.                        |
| **Client Components**                     | All components are Client Components.                                                     | Requires `"use client"` directive at the top of the file.                                    |
| **Middleware**                            | Uses `middleware.ts` in the root directory.                                               | Still uses `middleware.ts`, but more optimized for edge runtime.                             |
| **API Routes**                            | Defined in `pages/api/`.                                                                  | Replaced with Route Handlers in `app/api/` using `route.ts` or `route.js`.                   |
| **Layouts**                               | Not built-in; requires `_app.js` and `_document.js`.                                      | Supports React Server Component-based layouts with `layout.tsx`.                             |
| **Nested Layouts**                        | Not natively supported. Can be implemented with `useRouter` or context.                   | Fully supported with nested `layout.tsx` files.                                              |
| **Global State Management**               | Uses React Context, Redux, Zustand, or Recoil.                                            | Same as Pages Router but optimized for Server Components.                                    |
| **Parallel Routes**                       | Not supported.                                                                            | Fully supported with `@slot` syntax for parallel rendering.                                  |
| **Intercepting Routes**                   | Not supported.                                                                            | Fully supported with `(...)` syntax for intercepting routes.                                 |
| **SEO (Meta Tags, Open Graph, etc.)**     | Uses `next/head` component.                                                               | Uses `metadata` export in `layout.tsx` or `page.tsx`.                                        |
| **Performance**                           | Optimized, but lacks streaming and React Server Component benefits.                       | More optimized due to Server Components, streaming, and reduced JavaScript on the client.    |
| **Authentication Handling**               | Handled using API routes or middleware.                                                   | More optimized with Server Actions and middleware for authentication.                        |
| **File Naming**                           | Uses `.js` or `.tsx` inside `pages/`.                                                     | Uses `.ts`, `.tsx`, or `.js` inside `app/` with `page.tsx`, `layout.tsx`, and `route.ts`.    |
| **Migration Complexity**                  | Older Next.js applications use this. No migration is needed.                                 | Requires refactoring when moving from `pages/` to `app/`.                                    |
| **Recommended For**                       | Small to medium projects or those that need traditional SSR and CSR.                      | Modern applications that benefit from React Server Components and better performance.        |

## References

- [Next.js: App Router vs Pages Router — What You Need to Know (2024)](https://medium.com/@tanzim3421/next-js-app-router-vs-pages-router-what-you-need-to-know-202-69a885ccaa56)
- [What is different between App Router and Pages Router in Next.js?](https://stackoverflow.com/questions/76570208/what-is-different-between-app-router-and-pages-router-in-next-js)
