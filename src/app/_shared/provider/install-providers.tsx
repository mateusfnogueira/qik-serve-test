import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

interface Props {
  children: React.ReactNode;
  locale: string;
}

export const InstallProviders: React.FC<Props> = async ({
  children,
  locale,
}) => {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  );
};
