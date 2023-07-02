import React, { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/utility/Button';
import SideBar from './SideBar';
// import { NavLink } from '@/libs/typeutils.type'

// type NavLinkProps = {
//     things: NavLink[]
// }

type NavLinkProps = {
  name: string;
  href: string;
};

export const NavLink: NavLinkProps[] = [
  {
    name: 'BERANDA',
    href: '/',
  },
  {
    name: 'TENTANG KAMI',
    href: './about',
  },
  {
    name: 'KURSUS',
    href: '/course',
  },
  {
    name: 'FAQ',
    href: '/faq',
  },
  {
    name: 'BLOG',
    href: '/blog',
  },
];

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState<boolean>(false)

  return (
    <>
      <nav className=" bg-blue-primary flex items-center justify-between fixed w-full backdrop-blur-sm py-8 px-12 font-poppins text-white desktop:px-32">
        <Image src="./EDUFREE.svg" alt="logo Web Site" width={128} height={70} />
        <div className="flex items-center">
          <ul className="flex gap-10 mr-8 cursor-pointer mobile:hidden laptop:flex">
            {NavLink.map((data) => {
              return (
                <li key={data.href}>
                  <Link href={data.href}>{data.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className='mobile:hidden laptop:block'>
          <Button>Login</Button>
          </div>
          <div className='laptop:hidden'>
            <button onClick={() => setOpenMenu(true)}>
              <Image 
                    src="./menu.svg" 
                    height={35} 
                    width={35} 
                    alt='menu'
            /></button>
          </div>
        </div>
      </nav>
      <div>
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </div>
    </>
  );
};

export default Navbar;
