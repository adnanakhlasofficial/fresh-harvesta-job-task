type SectionHeaderProps = {
  tag: string;
  title: string;
  description?: string;
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  descClassName?: string;
};

const SectionTitle = ({
  tag,
  title,
  description,
  className = "",
  tagClassName = "",
  titleClassName = "",
  descClassName = "",
}: SectionHeaderProps) => {
  return (
    <div className={`${className}`}>
      <span
        className={`inline-block text-sm font-semibold bg-[#749B3F1A]  text-[#749B3F] px-3 py-1 rounded-full mb-2 ${tagClassName}`}
      >
        {tag}
      </span>
      <h2 className={`text-3xl font-bold text-[#212337] ${titleClassName}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`text-sm text-[#4A4A52] mt-2 max-w-[448px] mx-auto ${descClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
