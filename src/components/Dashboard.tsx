import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Tabs from "./dashboard/Tabs";
import Stats from "./dashboard/Stats";
import Filters from "./dashboard/Filters";
import Table from "./dashboard/Table";
import Breadcrumb from "./common/Breadcrumb";
import ActivityIcon from "../assets/icons/ActivityIcon";
import DateIcon from "../assets/icons/DateIcon";
import { UsagePill, UpgradeNowPill } from "./common/ActionPills";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-teal-900/95">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] py-6 px-2">
        <div className="rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col bg-white">
            <Topbar />
            <div className="flex">
              <Sidebar />
              <div className="flex-1 min-w-0 flex flex-col bg-[#F4F3EF]">
                <div className="px-4 md:px-6 lg:px-8 xl:px-10 pt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="overflow-x-auto max-w-full">
                      <Breadcrumb
                        items={[
                          { label: "Home", href: "#" },
                          { label: "Scans", href: "#" },
                          { label: "Websites", href: "#" },
                          { label: "scan_name", href: "#" },
                          { label: "Issues" },
                        ]}
                      />
                    </div>
                    <div className="hidden md:flex items-center gap-3 shrink-0">
                      <UsagePill />
                      <UpgradeNowPill />
                    </div>
                  </div>
                  <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-none font-medium text-[#093B42] text-left">
                    Title
                  </h1>
                  {/* Mobile Action Pills */}
                  <div className="md:hidden mt-4 flex items-center gap-3 overflow-x-auto pb-2">
                    <UsagePill />
                    <UpgradeNowPill />
                  </div>
                  <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-10 text-sm sm:text-base text-[#093B42]">
                    <div className="inline-flex items-center gap-2">
                      <ActivityIcon />
                      <span className="opacity-80 font-semibold">
                        Scan type:
                      </span>{" "}
                      Web
                    </div>
                    <div className="inline-flex items-center gap-2">
                      <DateIcon />
                      <span className="opacity-80 font-semibold">Date:</span> 12
                      Jan 25
                    </div>
                    <div className="inline-flex items-center gap-2 text-xs sm:text-sm lg:text-base">
                      <span className="truncate max-w-[200px] sm:max-w-none">
                        www.websitename.com
                      </span>
                      <span className="hidden sm:inline">|</span>
                      <span className="hidden sm:inline">scan_name</span>
                    </div>
                    <div className="inline-flex items-center gap-2 w-full sm:w-auto sm:ml-auto">
                      <ActivityIcon />
                      <span className="opacity-80 font-semibold">Status:</span>
                      <div className="inline-flex items-center gap-1.5">
                        <div className=" px-3 py-1 text-white rounded-md text-sm font-medium bg-[#0F616C]">
                          Completed
                        </div>

                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <Tabs />
                <Stats />
                <Filters />
                <Table />
                <footer className="px-4 md:px-6 lg:px-8 xl:px-10 py-6 lg:py-8 text-center text-xs lg:text-sm text-slate-500 border-t">
                  Copyright © 2024 Nexus Industries
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
