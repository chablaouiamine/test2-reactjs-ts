import React from "react";

const tabs = [
  "Summary",
  "Compliance",
  "Accessibility",
  "Pages",
  "Files",
  "Issues",
];

export default function Tabs() {
  const [active, setActive] = React.useState("Issues");
  return (
    <div className="px-4 md:px-6 mt-4">
      <div className="flex rounded-xl border border-slate-200 bg-white p-1 items-center w-full h-[5.125rem]">
        {tabs.map((t) => {
          const isActive = t === active;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={[
                "relative px-3 md:px-4 h-full rounded-[0.9375rem] text-xl font-medium flex items-center justify-center flex-1",
                isActive ? "" : "text-slate-600 hover:bg-slate-50",
              ].join(" ")}
            >
              <span className="relative inline-flex items-center">
                {t}
                {isActive && (
                  <span className="absolute top-full left-0 right-0 h-1 bg-[#093B42] mt-5" />
                )}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
