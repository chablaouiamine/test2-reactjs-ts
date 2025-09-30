import GreenCircleIcon from "../../assets/icons/GreenCircleIcon";
import GraphIcon from "../../assets/icons/GraphIcon";
import CriticalIssueIcon from "../../assets/icons/CriticalIssueIcon";
import HighIssueIcon from "../../assets/icons/HighIssueIcon";
import ModerateIssueIcon from "../../assets/icons/ModerateIssueIcon";
import MinorIssueIcon from "../../assets/icons/MinorIssueIcon";

export default function Stats() {
  return (
    <section className="px-4 md:px-6 mt-4">
      <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 xl:gap-5 justify-between">
        {/* Total Issues */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-base text-center font-medium text-[#093B42] mb-3">
            Total Issues
          </div>
          <div className="flex items-center justify-center relative">
            <GreenCircleIcon />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold text-[#093B42]">22</span>
            </div>
          </div>
        </div>

        {/* Issues by Priority */}
        <div className="rounded-2xl border border-slate-200 bg-white p-4">
          <div className="text-base text-center font-medium text-[#093B42] mb-3">
            Issues by Priority
          </div>
          <div className="flex items-center justify-center">
            <GraphIcon />
          </div>
        </div>

        {/* Critical and Medium Issues */}
        <div className="flex flex-col gap-3 justify-between">
          {/* Critical Issues */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <CriticalIssueIcon />
              <div className="text-base font-medium text-[#093B42]">
                Critical Issues
              </div>
              <div className="text-2xl font-bold text-[#093B42] ml-auto">
                10
              </div>
            </div>
          </div>

          {/* Medium Issues */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <ModerateIssueIcon />
              <div className="text-base font-medium text-[#093B42]">
                Medium Issues
              </div>
              <div className="text-2xl font-bold text-[#093B42] ml-auto">4</div>
            </div>
          </div>
        </div>

        {/* High and Low Issues */}
        <div className="flex flex-col gap-3 justify-between">
          {/* High Issues */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <HighIssueIcon />
              <div className="text-base font-medium text-[#093B42]">
                High Issues
              </div>
              <div className="text-2xl font-bold text-[#093B42] ml-auto">6</div>
            </div>
          </div>

          {/* Low Issues */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-3">
              <MinorIssueIcon />
              <div className="text-base font-medium text-[#093B42]">
                Low Issues
              </div>
              <div className="text-2xl font-bold text-[#093B42] ml-auto">2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
