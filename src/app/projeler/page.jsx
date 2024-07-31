"use client"

import { useState } from "react"
import {motion} from "framer-motion"
import Image from "next/image"

const prevProjeler = [
    {
        id:1,
        title: "SEGİN İNŞAAT AŞ",
        desc: "Saha Projesi yapımı",
        date: "2024 - Devam Etmektedir.",
        photo: [
            "/pursak1.jpg",
            "/pursak2.jpg"
        ]
    },
    {
        id:2,
        title: "GALLARDO",
        desc: "Sincan Saraycık LAGOM projesi yapımı (teslim edilme aşamasındadır).",
        date: "2023 - Devam Etmektedir.",
        photo: [
            "/lagom.png",
            "/lagom1.png"
        ]
    },
    {
        id:3,
        title: "TR INVEST - ŞAŞMAZ",
        desc: "MEGA ŞAŞMAZ projesi tamamlanmış ve teslim edilmiştir.",
        date: "2022-2024",
        photo: [
            "/sasmaz1.jpg",
            "/sasmaz2.jpg",
            "/sasmaz3.jpg",
            "/sasmaz4.jpg",
            "/sasmaz5.jpg",
        ]
    },
    {
        id:4,
        title: "TR INVEST - YENİKENT",
        desc: "Mega Yenikent projesi yapılmış ve teslim edilmiştir.",
        date: "2023",
        photo: [
            "/yenik.png"
        ]
    },
    {
        id:5,
        title: "Kolon Kreasyon ANTALYA-ALTINTAŞ",
        desc: "Garden Suite Antalya projesi tamamlanıp teslim edilmiştir.",
        date: "2022 - 2023",
        photo: [
            "/garden.png",
            "/garden2.png"
        ]
    },
    {
        id:6,
        title: "Çağlayanlar AŞ KIRŞEHİR-MUCUR",
        desc: "50 MW Katı Yakıt elektrik santrali kurulumu.",
        date: "2021 - 2022",
        photo: []
    },
    {
        id:7,
        title: "Çağlayanlar AŞ KIRŞEHİR-MUCUR",
        desc: "9 MW Biyogaz Tesisi yapımı.",
        date: "2021 - 2022",
        photo: [
            "/biyogaz1.jpg",
            "/biyogaz2.jpg",
            "/biyogaz3.jpg",
        ]
    },
    {
        id:8,
        title: "TUSAŞ - TAİ ANKARA - DOST İNŞAAT",
        desc: "B1020 - B1021 Test ve Laboratuvar binalarının yapımı.",
        date: "2021 - 2022",
        photo: []
    },
    {
        id:9,
        title: "Vitalen Holding - OSTİM",
        desc: "Holding Merkez binası yapımı.",
        date: "2021 - 2022",
        photo: []
    },
    {
        id:10,
        title: "Ada Matbaacılık - SİNCAN OSB",
        desc: "Fabrika yapımı.",
        date: "2020 - 2021",
        photo: []
    },
    {
        id:11,
        title: "Bağdat Baharat - SİNCAN OSB",
        desc: "Fabrika yapımı.",
        date: "2019 - 2021",
        photo: []
    },
    {
        id:12,
        title: "BOTAŞ - ESKİŞEHİR ZİNCİRLİKUYU, BOZAN, KESKİN, MAHMUDİYE, SİVRİHİSAR ilçeri",
        desc: "RMSA doğalgaz binalarının inşası.",
        date: "2019 - 2020",
        photo: []
    },
    {
        id:13,
        title: "KOLİN İNŞAAT - ESKİŞEHİR TEİ",
        desc: "Uçak fabrikası, genişletme ve tadilat işleri.",
        date: "2019 - 2020",
        photo: []
    },
    {
        id:14,
        title: "TUSAŞ - TAİ ANKARA - KOLİN İNŞAAT",
        desc: "Kompozit ve boya fabrikası kaba işleri.",
        date: "2019 - 2020",
        photo: [
            "/tusaskomp1.jpg",
            "/tusaskomp2.jpg",
            "/tusaskomp3.jpg",
            "/tusaskomp4.jpg",
        ]
    },
    {
        id:15,
        title: "KOLİN İNŞAAT - KAPIKULE ÇERKEZKÖY",
        desc: "Yüksek hızlı tren hattı köprü, menfez ve viyadük işleri yapımı.",
        date: "2019 - 2020",
        photo: []
    },
    {
        id:16,
        title: "KOLİN İNŞAAT - MANİSA SOMA",
        desc: "Soma Termik Santrali ve 16 km kömür bant hattı projesi.",
        date: "2018 - 2019",
        photo: [
            "/soma.jpg"
        ]
    },
    {
        id:17,
        title: "KOLİN İNŞAAT - İZMİR ALİAĞA",
        desc: "İzmir Aliağa Liman Projesi.",
        date: "2018 - 2019",
        photo: [
            "/izmir1.jpg",
            "/izmir2.jpg",
            "/izmir3.jpg",
            "/izmir4.jpg",
        ]
    },
]

