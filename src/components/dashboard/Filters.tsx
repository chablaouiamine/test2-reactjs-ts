export default function Filters() {
  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-10 mt-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-4 lg:p-5 xl:p-6">
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2">
          <input
            className="h-9 lg:h-10 xl:h-11 w-full sm:w-auto sm:flex-1 sm:max-w-64 lg:max-w-80 rounded-lg border border-slate-200 px-3 lg:px-4 text-sm lg:text-base outline-none focus:ring-2 focus:ring-emerald-500"
            placeholder="Search"
            aria-label="Search issues"
          />
          <select className="h-9 lg:h-10 xl:h-11 rounded-lg border border-slate-200 px-2 lg:px-3 text-sm lg:text-base">
            <option>Area</option>
          </select>
          <select className="h-9 lg:h-10 xl:h-11 rounded-lg border border-slate-200 px-2 lg:px-3 text-sm lg:text-base">
            <option>Category</option>
          </select>
          <select className="h-9 lg:h-10 xl:h-11 rounded-lg border border-slate-200 px-2 lg:px-3 text-sm lg:text-base">
            <option>Severity</option>
          </select>
          <select className="h-9 lg:h-10 xl:h-11 rounded-lg border border-slate-200 px-2 lg:px-3 text-sm lg:text-base">
            <option>Team Member</option>
          </select>
          <div className="flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
            <button className="h-9 lg:h-10 xl:h-11 flex-1 sm:flex-none rounded-lg border border-slate-200 px-3 lg:px-4 text-sm lg:text-base whitespace-nowrap">
              All Issues
            </button>
            <button className="h-9 lg:h-10 xl:h-11 flex-1 sm:flex-none rounded-lg bg-slate-900 text-white px-3 lg:px-4 text-sm lg:text-base whitespace-nowrap">
              + Add View
            </button>
            <button className="h-9 lg:h-10 xl:h-11 flex-1 sm:flex-none rounded-lg border border-slate-200 px-3 lg:px-4 text-sm lg:text-base whitespace-nowrap">
              Export
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
