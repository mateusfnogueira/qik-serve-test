import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { IConfig } from "../../_shared/interfaces/config.interface";

export async function GET(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const res = await fetch("https://cdn-dev.preoday.com/challenge/venue/9");

    if (!res.ok) {
      return NextResponse.error();
    }
    const data: IConfig = await res.json();
    const cookieStore = cookies();
    cookieStore.set("siteConfig", JSON.stringify(data), {
      maxAge: 60 * 60 * 24,
    });
    return NextResponse.json({ data: data, message: "Config saved in cookie" });
  } catch (error) {
    return NextResponse.error();
  }
}
