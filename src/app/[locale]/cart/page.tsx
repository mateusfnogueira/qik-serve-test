'use client'
export const dynamic = 'force-dynamic'
import { useTranslations } from 'next-intl'

export default function CartPage() {
  const t = useTranslations('Cart')

  return (
    <main>
      <p>{t('Basket')}</p>
    </main>
  )
}
