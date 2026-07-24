export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-semibold tracking-tight text-[color:var(--forest)] sm:text-4xl">
          Locally Owned by Jake Bukowski
        </h2>
        <div className="mt-6 max-w-3xl space-y-4 text-[color:var(--foreground)]/85 sm:text-lg">
          <p>
            Bukowski Tree Company is a locally owned tree-service business serving Houston and Southeast Texas. Owner Jake Bukowski is focused on providing professional service, clear communication, straightforward recommendations, and a dependable experience from the first call through project completion.
          </p>
          <p>
            The company serves homeowners, property managers, businesses, and other property owners who need tree removal, branch removal, trimming, storm cleanup, and related tree services.
          </p>
        </div>
      </div>
    </section>
  );
}