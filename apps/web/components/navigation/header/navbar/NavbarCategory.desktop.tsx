import desktopStyles from './NavbarCategory.desktop.module.sass'
import styles from './NavbarCategory.module.sass'
import {useRouter} from "next/router"


interface NavbarCategoryProps {
  title: string,
  subCategories: Array<{
    title: string,
    destination: string
  }>,
  onNavigate?: () => void,
  align?: 'left' | 'right'
  expanded: boolean,
  setExpanded: (boolean) => void
}

export const NavbarCategoryDesktop = ({title, subCategories, onNavigate, align = 'left', expanded, setExpanded}: NavbarCategoryProps) => {
  const router = useRouter()

  function handleNavigate(path: string) {
    router.push(path)
  }


  return (
    <div
      className={`${styles.container__outer} px-3`}
      onClick={() => setExpanded(!expanded)}
    >
      <p className={styles.text__title}>{title}</p>
      <div
        className={`${desktopStyles.container__inner} ${align === 'left' ? desktopStyles.container__inner__left : desktopStyles.container__inner__right} ${expanded && desktopStyles.container__expanded} ${!expanded && desktopStyles.delay}`}>
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
