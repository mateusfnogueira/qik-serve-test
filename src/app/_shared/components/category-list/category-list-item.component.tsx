/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { IConfig, IProductCategory } from "../../interfaces";

import style from "./category-list.module.css";
import Cookies from "js-cookie";
import { useProducts } from "../../hooks";
import { useEffect } from "react";

interface CategoryListProps {
  category: IProductCategory;
}

export function CategoryListItem({ category }: CategoryListProps) {
  const t = useTranslations("Menu");
  const { selectedCategory, setSelectedCategory } = useProducts();

  const cookies = Cookies.get("siteConfig");
  const siteConfig: IConfig = cookies ? JSON.parse(cookies) : null;

  const hoverColor = siteConfig?.webSettings.primaryColourHover;

  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  return (
    <div
      className={style.category_item}
      onClick={() => {
        setSelectedCategory(category.name);
      }}
    >
      <span
        className={style.category_border_img}
        style={{
          borderColor: selectedCategory === category.name ? hoverColor : "blue",
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
        {selectedCategory === category.name && (
          <span
            className={style.category_name_border}
            style={{
              borderColor: hoverColor,
            }}
          ></span>
        )}
      </div>
    </div>
  );
}
