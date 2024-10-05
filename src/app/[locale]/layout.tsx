import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { routing } from "@/i18n/routing";
import { InstallProviders } from "../_shared/provider/install-providers";

import style from "./root.module.css";
import Header from "../_shared/components/header/header.component";
import { cookies } from "next/headers";
import { Hero } from "../_shared/components/hero/hero.component";

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

export default async function GlobalLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);
  const cookieStore = cookies();
  let configs = cookieStore.get("siteConfig")?.value;
  const siteConfig = configs ? JSON.parse(configs) : null;

  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={style.body}
        style={{
          backgroundColor: siteConfig?.webSettings?.backgroundColor,
        }}
      >
        <InstallProviders
          locale={locale}
          messages={messages}
          timeZone={siteConfig?.timeZone}
        >
          <Header
            backgroundColor={siteConfig?.webSettings?.navBackgroundColour}
          />
          <Hero src={siteConfig?.webSettings?.bannerImage} />
          {children}
        </InstallProviders>
      </body>
    </html>
  );
}
