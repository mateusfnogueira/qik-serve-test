import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";

interface Props {
  children: React.ReactNode;
  locale: string;
}

export const InstallProviders: React.FC<Props> = async ({
  children,
  locale,
}) => {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
};
