import React from 'react'
import Image from 'next/image'
import { NavLink } from './Navbar'
import Link from 'next/link'
import { classNames } from '@/templates/LandingPage/utils/class-names'

interface MyComponentProps {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  }

const SideBar: React.FC<MyComponentProps> = ({openMenu, setOpenMenu}) => {
  return (
    <section className={classNames('bg-white-primary w-9/12 h-full z-40 fixed transition-all',
        openMenu ? "right-0" : "-right-full"
    )}>
    <div className='flex justify-end p-8'>
      <Image 
        src='./x.svg'
        width={35}
        height={35}
        alt='close menu'
        onClick={()=>setOpenMenu(false)}
      />
    </div>
    <ul className='flex font-poppins font-medium py-16 items-center text-blue-primary text-xl flex-col gap-y-8'>
      {NavLink.map((data) => {
        return (
        <li key={data.href}>
          <Link href={data.href}>{data.name}</Link>
        </li>
        )
      })}
    </ul>
  </section>
  )
}

export default SideBar
