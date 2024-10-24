import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function RootPage() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  await fetch(`${baseUrl}/api/venue`, { method: 'GET' })

  const cookieStore = cookies()
  let configs = cookieStore.get('siteConfig')?.value
  const siteConfig = configs ? JSON.parse(configs) : null
  const path = siteConfig ? siteConfig.locale.split('-')[0] : 'pt'

  redirect(`/${path}`)
}
