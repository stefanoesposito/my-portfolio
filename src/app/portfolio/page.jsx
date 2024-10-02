'use client'
import {motion, useScroll, useTransform} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {useRef} from 'react'
import MyGigzImage from '../../../public/images/mygigz.jpg'
import BeatriceZappia from '../../../public/images/beatrice-zappia.jpg'
import BeatFlowerS from '../../../public/images/beat-flowers.jpg'
import SeniorDevHaiku from '../../../public/images/senior-dev-haiku.jpg'
import SongwriterCompanion from '../../../public/images/songwriter-companion.jpg'
import PatriziBuonaiuto from '../../../public/images/patrizio-buonaiuto.jpg'

const items = [
    {
        id: 1,
        color: 'from-red-300 to-blue-300',
        title: 'MyGigz.live',
        desc: 'Solopreneur project: Multi-user platform that simplifies live event management, offering musicians a single link to centralize all their concert dates, keeping their audience updated efficiently with minimal effort.',
        technologies: ['NextJs', 'Supabase', 'Tailwind CSS'],
        img: MyGigzImage,
        link: 'https://mygigz.live',
    },
    {
        id: 2,
        color: 'from-blue-300 to-violet-300',
        title: 'Beatrice Zappia website',
        desc: 'Beatrice Zappia\'s website showcases her artwork through a responsive and modern design. Built with React on the frontend and powered by Strapi as the Content Management System. Real time chat integration.',
        technologies: ['Strapi', 'React', 'Postgresql'],
        img: BeatriceZappia,
        link: 'https://beatricezappia.it/',
    },
    {
        id: 3,
        color: 'from-violet-300 to-purple-300',
        title: 'Beat FlowerS website',
        desc: 'Beat FlowerS is a Beatlemania acoustic trio based in Naples, Italy. They play the songs of the legendary band with a unique twist - using guitar, cello and minimal drums to create a sound that is both familiar and fresh.',
        technologies: ['React', 'Google Drive', 'jQuery'],
        img: BeatFlowerS,
        link: 'https://beatflowers.netlify.app',
    },
    {
        id: 4,
        color: 'from-purple-300 to-red-300',
        title: 'Senior Dev Haiku',
        desc: 'A chat with ChatGPT integration, designed purely for fun: it simulates the behavior of a senior developer who responds enigmatically with a thoughtful Zen haiku perfectly themed to each question.',
        technologies: ['NextJs', 'ChatGPT API', 'Pure CSS'],
        img: SeniorDevHaiku,
        link: 'https://senior-dev-haiku.vercel.app/',
    },
    {
        id: 5,
        color: 'from-red-300 to-blue-300',
        title: 'Songwriter Companion',
        desc: 'A web app that, for any major or minor key, shows all diatonic chords of the scale, modal interchanges, secondary dominants, and provides detailed information on chord progressions and harmonic analysis.',
        technologies: ['React', 'Material UI'],
        img: SongwriterCompanion,
        link: 'https://songwritercompanion.netlify.app/',
    },
    {
        id: 6,
        color: 'from-blue-300 to-purple-300',
        title: 'Patrizio Buonaiuto',
        desc: 'Portfolio website for an art-replica artist; it showcases his artwork through a responsive and modern design. Built with Flask + Vanilla JS + jQuery.',
        technologies: ['Flask', 'Vanilla JS', 'jQuery'],
        img: PatriziBuonaiuto,
        link: 'https://patriziobuonaiuto.vercel.app/',
    }
]

const PortfolioPage = () => {
    const ref = useRef()

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85.5%"]);

    return (
        <motion.div
            className="h-full"
            initial={{y: '-200vh'}}
            animate={{y: '0%'}}
            transition={{duration: 1}}
        >
            {/* TITLE SECTION */}
            <div className="h-[600vh] relative" ref={ref}>
                <div
                    className="w-screen h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center text-6xl md:text-8xl text-center">
                    <span>My Works</span>
                    <motion.svg
                        initial={{opacity: 0.2, y: 0}}
                        animate={{opacity: 1, y: '10px'}}
                        transition={{repeat: Infinity, duration: 3, ease: 'easeInOut'}}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width={50}
                        height={50}
                    >
                        <path
                            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                        <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                        <path
                            d="M15 11L12 14L9 11"
                            stroke="#000000"
                            strokeWidth="1"
                        ></path>
                    </motion.svg>
                </div>
                {/* HORIZONTAL SCROLL SECTION */}
                <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <div
                            className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300"/>
                        {items.map((item) => (
                            <div
                                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                                key={item.id}
                            >
                                <div className="flex flex-col gap-8 text-white">
                                    <h1 className="text-xl md:text-4xl lg:text-6xl mt-2">
                                        {item.title}
                                    </h1>
                                    <div
                                        className="relative w-auto h-48 md:w-96 md:h-64 lg:w-[500px] lg:h-[250px] xl:w-[600px] xl:h-[320px] overflow-hidden rounded-xl"
                                    >
                                        <Link href={item.link} target={'_blank'}>
                                            <Image src={item.img} alt={`${item.title}: ${item.desc}`} fill className={'object-cover'}/>
                                        </Link>
                                    </div>
                                    <p className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                                        {item.desc}
                                    </p>
                                        <p className={'font-bold mb-[-16px]'}>Tech stack:</p>
                                    <small className="w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] flex-wrap">
                                        {item.technologies.map((technology, index) => (
                                        <>
                                        <small key={index}
                                              className="rounded p-2 text-sm bg-black text-white hover:bg-white hover:text-black">
                                        {technology}
                                        </small>
                                            {index < item.technologies.length - 1 && ' + '}
                                        </>
                                    ))}
                                    </small>
                                    <Link href={item.link} className="flex justify-start" target={'_blank'}>
                                        <button
                                            className="text-sm md:text-md px-4 py-2 lg:text-lg bg-white text-gray-600 font-semibold rounded">
                                            Open
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
                <h1 className="text-6xl md:text-8xl">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg
                        animate={{rotate: 360}}
                        transition={{duration: 8, ease: 'linear', repeat: Infinity}}
                        viewBox="0 0 300 300"
                        className="w-64 h-64 md:w-[500px] md:h-[500px] "
                    >
                        <defs>
                            <path
                                id="circlePath"
                                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
                            />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-xl">
                                Stefano Esposito Front-End Developer
                            </textPath>
                        </text>
                    </motion.svg>
                    <Link
                        href="/contact"
                        className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
                    >
                        Get in touch
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage
