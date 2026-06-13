type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-600">
        {eyebrow}
      </p>

      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-6 max-w-3xl leading-7 text-zinc-500">
          {description}
        </p>
      ) : null}
    </div>
  );
}