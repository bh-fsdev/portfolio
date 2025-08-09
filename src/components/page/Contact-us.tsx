'use client'
import React, { useRef } from 'react'
import BlinkingStars from '../BlinkingStars'
import BlinkBorder from '../Blink-border'

type Props = {}

function Contact({ }: Props) {
    const container = useRef<HTMLElement | null>(null)

    return (
        <div id='contact' className='sm:py-4 py-6 sm:px-2 px-1'>
            <div ref={container as React.RefObject<HTMLDivElement>}
                className="text-xl relative w-35 dark:bg-neutral-100 bg-neutral-800/80"
            >
                <BlinkingStars containerRef={container as React.RefObject<HTMLDivElement>} />
                <div className="">
                    <BlinkBorder />
                    <h2 className='sm:text-lg text-sm text-neutral-500 dark:text-neutral-100 border border-neutral-50 dark:border-neutral-600 py-1 px-4 bg-neutral-100/80 dark:bg-neutral-800/80'>
                        Get in Touch
                    </h2>
                </div>
            </div>
            <div className="pb-14 sm:pr-6 sm:text-base text-xs text-neutral-800/70 dark:text-neutral-200/60 flex flex-col sm:gap-4 gap-2 sm:mt-0 mt-2">
                <p>
                    I&apos;m currently looking for new opportunities. Whether you have a question or want to say hi, hit that button.
                </p>
                <div className="relative mt-1 max-w-xl hover:border rounded-md ">
                    <input type="email" placeholder="Your email" className="w-full rounded-md bg-white px-4 py-3 pr-[120px] text-sm text-neutral-700  focus:ring-2 focus:ring-neutral-300 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 shadow-[var(--shadow-custom-black-sm)] transition-shadow duration-300" />
                    <a href="mailto:bholakumar1990kp@gmail.com" className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md border  bg-[#EF3232] px-4 py-1.5 text-sm text-neutral-50  transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700/50 dark:border-neutral-700 dark:bg-red-400 dark:text-neutral-200 ">Send Enquiry</a>
                </div>
            </div>
        </div>
    )
}

export default Contact