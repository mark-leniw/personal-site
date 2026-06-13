"use client";

import { useEffect, useState } from "react";
import { DarkImage } from "@/components/photography/dark-image";

type LightboxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function LightboxImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: LightboxImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group block w-full cursor-zoom-in text-left"
        aria-label={`Open larger preview of ${alt}`}
      >
        <DarkImage
          src={src}
          alt={alt}
          className={className}
          imageClassName={imageClassName}
        />

        <p className="mt-3 text-right text-xs uppercase tracking-[0.25em] text-zinc-700 transition group-hover:text-zinc-400">
          Click to enlarge
        </p>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`Large preview of ${alt}`}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 rounded-full border border-zinc-800 bg-black/80 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-500 hover:text-white"
          >
            Close
          </button>

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-zinc-900 bg-black/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
            Press Escape to exit preview
          </p>

          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={src}
              alt={alt}
              className="max-h-[90vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl"
            />

            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-[inset_0_0_80px_rgba(0,0,0,0.35)]" />
          </div>
        </div>
      ) : null}
    </>
  );
}