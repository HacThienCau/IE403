import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggleButton from "./DarkModeButton";
import { ChartPie, Home, User } from "lucide-react";

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="w-64 h-screen bg-theme-light-sidebar dark:bg-theme-dark-sidebar">
      <p className="mt-10 font-semibold text-2xl text-theme-light-text dark:text-theme-dark-text text-center p-5 mb-10">
        IE403 - Nhóm 19
      </p>
      <button
        className={`w-64 h-12 flex items-center justify-center ${
          location.pathname === "/" ? "bg-theme-light-active" : ""
        }`}
        onClick={() => navigate("/")}
      >
        <Home
          className={`w-6 h-6 inline-block mr-2 ${
            location.pathname === "/"
              ? "text-theme-dark-text"
              : "text-theme-light-active"
          }`}
        />
        <p
          className={`text-xl ${
            location.pathname === "/"
              ? "text-theme-dark-text font-bold"
              : "text-theme-light-active font-semibold"
          }`}
        >
          Trang chủ
        </p>
      </button>
      <button
        className={`w-64 h-12 flex items-center justify-center ${
          location.pathname === "/analysis" ? "bg-[#00ADB5]" : ""
        }`}
        onClick={() => {
          navigate("/analysis");
        }}
      >
        <ChartPie
          className={`w-6 h-6 inline-block mr-2 ${
            location.pathname === "/analysis"
              ? "text-theme-dark-text"
              : "text-theme-light-active"
          }`}
        />
        <p
          className={`text-xl ${
            location.pathname === "/analysis"
              ? "text-theme-dark-text font-bold"
              : "text-theme-light-active font-semibold"
          }`}
        >
          Phân tích
        </p>
      </button>
      <button
        className={`w-64 h-12 flex items-center justify-center ${
          location.pathname === "/about" ? "bg-[#00ADB5]" : ""
        }`}
        onClick={() => {
          navigate("/about");
        }}
      >
        <User
          className={`w-6 h-6 inline-block mr-2 ${
            location.pathname === "/about"
              ? "text-theme-dark-text"
              : "text-theme-light-active"
          }`}
        />
        <p
          className={`text-xl ${
            location.pathname === "/about"
              ? "text-theme-dark-text font-bold"
              : "text-theme-light-active font-semibold"
          }`}
        >
          Về chúng tôi
        </p>
      </button>
      <div className="fixed bottom-10 left-0 w-64 flex justify-center">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
