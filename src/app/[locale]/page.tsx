"use client";
import { useTranslations } from "next-intl";
import useConfigHook from "../_shared/hooks/config.hook";


export default function Home() {
  const t = useTranslations("Home");
  const { data, error } = useConfigHook();

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      {data ? <h1>{data.name}</h1> : <p>Loading...</p>}
      <p>{t("title")}</p>
    </main>
  );
}
