import Image from 'next/image'
import React from 'react'
import {socmed, program, support} from '@/libs/footerData'
import { NavLink } from './Navbar'
import Link from 'next/link'

const FooterSection = () => {
  return (
    <>
    <section className='w-full flex justify-between laptop:flex-row bg-blue-primary laptop:pt-12 laptop:px-20 laptop:pb-0 font-poppins text-white mobile:p-8 mobile:flex-col mobile:gap-y-8 mobile:text-center laptop:text-start'>
        <div className='flex flex-col gap-y-20'>
            <div className='mobile:w-full mobile:py-4'>
                <Image src="./EDUFREE.svg" alt="logo Web Site" width={128} height={34} className='mobile:mx-auto mobile:py-4 laptop:mx-0'/>
                <p>Bangun dan wujudkan cita bersama edufree</p>
            </div>
                <div className='flex bg-yellow-primary rounded-t-lg p-4 text-black gap-x-8 w-[420px] mobile:hidden laptop:flex'>
                        <div>
                            <h3 className='font-semibold'>Email</h3>
                            <p className='font-light'>edufree@company.mail</p>
                        </div>
                        <div>
                            <h3 className='font-semibold'>Telephone</h3>
                            <p className='font-light'>+62784593543</p>
                        </div>
                </div>
        </div>

<div>
    
</div>
    <div>
        <h3 className='text-xl'>Social Media</h3>
            <ul className='flex flex-col gap-y-4 pt-4'>
                {socmed.map((data, index) => {
                    return (
                            <li className='font-light' key={index}>{data.title}</li>
                    )
                })}
            </ul>
    </div>
    <div>
        <h3 className='text-xl'>Social Media</h3>
            <ul className='flex flex-col gap-y-4 pt-4'>
                {program.map((data, index) => {
                    return (
                            <li className='font-light' key={index}>{data.title}</li>
                    )
                })}
            </ul>
    </div>
    <div>
        <h3 className='text-xl'>Social Media</h3>
            <ul className='flex flex-col gap-y-4 pt-4'>
                {support.map((data, index) => {
                    return (
                            <li className='font-light' key={index}>{data.title}</li>
                    )
                })}
            </ul>
    </div>
    </section>
    <section className='bg-white flex justify-between px-12 py-4 font-poppins text-black text-lg font-medium mobile:flex-col laptop:flex-row'>
        <div className='mobile:py-4'>
            <h1>© Copyright EDUFREE 2022 - 2023 by Rahmat Hidayat</h1>
        </div>
        <ul className="flex gap-10 items-center mr-8 cursor-pointer mobile:flex-col mobile:text-center mobile:m-0 laptop:flex-row">
          {NavLink.map((data) => {
            return (
              <li key={data.href}>
                <Link href={data.href}>{data.name}</Link>
              </li>
            );
          })}
        </ul>
    </section>
    </>
    
  )
}

export default FooterSection
