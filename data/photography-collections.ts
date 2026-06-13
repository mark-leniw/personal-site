import type { PhotoGridItem } from "@/components/photography/photo-grid";

export type PhotographyCollection = {
  title: string;
  slug: string;
  status: string;
  description: string;
  coverImage: string;
  mood: string;
  notes: string[];
  photos: PhotoGridItem[];
};

export const photographyCollections: PhotographyCollection[] = [
  {
    title: "L.A. Noir",
    slug: "la-noir",
    status: "Primary collection",
    description:
      "Black-and-white Los Angeles photography shaped by shadow, empty streets, architecture, storefronts, and the quiet drama of ordinary places.",
    coverImage: "/photos/photography/la-noir/web/la-noir-alex.jpg",
    mood:
      "Monochrome streets, hard shadows, deep blacks, lonely storefronts, parking lots, alleys, old signs, glass, concrete, and the feeling that Los Angeles is holding something back.",
    notes: [
      "This is the main home for black-and-white and monochrome Los Angeles work.",
      "Best for strong contrast, lonely compositions, graphic shadows, and cinematic urban frames.",
      "Likely one of the strongest first candidates for a finished print collection.",
    ],
    photos: [
      {
        title: "Noir Storefront",
        slug: "noir-storefront",
        location: "Glendale, California",
        image: "/photos/photography/la-noir/web/la-noir-storefront.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A monochrome storefront study from an early morning walk through Glendale, shaped by shadow, glass, signage, and the quiet tension of Los Angeles before the day fully begins.",
        camera: "Nikon D850",
        lens: "Nikon AF-S 35mm f/1.4G",
        settings: "ISO 90 · f/3.5 · 1/40 sec",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "Alex Before Light",
        slug: "alex-before-light",
        location: "Glendale, California",
        image: "/photos/photography/la-noir/web/la-noir-alex.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A monochrome study of the Alex Theatre in early morning light, where the marquee, street, and deep shadows turn Glendale into a quiet noir frame.",
        camera: "Nikon D850",
        lens: "Nikon AF-S 35mm f/1.4G",
        settings: "ISO 64 · f/8 · 1/60 sec",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "Noir Motel",
        slug: "noir-motel",
        location: "Glendale, California",
        image: "/photos/photography/la-noir/web/la-noir-motel.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A monochrome motel study shaped by signage, stucco, shadow, and the quiet roadside mood of Glendale before the city fully wakes.",
        camera: "Nikon D850",
        lens: "Nikon AF-S 35mm f/1.4G",
        settings: "ISO 1250 · f/8 · 1/40 sec",
        year: "2026",
        watermark: "Web image only",
      },
    ],
  },
  /* {
    title: "L.A. After Hours",
    slug: "la-after-hours",
    status: "In progress",
    description:
      "Color night photography from Los Angeles: neon residue, artificial light, reflections, glowing windows, and the strange calm that settles when the day lets go.",
    coverImage: "/photos/photography/la-after-hours/cover.jpg",
    mood:
      "Dark streets, closed businesses, leftover neon, parking lots, reflections, and the feeling that the city is still awake somewhere nearby.",
    notes: [
      "This collection is for color night work rather than monochrome noir images.",
      "Best for neon, sodium vapor, wet pavement, window glow, and artificial light.",
      "Works well with restrained color, deep blacks, and small pockets of light.",
    ],
    photos: [
      {
        title: "Closed Sign Study",
        slug: "closed-sign-study",
        location: "Los Angeles",
        image: "/photos/photography/la-after-hours/closed-sign-study.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A color night study of a quiet storefront or sign after business hours, held together by artificial light and surrounding darkness.",
        camera: "Nikon D850",
        lens: "TBD",
        settings: "TBD",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "Parking Lot Glow",
        slug: "parking-lot-glow",
        location: "Burbank",
        image: "/photos/photography/la-after-hours/parking-lot-glow.jpg",
        orientation: "square",
        printStatus: "Working select",
        description:
          "A dark parking lot scene shaped by reflected artificial light, empty space, and the quiet mood of Los Angeles after hours.",
        camera: "Nikon D850",
        lens: "TBD",
        settings: "TBD",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "Window After Dark",
        slug: "window-after-dark",
        location: "Los Angeles",
        image: "/photos/photography/la-after-hours/window-after-dark.jpg",
        orientation: "tall",
        printStatus: "Study image",
        description:
          "A vertical night window or doorway composition built around glow, glass, color, and surrounding darkness.",
        camera: "Nikon D850",
        lens: "TBD",
        settings: "TBD",
        year: "2026",
        watermark: "Web image only",
      },
    ],
  },
  {
    title: "Before Light",
    slug: "before-light",
    status: "Early studies",
    description:
      "Morning fog, muted streets, soft coastal air, and the half-awake city before it becomes itself.",
    coverImage: "/photos/photography/before-light/cover.jpg",
    mood:
      "Overcast mornings, empty routes, marine layer, soft storefront light, and the quiet before the day gets loud.",
    notes: [
      "Best for early morning scouting routes.",
      "Pairs well with fog, low contrast, and gentle color.",
      "Could become the softer counterpoint to L.A. Noir and L.A. After Hours.",
    ],
    photos: [
      {
        title: "Marine Layer Route",
        slug: "marine-layer-route",
        location: "Burbank",
        image: "/photos/photography/before-light/marine-layer-route.jpg",
        orientation: "wide",
        printStatus: "Study image",
        description:
          "An early morning route under marine layer light, where the city feels muted before it becomes loud.",
        camera: "Nikon D850",
        lens: "TBD",
        settings: "TBD",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "Morning Storefront",
        slug: "morning-storefront",
        location: "San Fernando Valley",
        image: "/photos/photography/before-light/morning-storefront.jpg",
        orientation: "square",
        printStatus: "Working select",
        description:
          "A quiet storefront before the city fully wakes up, held in soft morning light and low contrast.",
        camera: "Nikon D850",
        lens: "TBD",
        settings: "TBD",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "Empty Side Street",
        slug: "empty-side-street",
        location: "Los Angeles",
        image: "/photos/photography/before-light/empty-side-street.jpg",
        orientation: "tall",
        printStatus: "Candidate for review",
        description:
          "An empty side street in soft morning light, built around quiet, restraint, and the feeling of a day not yet started.",
        camera: "Nikon D850",
        lens: "TBD",
        settings: "TBD",
        year: "2026",
        watermark: "Web image only",
      },
    ],
  }, */
  {
    title: "The California Edge",
    slug: "california-edge",
    status: "Building",
    description:
      "Waves, piers, rock formations, fog, tide pools, long exposures, and the changing edge where California meets the Pacific.",
    coverImage:"/photos/photography/california-edge/web/under-the-pier.jpg",
    mood:
      "Moving water, dark pier structures, under-pier shadows, rocks, mist, gray skies, coastal architecture, and the quiet force of the Pacific.",
    notes: [
      "This collection holds the broader coastal work: waves, piers, fog, rocks, tide pools, and beach structures.",
      "Best for tripod work, under-pier compositions, moving water, long exposures, and dramatic coastal weather.",
      "Broad enough for quiet fog images, powerful wave studies, and architectural beach frames.",
    ],
    photos: [
      {
        title: "Under the Pier",
        slug: "under-the-pier",
        location: "Santa Monica, California",
        image: "/photos/photography/california-edge/web/under-the-pier.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A coastal structure study beneath the Venice Beach pier, shaped by shadow, repetition, water movement, and the heavy geometry of the Pacific edge.",
        camera: "Nikon D850",
        lens: "Nikon AF-S 35mm f/1.4G",
        settings: "ISO 1250 · f/3.5 · 1/40 sec",
        year: "2026",
        watermark: "Web image only",
},
      {
        title: "Pier Walk",
        slug: "pier-walk",
        location: "Santa Monica, California",
        image: "/photos/photography/california-edge/web/the-coming-storm.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A coastal storm study from Venice Beach, shaped by dark sky, moving water, and the charged quiet before weather takes over the frame.",
        camera: "Nikon D850",
        lens: "Nikon AF-S 35mm f/1.4G",
        settings: "ISO 72 · f/16 · 1/40 sec",
        year: "2026",
        watermark: "Web image only",
      },
      {
        title: "The Birds",
        slug: "the-birds",
        location: "Malibu, California",
        image: "/photos/photography/california-edge/web/birds-on-a-rock.jpg",
        orientation: "wide",
        printStatus: "Candidate for review",
        description:
          "A quiet coastal frame from Malibu, with birds gathered on rock between moving water, open air, and the edge of the Pacific.",
        camera: "Nikon D850",
        lens: "Nikon AF-S 24mm f/1.4G ED",
        settings: "ISO 64 · f/11 · 1/60 sec",
        year: "2026",
        watermark: "Web image only",
      },
      
    ],
  },
  {
    title: "Equestrian California",
    slug: "equestrian-california",
    status: "Planned collection",
    description:
      "Horses, racetracks, stables, riding arenas, training grounds, and the quieter equestrian spaces woven through Southern California.",
    coverImage: "/photos/photography/equestrian-california/web/DSC_1332.jpg",
    mood:
      "Morning track light, stable corridors, horse silhouettes, leather, dust, rails, barns, grandstands, riders, and the hidden elegance of California horse culture.",
    notes: [
      "This collection can include L.A. Equestrian Center, Santa Anita, stables, racetracks, barns, horses, riders, and training areas.",
      "Best for warm color, dust, early light, long shadows, tack details, track architecture, and quiet horse portraits.",
      "This should likely stay color-forward rather than monochrome, with cinematic grading in DaVinci or your photo editor.",
    ],
    photos: [
      {
      title: "Equestrian at Sunset",
      slug: "equestrian-at-sunset",
      location: "Los Angeles, California",
      image: "/photos/photography/equestrian-california/web/DSC_1332.jpg",
      orientation: "wide",
      printStatus: "Candidate for review",
      description:
        "An evening equestrian study from Los Angeles, shaped by low sunset light, open space, and the quiet structure of the riding grounds.",
      camera: "Nikon D850",
      lens: "Nikon AF-S 35mm f/1.4G",
      settings: "ISO 72 · f/8 · 1/40 sec",
      year: "2026",
      watermark: "Web image only",
  },
      {
      title: "Equestrian Center Walk",
      slug: "equestrian-center-walk",
      location: "Los Angeles, California",
      image: "/photos/photography/equestrian-california/web/DSC_0836.jpg",
      orientation: "wide",
      printStatus: "Candidate for review",
      description:
        "An afternoon equestrian study from Los Angeles, shaped by the quiet geometry of the riding grounds, open light, and the calm structure of the center.",
      camera: "Nikon D850",
      lens: "Nikon AF-S 35mm f/1.4G",
      settings: "ISO 64 · f/5.6 · 1/320 sec",
      year: "2026",
      watermark: "Web image only",
},
    ],
  },
];

export function getPhotographyCollection(slug: string) {
  return photographyCollections.find((collection) => collection.slug === slug);
}

export function getPhotographyPhoto(collectionSlug: string, photoSlug: string) {
  const collection = getPhotographyCollection(collectionSlug);
  const photo = collection?.photos.find((item) => item.slug === photoSlug);

  return {
    collection,
    photo,
  };
}

export function getPhotographyPhotoNavigation(
  collectionSlug: string,
  photoSlug: string,
) {
  const collection = getPhotographyCollection(collectionSlug);

  if (!collection) {
    return {
      previousPhoto: undefined,
      nextPhoto: undefined,
    };
  }

  const currentIndex = collection.photos.findIndex(
    (photo) => photo.slug === photoSlug,
  );

  if (currentIndex === -1) {
    return {
      previousPhoto: undefined,
      nextPhoto: undefined,
    };
  }

  return {
    previousPhoto: collection.photos[currentIndex - 1],
    nextPhoto: collection.photos[currentIndex + 1],
  };
}

export function getAllPhotographyPhotos() {
  return photographyCollections.flatMap((collection) =>
    collection.photos.map((photo) => ({
      collectionSlug: collection.slug,
      photoSlug: photo.slug,
    })),
  );
}