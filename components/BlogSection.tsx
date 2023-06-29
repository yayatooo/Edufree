import React from 'react'
import Image from 'next/image'
import BlogCard from './BlogCard'

const BlogSection = () => {
  return (
    <section className='laptop:py-12 laptop:px-20 w-full mobile:px-8 mobile:py-12'>
        <div className='flex justify-between py-8 border-b-4 border-[#ECECF1] mobile:flex-col laptop:flex-row'>
            <h1 className='font-poppins laptop:text-4xl font-semibold leading-normal laptop:w-4/12 mobile:w-full mobile:text-2xl text-center mobile:py-4'>Blog, Berita dan Event</h1>
            <div className='flex items-center gap-x-10 mobile:justify-center'>
                <button className='flex font-semibold font-poppins gap-x-4 '>Lihat Semua<span><Image src="./arrow-right.svg" alt='arrow' width={24} height={24} /></span></button>
            </div>
        </div>
      <BlogCard />
    </section>
  )
}

export default BlogSection
