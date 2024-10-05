"use client";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import { IConfig } from "../_shared/interfaces/config.interface";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [siteConfig, setSiteConfig] = useState<IConfig | null>(null);
  const t = useTranslations("Home");

  useEffect(() => {
    const value = Cookies.get("siteConfig");
    setSiteConfig(value ? JSON.parse(value) : null);
  }, []);

  if (!siteConfig) {
    return <main>{t("loading")}</main>;
  }

  return (
    <main>
      <h1>{siteConfig.name}</h1>
      <p>{t("title")}</p>
    </main>
  );
}
