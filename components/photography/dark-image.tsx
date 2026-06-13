"use client";

import { useState } from "react";

type DarkImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
};

export function DarkImage({
  src,
  alt,
  className = "",
  imageClassName = "",
}: DarkImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${imageClassName}`}
        />
      ) : null}

      {hasError ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-800/30 via-zinc-950 to-black opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)] opacity-40" />
        </>
      ) : null}

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/35" />
      <div className="absolute inset-0 shadow-[inset_0_0_55px_rgba(0,0,0,0.65)]" />
    </div>
  );
}