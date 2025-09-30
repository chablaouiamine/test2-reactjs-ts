import React from "react";
import HomeIcon from "../../assets/icons/HomeIcon";
import FileIcon from "../../assets/icons/FileIcon";
import ToolIcon from "../../assets/icons/ToolIcon";
import ActivityIcon from "../../assets/icons/ActivityIcon";
import MonitorIcon from "../../assets/icons/MonitorIcon";
import PlayIcon from "../../assets/icons/PlayIcon";
import BookIcon from "../../assets/icons/BookIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import GroupIcon from "../../assets/icons/GroupIcon";
import MenuIcon from "../../assets/icons/MenuIcon";

type SidebarItem = {
  id: string;
  label: string;
  Icon: React.ComponentType;
};

const items: SidebarItem[] = [
  { id: "home", label: "Home", Icon: HomeIcon },
  { id: "folder", label: "Folder", Icon: GroupIcon },
  { id: "file", label: "File", Icon: FileIcon },
  { id: "tools", label: "Tools", Icon: ToolIcon },
  { id: "activity", label: "Activity", Icon: ActivityIcon },
  { id: "monitor", label: "Monitor", Icon: MonitorIcon },
  { id: "play", label: "Play", Icon: PlayIcon },
  { id: "book", label: "Library", Icon: BookIcon },
  { id: "settings", label: "Settings", Icon: SettingsIcon },
];

export default function Sidebar() {
  const [active, setActive] = React.useState("activity");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-[#77CFBF] shadow-lg flex items-center justify-center"
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar - Desktop & Mobile Drawer */}
      <aside
        className={[
          "bg-[#FFFFFF] rounded-[20px] border border-[#F4F5F6] p-[36px] lg:p-10 xl:p-12",
          "md:flex md:flex-col md:w-[84px] lg:w-24 xl:w-28 md:shrink-0 md:m-4 lg:m-5 xl:m-6 md:static",
          "fixed left-0 top-0 bottom-0 z-50 w-64 transition-transform duration-300",
          mobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <nav className="flex-1 py-2 space-y-3 lg:space-y-4 flex flex-col md:items-center">
          {items.map(({ id, label, Icon }) => {
            const isActive = id === active;
            return (
              <button
                key={id}
                onClick={() => {
                  setActive(id);
                  setMobileMenuOpen(false);
                }}
                aria-label={label}
                aria-selected={isActive}
                title={label}
                className={[
                  "inline-flex h-11 lg:h-12 xl:h-14 items-center rounded-2xl transition-colors",
                  "md:w-11 lg:w-12 xl:w-14 md:justify-center w-full px-4 gap-3",
                  isActive ? "bg-[#77CFBF]" : "bg-slate-100 hover:bg-slate-200",
                ].join(" ")}
              >
                <span className="flex items-center justify-center">
                  <Icon />
                </span>
                <span className="md:hidden text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
