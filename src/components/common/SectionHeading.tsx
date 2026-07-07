type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
};

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <div className={alignment}>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#ff2b2b]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">{description}</p>
    </div>
  );
}
