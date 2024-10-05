/* eslint-disable @next/next/no-img-element */
import style from "./hero.module.css";

export function Hero({ src }: { src?: string }) {
  if (!src) return null;
  return (
    <div className="hero">
      <div className={style.hero_content}>
        <img className={style.hero_image} src={src} alt="Burguer image" />
      </div>
    </div>
  );
}
