import Link from "next/link";
import { LightboxImage } from "@/components/photography/lightbox-image";
import { SectionHeading } from "@/components/photography/section-heading";
import {
  getAllDigitalArtWorks,
  getDigitalArtWork,
  getDigitalArtWorkNavigation,
} from "@/data/digital-art-collections";

type DigitalArtWorkPageProps = {
  params: Promise<{
    slug: string;
    artSlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllDigitalArtWorks().map((artwork) => ({
    slug: artwork.collectionSlug,
    artSlug: artwork.artSlug,
  }));
}

export default async function DigitalArtWorkPage({
  params,
}: DigitalArtWorkPageProps) {
  const { slug, artSlug } = await params;
  const { collection, artwork } = getDigitalArtWork(slug, artSlug);
  const { previousArtwork, nextArtwork } = getDigitalArtWorkNavigation(
    slug,
    artSlug,
  );

  if (!collection || !artwork) {
    return (
      <main className="min-h-screen bg-[#050505] px-6 py-24 text-zinc-100">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/digital-art"
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            ← Back to digital art
          </Link>

          <h1 className="mt-12 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
            Work not found.
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-500">
            This digital art page does not exist yet.
          </p>

          <p className="mt-6 text-sm text-zinc-700">
            Requested work: {slug}/{artSlug}
          </p>
        </div>
      </main>
    );
  }

  const details = [
    ["Collection", collection.title],
    ["Year", artwork.year],
    ["Medium", artwork.medium],
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap gap-4">
          <Link
            href={`/digital-art/${collection.slug}`}
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            ← Back to {collection.title}
          </Link>

          <Link
            href="/digital-art"
            className="text-sm text-zinc-700 transition hover:text-zinc-400"
          >
            All digital art
          </Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-600">
              {collection.title}
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-7xl">
              {artwork.title}
            </h1>

            <div className="mt-8 space-y-3 text-zinc-500">
              <p className="text-xl leading-8 text-zinc-400">
                {artwork.medium}
              </p>

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-700">
                {artwork.year}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <LightboxImage
              src={artwork.image}
              alt={artwork.title}
              className="flex h-[36rem] items-center justify-center rounded-3xl border border-zinc-900 bg-black lg:h-[42rem]"
              imageClassName="h-full w-full object-contain opacity-95"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Work notes"
            title="The idea behind the image."
          />

          <div className="space-y-8">
            <p className="max-w-3xl text-xl leading-9 text-zinc-400">
              {artwork.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {details.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-zinc-900 bg-black p-6"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                    {label}
                  </p>

                  <p className="mt-3 text-zinc-300">{value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-zinc-900 bg-black p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Notes
              </p>

              <ul className="mt-4 space-y-3 text-zinc-400">
                {artwork.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-900 bg-black p-8 sm:p-10">
            <SectionHeading
              eyebrow="Editions"
              title="Edition details will be added later."
              description="For now, this is a portfolio detail page. Later this area can show print availability, digital edition notes, licensing terms, and purchase links."
            />
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/70 p-8 sm:p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
              Interest
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Interested in this work?
            </h2>

            <p className="mt-6 leading-7 text-zinc-500">
              Until a shop or edition system is live, this section can point to
              direct contact for licensing, collaboration, or private inquiries.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contact about this work
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {previousArtwork ? (
            <Link
              href={`/digital-art/${collection.slug}/${previousArtwork.slug}`}
              className="rounded-3xl border border-zinc-900 bg-black p-6 transition hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Previous work
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                ← {previousArtwork.title}
              </h3>
            </Link>
          ) : (
            <div className="rounded-3xl border border-zinc-900 bg-black p-6 opacity-40">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Previous work
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-500">
                Start of collection
              </h3>
            </div>
          )}

          {nextArtwork ? (
            <Link
              href={`/digital-art/${collection.slug}/${nextArtwork.slug}`}
              className="rounded-3xl border border-zinc-900 bg-black p-6 text-right transition hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Next work
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                {nextArtwork.title} →
              </h3>
            </Link>
          ) : (
            <div className="rounded-3xl border border-zinc-900 bg-black p-6 text-right opacity-40">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Next work
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-500">
                End of collection
              </h3>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
