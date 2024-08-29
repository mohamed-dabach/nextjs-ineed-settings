"use client";
import { usePathname } from "next/navigation";
import SideBar from "../componets/settings/sidebar";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
export default function SettingsLayout({ children }) {
  const currentPath = usePathname();

  const [active, setActive] = useState("");

  return (
    <div className="grid  md:grid-cols-[300px_1fr] container m-auto max-w-screen-xl w-full h-full">
      <div
        className={`bg-[rgb(243,242,241)] relative  md:block ${
          active == "sideBar" ? "block" : "hidden"
        }`}
      >
        <SideBar currentPath={currentPath} />
      </div>

      <main
        className={`md:py-24 pt-10 px-5 md:px-10 lg:px-20 ${
          active == "sideBar" ? "hidden" : ""
        } md:block`}
      >
        <button
          onClick={() => setActive("sideBar")}
          className="md:hidden flex justify-center items-center mb-10 gap-4 hover:text-blue-600 text-blue-800 font-bold"
        >
          <IoIosArrowBack />
          Settings
        </button>
        {children}
      </main>
    </div>
  );
}
