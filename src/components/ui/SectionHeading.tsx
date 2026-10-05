interface SectionHeadingProps {
  id: string;
  title: string;
  description?: string;
}

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-2xl font-bold text-ink sm:text-3xl">
        {title}
      </h2>
      {description ? <p className="mt-3 text-ink-muted">{description}</p> : null}
    </div>
  );
}
