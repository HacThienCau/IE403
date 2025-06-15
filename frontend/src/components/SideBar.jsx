import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggleButton from "./DarkModeButton";
import { ChartPie, Home, User } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Trang chủ", path: "/", icon: Home },
    { label: "Phân tích", path: "/analysis", icon: ChartPie },
    { label: "Về chúng tôi", path: "/about", icon: User },
  ];

  return (
    <div className="w-64 h-screen bg-theme-light-sidebar dark:bg-theme-dark-sidebar flex flex-col justify-between py-8 shadow-lg">
      {/* Logo */}
      <div>
        <p className="text-2xl font-bold text-center mb-8 text-theme-light-text dark:text-theme-dark-text">
          IE403 - Nhóm 19
        </p>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map(({ label, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`w-full flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-200 ${
                  isActive
                    ? "bg-[#00ADB5] text-white"
                    : "hover:bg-[#00ADB5]/10 text-theme-light-active dark:text-theme-light-active"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-white" : "text-theme-light-active"
                  }`}
                />
                <span
                  className={`text-lg font-medium ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Theme Toggle */}
      <div className="flex justify-center">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
