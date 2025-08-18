// 'use client'
// import { cn } from "@/lib/utils";
// function BackgroundTheme({ children }: { children: React.ReactNode }) {
//     return (
//         <div className="relative flex items-center justify-center min-h-screen w-full bg-[var(--background)] text-[var(--foreground)]">
//             <div
//                 className={cn(
//                     "absolute inset-0",
//                     "[background-size:20px_20px]",
//                     "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
//                     "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
//                 )}
//             />
//             {/* Radial gradient for the container to give a faded look */}
//             <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--background)] [mask-image:radial-gradient(ellipse_80%_100%_at_center,black_46%,transparent_100%)]" />

//             <div className="relative z-20 ">{children}</div>
//         </div>
//     )
// }

// export default BackgroundTheme

'use client'
import { cn } from "@/lib/utils"

function BackgroundTheme({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen w-full bg-[rgb(250,249,246)] dark:bg-[#0f0f0f] text-[var(--foreground)]">
      
      {/* Light mode background pattern */}
      <div
        className="absolute inset-0 z-0 block dark:hidden"
        style={{
          background: `
            radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0px) 0% 0% / 8px 8px,
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px) 0% 0% / 32px 32px,
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0, 0, 0, 0.02) 2px, rgba(0, 0, 0, 0.02) 4px) 0% 0% / 32px 32px`,
          backgroundColor: '#ffffff',
        }}
      />

      {/* Dark mode background pattern */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: `
            radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.06) 1px, transparent 0px) 0% 0% / 8px 8px,
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px) 0% 0% / 32px 32px,
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 255, 255, 0.02) 2px, rgba(255, 255, 255, 0.02) 4px) 0% 0% / 32px 32px`,
          backgroundColor: '#0f0f0f',
        }}
      />


      {/* Content layer */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}

export default BackgroundTheme
