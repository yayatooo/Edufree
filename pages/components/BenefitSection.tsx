import React from 'react';

type CardBenefitsProps = {
  id: number;
  title: string;
  desc: string;
};

const cardBenefits: CardBenefitsProps[] = [
  {
    id: 1,
    title: 'Kursus Gratis',
    desc: 'Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu',
  },
  {
    id: 2,
    title: 'Akses Selamanya',
    desc: 'Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru ',
  },
  {
    id: 3,
    title: 'Group Konsultasi',
    desc: 'Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru ',
  },
  {
    id: 4,
    title: 'Sertifikat dan Portofolio',
    desc: 'Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan',
  },
  {
    id: 5,
    title: 'Belajar Lebih Terarah',
    desc: 'Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan',
  },
  {
    id: 6,
    title: 'Instruktur Berpengalaman',
    desc: 'Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya',
  },
];

const BenefitSection = () => {
  return (
    <section className="w-full laptop:py-20 laptop:px-12 bg-white-primary mobile:py-10 mobile:px-6 desktop:px-32">
      <h1 className="font-semibold laptop:text-4xl laptop:w-6/12 mx-auto px-4 font-poppins text-center leading-normal py-8 mobile:text-3xl mobile:w-full">
        Keuntungan Bergabung Dengan E-Learning EDUFREE
      </h1>
      <div className="flex gap-10 flex-wrap justify-center py-8">
        {cardBenefits.map((data) => {
          return (
            <div
              className="w-[405px] h-[316px] py-8 px-10 bg-gray-primary"
              key={data.id}
            >
              <h2 className="w-10 h-10 text-center p-2 rounded-lg bg-blue-card text-white font-poppins font-semibold">
                {data.id}
              </h2>
              <h1 className="font-poppins text-2xl font-medium laptop:py-6 leading-normal mobile:py-3">
                {data.title}
              </h1>
              <p className="font-poppins laptop:text-[16px] font-normal mobile:text-sm">
                {data.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitSection;
