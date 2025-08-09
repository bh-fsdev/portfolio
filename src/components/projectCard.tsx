import React, { useState } from 'react'

import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import * as motion from "motion/react-client"
import githubIcon from '../../public/icons/githubIcon.svg'

type ProjectProps = {
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    isLive: boolean;
}


function ProjectCard({ title, description, image, liveUrl, githubUrl, isLive }: ProjectProps) {
    return (
        <motion.div
            className="hover:border border-neutral-500/50 rounded-lg sm:p-4 p-0.5 flex justify-center sm:gap-4 gap-1 sm:shadow-[var(--shadow-custom-black)] shadow-[var(--shadow-custom-black-sm)] transition-shadow duration-300 bg-gradient-to-br from-neutral-50/50 to-neutral-200/20 dark:from-neutral-800 dark:to-neutral-900 md:flex-row md:items-start flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}         >
            <div className="md:w-60 md:h-50 w-full md:border md:border-neutral-500 rounded-lg md:p-2 p-2 ">
                <Image src={image} alt='github' className='w-full rounded-md' />
            </div>
            <div className="sm:w-full w-full items-start justify-center sm:px-0 px-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <div className='sm:text-2xl text-xl text-neutral-900/80 dark:text-neutral-100'>{title}</div>
                        <div className="flex items-center gap-0.5 text-neutral-500/80 border border-green-400 rounded-xl px-3 ml-2 h-3.5 bg-white">
                            <span className={`w-1 h-1 rounded-full animate-pulse ${isLive ? 'bg-green-400' : 'bg-red-400'}`} />

                            <span className='text-base text-[8px]'>{isLive ? 'Live' : 'Pending'}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 ">
                        <a href={liveUrl} className='cursor-pointer w-4 h-4 inline-block'>
                            {/* <ExternalLink className='w-6 h-6' /> */}
                            <AnimatedExternal />
                        </a>
                        <a href={githubUrl} className='inline-block bg-neutral-800 rounded-full cursor-pointer w-4 h-4 hover:bg-neutral-700 transition-all'>
                            <Image src={githubIcon} alt='github' className='w-6' />
                        </a>
                    </div>
                </div>
                <div className='sm:text-md text-sm text-muted-foreground'>
                    {description}
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard




function AnimatedExternal() {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-external-link-icon w-4 h-4 dark:text-neutral-100"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {/* Rectangle box */}
            <motion.path
                d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                    duration: 1.2,
                    ease: "easeInOut",
                }}
            />

            {/* Arrow (both base + head) inside a group that will animate on hover */}
            <motion.g
                initial={{ pathLength: 0 }}
                animate={{
                    pathLength: 1,
                    x: hovered ? 2.5 : 0,
                    y: hovered ? -2.5 : 0,
                }}
                transition={{
                    pathLength: {
                        duration: 0.8,
                        ease: "easeInOut",
                        delay: 1.2,
                    },
                    x: { duration: 0.3, ease: "easeInOut" },
                    y: { duration: 0.3, ease: "easeInOut" },
                }}
            >
                <path d="M10 14 L21 3" />
                <path d="M15 3h6v6" />
            </motion.g>
        </motion.svg>


    )
}