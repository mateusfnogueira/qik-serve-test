'use client'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import style from './style.module.css'
import Link from 'next/link'

export function Header({ backgroundColor }: { backgroundColor: string }) {
  const t = useTranslations('Header')
  const path = usePathname()

  function getLastPathSegment(path: string) {
    const segments = path.replace(/^\//, '').split('/')

    const lastSegment = segments[segments.length - 1]

    const locales = ['pt', 'en', 'es', 'fr']
    if (locales.includes(lastSegment)) {
      return 'home'
    }

    return lastSegment
  }

  return (
    <header className={style.header} style={{ backgroundColor: backgroundColor }}>
      <div className={style.mobile}>
        <h1 className={style.title}>{t(`${getLastPathSegment(path)}`)}</h1>
        <div className={style.icon}>
          <button className={style.hamburger_menu}>&#9776;</button>
        </div>
      </div>
      <div className={style.desktop}>
        <nav className={style.nav}>
          <Link className={getLastPathSegment(path) === 'menu' ? style.active : ''} href="/pt/menu">
            {t('menu')}
          </Link>
          <Link className={getLastPathSegment(path) === 'cart' ? style.active : ''} href="/pt/cart">
            {t('cart')}
          </Link>
          <Link
            className={getLastPathSegment(path) === 'contact' ? style.active : ''}
            href="/pt/contact"
          >
            {t('contact')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
