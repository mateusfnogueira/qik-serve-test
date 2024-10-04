import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { InstallProviders } from "../_shared/provider/install-providers";

import style from "./root.module.css";
import Header from "../_shared/components/header/header.component";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale: string) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">) {
  const t = await getTranslations({ locale, namespace: "LocaleLayout" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  return (
    <html lang={locale}>
      <body className={style.body}>
        <InstallProviders locale={locale}>
          <Header />
          {children}
        </InstallProviders>
      </body>
    </html>
  );
}
