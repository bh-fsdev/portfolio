'use client'
import { cn } from "@/lib/utils";
function BackgroundTheme({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative flex items-center justify-center min-h-screen w-full bg-[var(--background)] text-[var(--foreground)]">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:20px_20px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
                )}
            />
            {/* Radial gradient for the container to give a faded look */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[var(--background)] [mask-image:radial-gradient(ellipse_80%_100%_at_center,black_46%,transparent_100%)]" />

            <div className="relative z-20 ">{children}</div>
        </div>
    )
}

export default BackgroundTheme
