"use client";
import style from "./header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.title}>Menu</h1>
      <div className={style.icon}>
        <button className={style.hamburger_menu}>&#9776;</button>
      </div>
    </header>
  );
}
