export interface HeadingProps {
  children: string;
  eyebrow?: string;
  subtitle?: string;
  className?: string;
}

export default function Heading({ children, eyebrow, subtitle, className = "" }: HeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-verde-600">
          <span className="h-px w-8 bg-naranja-500" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        {children}
      </h2>
      {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>}
    </div>
  );
}
