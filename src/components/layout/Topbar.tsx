import MenuIcon from "../../assets/icons/MenuIcon";
import UserIcon from "../../assets/icons/UserIcon";
import DownArrowIcon from "../../assets/icons/DownArrowIcon";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-10 bg-transparent">
      <div className="px-2 md:px-4 py-2">
        <div className="bg-[#FFFFFF] rounded-[20px] border border-[#F4F5F6] flex items-center justify-between px-4 sm:px-8 md:pl-[57px] md:pr-[113.182px] lg:pl-16 lg:pr-32 xl:pl-20 xl:pr-40 py-4 sm:py-6 md:py-[28px] lg:py-8 xl:py-10">
          <button
            className="inline-flex items-center justify-center h-8 w-8 lg:h-10 lg:w-10 rounded-lg bg-white hover:bg-slate-50 transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              className="inline-flex items-center gap-1 h-8 lg:h-10 rounded-lg px-2 lg:px-3 bg-[#86d5c6] text-[#093B42] hover:bg-[#A8D8C9] transition-colors"
              aria-label="Account"
            >
              <UserIcon />
              {/* DownArrowIcon keeps default stroke (no color override) */}
            </button>
            <DownArrowIcon />
          </div>
        </div>
      </div>
    </header>
  );
}
