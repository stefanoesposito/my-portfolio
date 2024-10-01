"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {useRouter} from 'next/navigation'

const Homepage = () => {
  const router = useRouter()
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero-2.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Building the Future
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital portfolio, where creativity meets innovation. With a sharp focus on design and expertise in coding, my portfolio highlights a variety of projects that demonstrate my dedication to quality and craftsmanship.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button
                className="p-4 rounded-lg ring-1 ring-black bg-black text-white"
                onClick={() => router.push('/portfolio')}
            >
              View My Work
            </button>
            <button
                className="p-4 rounded-lg ring-1 ring-black"
                onClick={() => router.push('/contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
