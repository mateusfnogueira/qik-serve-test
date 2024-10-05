"use client";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import style from "./header.module.css";

export function Header({
  backgroundColor,
}: {
  backgroundColor: string;
}) {
  const t = useTranslations("Header");
  const path = usePathname();

  function getLastPathSegment(path: string) {
    const segments = path.replace(/^\//, "").split("/");

    const lastSegment = segments[segments.length - 1];

    const locales = ["pt", "en", "es", "fr"];
    if (locales.includes(lastSegment)) {
      return "home";
    }

    return lastSegment;
  }

  return (
    <header
      className={style.header}
      style={{ backgroundColor: backgroundColor }}
    >
      <h1 className={style.title}>{t(`${getLastPathSegment(path)}`)}</h1>
      <div className={style.icon}>
        <button className={style.hamburger_menu}>&#9776;</button>
      </div>
    </header>
  );
}
