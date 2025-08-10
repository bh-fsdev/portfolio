import React, { useState } from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import * as motion from "motion/react-client"
import { logo } from '../lib/logo' // Adjust the path based on your file structure

type ExperienceProps = {
    id: number,
    company: string,
    role: string,
    date: string, // Changed from Date to string to match your data
    location: string,
    description: string,
    skills: string[]
}

function ExperienceCard({ id, company, role, date, location, description, skills }: ExperienceProps) {
    // Function to get logo by skill name
    const getSkillLogo = (skillName: string) => {
        // Normalize skill names to match logo names
        const skillMap: { [key: string]: string } = {
            'React': 'ReactJS',
            'Redux': 'Redux', // Using React icon for Redux as fallback
            'TailwindCSS': 'TailwindCSS',
            'HTML5': 'HTML',
            'HTML': 'HTML',
            'TypeScript': 'JavaScript', // Using JS icon for TypeScript as fallback
            'GraphQL': 'JavaScript', // Using JS icon for GraphQL as fallback
            'CSS Modules': 'CSS',
            'CSS': 'CSS',
            'JavaScript': 'JavaScript',
            'Sass': 'CSS', // Using CSS icon for Sass as fallback
            'Node.js': 'NodeJS',
            'NodeJS': 'NodeJS',
            'Webpack': 'JavaScript', // Using JS icon for Webpack as fallback
        };

        const mappedName = skillMap[skillName] || skillName;
        return logo.find(item => item.name === mappedName);
    };
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);


    return (
        <motion.div
            className="hover:border border-neutral-500/50 rounded-lg p-4 flex justify-center gap-4 shadow-[var(--shadow-custom-black)] transition-shadow duration-300 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -2, transition: { duration: 0.2 } }}
        >
            <div className="absolute top-7 left-2 h-2 w-2 rounded-full bg-rose-500/90 animated-pulse" />
            <div className="w-full px-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className='sm:text-lg text-md text-neutral-900/80 dark:text-neutral-50/80 font-semibold'>{company}</div>
                    </div>
                    <div className="flex items-center gap-1 sm:text-sm text-[10px] text-neutral-600 dark:text-neutral-300/80">
                        {location}
                    </div>
                </div>
                <div className="flex sm:items-center justify-start sm:gap-3 sm:mb-1 sm:flex-row flex-col gap-0">
                    <div className='sm:text-md text-xs text-neutral-800/90 italic dark:text-neutral-200'>{role}</div>
                    <div className='sm:text-xs text-[10px] text-neutral-800/80 dark:text-neutral-300/80 sm:px-2 sm:py-1 py-1'>
                        {date}
                    </div>
                </div>
                <div className='text-sm text-neutral-500/80 dark:text-neutral-200/50'>
                    {description}
                </div>
                <div className="pt-2">
                    {skills.length > 0 && (

                        <div className="flex items-center gap-3 flex-wrap">
                            {skills.map((skill, index) => {
                                const skillLogo = getSkillLogo(skill);
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-center bg-white/80 dark:bg-black/30 rounded-full shadow-sm border border-neutral-200/50 dark:border-neutral-500/50 overflow-hidden cursor-pointer group relative -mr-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        onHoverStart={() => setHoveredIndex(`skill-${index}`)}
                                        onHoverEnd={() => setHoveredIndex(null)}
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                                        }}
                                    >
                                        {/* Logo/Icon */}
                                        {skillLogo && (
                                            <div className="bg-neutral-400 dark:bg-neutral-800 relative !m-0 sm:h-8 sm:w-8 w-6 h-6 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 flex items-center justify-center flex-shrink-0 ">
                                                <Image
                                                    src={skillLogo.svg}
                                                    alt={skill}
                                                    width={16}
                                                    height={16}
                                                />
                                            </div>
                                        )}

                                        {/* Name with smooth width transition */}
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{
                                                width: hoveredIndex === `skill-${index}` ? "auto" : 0
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <motion.span
                                                initial={{ opacity: 0, x: -5 }}
                                                animate={{
                                                    opacity: hoveredIndex === `skill-${index}` ? 1 : 0,
                                                    x: hoveredIndex === `skill-${index}` ? 0 : -5
                                                }}
                                                transition={{ duration: 0.2 }}
                                                className="pr-3 overflow-hidden whitespace-nowrap text-neutral-500 dark:text-neutral-200"
                                            >
                                                {skill}
                                            </motion.span>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ExperienceCard




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
            className="lucide lucide-external-link-icon w-4 h-4"
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