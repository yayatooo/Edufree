import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/utility/Button';
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
    href: './',
  },
  {
    name: 'TENTANG KAMI',
    href: './about',
  },
  {
    name: 'KURSUS',
    href: './kursus',
  },
  {
    name: 'FAQ',
    href: './faq',
  },
  {
    name: 'BLOG',
    href: './blog',
  },
];

const Navbar = () => {
  return (
    <nav className="bg-blue-primary flex justify-between py-8 px-12 font-poppins text-white">
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
        {/* <button className="py-3 px-8 rounded-xl bg-yellow-primary text-black-primary font-semibold">
          Login
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
