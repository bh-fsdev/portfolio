import React from 'react'

import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import Image from 'next/image'
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip'

import githubIcon from '../../../public/icons/githubIcon.svg'
import linkedin from '../../../public/icons/linkedin.svg'
import link from '../../../public/icons/link.svg'


function Footer() {
    return (
        <footer className="absolute -left-8 -right-8 bottom-0  border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-900">
            <Separator className="bg-neutral-300 dark:bg-neutral-700" />

            <div className="flex justify-between items-center py-2 sm:px-10 px-6 text-neutral-700 dark:text-neutral-400">
                <span className="sm:text-sm text-xs font-medium text-neutral-800 dark:text-neutral-200">
                    Built with ❤️ by Bhola Kumar
                </span>

                <div className="flex items-center justify-center gap-2">
                    {socialLinks.map((item) => (
                        <Tooltip key={item.name}>

                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className="hover:text-blue-700 dark:hover:text-blue-400 border border-black/60 dark:border-white/60 rounded-sm p-0.5 b"
                                    aria-label={item.name}
                                >
                                    {item.svg}
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{item.name}</p>
                            </TooltipContent>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer


const socialLinks = [
    {
        name: "Github",
        href: "https://github.com/bh-fsdev",
        svg: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 icon icon-tabler icons-tabler-filled icon-tabler-brand-github"
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
                className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
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
                className="w-4 h-4 "
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
                className="w-4 h-4 icon icon-tabler icons-tabler-outline icon-tabler-brand-leetcode"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13h7.5" />
                <path d="M9.424 7.268l4.999 -4.999" />
                <path d="M16.633 16.644l-2.402 2.415a3.189 3.189 0 0 1 -4.524 0l-3.77 -3.787a3.223 3.223 0 0 1 0 -4.544l3.77 -3.787a3.189 3.189 0 0 1 4.524 0l2.302 2.313" />
            </svg>
        ),
    },
];
