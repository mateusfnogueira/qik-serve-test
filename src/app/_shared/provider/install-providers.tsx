"use client";
import { globalStore } from "@/stores/global.store";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { Provider } from "react-redux";

interface Props {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
  timeZone?: string;
}

export const InstallProviders: React.FC<Props> = ({
  children,
  locale,
  messages,
  timeZone,
}) => {
  return (
    <Provider store={globalStore}>
      <NextIntlClientProvider
        locale={locale}
        messages={messages}
        timeZone={timeZone ?? "America/Sao_Paulo"}
      >
        {children}
      </NextIntlClientProvider>
    </Provider>
  );
};
