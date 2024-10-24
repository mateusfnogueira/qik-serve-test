import { ReactNode } from 'react'
import './globals.css'

type Props = {
  children: ReactNode
}

export default async function RootLayout({ children }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  await fetch(`${baseUrl}/api/venue`, { method: 'GET' })

  return children
}
