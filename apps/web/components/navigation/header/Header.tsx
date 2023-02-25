import {useEffect, useState} from "react";
import {NavbarCategoryMobile} from "./navbar/NavbarCategory.mobile";
import {useRouter} from "next/router";

import mobileStyles from './navbar/header.mobile.module.sass'
import desktopStyles from './navbar/NavbarCategory.desktop.module.sass'

import {useMediaQuery} from "react-responsive";
import {NavbarCategoryDesktop} from "./navbar/NavbarCategory.desktop";


export const Header = ({story}) => {
  const [up, setUp] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [expandedMenu, setExpandedMenu] = useState(-1)


  const router = useRouter()

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  function handleWheel(e: any) {
    if (e.deltaY > 0) {
      setUp(true)
    } else {
      setUp(false)
    }
  }

  useEffect(() => {
    document.body.addEventListener('wheel', handleWheel)
  })


  function handleExpandMenu(index: number, value: boolean) {
    if (value === false) {
      setExpandedMenu(-1)
    } else {
      setExpandedMenu(index)
    }
  }

  function handleNavigate() {
    setExpandedMenu(-1)
    setExpanded(false)
  }


  if (isMobile) {
    return (
      <div className={mobileStyles.container}>
        <div className={'home--header__logo noselect'} onClick={() => router.push('/')}>
          <p className={'logo'}>ATEN</p>
          <p className={`logo ${up ? 'logo__up' : 'logo__down'}`}>O</p>
        </div>
        <div className={'ml-auto  d-flex cursor-pointer'} onClick={() => setExpanded(true)}>
          <span className={`fa fa-bars  ${mobileStyles.icon}`}></span>
        </div>
        <div className={`${mobileStyles.cover} ${expanded && mobileStyles.cover__visible}`} onClick={() => setExpanded(false)}/>



        <div className={`${mobileStyles.container__menu} ${expanded && mobileStyles.container__menu__visible}`}>
          <div className={mobileStyles.container__menu__header}>
            <div className={'mr-auto  d-flex cursor-pointer'} onClick={handleNavigate}>
              <span className={`fa fa-chevron-right  ${mobileStyles.icon} ${expanded && mobileStyles.icon__visible}`}></span>
            </div>
          </div>
          <div className={'overflow-y-scroll'}>
            {story.content.categories.map((category, index) => {
              return (
                <>
                  <NavbarCategoryMobile title={category.title}
                                         subCategories={category.subCategories}
                                         onNavigate={handleNavigate}
                                         expanded={expandedMenu === index}
                                         setExpanded={(value) => handleExpandMenu(index, value)}
                                         key={category._uid}
                  />

                </>
              )
            })}
          </div>
         </div>
      </div>
    )
  } else {
    return (
      <div className={desktopStyles.container}>
        <div className={'home--header__logo'} onClick={() => router.push('/')}>
          <p className={'logo'}>ATEN</p>
          <p className={`logo ${up ? 'logo__up' : 'logo__down'}`}>O</p>
        </div>
        <div className={'d-flex ml-auto'}>
          {story.content.categories.map((category, index) => {
            return (
              <>
                {index > 0 && <div className={desktopStyles.vr} key={index}/>}
                <NavbarCategoryDesktop title={category.title}
                                       subCategories={category.subCategories}
                                       onNavigate={handleNavigate}
                                       expanded={expandedMenu === index}
                                       setExpanded={(value) => handleExpandMenu(index, value)}
                                       key={category._uid}
                />

              </>
            )
          })}
        </div>
      </div>
    )
  }
}
