import Image from 'next/image';
import React from 'react';

type SponsorsProps = {
  id: number;
  img: string;
};

const Sponsors: SponsorsProps[] = [
  {
    id: 1,
    img: './partner/Group 2549.svg',
  },
  {
    id: 2,
    img: './partner/Group 2550.svg',
  },
  {
    id: 3,
    img: './partner/Group 2551.svg',
  },
  {
    id: 4,
    img: './partner/Group 2552.svg',
  },
  {
    id: 5,
    img: './partner/Group 2553.svg',
  },
];

const Partners = () => {
  return (
    <>
      <section className="flex w-full bg-[#EEF4FA] laptop:py-24 laptop:px-12 justify-between gap-y-8 mobile:flex-col mobile:p-4 laptop:flex-row desktop:px-32">
        <div className="flex gap-x-10">
          <div>
            <h1 className="font-semibold text-3xl font-poppins mobile:text-2xl">21.000+</h1>
            <p className="font-light text-[16px] text-black-primary font-poppins mobile:text-base">
                Siswa Terdaftar
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-3xl font-poppins mobile:text-2xl">100+</h1>
            <p className="font-light text-[16px] text-black-primary font-poppins mobile:text-base">
              Tenaga Ahli
            </p>
          </div>

          <div>
            <h1 className="font-semibold text-3xl font-poppins mobile:text-2xl">150+</h1>
            <p className="font-light text-[16px] text-black-primary font-poppins mobile:text-base">
              Kursus Gratis
            </p>
          </div>
        </div>
        <div className="flex gap-x-8 mobile:overflow-auto">
          {Sponsors.map((data) => {
            return (
              <Image
                src={data.img}
                key={data.id}
                width={127}
                height={34}
                alt="sponsors"
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Partners;
