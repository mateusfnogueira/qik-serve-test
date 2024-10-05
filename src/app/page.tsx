import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function RootPage() {
  const cookieStore = cookies();
  let configs = cookieStore.get("siteConfig")?.value;
  const siteConfig = configs ? JSON.parse(configs) : null;
  const path = siteConfig.locale.split("-")[0] || "pt";
  redirect(`/${path}`);
}
