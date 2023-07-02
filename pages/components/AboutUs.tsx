import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
  return (
    <section className='flex laptop:py-12 laptop:px-20 w-full mobile:p-8 mobile:flex-col laptop:flex-row desktop:px-32'>
      <div className='font-poppins laptop:w-6/12 flex flex-col justify-center mobile:w-full mobile:text-center laptop:text-start'>
        <p className='text-xl text-black font-light'>Tentang Kami</p>
        <h1 className='laptop:text-4xl font-semibold text-black leading-normal py-4 mobile:text-2xl'>EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh</h1>
        <p className='text-lg text-gray-500 font-light laptop:w-11/12 mobile:w-full'>Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan</p>
      </div>
      <div className='laptop:w-6/12 mobile:w-full'>
        <Image
            src='./aboutUs.svg'
            alt='About Page'
            width={575}
            height={398}
            className='float-right'
        />
      </div>
    </section>
  )
}

export default AboutUs
