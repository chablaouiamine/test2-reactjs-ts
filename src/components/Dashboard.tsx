import Sidebar from "./layout/Sidebar";
import Topbar from "./layout/Topbar";
import Tabs from "./dashboard/Tabs";
import Stats from "./dashboard/Stats";
import Breadcrumb from "./common/Breadcrumb";
import ActivityIcon from "../assets/icons/ActivityIcon";
import DateIcon from "../assets/icons/DateIcon";
import { UsagePill, UpgradeNowPill } from "./common/ActionPills";
import StackedItemsIcon from "../assets/icons/StackedItemsIcon";
import AllDetailsIcon from "../assets/icons/AllDetailsIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import DownArrowIcon from "../assets/icons/DownArrowIcon";
import CancelIcon from "../assets/icons/CancelIcon";
import UndoIcon from "../assets/icons/UndoIcon";
import SaveIcon from "../assets/icons/SaveIcon";
import TableIcon from "../assets/icons/TableIcon";
import DragHandleIcon from "../assets/icons/DragHandleIcon";
import DeleteIcon from "../assets/icons/DeleteIcon";
import SearchIcon from "../assets/icons/SearchIcon";
import Table from "./dashboard/Table";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-teal-900/95">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1400px] 2xl:max-w-[1600px] py-6 px-2">
        <div className="rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col bg-white">
            <Topbar />
            <div className="flex">
              <Sidebar />
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="first-section bg-[#F4F3EF] pb-5">
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
                        <span className="opacity-80 font-semibold">
                          Date:
                        </span>{" "}
                        12 Jan 25
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
                        <span className="opacity-80 font-semibold">
                          Status:
                        </span>
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
                </div>
                <div className="second-section">
                  <div className="all-subsection px-4 md:px-6 lg:px-8 xl:px-10 py-4 flex justify-between gap-4">
                    <div className="first-element flex items-center gap-2">
                      {/* All Issues Button */}
                      <button
                        className="flex items-center gap-2 px-4 py-2 bg-[#77CFBF] text-[#
                      ] rounded-md font-medium hover:bg-[#3A9BA4] transition-colors"
                      >
                        <StackedItemsIcon />
                        <span>All Issues</span>
                      </button>

                      {/* All Details Button */}
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-[#093B42] rounded-md hover:bg-gray-50 transition-colors">
                        <AllDetailsIcon />
                        <span>All Details</span>
                      </button>
                    </div>

                    <div className="second-element flex items-center gap-2 ml-auto">
                      {/* Add View Button */}
                      <button className="flex items-center justify-center gap-2 px-4 py-2 bg-[#093B42] text-white rounded-md font-medium hover:bg-[#0A4D56] transition-colors">
                        <PlusIcon />
                        <span>Add View</span>
                      </button>

                      {/* Export Button */}
                      <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 bg-white text-[#093B42] rounded-md hover:bg-gray-50 transition-colors">
                        <span>Export</span>
                        <DownArrowIcon />
                      </button>
                    </div>
                  </div>
                  <div className="create-view px-4 md:px-6 lg:px-8 xl:px-10 py-4 border border-[#8B9192] rounded-lg mx-6">
                    <div className="first-element flex justify-between">
                      <div className="text-xl font-medium text-[#093B42]">
                        Create New View
                      </div>
                      <div className="flex gap-4">
                        <button className="flex items-center gap-1">
                          <CancelIcon />
                          <span>Cancel</span>
                        </button>

                        <button className="flex items-center gap-1">
                          <UndoIcon />
                          <span>Undo</span>
                        </button>

                        <button className="flex items-center gap-1">
                          <SaveIcon />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>

                    <div className="second-element flex justify-between py-4">
                      <div className="view-name flex flex-col gap-2">
                        <span>View Name</span>
                        <input
                          className="border border-[#8B9192] rounded-lg p-4 outline-none shadow-lg"
                          type="text"
                        />
                      </div>
                      <div className="select-view-type flex flex-col gap-2">
                        <span>Select View Type</span>
                        <div className="checkboxes flex gap-4 border border-[#8B9192] rounded-lg p-4 shadow-lg">
                          <div className="accordion flex gap-2">
                            <button>
                              <StackedItemsIcon />
                            </button>
                            <label htmlFor="">Accordion</label>

                            <input type="checkbox" name="" id="" />
                          </div>
                          <div className="table-checkbox flex gap-2">
                            <button>
                              <TableIcon />
                            </button>
                            <label htmlFor="">Table</label>

                            <input type="checkbox" name="" id="" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="third-element">
                      <div className="checkboxes flex justify-between gap-4">
                        <div className="first-col">
                          <div className="ch-1">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Issue Name
                            </label>
                          </div>

                          <div className="ch-2">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Issues
                              Status
                            </label>
                          </div>

                          <div className="ch-3">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Code
                            </label>
                          </div>

                          <div className="ch-4">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Status
                            </label>
                          </div>
                        </div>

                        <div className="second-col">
                          <div className="ch-1">
                            <label htmlFor="">
                              <input type="checkbox" name="" /> Help Text
                            </label>
                          </div>

                          <div className="ch-2">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Compliance
                              Status
                            </label>
                          </div>

                          <div className="ch-3">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Engine
                            </label>
                          </div>

                          <div className="ch-4">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Assigned
                              To
                            </label>
                          </div>
                        </div>

                        <div className="third-col">
                          <div className="ch-1">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Severity
                            </label>
                          </div>

                          <div className="ch-2">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Area
                              Status
                            </label>
                          </div>

                          <div className="ch-3">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Filter
                            </label>
                          </div>

                          <div className="ch-4">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Website
                              Page
                            </label>
                          </div>
                        </div>

                        <div className="fourth-col">
                          <div className="ch-1">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Issue Type
                            </label>
                          </div>

                          <div className="ch-2">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Total
                              Issues Status
                            </label>
                          </div>

                          <div className="ch-3">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" />{" "}
                              Description
                            </label>
                          </div>

                          <div className="ch-4">
                            <label htmlFor="">
                              <input type="checkbox" name="" id="" /> Selector
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="font-medium text-[#093B42] text-xl pt-4">
                        Selected Columns
                      </div>

                      <div className="selected-cols flex py-4 bg-[#F4F5F6] rounded-lg px-4">
                        <button className="first-selected flex gap-2 items-center border border-[#8B9192] rounded-lg px-4 py-2">
                          <DragHandleIcon />
                          Issue Name
                          <DeleteIcon />
                        </button>
                        <div className="second-selected"></div>
                        <div className="third-selected"></div>
                        <div className="fourth-selected"></div>
                      </div>
                    </div>
                  </div>

                  <div className="third-element flex justify-between gap-2 mx-6">
                    <div className="area flex flex-col gap-2 my-4 w-full">
                      <div className="text-[#093B42] font-medium">Area</div>
                      <button className="flex gap-12 items-center justify-between px-4 py-2 border border-[#8B9192] rounded-lg">
                        <span className="text-[rgba(9,59,66,0.7)] font-medium leading-6">
                          All
                        </span>
                        <DownArrowIcon />
                      </button>
                    </div>

                    <div className="area flex flex-col gap-2 my-4 w-full">
                      <div className="text-[#093B42] font-medium">Category</div>
                      <button className="flex gap-12 items-center justify-between px-4 py-2 border border-[#8B9192] rounded-lg">
                        <span className="text-[rgba(9,59,66,0.7)] font-medium leading-6">
                          Text_alt
                        </span>
                        <DownArrowIcon />
                      </button>
                    </div>

                    <div className="area flex flex-col gap-2 my-4 w-full">
                      <div className="text-[#093B42] font-medium">Severity</div>
                      <button className="flex gap-12 items-center justify-between px-4 py-2 border border-[#8B9192] rounded-lg">
                        <span className="text-[rgba(9,59,66,0.7)] font-medium leading-6">
                          All
                        </span>
                        <DownArrowIcon />
                      </button>
                    </div>

                    <div className="area flex flex-col gap-2 my-4 w-full">
                      <div className="text-[#093B42] font-medium">
                        Team Member
                      </div>
                      <button className="flex gap-12 items-center justify-between px-4 py-2 border border-[#8B9192] rounded-lg">
                        <span className="text-[rgba(9,59,66,0.7)] font-medium leading-6">
                          All
                        </span>
                        <DownArrowIcon />
                      </button>
                    </div>
                  </div>
                  <div className="fourth-element mx-6">
                    <button className="flex items-center border border-[#8B9192] rounded-lg px-4 py-2 w-full">
                      <SearchIcon />
                      <span className="text-[rgba(9,59,66,0.7)] font-medium">
                        Search
                      </span>
                    </button>
                  </div>

                  <div className="fifth-element">
                    <Table />
                  </div>
                </div>

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
