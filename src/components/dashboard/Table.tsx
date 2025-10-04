import DownArrowIcon from "../../assets/icons/DownArrowIcon";
import PlusIcon from "../../assets/icons/PlusIcon";
import FileIcon from "../../assets/icons/FileIcon";
import AccessibiltyIcon from "../../assets/icons/AccessibiltyIcon";
import UserIcon from "../../assets/icons/UserIcon";
import NotAssignedIcon from "../../assets/icons/NotAssignedIcon";
import MoreIcon from "../../assets/icons/MoreIcon";

interface TableRow {
  id: string;
  issueName: string;
  category: string;
  area: string;
  severity: "High" | "Medium" | "Low";
  wcag: string;
  page: string;
  totalIssues: number;
  assigned: {
    type: "assigned" | "multiple" | "not-assigned";
    names?: string[];
  };
}

const mockData: TableRow[] = [
  {
    id: "1",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Alt Text 1.1.1",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "assigned",
      names: ["Yassine"],
    },
  },
  {
    id: "2",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (1)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "assigned",
      names: ["Yassine"],
    },
  },
  {
    id: "3",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (2)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "assigned",
      names: ["Yassine"],
    },
  },
  {
    id: "4",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (3)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "multiple",
      names: ["Said", "Yassine"],
    },
  },
  {
    id: "5",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (4)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "not-assigned",
    },
  },
  {
    id: "6",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (5)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "not-assigned",
    },
  },
  {
    id: "7",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (5)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "not-assigned",
    },
  },
  {
    id: "8",
    issueName: "Issue Name",
    category: "Text-alt",
    area: "Content",
    severity: "High",
    wcag: "Multiple (5)",
    page: "/contact",
    totalIssues: 22,
    assigned: {
      type: "not-assigned",
    },
  },
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "High":
      return "text-[#093B42]";
    case "Medium":
      return "text-yellow-500";
    case "Low":
      return "text-green-500";
    default:
      return "text-gray-500";
  }
};

const getSeverityDotColor = (severity: string) => {
  switch (severity) {
    case "High":
      return "bg-red-500";
    case "Medium":
      return "bg-yellow-500";
    case "Low":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export default function Table() {
  return (
    <div className="mx-6 my-4">
      {/* Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-base font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6"></div>
                  <div className="w-8 h-8"></div>
                  <div className="flex items-center gap-2">
                    <span>Issues</span>
                    <DownArrowIcon />
                  </div>
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>Category</span>
                  <DownArrowIcon />
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>Area</span>
                  <DownArrowIcon />
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>Severity</span>
                  <DownArrowIcon />
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>WCAG</span>
                  <DownArrowIcon />
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>Page</span>
                  <DownArrowIcon />
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>Total Issues</span>
                  <DownArrowIcon />
                </div>
              </th>
              <th className="px-6 py-3 text-left font-medium text-[#093B42] tracking-wider">
                <div className="flex items-center gap-2">
                  <span>Assigned</span>
                  <DownArrowIcon />
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <button className="w-6 h-6">
                      <PlusIcon />
                    </button>
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                      <FileIcon />
                    </div>
                    <a
                      href="#"
                      className="font-medium underline text-[#093B42]"
                    >
                      {row.issueName}
                    </a>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#093B42]">
                  {row.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#093B42]">
                  {row.area}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${getSeverityDotColor(
                        row.severity
                      )}`}
                    ></div>
                    <span
                      className={`font-medium ${getSeverityColor(
                        row.severity
                      )}`}
                    >
                      {row.severity}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-1">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <AccessibiltyIcon />
                    </div>
                    <span className="text-[#093B42]">{row.wcag}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#093B42]">
                  {row.page}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-[#093B42]">
                  {row.totalIssues}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    {row.assigned.type === "assigned" && (
                      <div className="flex flex-col justify-center">
                        <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                          <UserIcon />
                        </div>
                        <span className="text-sm text-gray-900">
                          {row.assigned.names?.[0]}
                        </span>
                      </div>
                    )}
                    {row.assigned.type === "multiple" && (
                      <div className="flex gap-2">
                        {row.assigned.names?.map((name, index) => (
                          <div
                            key={index}
                            className="flex flex-col items-center gap-1"
                          >
                            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                              <UserIcon />
                            </div>
                            <span className="text-xs text-[#093B42]">
                              {name}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                    {row.assigned.type === "not-assigned" && (
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 flex items-center justify-center">
                          <NotAssignedIcon />
                        </div>
                        <span className="text-sm text-gray-500">
                          Not Assigned
                        </span>
                      </div>
                    )}
                    <button className="ml-2 p-1 hover:bg-gray-200 rounded">
                      <MoreIcon />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
