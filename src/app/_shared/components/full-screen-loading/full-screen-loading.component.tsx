import style from './style.module.css'

export function FullScreenLoading({ loading }: { loading: boolean }) {
  return (
    <div
      className={style.fullScreenLoad}
      style={{
        height: loading ? '100vh' : 0,
        backgroundColor: loading ? 'hsla(0, 0%, 100%, 0.4)' : 'hsla(0, 0%, 100%, 0)'
      }}
    >
      <div className={style.div}>
        <div className={style.loader}></div>
      </div>
    </div>
  )
}
