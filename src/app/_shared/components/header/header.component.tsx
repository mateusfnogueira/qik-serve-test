"use client";
import { usePathname } from "next/navigation";
import style from "./header.module.css";

export default function Header({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  const path = usePathname();

  console.log(path);
  return (
    <header
      className={style.header}
      style={{ backgroundColor: backgroundColor }}
    >
      <h1 className={style.title}>Menu</h1>
      <div className={style.icon}>
        <button className={style.hamburger_menu}>&#9776;</button>
      </div>
    </header>
  );
}
