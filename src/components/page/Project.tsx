'use client'

import React, { useRef, useState } from 'react'
import * as motion from "motion/react-client"
import { AnimatePresence } from 'framer-motion'



import BlinkBorder from '../Blink-border'
import ProjextCard from '../projectCard'
import BlinkingStars from "../BlinkingStars"

// import project
import chatapp from '../../../public/project/image.png'
import ecommerce from '../../../public/project/ecommerce.png'
import jobhunty from '../../../public/project/jobhunty.png'
import game from '../../../public/project/game.png'
import portfolio from '../../../public/project/portfolio.png'
import civifix from '../../../public/project/coming.png'

function Project() {
    const container = useRef<HTMLDivElement>(null)
    const [showAll, setShowAll] = useState(false)
    const projects = [
        {
            title: "Talkative",
            description: "A modern full-stack real-time chat application built with React, Node.js, and Socket.IO. Features secure JWT authentication, real-time messaging with typing indicators and delivery status, user profiles with Cloudinary avatar uploads, and responsive design using Tailwind CSS. Includes RESTful API endpoints and WebSocket events for seamless communication.",
            image: chatapp,
            liveUrl: "https://github.com/BholaCraft07/chat-application/tree/main",
            githubUrl: "https://github.com/BholaCraft07/chat-application/tree/main",
            isLive: false,
        },
        {
            title: "Shopsmart",
            description: "A responsive e-commerce frontend built with React and Tailwind CSS. Features category-wise product display with filtering, wishlist, add-to-cart, and dynamic theming for a personalized look. Designed for smooth, engaging shopping on all devices. Includes login and registration UI pages as placeholders for future backend integration. ",
            image: ecommerce,
            liveUrl: "https://shopsmart-shopping.vercel.app/",
            githubUrl: "https://github.com/BholaCraft07/E-Commerce-Site",
            isLive: true,
        },
         {
            title: "Portfolio",
            description: "A personal portfolio website showcasing my projects, skills, and experience. Built with Nextjs , Tailwind CSS and framer-motion for a modern, responsive design.",
            image: portfolio,
            liveUrl: "none",
            githubUrl: "none",
            isLive: false,
        },
        {
            title: "JobHunty",
            description: "A modern job portal frontend UI built with React and Tailwind CSS. Showcases categories, featured jobs, openings, and a latest jobs page as design prototypes. Fully responsive and visually engaging, focused on presenting an intuitive layout for future integration rather than fully functional job-search features.",
            image: jobhunty,
            liveUrl: "https://job-huntly-gamma.vercel.app/",
            githubUrl: "https://github.com/BholaCraft07/JobHuntly",
            isLive: true,
        },
        {
            title: "Sudoku Solver",
            description: "A browser-based puzzle solver built with JavaScript and CSS. Features an interactive 9×9 grid where users can input numbers, validate the board, and solve puzzles instantly using a backtracking algorithm. Includes clear and reset options, a responsive design, and visual highlights for easier gameplay — all running entirely on the frontend without backend dependencies.",
            image: game,
            liveUrl: "https://bholacraft07.github.io/Sudoku-Solver-Game/",
            githubUrl: "https://github.com/BholaCraft07/Sudoku-Solver-Game",
            isLive: true,
        },
        {
            title: "civiFix",
            description: "A modern full-stack app to report real-world public issues like road damage, electricity faults, or potholes. Users can click a photo, and the app automatically adds their location. The report is sent to the nearest block officer. If not fixed in time, it’s escalated to district, then national-level authorities. Built with React, Node.js, and MongoDB, it features JWT authentication, real-time updates and further UI is pending.",
            image:civifix,
            liveUrl: "none",
            githubUrl: "none",
            isLive: false,
        },
    ]
    const visibleProjects = showAll ? projects : projects.slice(0, 3)

    return (
        <div id='project' className='py-4 sm:px-2 px-1'>
            <div ref={container}
                className="text-xl relative sm:w-24 w-20 dark:bg-neutral-100 bg-neutral-800/80"
            >
                <BlinkingStars containerRef={container} />
                <div className="">
                    <BlinkBorder />
                    <h2 className='sm:text-lg text-sm text-neutral-500 dark:text-neutral-100 border border-neutral-50 dark:border-neutral-600 py-1 px-4 bg-neutral-100/80 dark:bg-neutral-800/80'>
                        Projects
                    </h2>
                </div>
            </div>
            <div className="py-4 sm:pr-6 text-base text-neutral-800/70 dark:text-neutral-200/60 flex flex-col gap-4">
                <AnimatePresence>
                    {visibleProjects.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <ProjextCard
                                title={item.title}
                                description={item.description}
                                image={item.image}
                                liveUrl={item.liveUrl}
                                githubUrl={item.githubUrl}
                                isLive={item.isLive}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
                <motion.div
                    onClick={() => setShowAll(!showAll)}
                    className='hover:border border-neutral-500/50 rounded-lg sm:p-4 p-2 flex justify-center sm:gap-4 gap-2 sm:shadow-[var(--shadow-custom-black)] shadow-[var(--shadow-custom-black-sm)] transition-shadow duration-300 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 cursor-pointer text-neutral-800 dark:text-neutral-100 hover:text-neutral-900 dark:hover:text-neutral-50'
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ backgroundColor: 'rgba(250,250,250,0.95)' }}
                >
                    <span className='inline-block sm:p-2 p-1'>
                        <AnimatedChevrons direction={showAll ? 'up' : 'down'} />
                    </span>
                    <h3 className='sm:text-md text-sm'>{showAll ? 'Hide' : 'Show More'} !</h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Project


// function AnimatedChevrons({ direction = 'down' }: { direction?: 'up' | 'down' }) {
//     const chevronPaths =
//         direction === 'down'
//             ? ["M7 2 L12 7 L17 2", "M7 8 L12 13 L17 8", "M7 14 L12 19 L17 14"]
//             : ["M7 19 L12 14 L17 19", "M7 13 L12 8 L17 13", "M7 7 L12 2 L17 7"]

//     return (
//         <motion.svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="1.8"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             className="text-neutral-400 dark:text-neutral-50"
//         >
//             {chevronPaths.map((d, i) => (
//                 <motion.path
//                     key={i}
//                     d={d}
//                     // initial={{ opacity: 0, y: -4 }}
//                     // animate={{ opacity: [0, 1, 0], y: [-4, 0, 4] }}
//                     // initial={{ opacity: 0, y: direction === 'down' ? -4 : 4 }}
//                     // animate={{ opacity: [0, 1, 0], y: direction === 'down' ? [-4, 0, 4] : [4, 0, -4] }}
//                     initial={{ opacity: 0, y: direction === 'down' ? -4 : 4 }}
//                     animate={{
//                         opacity: [0, 1, 0],
//                         y: direction === 'down' ? [-4, 0, 4] : [4, 0, -4],
//                     }}

//                     transition={{
//                         duration: 1.5,
//                         ease: 'linear',
//                         repeat: Infinity,
//                         // repeatDelay: 0.2,
//                         delay: i * 0.7,

//                     }}
//                 />
//             ))}
//         </motion.svg>
//     )
// }
function AnimatedChevrons({ direction = 'down' }: { direction?: 'up' | 'down' }) {
    const basePath = direction === 'down' ? "M7 10 L12 15 L17 10" : "M7 14 L12 9 L17 14"

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
             
            viewBox="0 0 30 30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400 dark:text-neutral-50 sm:w-4 w-3"
        >
            {[0, 1, 2].map((i) => (
                <motion.path
                    key={i}
                    d={basePath}
                    initial={{
                        opacity: 0,
                        scale: 0.3,
                        y: direction === 'down' ? -15 : 15,
                        rotateX: direction === 'down' ? -60 : 60
                    }}
                    animate={{
                        opacity: [0, 0.2, 0.8, 1, 0.6, 0],
                        scale: [0.3, 0.5, 0.9, 1.2, 0.7, 0.2],
                        y: direction === 'down' ? [-12, -8, -2, 4, 8, 14] : [12, 8, 2, -4, -8, -14],
                        rotateX: direction === 'down' ? [-60, -40, -10, 20, 40, 60] : [60, 40, 10, -20, -40, -60],
                    }}
                    transition={{
                        duration: 2,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        repeat: Infinity,
                        delay: i * 0.4,
                        repeatDelay: 1.5,
                    }}
                    style={{
                        transformOrigin: "center",
                        filter: `drop-shadow(0 0 ${4 + i * 2}px currentColor)`,
                    }}
                />
            ))}
        </motion.svg>
    )
}