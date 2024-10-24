import { useTranslations } from 'next-intl'

export default function ContactPag() {
  const t = useTranslations('Contact')
  return (
    <div>
      <h1>{t('title')}</h1>
    </div>
  )
}
