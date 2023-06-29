

type CourseCardsProps = {
    id: number
    title: string
    description: string
    image: string
    link: string
    time: string
    videos: number
    students: number
}

export const courseCards: CourseCardsProps[] = [
    {
        id: 1,
        title: 'Dasar Pemograman Web',
        description: "Materi Pembelajaran mengenai pembuatan website tingkat pemula",
        image: "./course/course01.svg",
        link: "/courses",
        time: "4,5",
        videos: 20,
        students: 1.900
    },
    {
        id: 2,
        title: 'Digital Marketing',
        description: "Materi mengenai strategi dan konsep marketing pemula",
        image: "./course/course02.svg",
        link: "/courses",
        time: "6,2",
        videos: 32,
        students: 930
    },
    {
        id: 3,
        title: 'Data Science Dasar',
        description: "Materi Pembelajaran mengenai dasar-dasar data science",
        image: "./course/course03.svg",
        link: "/courses",
        time: "8",
        videos: 45,
        students: 1.043
    },
    // {
    //     id: 4,
    //     title: 'Frontend Developer Dasar',
    //     description: "Materi Pembelajaran mengenai Frontend tingkat pemula",
    //     image: "./course/course01.svg",
    //     link: "/courses",
    //     time: "6",
    //     videos: 25,
    //     students: 2.000
    // },
    // {
    //     id: 5,
    //     title: 'Dasar Backend Web Developer',
    //     description: "Materi Pembelajaran mengenai Backend tingkat pemula",
    //     image: "./course/course02.svg",
    //     link: "/courses",
    //     time: "9",
    //     videos: 30,
    //     students: 1.590
    // },
    // {
    //     id: 6,
    //     title: 'Dasar Pemograman DevOps',
    //     description: "Materi Pembelajaran mengenai pelajaran DevOps tingkat pemula",
    //     image: "./course/course03.svg",
    //     link: "/courses",
    //     time: "3",
    //     videos: 14,
    //     students: 800
    // },
]