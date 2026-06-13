import { DarkImage } from "@/components/photography/dark-image";
import { SectionHeading } from "@/components/photography/section-heading";
import { photographyCollections } from "@/data/photography-collections";

const selectedDirections = [
  "Urban shadows",
  "Overcast routes",
  "Storefront studies",
  "Beach structures",
  "Roadside scenes",
  "Night color",
];

export default function PhotographyPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto flex min-h-[72vh] max-w-6xl flex-col justify-center px-6 py-24">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
            Photography
          </p>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] text-zinc-100 sm:text-7xl">
            Mark <span className="text-white">L</span>eniw
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
            Moody, minimal, and cinematic photography from Los Angeles,
            Southern California, and the quiet spaces between destinations.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#collections"
              className="rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              View collections
            </a>

            <a
              href="#prints"
              className="rounded-full bg-zinc-50 px-5 py-3 text-sm font-medium text-black-300 transition hover:bg-gray"
            >
              Print shop coming soon
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="About the work"
            title="Quiet images from the edges of ordinary places."
          />

          <div className="space-y-6 text-lg leading-8 text-zinc-400">
            <p>
              My photography is drawn to darker skies, empty streets, coastal
              weather, neon residue, storefronts, quiet architecture, and the
              atmosphere that appears when a place feels temporarily unguarded.
            </p>

            <p>
              The work is less about documenting landmarks and more about
              noticing the spaces between them: the parking lot after the rain,
              the pier before the crowd, the window still glowing after the
              business has closed, the street before the day fully begins.
            </p>

            <p className="text-zinc-500">
              This section is being built as a living portfolio, with
              collections forming slowly around recurring moods, locations, and
              light.
            </p>
          </div>
        </div>
      </section>

      <section
        id="collections"
        className="border-t border-zinc-900 bg-[#050505] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Collections"
            title="Built as routes, moods, and recurring obsessions."
            className="mb-12 max-w-2xl"
          />

          <div className="grid gap-6 md:grid-cols-3">
            {photographyCollections.map((collection) => (
              <a
                key={collection.slug}
                href={`/photography/${collection.slug}`}
                className="group rounded-3xl border border-zinc-900 bg-zinc-950/50 p-5 transition duration-500 hover:border-zinc-700 hover:bg-zinc-950"
              >
                <DarkImage
                  src={collection.coverImage}
                  alt={`${collection.title} preview`}
                  className="mb-10 h-56 rounded-2xl border border-zinc-900"
                  imageClassName="opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
                />

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-600">
                  {collection.status}
                </p>

                <h3 className="text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                  {collection.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-500 transition group-hover:text-zinc-400">
                  {collection.description}
                </p>

                <p className="mt-8 text-sm text-zinc-600 transition group-hover:text-zinc-400">
                  View collection →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Selected direction"
            title="The work should feel quiet before it feels commercial."
          />

          <div className="grid gap-3 sm:grid-cols-2">
            {selectedDirections.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-900 bg-zinc-950/70 px-5 py-4 text-zinc-400"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="prints"
        className="border-t border-zinc-900 bg-[#050505] px-6 py-20"
      >
        <div className="mx-auto max-w-6xl rounded-3xl border border-zinc-900 bg-black p-8 sm:p-10">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Prints
          </p>

          <h2 className="max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
            A print shop will be added when the first collection is ready.
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
            The first print-ready images should be carefully reviewed for
            sharpness, noise, crop, export size, color consistency, and whether
            the photograph still holds up after repeated viewing.
          </p>

          <p className="mt-6 text-sm text-zinc-600">
            Planned future flow: photo collection → selected print → size
            options → print partner → checkout.
          </p>
        </div>
      </section>
    </main>
  );
}