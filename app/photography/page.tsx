import { DarkImage } from "@/components/photography/dark-image";
import { SectionHeading } from "@/components/photography/section-heading";
import { photographyCollections } from "@/data/photography-collections";

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-600">
            Photography
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-7xl">
            Selected photographic work.
          </h1>

          <p className="mt-8 text-xl leading-8 text-zinc-400">
            A growing archive of Los Angeles, coastal atmosphere, quiet streets,
            equestrian spaces, and images built around shadow, weather, texture,
            and mood.
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Collections"
            title="Current series."
            description="Each collection gathers images around a specific atmosphere, location, or recurring visual instinct."
            className="mb-10 max-w-3xl"
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {photographyCollections.map((collection) => (
              <a
                key={collection.slug}
                href={`/photography/${collection.slug}`}
                className="group overflow-hidden rounded-3xl border border-zinc-900 bg-black transition hover:border-zinc-700"
              >
                <DarkImage
                  src={collection.coverImage}
                  alt={`${collection.title} cover`}
                  className="h-72"
                  imageClassName="opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />

                <div className="p-6">
                  <p className="mb-3 text-xs uppercase tracking-[0.3em] text-zinc-600">
                    {collection.status}
                  </p>

                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-100">
                    {collection.title}
                  </h2>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-zinc-500">
                    {collection.description}
                  </p>

                  <p className="mt-6 text-sm text-zinc-400">
                    View collection →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}