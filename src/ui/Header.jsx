import { FaList, FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <aside className="flex h-full min-h-screen flex-col border-r border-[#968cc4]/20 bg-gradient-to-b from-[#968cc4]/10 to-white shadow-sm transition-all duration-300">
      {/* Logo/Header Section */}
      <div className="px-4 pt-8 pb-6">
        <h1 className="flex items-center justify-center text-xl font-bold text-[#5e5488] md:justify-start">
          <NavLink
            to={"taskmanager"}
            className="flex items-center gap-2 transition-transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20h9"></path>
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
            </svg>
            <span className="hidden tracking-wide md:inline">TaskMaster</span>
          </NavLink>
        </h1>
      </div>

      {/* Divider */}
      <div className="mb-6 px-4">
        <div className="h-px bg-gradient-to-r from-transparent via-[#968cc4]/30 to-transparent"></div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2">
        <ul className="flex flex-col gap-3">
          <li>
            <NavLink
              to={"taskmanager"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#968cc4]/20 text-[#5e5488] shadow-sm"
                    : "text-[#968cc4] hover:bg-[#968cc4]/10"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2z"></path>
                <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <span className="hidden tracking-wide md:inline">My Tasks</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"todo"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-[#968cc4]/20 text-[#5e5488] shadow-sm"
                    : "text-[#968cc4] hover:bg-[#968cc4]/10"
                }`
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <span className="hidden tracking-wide md:inline">To-Do List</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Header;
