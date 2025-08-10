'use client'
import React, { useEffect, useState } from 'react'
import * as motion from 'motion/react-client';
import { AnimatePresence } from 'framer-motion';
import NavItem from './navitem';
import BlinkBorder from '../Blink-border';

function Right() {
    const professionItem = ["Full-Stack Developer", "Fronted Developer", "Backend Developer"]

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % professionItem.length);
        }, 6000); // Change every 2 seconds

        return () => clearInterval(interval);
    }, [])
    return (
        <div className='sm:px-5 px-2 mob-m:px-4'>
            {/* Name with available */}
            <div className="flex items-center gap-2">
                <h1 className='md:text-3xl sm:text-2xl text-sm mob-s:text-lg mob-m:text-xl text-neutral-800 dark:text-neutral-50  font-bold tracking-tight leading-tight'>
                    BHOLA KUMAR
                </h1>
                {/* <Available /> */}
                <div className=" md:block hidden">
                    <div className="select-none font-medium text-xs w-fit  border px-1.5 py-0.5 rounded-md flex gap-0.5 items-center border-green-400 text-green-400">
                        <span className="animate-pulse"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>
                        </span>Available</div>
                </div>
            </div>
          
            <div className="sm:mt-4 mt-1 relative sm:w-50 w-30 mob-m:w-40 overflow-hidden sm:text-lg mob-m:text-sm text-[8px] text-neutral-500 dark:text-neutral-100 border border-neutral-50 py-1 px-4  dark:border-neutral-600  bg-neutral-400/50 dark:bg-neutral-500/80">
                <BlinkBorder />
                <AnimatePresence mode='wait'>
                    <motion.div
                        className='bg-transparent'
                        key={index}
                        initial={{ opacity: 0, y: -30 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            rotate: [0, -2, 2, -2, 2, 0], // vibration
                        }}
                        exit={{
                            opacity: 0,
                            y: 30,
                            rotate: [0, -3, 3, -3, 3, 0], // exit shake
                            transition: {
                                delay: 2,
                                duration: 0.5,
                                ease: 'easeInOut',

                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: 'easeInOut',
                        }}


                    >
                        {professionItem[index]}

                    </motion.div>
                </AnimatePresence>
            </div>
            {/* Theme toggle and social media */}
            <div className="flex flex-wrap sm:gap-2 gap-1 mt-2 py-2">
                {socialLinks.map(({ name, href, svg }) => (
                    <div key={name} className="group relative flex">
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sm:p-2 p-0.5 dark:bg-neutral-800 bg-neutral-100 border border-black dark:border-white rounded-md"
                        >
                            <span className=''>
                                {svg}
                            </span>
                        </a>
                        <span className="absolute bottom-9 left-1/2 transform -translate-x-1/2 mb-2 w-max bg-white text-mainBlack font-medium text-sm rounded-md py-1 px-1.5 scale-0 group-hover:scale-100 duration-100">
                            {name}
                            <span className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-white">
                            </span>
                        </span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Right;

const Available = () => {
    return (
        <div className="w-24 h-4 border border-green-400 flex items-center justify-center gap-0.5 rounded-xl bg-[#fff] dark:bg-neutral-200 text-xs text-green-500">
            <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="w-1.5 h-1.5 rounded-full bg-green-500"
            />
            <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    delay: 0.2
                }}
                className="text-[10px] text-black/50 leading-tight ml-1"
            >
                available
            </motion.span>
        </div>
    )
}

const socialLinks = [
    {
        name: "Github",
        href: "https://github.com/bh-fsdev",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="sm:w-6 sm:h-6 w-4 h-4 icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" />
            </svg>
        ),
    },
    {
        name: "Twitter",
        href: "https://x.com/bh_fsdev",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6 w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
        ),
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/bh-fsdev",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6 w-4 h-4 "
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10v10" />
                <path d="M4 7v.01" />
                <path d="M10 20v-10" />
                <path d="M16 20v-8a2.5 2.5 0 1 0 -6 0" />
            </svg>
        ),
    },
    {
        name: "Leetcode",
        href: "https://leetcode.com/u/bh-fsdev/",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="sm:w-6 sm:h-6 w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13h7.5" />
                <path d="M9.424 7.268l4.999 -4.999" />
                <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
            </svg>
        ),
    },
];
