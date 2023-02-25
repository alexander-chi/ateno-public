import {useEffect, useState} from "react";
import {NavbarCategoryMobile} from "./navbar/NavbarCategory.mobile";
import {useRouter} from "next/router";

import mobileStyles from './navbar/header.mobile.module.sass'
import desktopStyles from './navbar/NavbarCategory.desktop.module.sass'

import {useMediaQuery} from "react-responsive";
import {NavbarCategoryDesktop} from "./navbar/NavbarCategory.desktop";
import {navigation_content} from "./navigation_content";

export const Header = () => {
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
            <NavbarCategoryMobile title={navigation_content.services.title}
                                  subCategories={navigation_content.services.subCategories}
                                  onNavigate={handleNavigate}
                                  expanded={expandedMenu === 0}
                                  setExpanded={(value) => handleExpandMenu(0, value)}
            />
            <NavbarCategoryMobile title={navigation_content.partners.title}
                                  onNavigate={handleNavigate}
                                  subCategories={navigation_content.partners.subCategories}
                                  expanded={expandedMenu === 1}
                                  setExpanded={(value) => handleExpandMenu(1, value)}
            />
            <NavbarCategoryMobile title={navigation_content.careers.title}
                                  onNavigate={handleNavigate}
                                  subCategories={navigation_content.careers.subCategories}
                                  expanded={expandedMenu === 2}
                                  setExpanded={(value) => handleExpandMenu(2, value)}
            />
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
          <NavbarCategoryDesktop title={navigation_content.services.title}
                                 subCategories={navigation_content.services.subCategories}
                                 onNavigate={handleNavigate}
                                 expanded={expandedMenu === 0}
                                 setExpanded={(value) => handleExpandMenu(0, value)}
          />
          <div className={desktopStyles.vr}/>
          <NavbarCategoryDesktop title={navigation_content.partners.title}
                                 subCategories={navigation_content.partners.subCategories}
                                 onNavigate={handleNavigate}
                                 expanded={expandedMenu === 1}
                                 setExpanded={(value) => handleExpandMenu(1, value)}
          />
          <div className={desktopStyles.vr}/>
          <NavbarCategoryDesktop align={'right'}
                                 title={navigation_content.careers.title}
                                 subCategories={navigation_content.careers.subCategories}
                                 onNavigate={handleNavigate}
                                 expanded={expandedMenu === 2}
                                 setExpanded={(value) => handleExpandMenu(2, value)}
          />
        </div>
      </div>
    )
  }
}
