'use client'
import React, { useRef } from 'react'
import BlinkBorder from '../Blink-border'
import { logo } from "@/lib/logo"
import Image from 'next/image'

import * as motion from "motion/react-client"
import BlinkingStars from '../BlinkingStars'

type Props = object

function Skills({ }: Props) {
    const container = useRef<HTMLElement | null>(null)
    return (
        <div id='skills' className='sm:px-2 px-1'>
            <div ref={container as React.RefObject<HTMLDivElement>} className="text-xl relative sm:w-36 w-30 dark:bg-neutral-100 bg-neutral-800/80">
                <BlinkingStars containerRef={container as React.RefObject<HTMLDivElement>} />
                <div className="">
                    <BlinkBorder />
                    <h2 className='sm:text-lg text-sm text-neutral-500 dark:text-neutral-100 border border-neutral-50 dark:border-neutral-600 py-1 px-4 bg-neutral-100/80 dark:bg-neutral-800/80'>
                        Skills & Tools
                    </h2>
                </div>
            </div>
            <div className="py-2 sm:pr-6 text-base text-neutral-800/70 dark:text-neutral-200/60">
                <SkillBtn />
            </div>
        </div>
    )
}

export default Skills

const SkillBtn = () => {

    return (
        <div className='flex flex-wrap gap-3'>
            {
                logo.map((item) => (
                    <motion.div
                        key={item.name}
                        className='px-2 rounded-md shadow-[var(--shadow-custom-black-sm)] transition-shadow duration-300 sm:text-[15px] text-[8px] -tracking-tighter hover:text-black/70 dark:hover:text-white/80 cursor-pointer bg-transparent text-black/70 dark:text-white/70 h-7 flex items-center justify-center gap-1 hover:border bg-gradient-to-br from-neutral-50/50 to-neutral-200/20 dark:from-neutral-800 dark:to-neutral-900'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ y: -2, transition: { duration: 0.2 } }}
                    >
                        <span className=' bg-black/60 text-white dark:bg-white/20 dark:text-black rounded-full flex items-center justify-center
        '>
                            {item.svg && (
                                <Image
                                    src={item.svg}
                                    alt={item.name}
                                    className='bg-transparent p-0.5 sm:w-[20px] w-[15px]'
                                />
                            )}
                        </span>
                        <span>{item.name}</span>
                    </motion.div>
                ))
            }
        </div>

    );
}
