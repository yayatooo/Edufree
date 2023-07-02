import Image from 'next/image'
import React from 'react'

const Testimonies = () => {
  return (
    <section className='py-20'>
        <div className='bg-gray-primary font-poppins flex laptop:p-20 gap-x-16 mobile:p-10 mobile:flex-col laptop:flex-row desktop:px-32'>
            <div className='laptop:w-4/12 mobile:w-full mobile:text-xl'>
                <h1 className='font-semibold laptop:text-3xl pb-4 mobile:text-2xl mobile:text-center laptop:text-start'>Kata Mereka Tentang Kursus EDUFREE</h1>
                <p className='text-gray-400 laptop:w-10/12 laptop:text-lg mobile:text-sm mobile:text-center mobile:w-full laptop:text-start'>EDUFREE telah&apos; dipercaya lebih dari 10.000 siswa</p>
            </div>
            <div className='laptop:w-7/12 mobile:w-full'>
                <h1 className='font-semibold laptop:text-3xl pb-10 laptop:text-justify mobile:text-xl mobile:text-center mobile:pt-10'>"Materi yang disampaikan mudah dimengerti, kualitas instruktur sangat&quot; baik serta  responnya yang cepat. So, kursus&apos; disini sangat sangat saya rekomendasikan!!"</h1>
                <div className='flex gap-x-4 mobile:justify-center laptop:justify-start'>
                    <Image
                    src="./Mask Group.svg"
                    width={52}
                    height={52}
                    alt='comment'
                    />
                    <div>
                    <h4 className='font-semibold'>Jenny Wilson</h4>
                    <p>Vice President</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonies
