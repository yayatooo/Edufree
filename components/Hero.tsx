import React from 'react';
import Navbar from './Navbar';
import Button from '@/utility/Button';
import Image from 'next/image';
import Partners from './Partners';

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="bg-blue-primary flex w-full laptop:py-20 laptop:px-12 justify-between mobile:flex-col mobile:py-10 mobile:px-6 laptop:flex-row">
        <div className="w-6/12 mobile:w-full laptop:w-6/12">
          <h1 className="font-semibold text-[48px] text-white font-poppins mobile:text-3xl mobile:text-center laptop:text-start laptop:text-[48px] laptop:leading-normal">
            Bangun dan Wujudkan Cita Bersama EDUFREE
          </h1>
          <p className="font-normal text-[16px] text-white font-poppins py-10 mobile:text-center laptop:text-start">
            EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara
            online yang bertujuan untuk membantu kamu meraih cita di bidang
            teknologi.
          </p>
          <div className='flex mobile:justify-center mobile:py-8 laptop:justify-start'>
          <Button>Lihat Kursus</Button>
          </div>
        </div>
        <div className="w-6/12 mx-auto mobile:w-full laptop:w-6/12">
          <Image
            src="./hero-assets.svg"
            alt="hero image"
            width={577}
            height={370}
            className="mx-auto"
          />
        </div>
      </section>
      <section>
        <Partners />
      </section>
    </>
  );
};

export default Hero;
