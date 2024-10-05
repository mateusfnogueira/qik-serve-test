"use client";
import { useTranslations } from "next-intl";


export default function CartPage() {
  const t = useTranslations("Cart");


  return (
    <main>
      <p>{t("title")}</p>
    </main>
  );
}