"use client";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");

  return (
    <main>
      <h1>TQik Store</h1>
      <p>{t("title")}</p>
    </main>
  );
}
