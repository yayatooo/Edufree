
type BlogDataProps = {
    id: number
    title: string
    description: string
    image: string
    date: string

}


export const blogData: BlogDataProps[] = [
    {
        id: 1,
        title: "Cara Mudah Untuk Memulai Belajar Programming - EDUFREE",
        description: "Menjadi seorang programmer saat ini sudah sangat mudah untuk dipelajari oleh siapapun ...",
        image: "./blog/blog01.svg",
        date: "02 Jan 2022"
    },
    {
        id: 2,
        title: "Tips Membuat Website Landing Page Bussines - EDUFREE",
        description: "Pentingnya website dalam menumbuhkan rasa kepercayaan terhadap bisnis, membuat ...",
        image: "./blog/blog02.svg",
        date: "12 Mei 2023"
    },
    {
        id: 3,
        title: "Cara Installasi Wordpress Untuk Pemula -EDUFREE",
        description: "Membuat website saat ini sudah bisa tanpa codingan, kini kamu bisa membuatnya dengan ...",
        image: "./blog/blog03.svg",
        date: "27 Mar 2021"
    },
]