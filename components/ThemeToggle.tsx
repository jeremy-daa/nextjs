"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  const [mode, setMode] = useState(theme === "light" ? false : true);
  return (
    <div
      className={`relative flex justify-between items-center w-[70px] px-1 h-[25px] ${
        mode ? "bg-white" : "bg-black"
      } rounded-xl cursor-pointer border-solid border-[1px] ${
        mode ? "border-black" : "border-white"
      } duration-300 mx-3`}
      onClick={() => {
        setMode(!mode);
        toggle();
      }}
    >
      <Image src="/sun.svg" alt="sun" width={18} height={18} />
      <Image src="/moon.svg" alt="moon" width={18} height={18} />
      <div
        className={`absolute left-0 top-0 h-[90%] w-[63.3%] rounded-xl mt-[1px] ${
          mode ? "bg-[var(--bg)]" : "bg-white"
        } transition-all duration-300 ${
          mode
            ? "transform translate-x-0 ml-[2px]"
            : "transform translate-x-[26px] -ml-[3px]"
        } ease-linear`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
