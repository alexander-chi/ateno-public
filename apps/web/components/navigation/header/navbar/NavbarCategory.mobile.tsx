import {useState} from "react";

import styles from './NavbarCategory.module.sass'
import Link from "next/link";
import {useRouter} from "next/router";

interface NavbarCategoryProps {
  title: string,
  subCategories: Array<{
    title: string,
    destination: string
  }>,
  onNavigate: () => void,
  expanded: boolean,
  setExpanded: (boolean) => void
}

export const NavbarCategoryMobile = ({title, subCategories, onNavigate, expanded, setExpanded}: NavbarCategoryProps) => {
  const router = useRouter()

  function handleNavigate(path: string) {
    onNavigate()
    router.push(path)
  }


  return (
    <div
      className={`${styles.container__outer} p-3`}
      onClick={() => setExpanded(!expanded)}
    >
      <p className={styles.text__title}>{title}</p>
      <div className={`${styles.container__inner} ${expanded && styles.container__expanded} w-100`}>
        {subCategories.map(category => {
          return (
            <div key={category.destination} className={styles.container__subCategory} onClick={() => handleNavigate(category.destination)}>
              <p className={styles.text__link} >{category.title}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
