type Row = {
  id: number;
  issue: string;
  category: string;
  area: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  wcag: string;
  page: string;
  total: number;
  assigned: string;
};

const rows: Row[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  issue: "Issue Name",
  category: "Tech-ast",
  area: "Content",
  severity: "High",
  wcag: "AA",
  page: "/contact",
  total: 22,
  assigned: "No one",
}));

export default function Table() {
  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-10 mt-6">
      <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm lg:text-base min-w-[800px]">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">Issue</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">Category</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">Area</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">Severity</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">WCAG</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">Page</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                  Total Issues
                </th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">Assigned</th>
                <th className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4"></th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, idx) => (
                <tr
                  key={r.id}
                  className={idx % 2 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4 font-medium text-slate-900">
                    {r.issue}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    {r.category}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    {r.area}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    <span className="inline-flex items-center rounded-full bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 text-xs lg:text-sm">
                      {r.severity}
                    </span>
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    {r.wcag}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    {r.page}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    {r.total}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4">
                    {r.assigned}
                  </td>
                  <td className="px-4 lg:px-5 xl:px-6 py-3 lg:py-4 text-right">
                    <button className="h-8 w-8 lg:h-10 lg:w-10 inline-flex items-center justify-center rounded-md hover:bg-slate-100 text-lg lg:text-xl">
                      ⋮
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200 px-4 lg:px-6 py-3 lg:py-4 text-sm lg:text-base">
          <div className="flex items-center gap-2">
            <button className="h-8 w-8 lg:h-10 lg:w-10 rounded-md border border-slate-200 text-lg lg:text-xl">
              ‹
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <button
                  key={i}
                  className={`h-8 w-8 lg:h-10 lg:w-10 rounded-md ${
                    i === 0
                      ? "bg-slate-900 text-white"
                      : "border border-slate-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button className="h-8 w-8 lg:h-10 lg:w-10 rounded-md border border-slate-200 text-lg lg:text-xl">
              ›
            </button>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-center sm:justify-start">
            <span className="text-xs sm:text-sm">Items per page</span>
            <select className="h-8 rounded-md border border-slate-200 px-2">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
