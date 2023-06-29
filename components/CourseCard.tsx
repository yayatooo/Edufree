import Image from 'next/image'
import React from 'react'
import { courseCards } from '@/libs/CourseCardData'

const CourseCard = () => {
  return (
    <section className='w-full flex laptop:gap-x-12 justify-center mobile:gap-x-10 mobile:flex-col mobile:items-center laptop:flex-row'
            >
            {courseCards.map((data, index) => {
                return (
                <div className='laptop:py-12 mobile:p-6 mobile:w-[300px] mobile:h-[380px] tablet:w-[386px] tablet:h-[418px]' key={index}>
                    <div key={data.id}>
                        <Image
                            src={data.image}
                            width={386}
                            height={236}
                            alt='WebPhoto01'
                        />
                        <div className='laptop:py-6 laptop:px-4 font-poppins mobile:p-0'>
                            <div className='flex flex-col full'>
                                <h2 className='font-semibold laptop:text-2xl mobile:text-base'>{data.title}</h2>
                                <p className='laptop:text-[16px] text-gray-500 py-4 flex flex-wrap mobile:text-sm'>{data.description}</p>
                            </div>
                        <div className='flex mobile:gap-x-2 laptop:w-full'>
                                <p className='flex mobile:gap-x-2 mobile:text-xs laptop:text-sm'><Image
                                    src="./course/Hour.svg"
                                    width={24}
                                    height={24}
                                    alt='jam'
                                /><span>{data.time} Jam</span></p>
                                <p className='flex mobile:gap-x-2 mobile:text-xs laptop:text-sm'><Image
                                    src="./course/Video.svg"
                                    width={24}
                                    height={24}
                                    alt='video'
                                /><span>{data.videos} Video</span></p>
                                <p className='flex mobile:gap-x-2 mobile:text-xs laptop:text-sm'><Image
                                    src="./course/People.svg"
                                    width={24}
                                    height={24}
                                    alt='siswa'
                                /><span>{data.students} Siswa</span></p>
                            </div>
                        </div>
                    </div> 
                </div>
                )
            })}
    </section>
  )
}

export default CourseCard
