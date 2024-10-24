import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { IConfig } from '@/app/_shared/interfaces'

export async function GET() {
  try {
    const res = await fetch('https://cdn-dev.preoday.com/challenge/venue/9')

    if (!res.ok) {
      return NextResponse.error()
    }
    const data: IConfig = await res.json()
    const cookieStore = cookies()
    cookieStore.set('siteConfig', JSON.stringify(data), {
      maxAge: 60 * 60 * 24,
      path: '/',
      httpOnly: false
    })
    const resp = { data: data, message: 'Config saved in cookie' }
    return NextResponse.json(resp)
  } catch (error) {
    return NextResponse.error()
  }
}
