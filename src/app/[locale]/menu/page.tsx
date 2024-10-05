"use client";
import { useTranslations } from "next-intl";


export default function MenuPage() {
  const t = useTranslations("Menu");


  return (
    <main>
      <p>{t("title")}</p>
    </main>
  );
}