const ProjelerPage = () => {


    return (
        <motion.div 
        className="h-full overflow-scroll" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duraion:1}}
        key={1}
        >
            {/* CONTENT */}
            <div className="grid items-center justify-center content-center lg:flex-row px-6 sm:px-6 md:px-40 lg:px-40 xl:px-48 text-xl">
                {/* h3 CONT */}
                <div className="mt-48 px-48 text-center items-center justify-center text-gray-700 font-semibold text-lg">
                    <h3>
                    Yapmış olduğumuz işler altyapı ve üstyapı ile alakalı anahtar teslimi ve kaba inşaat olmak üzere iki kolda faaliyet göstermekteyiz.
                    </h3>
                </div>
                {/* TABLO CONT */}
                <div className="pt-48 px-32">
                    <h3 className="font-bold text-black">Tamamladığımız ve Devam Eden Projelerimiz.</h3>
                    <div className="pt-5">
                        {/* LIST ITEM */}
                        <div>
                            {
                                prevProjeler.map((job) => {
                                    if(job.id%2 === 1) {
                                        return (
                                            // {/* LEFT */}
                                            <div className="flex justify-between h-48" key={job.id}>
                                            <div className="w-1/3 justify-end ">
                                                {/* JOB TITLE */}
                                                <div className="bg-white text-black p-1 font-semibold rounded-b-lg rounded-s-lg text-lg">{job.title}</div>
                                                {/* JOB DESC */}
                                                <div className="text-black p-1 text-sm italic">{job.desc}</div>
                                                {/* JOB DATE */}
                                                <motion.div className="p-1 text-red-400 text-sm font-semibold">{job.date}</motion.div>
                                                {/* IMAGE */}
                                                <div className="flex justify-center items-center gap-4">
                                                    {job.photo.map((x) => <motion.div initial={{scale:1}} whileHover={{scale:3, transition:{duration:0.2}}} key={x}>
                                                         <Image src={x} className="rounded" height={150} width={150} quality={100} alt={x}/>
                                                    </motion.div>)
                                                    }
                                                </div>
                                            </div>
                                            {/* CENTER */}
                                            <div className="w-1/6 flex justify-center">
                                                {/* LINE */}
                                                <div className="w-1 h-full bg-gray-600 rounded relative z-30 ">
                                                    {/* CIRCLE */}
                                                    <div className="ml-auto mr-auto absolute w-5 h-5 rounded-full ring-4 ring-red-400 -left-2 bg-red-50"></div>
                                                </div>
                                            </div>
                                            {/* RIGHT */}
                                            <div className="w-1/3 justify-start "></div>
                                            </div>
                                        )
                                    }else {
                                        return (

                                            <div className="flex justify-between h-48" key={job.id}>
                                            {/* LEFT */}
                                            <div className="w-1/3 justify-start"></div>
                                            {/* CENTER */}
                                            <div className="w-1/6 flex justify-center">
                                            {/* LINE */}
                                                <div className="w-1 h-full bg-gray-600 rounded relative z-30">
                                                    {/* CIRCLE */}
                                                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -left-2 bg-red-50"></div>
                                                </div>
                                            </div>
                                            {/* RIGHT */}
                                            <div className="w-1/3 justify-end">
                                                {/* JOB TITLE */}
                                                <div className="bg-white text-black p-1 font-semibold rounded-b-lg text-lg rounded-s-lg">{job.title}</div>
                                                {/* JOB DESC */}
                                                <div className="text-black p-1 text-sm italic">{job.desc}</div>
                                                {/* JOB DATE */}
                                                <div className="p-1 text-red-400 text-sm font-semibold">{job.date}</div>
                                                                                                {/* IMAGE */}
                                                                                                <div className="flex justify-center items-center gap-4">
                                                    {job.photo.map((x) => <motion.div initial={{scale:1}} whileHover={{scale:3, transition:{duration:0.2}}} key={x}>
                                                         <Image src={x} className="rounded" height={150} width={150} quality={100} alt={x}/>
                                                    </motion.div>)
                                                    }
                                                </div>
                                            </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjelerPage