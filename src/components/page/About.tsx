'use client'
import React, { useRef } from 'react'
import BlinkBorder from '@/components/Blink-border'
import BlinkingStars from '../BlinkingStars'

type Props = object

function About({ }: Props) {
    const container = useRef<HTMLElement | null>(null)
    return (
        <div id='about' className='py-4 mob-m:px-2 px-1'>
            <div ref={container as React.RefObject<HTMLDivElement>} className="text-xl relative sm:w-30 w-20 dark:bg-neutral-100 bg-neutral-800/80">
                <BlinkingStars containerRef={container as React.RefObject<HTMLDivElement>} />
                <div className="">
                    <BlinkBorder />
                    <h2 className='sm:text-lg text-sm text-neutral-500 dark:text-neutral-100 border border-neutral-50 dark:border-neutral-600 py-1 sm:px-4 px-2 bg-neutral-100/80 dark:bg-neutral-800/80'>
                        About Me
                    </h2>
                </div>
            </div>
            <div className="py-2 sm:pr-6 pr-1 sm:text-base text-[12px] text-neutral-800/70 dark:text-neutral-200/60">
                <span className=''>
                    Hey, I&apos;m <span className='inline-block text-neutral-800 dark:text-neutral-50'>Bhola Kumar</span>, a <span className='inline-block text-neutral-800 dark:text-neutral-50'>full-stack developer</span>. I love building things that people genuinely use and love, not just for showcases (like the typical engineer).
                    Besides programming, I&apos;m a cricket player who loves vollyball. I also enjoy listening song, mostly 90&apos;s bollywood  song in my free time.
                    If you have an idea and would like to collaborate, feel free to DM me! I&apos;m always open and ready to connect and work on exciting projects. Also, be sure to check out my other side, just click on the contact button!
                </span>
            </div>
        </div>
    )
}

export { About }
