import {useEffect, useState} from "react";
import {NavbarCategory} from "./navbar/NavbarCategory";
import {useRouter} from "next/router";

export const Header = () => {
  const [up, setUp] = useState(false)
  const router = useRouter()

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

  return (
    <div className={'home--header'}>
      <div className={'home--header__logo'} onClick={() => router.push('/')}>
        <span className={'my-auto d-flex'}>
           <p className={'logo'}>ATEN</p>
        <p className={`logo ${up ? 'logo__up' : 'logo__down'}`}>O</p>

        </span>

      </div>
      <div className={'ml-auto d-flex'}>
        <NavbarCategory title={'Services'} subCategories={[
          {
            title: 'Managed Event EPOS',
            destination: '/services/event-epos'
          },
          {
            title: 'Software',
            destination: '/services/software'
          },
          {
            title: 'Network',
            destination: '/services/network'
          }
        ]}/>
        <NavbarCategory title={'Partners'} subCategories={[
          {
            title: 'Bipass',
            destination: '/bipass'
          }
        ]}/>
        <NavbarCategory title={'Careers'} subCategories={[
          {
            title: 'Permanent',
            destination: '/careers/permanent'
          },
          {
            title: 'Summer Roles',
            destination: '/careers/summer-roles'
          }
        ]}/>
      </div>
    </div>
  )
}
