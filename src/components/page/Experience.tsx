'use client'

import React, { useRef, useState } from 'react'
import * as motion from "motion/react-client"
import { AnimatePresence } from 'framer-motion'


import BlinkBorder from '../Blink-border'
import BlinkingStars from "../BlinkingStars"
import ExperienceCard from '../ExperienceCard'



function Experience() {
    const container = useRef<HTMLDivElement>(null)
    const experiences = [
        {
            id: 1,
            company: "Noesis Learning",
            role: "Fronted Developer Trainee",
            date: "may 2024 - july 2024",
            location: "Remote",
            description:
                "Completed a structured training program focused on frontend development using React. Worked on building responsive and accessible user interfaces, managing application state with Redux, and styling with TailwindCSS. Gained practical experience in HTML5 semantics, component-based architecture, and integrating APIs ",
            skills: ["HTML5","CSS", "JavaScript", "TailwindCSS","React","Redux"],
        },
        // {
        //     id: 2,
        //     company: "WsCube Tech",
        //     role: "MERN Stack Training",
        //     date: "Jan 2018 - May 2020",
        //     location: "Menlo Park, CA",
        //     description:
        //         "Built modular UI components for Facebook Ads Manager, resulting in a 20% increase in developer efficiency and 15% faster render times.",
        //     skills: ["React", "TypeScript", "GraphQL", "CSS Modules"],
        // },
        // {
        //     id: 3,
        //     company: "Netflix",
        //     role: "UI Engineer",
        //     date: "Aug 2015 - Dec 2017",
        //     location: "Los Gatos, CA",
        //     description:
        //         "Redesigned the main browse experience across web and TV platforms, boosting user engagement by 28%.",
        //     skills: ["JavaScript", "Sass", "Node.js", "Webpack"],
        // },
    ]

    const visibleProjects = experiences.slice(0, 3)

    return (
        <div id='experience' className='sm:py-4 py-2 sm:px-2 px-1'>
            <div ref={container}
                className="text-xl relative sm:w-30 w-25 dark:bg-neutral-100 bg-neutral-800/80"
            >
                <BlinkingStars containerRef={container} />
                <div className="">
                    <BlinkBorder />
                    <h2 className='sm:text-lg text-sm text-neutral-500 dark:text-neutral-100 border border-neutral-50 dark:border-neutral-600 py-1 px-4 bg-neutral-100/80 dark:bg-neutral-800/80'>
                        Experience
                    </h2>
                </div>
            </div>
            <div className="py-4 pr-6 text-base text-neutral-800/70 dark:text-neutral-200/60 flex flex-col gap-4">
                <AnimatePresence>
                    {visibleProjects.map((item) => (
                        <motion.div
                            key={item.company}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <ExperienceCard
                                id={item.id}
                                company={item.company}
                                role={item.role}
                                date={item.date}
                                location={item.location}
                                description={item.description}
                                skills={item.skills}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Experience



function AnimatedChevrons({ direction = 'down' }: { direction?: 'up' | 'down' }) {
    const basePath = direction === 'down' ? "M7 10 L12 15 L17 10" : "M7 14 L12 9 L17 14"

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400 dark:text-neutral-50"
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