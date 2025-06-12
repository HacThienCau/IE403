import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "./DarkModeButton";
import { ChartPie, Home, User } from "lucide-react";

export default function Sidebar() {
  const [active,setActive] = useState("Home")
  return (
    <div className="w-64 h-screen bg-theme-light-sidebar dark:bg-theme-dark-sidebar">
      <p className="mt-10 font-semibold text-2xl text-theme-light-text dark:text-theme-dark-text text-center p-5 mb-10">IE403 - Nhóm 19</p>
      <button className={`w-64 h-12 ${active==="Home"?"bg-theme-light-active":""}`} onClick={()=>setActive("Home")}>
        <Link to="/" className="flex items-center justify-center">
        <Home className={`w-6 h-6 inline-block mr-2 ${active==="Home"?"text-theme-dark-text":"text-theme-light-active"}`} />
        <p className={`text-xl ${active==="Home"?"text-theme-dark-text font-bold":"text-theme-light-active font-semibold"}`}>Trang chủ</p>
        </Link>
      </button>
      <button className={`w-64 h-12 ${active==="Analysis"?"bg-[#00ADB5]":""}`} onClick={()=>setActive("Analysis")}>
        <Link to="/analysis" className="flex items-center justify-center">
        <ChartPie className={`w-6 h-6 inline-block mr-2 ${active==="Analysis"?"text-theme-dark-text":"text-theme-light-active"}`} />
        <p className={`text-xl ${active==="Analysis"?"text-theme-dark-text font-bold":"text-theme-light-active font-semibold"}`}>Phân tích</p>
        </Link>
      </button>
      <button className={`w-64 h-12 ${active==="About"?"bg-[#00ADB5]":""}`} onClick={()=>setActive("About")}>
        <Link to="/about" className="flex items-center justify-center">
        <User className={`w-6 h-6 inline-block mr-2 ${active==="About"?"text-theme-dark-text":"text-theme-light-active"}`} />
        <p className={`text-xl ${active==="About"?"text-theme-dark-text font-bold":"text-theme-light-active font-semibold"}`}>Về chúng tôi</p>
        </Link>
      </button>
      <div className="fixed bottom-10 left-0 w-64 flex justify-center">
        <ThemeToggleButton />
      </div>
    </div>
  );
}
