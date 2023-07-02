import React from 'react'
import { blogData } from '@/libs/blogData'
import Image from 'next/image'

const BlogCard = () => {
  return (
    <section className='w-full flex gap-x-10 justify-center mobile:gap-x-10 mobile:flex-col mobile:items-center laptop:flex-row'
    // style={{
    //     scrollbarWidth: 'none',
    //     msOverflowStyle: "none",
    // }}>
    >
    {blogData.map((data, index) => {
        return (
        <div className='py-12 w-[405px] h-[561px] mobile:p-6 mobile:w-[300px] mobile:h-[380px] tablet:w-[405px] tablet:h-[561px]' key={index}>
            <div key={data.id}>
                <Image
                    src={data.image}
                    width={386}
                    height={236}
                    alt='WebPhoto01'
                />
                <div className='laptop:py-6 laptop:px-4 font-poppins mobile:p-0'>
                    <div className='flex flex-col full'>
                        <p className='laptop:text-[16px] text-gray-500 mobile:text-sm'>{data.date}</p>
                        <h2 className='font-semibold laptop:text-xl py-4 mobile:text-base'>{data.title}</h2>
                        <p className='laptop:text-[16px] text-gray-500 flex flex-wrap pb-6 mobile:text-sm'>{data.description}</p>
                        <button className='flex'>Selengkapnya<Image src='./arrow-right.svg' alt='arrow-right' width={35} height={35} /></button>
                    </div>
                </div>
            </div> 
        </div>
        )
    })}
</section>
  )
}

export default BlogCard
