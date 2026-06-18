import type { PhotoGridItem } from "@/components/photography/photo-grid";

export type DigitalArtItem = PhotoGridItem & {
  title: string;
  slug: string;
  image: string;
  description: string;
  year: string;
  medium: string;
  orientation?: "wide" | "tall" | "square";
  notes: string[];
};

export type DigitalArtCollection = {
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  mood: string;
  notes: string[];
  artworks: DigitalArtItem[];
};

export const digitalArtCollections: DigitalArtCollection[] = [
  {
    title: "Thresholds",
    slug: "thresholds",
    description:
      "Digital studies built around liminal architecture, artificial light, atmospheric edges, and the moment before a place becomes fully readable.",
    coverImage: "/photos/digital-art/thresholds/web/threshold-study-01.jpg",
    mood:
      "Dim passages, luminous edges, abstract rooms, half-seen structures, synthetic haze, and the feeling of standing between one state and another.",
    notes: [
      "Starting collection for digital art and generated visual studies.",
      "Placeholder image paths are intentional until final Digital Art assets are added.",
    ],
    artworks: [
      {
        title: "Threshold Study 01",
        slug: "threshold-study-01",
        image: "/photos/digital-art/thresholds/web/threshold-study-01.jpg",
        description:
          "A placeholder digital art study for the Thresholds collection, intended to hold space for work built around liminal light, atmosphere, and transitional architecture.",
        year: "2026",
        medium: "Digital image study",
        orientation: "wide",
        notes: [
          "Replace this placeholder path when the first finished Digital Art image is available.",
          "Useful for testing the collection, detail page, and previous/next navigation.",
        ],
      },
      {
        title: "Threshold Study 02",
        slug: "threshold-study-02",
        image: "/photos/digital-art/thresholds/web/threshold-study-02.jpg",
        description:
          "A second placeholder digital art page for testing sequencing, grid layout, and individual work metadata inside the Digital Art section.",
        year: "2026",
        medium: "Digital image study",
        orientation: "square",
        notes: [
          "Keep this as a working placeholder until the collection has final artwork.",
        ],
      },
    ],
  },
];

export function getDigitalArtCollection(slug: string) {
  return digitalArtCollections.find((collection) => collection.slug === slug);
}

export function getDigitalArtWork(collectionSlug: string, artSlug: string) {
  const collection = getDigitalArtCollection(collectionSlug);
  const artwork = collection?.artworks.find((item) => item.slug === artSlug);

  return {
    collection,
    artwork,
  };
}

export function getDigitalArtWorkNavigation(
  collectionSlug: string,
  artSlug: string,
) {
  const collection = getDigitalArtCollection(collectionSlug);

  if (!collection) {
    return {
      previousArtwork: undefined,
      nextArtwork: undefined,
    };
  }

  const currentIndex = collection.artworks.findIndex(
    (artwork) => artwork.slug === artSlug,
  );

  if (currentIndex === -1) {
    return {
      previousArtwork: undefined,
      nextArtwork: undefined,
    };
  }

  return {
    previousArtwork: collection.artworks[currentIndex - 1],
    nextArtwork: collection.artworks[currentIndex + 1],
  };
}

export function getAllDigitalArtWorks() {
  return digitalArtCollections.flatMap((collection) =>
    collection.artworks.map((artwork) => ({
      collectionSlug: collection.slug,
      artSlug: artwork.slug,
    })),
  );
}
