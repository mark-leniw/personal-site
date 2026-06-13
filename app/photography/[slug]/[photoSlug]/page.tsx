import { LightboxImage } from "@/components/photography/lightbox-image";
import { SectionHeading } from "@/components/photography/section-heading";
import {
  getAllPhotographyPhotos,
  getPhotographyPhoto,
  getPhotographyPhotoNavigation,
} from "@/data/photography-collections";

type PhotographyPhotoPageProps = {
  params: Promise<{
    slug: string;
    photoSlug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPhotographyPhotos().map((photo) => ({
    slug: photo.collectionSlug,
    photoSlug: photo.photoSlug,
  }));
}

export default async function PhotographyPhotoPage({
  params,
}: PhotographyPhotoPageProps) {
  const { slug, photoSlug } = await params;
  const { collection, photo } = getPhotographyPhoto(slug, photoSlug);
  const { previousPhoto, nextPhoto } = getPhotographyPhotoNavigation(
    slug,
    photoSlug,
  );

  if (!collection || !photo) {
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
            Photo not found.
          </h1>

          <p className="mt-6 max-w-2xl text-zinc-500">
            This photo page does not exist yet.
          </p>

          <p className="mt-6 text-sm text-zinc-700">
            Requested photo: {slug}/{photoSlug}
          </p>
        </div>
      </main>
    );
  }

  const details = [
    ["Collection", collection.title],
    ["Location", photo.location],
    ["Year", photo.year ?? "TBD"],
    ["Camera", photo.camera ?? "TBD"],
    ["Lens", photo.lens ?? "TBD"],
    ["Exposure", photo.settings ?? "TBD"],
    ["Print status", photo.printStatus ?? "Not reviewed yet"],
    ["Watermark", photo.watermark ?? "Web image only"],
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap gap-4">
          <a
            href={`/photography/${collection.slug}`}
            className="text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            ← Back to {collection.title}
          </a>

          <a
            href="/photography"
            className="text-sm text-zinc-700 transition hover:text-zinc-400"
          >
            All photography
          </a>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div className="order-2 lg:order-1">
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-zinc-600">
              {collection.title}
            </p>

            <h1 className="text-5xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-7xl">
              {photo.title}
            </h1>

            <div className="mt-8 space-y-3 text-zinc-500">
              <p className="text-xl leading-8 text-zinc-400">
                {photo.location}
              </p>

              <p className="text-sm uppercase tracking-[0.25em] text-zinc-700">
                {photo.year ?? "Year TBD"}
              </p>
            </div>

            {photo.printStatus ? (
              <p className="mt-8 inline-flex rounded-full border border-zinc-800 bg-black px-4 py-2 text-sm text-zinc-500">
                {photo.printStatus}
              </p>
            ) : null}
          </div>

          <div className="order-1 lg:order-2">
            <LightboxImage
              src={photo.image}
              alt={photo.title}
              className="flex h-[36rem] items-center justify-center rounded-3xl border border-zinc-900 bg-black lg:h-[42rem]"
              imageClassName="h-full w-full object-contain opacity-95"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.75fr_1.25fr]">
          <SectionHeading
            eyebrow="Image notes"
            title="The story behind the frame."
          />

          <div className="space-y-8">
            <p className="max-w-3xl text-xl leading-9 text-zinc-400">
              {photo.description ??
                "This page is ready for the final image description, location notes, camera settings, editing notes, print status, and purchase options when this photo becomes part of a finished collection."}
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
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-900 bg-black p-8 sm:p-10">
            <SectionHeading
              eyebrow="Prints"
              title="Print options will be added later."
              description="For now, this is a portfolio detail page. When the print system is ready, this area can show available sizes, paper type, edition details, and purchase links."
            />
          </div>

          <div className="rounded-3xl border border-zinc-900 bg-zinc-950/70 p-8 sm:p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
              Interest
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
              Interested in this image?
            </h2>

            <p className="mt-6 leading-7 text-zinc-500">
              Until the print shop is live, this section can eventually point to
              a contact form or email link for print interest, licensing, or
              private inquiries.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-full border border-zinc-800 px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900"
            >
              Contact about this image
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-900 bg-[#080808] px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {previousPhoto ? (
            <a
              href={`/photography/${collection.slug}/${previousPhoto.slug}`}
              className="rounded-3xl border border-zinc-900 bg-black p-6 transition hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Previous image
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                ← {previousPhoto.title}
              </h3>
            </a>
          ) : (
            <div className="rounded-3xl border border-zinc-900 bg-black p-6 opacity-40">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Previous image
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-500">
                Start of collection
              </h3>
            </div>
          )}

          {nextPhoto ? (
            <a
              href={`/photography/${collection.slug}/${nextPhoto.slug}`}
              className="rounded-3xl border border-zinc-900 bg-black p-6 text-right transition hover:border-zinc-700"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Next image
              </p>
              <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-zinc-100">
                {nextPhoto.title} →
              </h3>
            </a>
          ) : (
            <div className="rounded-3xl border border-zinc-900 bg-black p-6 text-right opacity-40">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-700">
                Next image
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