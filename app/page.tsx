export default async function Index() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 border border-dashed border-gray-300">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center border border-dashed border-gray-300">
        <a
          className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium border border-dashed border-gray-300"
          target="_blank"
          href=""
        >
          Start Jotting Down Todos Now ✨
        </a>
        <h1 className="text-balance font-medium text-3xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-tr from-slate-600 via-slate-900 to-black">
          Next.js 14 Server Actions and Supabase / Auth.
        </h1>
        <p className="font-mono max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 border border-dashed border-gray-300">
          A demo todo app that utilises Supabase for database and auth, combined
          with NextJS 14 Server Actions.
        </p>
        <div className="space-x-4 border border-dashed border-gray-300">
          <a
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-md border border-dashed border-gray-300"
            href="/login"
          >
            Get Started
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background border border-input hover:bg-accent hover:text-accent-foreground h-11 px-8 rounded-md border border-dashed border-gray-300"
            href="https://github.com/shadcn/taxonomy"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
