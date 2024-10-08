'use client'
import Cookies from 'js-cookie'
import { useTranslations } from 'next-intl'
import { IConfig } from '../_shared/interfaces/config.interface'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import style from './home.module.css'
import useConfigHook from '../_shared/hooks/config.hook'
import { globalStore } from '@/stores/global.store'
import { setConfig } from '@/features/config.slice'

export default function HomePage({ params }: { params: { locale: string } }) {
  const [siteConfig, setSiteConfig] = useState<IConfig | null>(null)
  const t = useTranslations('Home')

  const store = globalStore
  const { dispatch } = store
  const locale = params.locale

  const { config } = useConfigHook()

  useEffect(() => {
    const value = Cookies.get('siteConfig')
    setSiteConfig(value ? JSON.parse(value) : config)
    dispatch(setConfig(value ? JSON.parse(value) : config))
  }, [])

  if (!siteConfig) {
    return <main>{t('loading')}</main>
  }

  return (
    <main className={style.main}>
      <h1 className={style.title}>{t('title').replace('%name%', siteConfig.name)}</h1>

      <div className={`${style.button} button`}>
        <Link href={`/${locale}/menu`}>{t('button')}</Link>
      </div>
      <style jsx>{`
        .button:hover {
          background-color: ${siteConfig ? siteConfig.webSettings.primaryColourHover : '#4f372f'};
        }
      `}</style>
    </main>
  )
}
