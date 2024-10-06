/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { IConfig, IProductCategory } from "../../interfaces";

import style from "./category-list.module.css";
import Cookies from "js-cookie";

interface CategoryListProps {
  category: IProductCategory;
  setCategory: (category: string) => void;
  activeCategory?: string;
}

export function CategoryListItem({
  category,
  setCategory,
  activeCategory,
}: CategoryListProps) {
  const t = useTranslations("Menu");

  const cookies = Cookies.get("siteConfig");
  const siteConfig: IConfig = cookies ? JSON.parse(cookies) : null;

  const hoverColor = siteConfig?.webSettings.primaryColourHover;

  return (
    <div
      className={style.category_item}
      onClick={() => {
        setCategory(category.name);
      }}
    >
      <span
        className={style.category_border_img}
        style={{
          borderColor:
            activeCategory === category.name ? hoverColor : "transparent",
        }}
      >
        <img
          className={style.category_img}
          src={category.images[0].image}
          alt={category.name}
        />
      </span>
      <div className={style.category_div_name}>
        <p className={style.category_name}>
          {t(`items.${category.name.toLowerCase()}`)}
        </p>
        <span
          className={style.category_name_border}
          style={{
            borderColor:
              activeCategory === category.name ? hoverColor : "transparent",
          }}
        ></span>
      </div>
    </div>
  );
}
