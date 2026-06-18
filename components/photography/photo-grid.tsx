import { DarkImage } from "@/components/photography/dark-image";

export type PhotoGridItem = {
  title: string;
  slug: string;
  location?: string;
  image: string;
  orientation?: "wide" | "tall" | "square";
  printStatus?: string;
  description?: string;
  medium?: string;
  camera?: string;
  lens?: string;
  settings?: string;
  year?: string;
  watermark?: string;
  notes?: string[];
};

type PhotoGridProps = {
  photos: PhotoGridItem[];
  collectionSlug?: string;
  basePath?: string;
  ctaLabel?: string;
};

export function PhotoGrid({
  photos,
  collectionSlug,
  basePath = "/photography",
  ctaLabel = "View image",
}: PhotoGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {photos.map((photo) => {
        const metadata = photo.location ?? photo.medium ?? photo.year;

        const cardContent = (
          <>
            <DarkImage
              src={photo.image}
              alt={photo.title}
              className={`${
                photo.orientation === "tall"
                  ? "h-[34rem]"
                  : photo.orientation === "wide"
                    ? "h-80"
                    : "h-72"
              }`}
              imageClassName="opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            />

            <div className="p-5">
              {metadata ? (
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
                  {metadata}
                </p>
              ) : null}

              <h3 className="mt-3 text-xl font-medium tracking-[-0.03em] text-zinc-100">
                {photo.title}
              </h3>

              {photo.printStatus ? (
                <p className="mt-4 text-sm text-zinc-600">
                  {photo.printStatus}
                </p>
              ) : null}

              {collectionSlug ? (
                <p className="mt-5 text-sm text-zinc-700 transition group-hover:text-zinc-400">
                  {ctaLabel} →
                </p>
              ) : null}
            </div>
          </>
        );

        const className = `group overflow-hidden rounded-3xl border border-zinc-900 bg-black transition duration-500 hover:border-zinc-700 ${
          photo.orientation === "wide" ? "md:col-span-2" : ""
        }`;

        if (collectionSlug) {
          return (
            <a
              key={photo.slug}
              href={`${basePath}/${collectionSlug}/${photo.slug}`}
              className={className}
            >
              {cardContent}
            </a>
          );
        }

        return (
          <article key={photo.slug} className={className}>
            {cardContent}
          </article>
        );
      })}
    </div>
  );
}
