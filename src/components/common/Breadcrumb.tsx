import RightArrowIcon from "../../assets/icons/RightArrowIcon";

type Crumb = {
  label: string;
  href?: string;
};

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm lg:text-base">
      <ol className="flex items-center gap-3 lg:gap-4">
        {items.map((item, idx) => (
          <li
            key={item.label}
            className="inline-flex items-center gap-3 lg:gap-4"
          >
            {item.href ? (
              <a
                href={item.href}
                className="text-[#093B42] underline decoration-2 underline-offset-4 hover:opacity-80 text-sm lg:text-base font-medium"
              >
                {item.label}
              </a>
            ) : (
              <span className="text-[#093B42] text-sm lg:text-base font-medium underline decoration-2 underline-offset-4">
                {item.label}
              </span>
            )}
            {idx < items.length - 1 && (
              <span className="inline-flex items-center" aria-hidden>
                <RightArrowIcon />
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
