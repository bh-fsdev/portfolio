import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number
  x: number
  y: number
  size: number
  speed: number
  delay: number
}

interface BlinkingStarsProps {
  containerRef: React.RefObject<HTMLDivElement | null>
  count?: number
}


const BlinkingStars: React.FC<BlinkingStarsProps> = ({ containerRef, count = 10 }) => {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    const generateStars = () => {
      if (!containerRef.current) return
      const { width, height } = containerRef.current.getBoundingClientRect()

      const newStars: Star[] = Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 6 +4 , // scale SVG
        speed: Math.random() * 50 + 20,
        delay: Math.random() * 2,
      }))

      setStars(newStars)
    }

    generateStars()
    window.addEventListener('resize', generateStars)
    return () => window.removeEventListener('resize', generateStars)
  }, [containerRef, count])

  return (
    <>
      {stars.map((star) => (
        <motion.svg
          key={star.id}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute text-white pointer-events-none"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            color: 'white',
            filter: 'drop-shadow(0 0 6px white)',
          }}
          animate={{
            x: `-${star.speed}%`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'linear',
            delay: star.delay,
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.94952 1.84057C6.153 1.38648 6.847 1.38648 7.05048 1.84057L7.99611 3.95125L10.4506 4.13423C10.9792 4.17345 11.1936 4.78565 10.7907 5.10609L8.92084 6.59318L9.49176 8.81643C9.61484 9.2954 9.05392 9.6736 8.60154 9.41725L6.5 8.22572L4.39846 9.41725C3.94608 9.6736 3.38516 9.29498 3.50824 8.81643L4.07916 6.59318L2.20925 5.10609C1.80639 4.78565 2.02076 4.17345 2.54944 4.13423L5.00389 3.95125L5.94952 1.84057Z"
            fill="currentColor"
          />
        </motion.svg>
      ))}
    </>
  )
}

export default BlinkingStars
