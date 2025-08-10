"use client";

import * as React from "react";
import { AnimatePresence, motion, Transition } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"; // shadcn tooltip

interface Tab {
    id: string,
    title: string;
    icon: LucideIcon;
    type?: never;
}

interface Separator {
    type: "separator";
    title?: never;
    icon?: never;
}

export type TabItem = Tab | Separator;

interface ExpandableTabsProps {
    tabs: TabItem[];
    className?: string;
    activeColor?: string;
    onChange?: (index: number | null) => void;
}

const buttonVariants = {
    initial: {
        gap: 0,
        paddingLeft: ".5rem",
        paddingRight: ".5rem",
    },
    animate: (isSelected: boolean) => ({
        gap: isSelected ? ".5rem" : 0,
        paddingLeft: isSelected ? "1rem" : ".5rem",
        paddingRight: isSelected ? "1rem" : ".5rem",
    }),
};

const spanVariants = {
    initial: { width: 0, opacity: 0 },
    animate: { width: "auto", opacity: 1 },
    exit: { width: 0, opacity: 0 },
};


const transition: Transition = {
    delay: 0.1,
    type: "spring",
    bounce: 0,
    duration: 0.6,
};

// const transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableTabs({
    tabs,
    className,
    activeColor = "text-primary",
    onChange,
}: ExpandableTabsProps) {
    const [selected, setSelected] = React.useState<number | null>(null);
    // const outsideClickRef = React.useRef(null);

    const outsideClickRef = React.useRef<HTMLDivElement>(null!);

    useOnClickOutside(outsideClickRef, () => {
        setSelected(null);
        onChange?.(null);
    });

    // useOnClickOutside(outsideClickRef, () => {
    //     setSelected(null);
    //     onChange?.(null);
    // });

    const handleSelect = (index: number) => {
        setSelected(index);
        onChange?.(index);
    };

    const Separator = () => (
        <div className="mx-1 h-[24px] w-[1.2px] bg-border" aria-hidden="true" />
    );

    return (
        <div
            ref={outsideClickRef}
            className={cn(
                "flex flex-row items-center justify-center sm:gap-2 gap-0 rounded-2xl border bg-background sm:p-1 p-0.5  shadow-[var(--shadow-custom-black-sm)]",
                className
            )}
        >
            {tabs.map((tab, index) => {
                if (tab.type === "separator") {
                    return <Separator key={`separator-${index}`} />;
                }

                const Icon = tab.icon;
                return (
                    // <motion.a
                    //     href={tab.id === "documents" ? "/resume.pdf" : `#${tab.id}`}
                    //     target={tab.id === "documents" ? "_blank" : undefined} 
                    //     rel={tab.id === "documents" ? "noopener noreferrer" : undefined}
                    //     key={tab.title}
                    //     variants={buttonVariants}
                    //     initial={false}
                    //     animate="animate"
                    //     custom={selected === index}
                    //     onClick={() => handleSelect(index)}
                    //     transition={transition}
                    //     className={cn(
                    //         "relative flex items-center rounded-xl sm:px-4 px-2 py-2 sm:text-sm text-xs font-medium transition-colors duration-300",
                    //         selected === index
                    //             ? cn("bg-muted", activeColor)
                    //             : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    //     )}
                    // >
                    //     <Icon size={20} />
                    //     <AnimatePresence initial={false}>
                    //         {selected === index && (
                    //             <motion.span
                    //                 variants={spanVariants}
                    //                 initial="initial"
                    //                 animate="animate"
                    //                 exit="exit"
                    //                 transition={transition}
                    //                 className="overflow-hidden"
                    //             >
                    //                 {tab.title}
                    //             </motion.span>
                    //         )}
                    //     </AnimatePresence>
                    // </motion.a>

                    <TooltipProvider key={tab.title} delayDuration={10}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <motion.a
                                    href={tab.id === "documents" ? "/resume.pdf" : `#${tab.id}`}
                                    target={tab.id === "documents" ? "_blank" : undefined}
                                    rel={tab.id === "documents" ? "noopener noreferrer" : undefined}

                                    variants={buttonVariants}
                                    initial={false}
                                    animate="animate"
                                    custom={selected === index}
                                    onClick={() => handleSelect(index)}
                                    transition={transition}
                                    className={cn(
                                        "relative flex items-center rounded-xl sm:px-4 px-2 py-2 sm:text-sm text-xs font-medium transition-colors duration-300",
                                        selected === index
                                            ? cn("bg-muted", activeColor)
                                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    )}
                                >
                                    <Icon size={20} />
                                    <AnimatePresence initial={false}>
                                        {selected === index && (
                                            <motion.span
                                                variants={spanVariants}
                                                initial="initial"
                                                animate="animate"
                                                exit="exit"
                                                transition={transition}
                                                className="overflow-hidden hidden mob-l:inline-block"
                                            >
                                                {tab.title}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.a>
                            </TooltipTrigger>
                            {/* Tooltip only visible on small screens */}
                            <TooltipContent className="">
                                {tab.title}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                );
            })}
        </div>

    );
}