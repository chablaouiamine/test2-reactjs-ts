import UpgradeIcon from "../../assets/icons/UpgradeIcon";
import SemiCircleIcon from "../../assets/icons/SemiCircleIcon";

export function UsagePill({ count = 60 }: { count?: number }) {
  return (
    <button className="inline-flex items-center gap-2 lg:gap-3 h-[3.9375rem] lg:h-20 xl:h-24 rounded-[0.625rem] bg-white border border-[#F4F5F6] p-3 lg:p-4 xl:p-5 text-sm lg:text-base xl:text-lg shadow-[0_1px_0_rgba(2,32,36,0.04)] hover:bg-slate-50 transition-colors">
      <SemiCircleIcon count={count} />
      <span className="text-[#093B42] underline decoration-2 underline-offset-4">
        Usage
      </span>
    </button>
  );
}

export function UpgradeNowPill() {
  return (
    <button className="inline-flex items-center gap-2 lg:gap-3 h-[3.9375rem] lg:h-20 xl:h-24 rounded-xl bg-white border border-[#F4F5F6] p-3 lg:p-4 xl:p-5 text-sm lg:text-base xl:text-lg shadow-[0_1px_0_rgba(2,32,36,0.04)] hover:bg-slate-50 transition-colors">
      <span className="inline-flex h-6 w-6 lg:h-8 lg:w-8 xl:h-10 xl:w-10 items-center justify-center rounded-full bg-pink-100">
        <UpgradeIcon />
      </span>
      <span className="text-[#093B42] underline decoration-2 underline-offset-4">
        Upgrade Now
      </span>
    </button>
  );
}
