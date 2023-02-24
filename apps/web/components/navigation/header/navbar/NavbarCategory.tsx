import {useState} from "react";

import styles from './NavbarCategorory.module.sass'
import Link from "next/link";

interface NavbarCategoryProps {
  title: string,
  subCategories: Array<{
    title: string,
    destination: string
  }>
}

export const NavbarCategory = ({title, subCategories}: NavbarCategoryProps) => {
  const [expanded, setExpanded] = useState(false)


  return (
    <div
      className={`${styles.container__outer} p-3`}
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
    >
      <p className={styles.text__title}>{title}</p>
      <div className={`${styles.container__inner} ${expanded && styles.container__expanded} w-100`}>
        {subCategories.map(category => {
          return (
            <div key={category.destination} className={styles.container__subCategory}>
              <Link className={styles.text__link} href={category.destination}>{category.title}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
