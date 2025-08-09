'use client'

function BlinkBorder() {
    return (
        <>
            <div className="absolute -top-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-400 dark:bg-neutral-100"></div>
            <div className="absolute -top-px -right-px h-1 w-1 animate-pulse rounded-full bg-neutral-400 dark:bg-neutral-100"></div>
            <div className="absolute -bottom-px -left-px h-1 w-1 animate-pulse rounded-full bg-neutral-400 dark:bg-neutral-100"></div>
            <div className="absolute -right-px -bottom-px h-1 w-1 animate-pulse rounded-full bg-neutral-400 dark:bg-neutral-100"></div>
        </>
    )
}

export default BlinkBorder