'use client'
import { About } from '@/components/page/About'
import Navbar from '@/components/navbar/layout'
import Project from '@/components/page/Project'
import Skills from '@/components/page/Skill'
import React from 'react'
import Experience from '@/components/page/Experience'
import Contact from '@/components/page/Contact-us'
import Footer from '@/components/page/footer'

import ThemeToggleButton from '@/components/ui/theme-toggle-button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useTheme } from 'next-themes'

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import Navmenu from '@/components/navmenu/navmenu'
function App() {
  const { setTheme } = useTheme()
  return (
    <div className="relative bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-800">
      {/*  */}
      <div className=" 
       w-[260px]           
       mob-s:w-[300px]  
       mob-m:w-[310px]  
       mob-l:w-[370px]
       sm:w-[600px] 
       lg:w-[800px] 
       md:p-6 
       sm:p-4 
       mob-s:p-2
       p-1
       relative
      ">
        {/* correct it's size when screen is s-mobile:320 then use w-260px  mobile M:w-310 mobile L:w-370  */}

        {/* Right Pattern */}
        <div className="absolute top-0 sm:-right-8 -right-4 h-full w-4 md:w-8 border-x border-neutral-300 dark:border-neutral-600"
          style={{
            backgroundImage: `repeating-linear-gradient(
              315deg,
              rgb(163 163 163 / 0.3) 0,
              rgb(163 163 163 / 0.3) 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: '10px 10px',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Left Pattern */}
        <div className="absolute top-0 sm:-left-8 -left-4 h-full w-4 md:w-8 border-x border-neutral-300 dark:border-neutral-600"
          style={{
            backgroundImage: `repeating-linear-gradient(
              315deg,
              rgb(163 163 163 / 0.3) 0,
              rgb(163 163 163 / 0.3) 1px,
              transparent 0,
              transparent 50%
            )`,
            backgroundSize: '10px 10px',
            backgroundAttachment: 'fixed'
          }}
        />

        <div className="min-h-screen ">
          <Navbar />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Contact />
        </div>
      </div>
      <Footer />
      <Navmenu/>
    </div>
  )
}

export default App
