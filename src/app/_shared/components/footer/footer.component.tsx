'use client'
import { useEffect, useState } from 'react'
import { globalStore } from '@/stores/global.store'
import { Button } from '../commom-button/common-button.component'

import style from './style.module.css'
import { useTranslations } from 'next-intl'

export function FooterComponent() {
  const t = useTranslations('Footer')

  const store = globalStore
  const { getState, subscribe } = store

  const [order, setOrder] = useState(getState().product.Order)

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      setOrder(getState().product.Order)
    })

    return () => unsubscribe()
  }, [subscribe, getState])

  if (order.items.length === 0) return null

  return (
    <footer className={style.footer}>
      <Button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {t('text button').replace('%price%', order.total.toString())}
      </Button>
      <div className={style.disclaimer}>
        <p>
          Developed by{' '}
          <a href="https://www.linkedin.com/in/mateusfnogueira/" target="_blank" rel="noreferrer">
            Mateus Nogueira
          </a>
        </p>
      </div>
    </footer>
  )
}
