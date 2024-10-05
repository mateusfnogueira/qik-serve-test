import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { IProductMenu } from "@/app/_shared/interfaces";

export async function GET(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const res = await fetch("https://cdn-dev.preoday.com/challenge/menu");

    if (!res.ok) {
      return NextResponse.error();
    }
    const data: IProductMenu = await res.json();
    return NextResponse.json({ data: data, message: "Config saved in cookie" });
  } catch (error) {
    return NextResponse.error();
  }
}
