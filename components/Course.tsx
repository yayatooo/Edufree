import Button from '@/utility/Button'
import Image from 'next/image'
import React from 'react'
import CourseCard from './CourseCard'

const Course = () => {
  return (
    <section className='laptop:py-12 laptop:px-20 w-full mobile:p-8'>
        <div className='flex laptop:justify-between laptop:py-8 laptop:border-b-4 border-[#ECECF1] mobile:flex-col laptop:flex-row'>
            <h1 className='font-poppins text-4xl font-semibold leading-normal laptop:w-4/12 mobile:w-full mobile:text-2xl text-center mobile:py-4'>Rekomendasi Kursus Untuk Kamu</h1>
            <div className='flex items-center gap-x-10 mobile:justify-center'>
                <button className='flex font-semibold font-poppins gap-x-4'>Kategori<span><Image src="./arrow-down.svg" alt='arrow' width={24} height={24} /></span></button>
                <Button>Lihat Semua</Button>
            </div>
        </div>
      <CourseCard />
    </section>
  )
}

export default Course
