import { DarkImage } from "@/components/photography/dark-image";
import { PhotoGrid } from "@/components/photography/photo-grid";
import { SectionHeading } from "@/components/photography/section-heading";
import {
  getPhotographyCollection,
  photographyCollections,
} from "@/data/photography-collections";

type PhotographyCollectionPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return photographyCollections.map((collection) => ({
    slug: collection.slug,
  }));
}

export default async function PhotographyCollectionPage({
  params,
}: PhotographyCollectionPageProps) {
  const { slug } = await params;
  const collection = getPhotographyCollection(slug);

  if (!collection) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-24 text-zinc-100">
        <div className="mx-auto max-w-4xl">
          <a
            href="/photography"
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            ← Back to photography
          </a>

          <h1 className="mt-12 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Collection not found.
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-500">
            This photography collection does not exist yet.
          </p>

          <p className="mt-6 text-sm text-zinc-700">
            Requested collection: {slug}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <a
          href="/photography"
          className="text-sm text-zinc-500 transition hover:text-zinc-300"
        >
          ← Back to photography
        </a>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-600">
              {collection.status}
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-7xl">
              {collection.title}
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-8 text-zinc-400">
              {collection.description}
            </p>
          </div>

          <DarkImage
            src={collection.coverImage}
            alt={`${collection.title} cover`}
            className="h-[28rem] rounded-3xl border border-zinc-900"
            imageClassName="opacity-85"
          />
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Mood"
            title="What this collection is chasing."
          />

          <p className="max-w-3xl text-xl leading-9 text-zinc-400">
            {collection.mood}
          </p>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Gallery"
            title="Selected images."
            description="Early selects, studies, and future print candidates from this collection."
            className="mb-10 max-w-3xl"
          />

          <PhotoGrid
            photos={collection.photos}
            collectionSlug={collection.slug}
          />
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-zinc-900 bg-black p-8 sm:p-10">
            <SectionHeading
              eyebrow="Prints"
              title="Prints from this collection will be available later."
              description="Once the final selects are reviewed for sharpness, tone, crop, and print quality, this section can show available images, sizes, paper options, and purchase links."
            />
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/70 p-8 sm:p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
              Inquiries
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Interested in a piece from this series?
            </h2>

            <p className="mt-6 leading-7 text-zinc-500">
              Until the print shop is live, this can point visitors toward
              direct contact for print interest, licensing, or private
              inquiries.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contact about this collection
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}