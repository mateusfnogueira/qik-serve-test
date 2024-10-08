import style from './style.module.css'

interface SerachInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode
}

export function SearchInput({ icon, placeholder, ...rest }: SerachInputProps) {
  return (
    <div className={style.searchContainer}>
      {icon && <span className={style.iconContainer}>{icon}</span>}
      <input
        type="text"
        className={style.searchInput}
        {...rest}
        placeholder={placeholder || 'Search'}
      />
    </div>
  )
}
